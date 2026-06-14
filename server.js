const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    
    // Server-side payment gateway proxy endpoint
    if (req.method === 'POST' && req.url === '/api/create-payment') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                const payload = JSON.stringify({
                    key: data.key,
                    client_txn_id: data.client_txn_id,
                    amount: data.amount,
                    p_info: data.p_info || 'IKKO DIGITAL Order',
                    customer_name: data.customer_name,
                    customer_email: data.customer_email || 'customer@ikkodigital.com',
                    customer_mobile: data.customer_mobile,
                    redirect_url: data.redirect_url
                });

                const options = {
                    hostname: 'merchant.upigateway.com',
                    path: '/api/create_order',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(payload)
                    }
                };

                const apiReq = https.request(options, (apiRes) => {
                    let apiData = '';
                    apiRes.on('data', (chunk) => {
                        apiData += chunk;
                    });
                    apiRes.on('end', () => {
                        res.writeHead(apiRes.statusCode, { 'Content-Type': 'application/json' });
                        res.end(apiData);
                    });
                });

                apiReq.on('error', (e) => {
                    console.error('UPIGateway Request Error:', e);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: false, msg: 'Internal Gateway Communication Error: ' + e.message }));
                });

                apiReq.write(payload);
                apiReq.end();
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: false, msg: 'Invalid JSON request' }));
            }
        });
        return;
    }
    
    // Normalize path and solve index.html routing
    let filePath = req.url === '/' ? './index.html' : '.' + req.url.split('?')[0];
    filePath = path.resolve(__dirname, filePath);
    
    // Ensure the file is within the current directory to avoid directory traversal vulnerability
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Access Denied');
        return;
    }

    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Return 404 page if not found
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 File Not Found</h1><p>The requested file was not found on this server.</p><a href="/">Return Home</a>');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error: ' + err.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log('====================================================');
    console.log(`🚀 IKKO DIGITAL - LOCAL FRONTEND DEVELOPMENT SERVER`);
    console.log(`👉 Running at: http://localhost:${PORT}`);
    console.log(`📁 Workspace: ${__dirname}`);
    console.log('====================================================');
    console.log('Press Ctrl+C to stop the server.');
});
