// Global State and Core Logic for IKKO Digital E-commerce Store

const INITIAL_PRODUCTS = [
  {
    "id": "8270415000000_demo",
    "title": "Demo Product",
    "handle": "demo-product",
    "url": "/products/demo-product",
    "price": "Rs. 1.00",
    "comparePrice": "Rs. 1,000.00",
    "badge": "99%",
    "image": "demo_cake.png",
    "images": [
      "demo_cake.png"
    ],
    "paymentLink": "https://rzp.io/rzp/tHlmofq"
  },
  {
    "id": "8270415000000",
    "title": "Apple iPad Air 11″ (M2): Liquid Retina Display, 256GB, Landscape 12MP Front Camera / 12MP Back Camera, Wi-Fi 6E, Touch ID, All-Day Battery Life-Gray",
    "handle": "apple-ipad-air-11-m2-liquid-retina-display-256gb-landscape-12mp-front-camera-12mp-back-camera-wi-fi-6e-touch-id-all-day-battery-life-gray",
    "url": "/products/apple-ipad-air-11-m2-liquid-retina-display-256gb-landscape-12mp-front-camera-12mp-back-camera-wi-fi-6e-touch-id-all-day-battery-life-gray",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 59,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/22_87148f00-12f9-4e5e-9951-8717bdcb21de_512x512.jpg?v=1781259482",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/22_87148f00-12f9-4e5e-9951-8717bdcb21de_512x512.jpg?v=1781259482",
      "https://look-10287.myshopify.com/cdn/shop/files/11_0ea24f3d-9bcd-4e5f-a894-b4f66903a3c8_512x512.jpg?v=1781259481"
    ]
  },
  {
    "id": "8270415000001",
    "title": "Apple iPad (10th Generation): with A14 Bionic chip, 256GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life-Yellow",
    "handle": "apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life-pink",
    "url": "/products/apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life-pink",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 33,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/2222_9f2c1eaf-edd4-4fec-b4fb-8ae9127af22b_512x512.jpg?v=1781259483",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/2222_9f2c1eaf-edd4-4fec-b4fb-8ae9127af22b_512x512.jpg?v=1781259483",
      "https://look-10287.myshopify.com/cdn/shop/files/1111_6c1f79dc-8a5a-4a8d-bd47-f36a7591c618_512x512.jpg?v=1781259483"
    ]
  },
  {
    "id": "8270415000002",
    "title": "Apple iPad (10th Generation): with A14 Bionic chip, 256GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life-Silver",
    "handle": "apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life-silver",
    "url": "/products/apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life-silver",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 33,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/22_c4018750-ed95-469f-823b-be23e178e304_512x512.jpg?v=1781259484",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/22_c4018750-ed95-469f-823b-be23e178e304_512x512.jpg?v=1781259484",
      "https://look-10287.myshopify.com/cdn/shop/files/11_3288dcab-ee13-4d9a-95cd-e9b2f7711971_512x512.jpg?v=1781259484"
    ]
  },
  {
    "id": "8270415000003",
    "title": "Apple iPad (10th Generation): with A14 Bionic chip, 256GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life-Blue",
    "handle": "apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life",
    "url": "/products/apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 33,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/6_2aa85041-5111-4c0d-809c-9065a678e369_512x512.webp?v=1781259485",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/6_2aa85041-5111-4c0d-809c-9065a678e369_512x512.webp?v=1781259485",
      "https://look-10287.myshopify.com/cdn/shop/files/1_f41f3d5f-ada1-4e80-af35-0a9e6a44c042_512x512.webp?v=1781259485"
    ]
  },
  {
    "id": "8270415000004",
    "title": "Apple iPad Pro 13″ (M4): Ultra Retina XDR Display, 512GB, 12MP Front Camera / 12MP Back Camera, LiDAR Scanner, Wi-Fi 6E + 5G Cellular with eSIM, All-Day Battery Life, Standard Glass — Space Black",
    "handle": "apple-ipad-pro-13-m4-ultra-retina-xdr-display-512gb-12mp-front-camera-12mp-back-camera-lidar-scanner-wi-fi-6e-5g-cellular-with-esim-all-day-battery-life-standard-glass-space-black",
    "url": "/products/apple-ipad-pro-13-m4-ultra-retina-xdr-display-512gb-12mp-front-camera-12mp-back-camera-lidar-scanner-wi-fi-6e-5g-cellular-with-esim-all-day-battery-life-standard-glass-space-black",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 169,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/2_c198a4d5-844f-486d-91d2-897053138cca_512x512.jpg?v=1781259487",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/2_c198a4d5-844f-486d-91d2-897053138cca_512x512.jpg?v=1781259487",
      "https://look-10287.myshopify.com/cdn/shop/files/1_09ec4f7e-a578-443a-a9f6-8797d1410070_512x512.jpg?v=1781259487"
    ]
  },
  {
    "id": "8270415000005",
    "title": "Samsung Galaxy Tab S10 Plus, S Pen in-Box, 31.5 cm (12.4 inch) Dynamic AMOLED 2X Display, 12 GB RAM, 256 GB Storage, Wi-Fi Tablet, Moonstone Gray",
    "handle": "samsung-galaxy-tab-s10-plus-s-pen-in-box-31-5-cm-12-4-inch-dynamic-amoled-2x-display-12-gb-ram-256-gb-storage-wi-fi-tablet-moonstone-gray",
    "url": "/products/samsung-galaxy-tab-s10-plus-s-pen-in-box-31-5-cm-12-4-inch-dynamic-amoled-2x-display-12-gb-ram-256-gb-storage-wi-fi-tablet-moonstone-gray",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 90,999.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/5_ab735dcb-c7a9-4839-8fdc-79d12c03c54c_512x512.jpg?v=1781259489",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/5_ab735dcb-c7a9-4839-8fdc-79d12c03c54c_512x512.jpg?v=1781259489",
      "https://look-10287.myshopify.com/cdn/shop/files/1_8ce7b027-7d00-4d28-b654-4eedcb1ffd7a_512x512.jpg?v=1781259489"
    ]
  },
  {
    "id": "8270415000006",
    "title": "Apple iPad Air (5th gen) 256 GB ROM 10.9 Inch with Wi-Fi+5G",
    "handle": "apple-ipad-air-5th-gen-256-gb-rom-10-9-inch-with-wi-fi-5g",
    "url": "/products/apple-ipad-air-5th-gen-256-gb-rom-10-9-inch-with-wi-fi-5g",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 62,649.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/2_cd196f0b-3a1d-440f-8443-55d07c764b30_512x512.jpg?v=1781259490",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/2_cd196f0b-3a1d-440f-8443-55d07c764b30_512x512.jpg?v=1781259490",
      "https://look-10287.myshopify.com/cdn/shop/files/1_47eed24d-bcca-4417-b2cb-5c753994cbcc_512x512.jpg?v=1781259490"
    ]
  },
  {
    "id": "8270415000007",
    "title": "Apple iPad mini (6th Gen) 256 GB ROM 8.3 inch with Wi-Fi+5G",
    "handle": "apple-ipad-mini-6th-gen-256-gb-rom-8-3-inch-with-wi-fi-5g",
    "url": "/products/apple-ipad-mini-6th-gen-256-gb-rom-8-3-inch-with-wi-fi-5g",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 49,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/3_512x512.jpg?v=1781259492",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/3_512x512.jpg?v=1781259492",
      "https://look-10287.myshopify.com/cdn/shop/files/1_512x512.jpg?v=1781259492"
    ]
  },
  {
    "id": "8270415000008",
    "title": "Apple iPad (10th Generation): with A14 Bionic chip, 256GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life-Pink",
    "handle": "apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life-copy",
    "url": "/products/apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life-copy",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 33,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/222_a31333ca-5a60-4f70-8cf4-f8d0ab6e9ae1_512x512.jpg?v=1781259494",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/222_a31333ca-5a60-4f70-8cf4-f8d0ab6e9ae1_512x512.jpg?v=1781259494",
      "https://look-10287.myshopify.com/cdn/shop/files/111_5d8330f6-2140-4f2d-89ab-ff89dfbfbc93_512x512.jpg?v=1781259494"
    ]
  },
  {
    "id": "8270415000009",
    "title": "Apple iPad Air 11″ (M2): Liquid Retina Display, 256GB, Landscape 12MP Front Camera / 12MP Back Camera, Wi-Fi 6E, Touch ID, All-Day Battery Life-Blue",
    "handle": "boult-audio-ufo-truly-wireless-in-ear-earbuds-with-48h-playtime-built-in-app-support-45ms-low-latency-gaming-4-mics-enc-breathing-leds-13mm-bass-drivers-ear-buds-tws-made-in-india",
    "url": "/products/boult-audio-ufo-truly-wireless-in-ear-earbuds-with-48h-playtime-built-in-app-support-45ms-low-latency-gaming-4-mics-enc-breathing-leds-13mm-bass-drivers-ear-buds-tws-made-in-india",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 59,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/6_dc993d36-9204-4c33-8520-c41d38d722e2_512x512.jpg?v=1781259496",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/6_dc993d36-9204-4c33-8520-c41d38d722e2_512x512.jpg?v=1781259496",
      "https://look-10287.myshopify.com/cdn/shop/files/1_fdfa7194-7b60-405f-80e5-e5408bd66469_512x512.jpg?v=1781259495"
    ]
  },
  {
    "id": "8270415000010",
    "title": "MindOne Pro Card-Sized AI Smartphone",
    "handle": "mindone-pro-card-sized-ai-smartphone-copy",
    "url": "/products/mindone-pro-card-sized-ai-smartphone-copy",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 35,699.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/ikko-mindone-pro-black1_512x512.png?v=1781259499",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/ikko-mindone-pro-black1_512x512.png?v=1781259499",
      "https://look-10287.myshopify.com/cdn/shop/files/ikko-mindone-pro-white_2_512x512.png?v=1781259499"
    ]
  },
  {
    "id": "8270415000011",
    "title": "Airdopes 411 ANC with 10mm Drivers, ASAPTM Charge Technology, Up to 25dB ANC, ENx™ Technology, 17.5 Hours Playback",
    "handle": "airdopes-411-anc-with-10mm-drivers-asaptm-charge-technology-up-to-25db-anc-enx%E2%84%A2-technology-17-5-hours-playback",
    "url": "/products/airdopes-411-anc-with-10mm-drivers-asaptm-charge-technology-up-to-25db-anc-enx%E2%84%A2-technology-17-5-hours-playback",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 1,498,500.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/main3_53b8f759-5b8e-4a66-8938-907d45f55b62_512x512.png?v=1781259431",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/main3_53b8f759-5b8e-4a66-8938-907d45f55b62_512x512.png?v=1781259431",
      "https://look-10287.myshopify.com/cdn/shop/files/main1_91fb2fa5-866e-428d-9cdc-7a85f1b4e21b_512x512.png?v=1781259431"
    ]
  },
  {
    "id": "8270415000012",
    "title": "boAt Airdopes 175 - 10mm drivers, Quad mics with ENx™️ Technology, Bluetooth v5.2, IPX4 Sweat & Water Resistance, ASAP Fast Charge",
    "handle": "boat-airdopes-175-10mm-drivers-quad-mics-with-enx%E2%84%A2%EF%B8%8F-technology-bluetooth-v5-2-ipx4-sweat-water-resistance-asap-fast-charge",
    "url": "/products/boat-airdopes-175-10mm-drivers-quad-mics-with-enx%E2%84%A2%EF%B8%8F-technology-bluetooth-v5-2-ipx4-sweat-water-resistance-asap-fast-charge",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 1,498,500.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/A175Packaging.1807_512x512.png?v=1781259432",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/A175Packaging.1807_512x512.png?v=1781259432",
      "https://look-10287.myshopify.com/cdn/shop/files/A175Packaging.1804_512x512.png?v=1781259433"
    ]
  },
  {
    "id": "8270415000013",
    "title": "boAt Airdopes 148 with 8mm Drivers, IWP & ENxTM Technology, ASAP Fast Charge, Upto 42 hours Playback, IPX4 Sweat & Water Resistance",
    "handle": "boat-airdopes-148-with-8mm-drivers-iwp-enxtm-technology-asap-fast-charge-upto-42-hours-playback-ipx4-sweat-water-resistance",
    "url": "/products/boat-airdopes-148-with-8mm-drivers-iwp-enxtm-technology-asap-fast-charge-upto-42-hours-playback-ipx4-sweat-water-resistance",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 1,498,500.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/back_4b76a852-bc9e-4196-b901-bc102ea6b447_512x512.png?v=1781259433",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/back_4b76a852-bc9e-4196-b901-bc102ea6b447_512x512.png?v=1781259433",
      "https://look-10287.myshopify.com/cdn/shop/files/grey_70f0bdb4-5141-4020-a62b-09a61d204eef_512x512.png?v=1781259434"
    ]
  },
  {
    "id": "8270415000014",
    "title": "Airdopes 441 Pro Special Batman Edition - 2600 mAh Carry Case, 6mm Drivers, Upto 20H nonstop Music, IPX7 Sweat & Water Resistance",
    "handle": "airdopes-441-pro-special-batman-edition-2600-mah-carry-case-6mm-drivers-upto-20h-nonstop-music-ipx7-sweat-water-resistance",
    "url": "/products/airdopes-441-pro-special-batman-edition-2600-mah-carry-case-6mm-drivers-upto-20h-nonstop-music-ipx7-sweat-water-resistance",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 1,498,500.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/AD441Pro-FI-DC_Batman02_512x512.png?v=1781259435",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/AD441Pro-FI-DC_Batman02_512x512.png?v=1781259435",
      "https://look-10287.myshopify.com/cdn/shop/files/main-image_981b1901-df6e-4134-9090-7eb985d141be_512x512.png?v=1781259434"
    ]
  },
  {
    "id": "8270415000015",
    "title": "Airdopes 131 Batman DC Edition With 13 mm Drivers, Bluetooth v5.0, 650mAh pocket friendly Charging Case",
    "handle": "airdopes-131-batman-dc-edition-with-13-mm-drivers-bluetooth-v5-0-650mah-pocket-friendly-charging-case",
    "url": "/products/airdopes-131-batman-dc-edition-with-13-mm-drivers-bluetooth-v5-0-650mah-pocket-friendly-charging-case",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 1,498,500.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/03_7a776f40-34f7-4fc0-a708-bf715f327c6f_512x512.jpg?v=1781259435",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/03_7a776f40-34f7-4fc0-a708-bf715f327c6f_512x512.jpg?v=1781259435",
      "https://look-10287.myshopify.com/cdn/shop/files/main-image_028b2da2-4a98-43bf-b535-698c0dad8080_512x512.png?v=1781259435"
    ]
  },
  {
    "id": "8270415000016",
    "title": "boAt Airdopes 101 with Powerful 13mm drivers, Nonstop Music Up To 15 hours, Type-C Interface, One Touch Voice Assistant",
    "handle": "boat-airdopes-101-with-powerful-13mm-drivers-nonstop-music-up-to-15-hours-type-c-interface-one-touch-voice-assistant",
    "url": "/products/boat-airdopes-101-with-powerful-13mm-drivers-nonstop-music-up-to-15-hours-type-c-interface-one-touch-voice-assistant",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 1,498,500.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/101_512x512.png?v=1781259436",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/101_512x512.png?v=1781259436",
      "https://look-10287.myshopify.com/cdn/shop/files/product-Image_512x512.png?v=1781259436"
    ]
  },
  {
    "id": "8270415000017",
    "title": "boAt Airdopes 441 with 6mm Drivers, IPX7 Water & Sweat Resistance, 500mAh Charging Case, Nonstop Music Upto 20 Hours",
    "handle": "boat-airdopes-441-with-6mm-drivers-ipx7-water-sweat-resistance-500mah-charging-case-nonstop-music-upto-20-hours",
    "url": "/products/boat-airdopes-441-with-6mm-drivers-ipx7-water-sweat-resistance-500mah-charging-case-nonstop-music-upto-20-hours",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 1,498,500.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/7f87efa7-f1a4-46c7-b77a-0cb200c34bd1_38d8c7b5-626e-4d36-9524-95da56324c64_512x512.png?v=1781259437",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/7f87efa7-f1a4-46c7-b77a-0cb200c34bd1_38d8c7b5-626e-4d36-9524-95da56324c64_512x512.png?v=1781259437"
    ]
  },
  {
    "id": "8270415000018",
    "title": "boAt Airdopes 281 Pro - ENx™ Technology with 4 Mics, ASAP Charge, 6mm Drivers, 32 Hours Nonstop Audio Bliss",
    "handle": "boat-airdopes-281-pro-enx%E2%84%A2-technology-with-4-mics-asap-charge-6mm-drivers-32-hours-nonstop-audio-bliss",
    "url": "/products/boat-airdopes-281-pro-enx%E2%84%A2-technology-with-4-mics-asap-charge-6mm-drivers-32-hours-nonstop-audio-bliss",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 1,498,500.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/main4_5c4987b0-2e64-4225-af74-e8a76ce5ccfe_512x512.png?v=1781259438",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/main4_5c4987b0-2e64-4225-af74-e8a76ce5ccfe_512x512.png?v=1781259438",
      "https://look-10287.myshopify.com/cdn/shop/files/main6_ff7bee5d-e843-4344-b504-c16bdd73f47f_512x512.png?v=1781259438"
    ]
  },
  {
    "id": "8270415000019",
    "title": "boAt Airdopes 641 - BEAST™️ Mode for Gamers, 500mAh Pocket Friendly Charging Case, 6mm Dual Drivers, 30H Mountainous Playback",
    "handle": "boat-airdopes-641-beast%E2%84%A2%EF%B8%8F-mode-for-gamers-500mah-pocket-friendly-charging-case-6mm-dual-drivers-30h-mountainous-playback",
    "url": "/products/boat-airdopes-641-beast%E2%84%A2%EF%B8%8F-mode-for-gamers-500mah-pocket-friendly-charging-case-6mm-dual-drivers-30h-mountainous-playback",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 1,498,500.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/main-1_512x512.png?v=1781259439",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/main-1_512x512.png?v=1781259439",
      "https://look-10287.myshopify.com/cdn/shop/files/main-2_4defc6ba-35c9-4fcd-a1fc-3cbc4dc484e0_512x512.png?v=1781259439"
    ]
  },
  {
    "id": "8270415000021",
    "title": "Apple iPad Air 11″ (M2): Liquid Retina Display, 256GB, Landscape 12MP Front Camera / 12MP Back Camera, Wi-Fi 6E, Touch ID, All-Day Battery Life-Blue",
    "handle": "boult-audio-ufo-truly-wireless-in-ear-earbuds-with-48h-playtime-built-in-app-support-45ms-low-latency-gaming-4-mics-enc-breathing-leds-13mm-bass-drivers-ear-buds-tws-made-in-india",
    "url": "/products/boult-audio-ufo-truly-wireless-in-ear-earbuds-with-48h-playtime-built-in-app-support-45ms-low-latency-gaming-4-mics-enc-breathing-leds-13mm-bass-drivers-ear-buds-tws-made-in-india",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 59,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/6_dc993d36-9204-4c33-8520-c41d38d722e2_512x512.jpg?v=1781259496",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/6_dc993d36-9204-4c33-8520-c41d38d722e2_512x512.jpg?v=1781259496",
      "https://look-10287.myshopify.com/cdn/shop/files/1_fdfa7194-7b60-405f-80e5-e5408bd66469_512x512.jpg?v=1781259495"
    ]
  },
  {
    "id": "8270415000022",
    "title": "Apple iPad (10th Generation): with A14 Bionic chip, 256GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life-Pink",
    "handle": "apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life-copy",
    "url": "/products/apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life-copy",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 33,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/222_a31333ca-5a60-4f70-8cf4-f8d0ab6e9ae1_512x512.jpg?v=1781259494",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/222_a31333ca-5a60-4f70-8cf4-f8d0ab6e9ae1_512x512.jpg?v=1781259494",
      "https://look-10287.myshopify.com/cdn/shop/files/111_5d8330f6-2140-4f2d-89ab-ff89dfbfbc93_512x512.jpg?v=1781259494"
    ]
  },
  {
    "id": "8270415000023",
    "title": "Apple iPad mini (6th Gen) 256 GB ROM 8.3 inch with Wi-Fi+5G",
    "handle": "apple-ipad-mini-6th-gen-256-gb-rom-8-3-inch-with-wi-fi-5g",
    "url": "/products/apple-ipad-mini-6th-gen-256-gb-rom-8-3-inch-with-wi-fi-5g",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 49,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/3_512x512.jpg?v=1781259492",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/3_512x512.jpg?v=1781259492",
      "https://look-10287.myshopify.com/cdn/shop/files/1_512x512.jpg?v=1781259492"
    ]
  },
  {
    "id": "8270415000024",
    "title": "Apple iPad Air (5th gen) 256 GB ROM 10.9 Inch with Wi-Fi+5G",
    "handle": "apple-ipad-air-5th-gen-256-gb-rom-10-9-inch-with-wi-fi-5g",
    "url": "/products/apple-ipad-air-5th-gen-256-gb-rom-10-9-inch-with-wi-fi-5g",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 62,649.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/2_cd196f0b-3a1d-440f-8443-55d07c764b30_512x512.jpg?v=1781259490",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/2_cd196f0b-3a1d-440f-8443-55d07c764b30_512x512.jpg?v=1781259490",
      "https://look-10287.myshopify.com/cdn/shop/files/1_47eed24d-bcca-4417-b2cb-5c753994cbcc_512x512.jpg?v=1781259490"
    ]
  },
  {
    "id": "8270415000025",
    "title": "Samsung Galaxy Tab S10 Plus, S Pen in-Box, 31.5 cm (12.4 inch) Dynamic AMOLED 2X Display, 12 GB RAM, 256 GB Storage, Wi-Fi Tablet, Moonstone Gray",
    "handle": "samsung-galaxy-tab-s10-plus-s-pen-in-box-31-5-cm-12-4-inch-dynamic-amoled-2x-display-12-gb-ram-256-gb-storage-wi-fi-tablet-moonstone-gray",
    "url": "/products/samsung-galaxy-tab-s10-plus-s-pen-in-box-31-5-cm-12-4-inch-dynamic-amoled-2x-display-12-gb-ram-256-gb-storage-wi-fi-tablet-moonstone-gray",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 90,999.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/5_ab735dcb-c7a9-4839-8fdc-79d12c03c54c_512x512.jpg?v=1781259489",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/5_ab735dcb-c7a9-4839-8fdc-79d12c03c54c_512x512.jpg?v=1781259489",
      "https://look-10287.myshopify.com/cdn/shop/files/1_8ce7b027-7d00-4d28-b654-4eedcb1ffd7a_512x512.jpg?v=1781259489"
    ]
  },
  {
    "id": "8270415000026",
    "title": "Apple iPad Pro 13″ (M4): Ultra Retina XDR Display, 512GB, 12MP Front Camera / 12MP Back Camera, LiDAR Scanner, Wi-Fi 6E + 5G Cellular with eSIM, All-Day Battery Life, Standard Glass — Space Black",
    "handle": "apple-ipad-pro-13-m4-ultra-retina-xdr-display-512gb-12mp-front-camera-12mp-back-camera-lidar-scanner-wi-fi-6e-5g-cellular-with-esim-all-day-battery-life-standard-glass-space-black",
    "url": "/products/apple-ipad-pro-13-m4-ultra-retina-xdr-display-512gb-12mp-front-camera-12mp-back-camera-lidar-scanner-wi-fi-6e-5g-cellular-with-esim-all-day-battery-life-standard-glass-space-black",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 169,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/2_c198a4d5-844f-486d-91d2-897053138cca_512x512.jpg?v=1781259487",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/2_c198a4d5-844f-486d-91d2-897053138cca_512x512.jpg?v=1781259487",
      "https://look-10287.myshopify.com/cdn/shop/files/1_09ec4f7e-a578-443a-a9f6-8797d1410070_512x512.jpg?v=1781259487"
    ]
  },
  {
    "id": "8270415000027",
    "title": "Apple iPad (10th Generation): with A14 Bionic chip, 256GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life-Blue",
    "handle": "apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life",
    "url": "/products/apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 33,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/6_2aa85041-5111-4c0d-809c-9065a678e369_512x512.webp?v=1781259485",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/6_2aa85041-5111-4c0d-809c-9065a678e369_512x512.webp?v=1781259485",
      "https://look-10287.myshopify.com/cdn/shop/files/1_f41f3d5f-ada1-4e80-af35-0a9e6a44c042_512x512.webp?v=1781259485"
    ]
  },
  {
    "id": "8270415000028",
    "title": "Apple iPad (10th Generation): with A14 Bionic chip, 256GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life-Silver",
    "handle": "apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life-silver",
    "url": "/products/apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life-silver",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 33,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/22_c4018750-ed95-469f-823b-be23e178e304_512x512.jpg?v=1781259484",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/22_c4018750-ed95-469f-823b-be23e178e304_512x512.jpg?v=1781259484",
      "https://look-10287.myshopify.com/cdn/shop/files/11_3288dcab-ee13-4d9a-95cd-e9b2f7711971_512x512.jpg?v=1781259484"
    ]
  },
  {
    "id": "8270415000029",
    "title": "Apple iPad (10th Generation): with A14 Bionic chip, 256GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life-Yellow",
    "handle": "apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life-pink",
    "url": "/products/apple-ipad-10th-generation-with-a14-bionic-chip-27-69-cm-10-9-liquid-retina-display-64gb-wi-fi-6-12mp-front-12mp-back-camera-touch-id-all-day-battery-life-pink",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 33,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/2222_9f2c1eaf-edd4-4fec-b4fb-8ae9127af22b_512x512.jpg?v=1781259483",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/2222_9f2c1eaf-edd4-4fec-b4fb-8ae9127af22b_512x512.jpg?v=1781259483",
      "https://look-10287.myshopify.com/cdn/shop/files/1111_6c1f79dc-8a5a-4a8d-bd47-f36a7591c618_512x512.jpg?v=1781259483"
    ]
  },
  {
    "id": "8270415000030",
    "title": "Apple iPad Air 11″ (M2): Liquid Retina Display, 256GB, Landscape 12MP Front Camera / 12MP Back Camera, Wi-Fi 6E, Touch ID, All-Day Battery Life-Gray",
    "handle": "apple-ipad-air-11-m2-liquid-retina-display-256gb-landscape-12mp-front-camera-12mp-back-camera-wi-fi-6e-touch-id-all-day-battery-life-gray",
    "url": "/products/apple-ipad-air-11-m2-liquid-retina-display-256gb-landscape-12mp-front-camera-12mp-back-camera-wi-fi-6e-touch-id-all-day-battery-life-gray",
    "price": "Rs. 999.00",
    "comparePrice": "Rs. 59,900.00",
    "image": "https://look-10287.myshopify.com/cdn/shop/files/22_87148f00-12f9-4e5e-9951-8717bdcb21de_512x512.jpg?v=1781259482",
    "images": [
      "https://look-10287.myshopify.com/cdn/shop/files/22_87148f00-12f9-4e5e-9951-8717bdcb21de_512x512.jpg?v=1781259482",
      "https://look-10287.myshopify.com/cdn/shop/files/11_0ea24f3d-9bcd-4e5f-a894-b4f66903a3c8_512x512.jpg?v=1781259481"
    ]
  }
];

// Database Initialization
function dbInit() {
    if (!localStorage.getItem('ikko_products')) {
        localStorage.setItem('ikko_products', JSON.stringify(INITIAL_PRODUCTS));
    }
    if (!localStorage.getItem('ikko_orders')) {
        localStorage.setItem('ikko_orders', JSON.stringify([]));
    }
    if (!localStorage.getItem('ikko_settings')) {
        localStorage.setItem('ikko_settings', JSON.stringify({
            upiEnabled: true,
            upiId: 'sabpaisa.lucky06@hdfcbank',
            merchantName: 'JARVIS AI',
            sabpaisaEnabled: false,
            sabpaisaClientCode: 'JARV1',
            sabpaisaApiKey: 'sp_R89a1KoXYB9MCf6ODyxjcujarerdUWbnyvv11XpH-kc',
            sabpaisaSecretKey: 'sec_0w0qHWovFvgZkTa5Ol_O_Vx4xGgBJjlYZtY1bVw8oUE',
            sabpaisaMode: 'live'
        }));
    }
}

// Settings Helpers
function getSettings() {
    dbInit();
    let settings = JSON.parse(localStorage.getItem('ikko_settings')) || {};
    
    let changed = false;
    // Migrate default mock values to the user's requested VPA & merchant details
    if (!settings.upiId || settings.upiId === 'test@upi' || settings.upiId === 'sabpaisajarvis@nyes') {
        settings.upiId = 'sabpaisa.lucky06@hdfcbank';
        changed = true;
    }
    if (!settings.merchantName || settings.merchantName === 'IKKO DIGITAL') {
        settings.merchantName = 'JARVIS AI';
        changed = true;
    }
    if (settings.sabpaisaEnabled === undefined || (settings.sabpaisaEnabled && settings.sabpaisaApiKey === 'sp_R89a1KoXYB9MCf6ODyxjcujarerdUWbnyvv11XpH-kc')) {
        // Disable by default so it falls back to the beautiful Scan & Pay QR
        settings.sabpaisaEnabled = false;
        changed = true;
    }
    
    // Ensure migration fields exist
    if (settings.sabpaisaClientCode === undefined) {
        settings.sabpaisaClientCode = 'JARV1';
        settings.sabpaisaApiKey = 'sp_R89a1KoXYB9MCf6ODyxjcujarerdUWbnyvv11XpH-kc';
        settings.sabpaisaSecretKey = 'sec_0w0qHWovFvgZkTa5Ol_O_Vx4xGgBJjlYZtY1bVw8oUE';
        settings.sabpaisaMode = 'live';
        changed = true;
    }
    
    if (settings.firebaseEnabled === undefined) {
        settings.firebaseEnabled = false;
        settings.firebaseConfig = '';
        changed = true;
    }
    
    if (changed) {
        localStorage.setItem('ikko_settings', JSON.stringify(settings));
    }
    return settings;
}

function saveSettings(settings) {
    localStorage.setItem('ikko_settings', JSON.stringify(settings));
}

// Firebase Dynamic Loader & Global Instance State
let firebaseDB = null;
let firebaseInitialized = false;

async function initFirebase() {
    if (firebaseInitialized) return firebaseDB;

    const settings = getSettings();
    if (!settings.firebaseEnabled || !settings.firebaseConfig) {
        return null; // Fallback to localStorage
    }

    try {
        let config;
        if (typeof settings.firebaseConfig === 'string') {
            config = JSON.parse(settings.firebaseConfig);
        } else {
            config = settings.firebaseConfig;
        }

        if (!config || !config.apiKey || !config.projectId) {
            return null;
        }

        // Helper to load dynamic scripts sequentially
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }
                const s = document.createElement('script');
                s.src = src;
                s.onload = resolve;
                s.onerror = reject;
                document.head.appendChild(s);
            });
        };

        // Load compatibility packages to avoid ESM refactoring overhead
        await loadScript("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
        await loadScript("https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js");

        if (window.firebase) {
            let app;
            if (!window.firebase.apps.length) {
                app = window.firebase.initializeApp(config);
            } else {
                app = window.firebase.app();
            }
            firebaseDB = window.firebase.firestore(app);
            firebaseInitialized = true;
            console.log("🔥 Firebase Firestore connected successfully!");
            return firebaseDB;
        }
    } catch (e) {
        console.error("Error initializing Firebase:", e);
    }
    return null;
}

// Product Database Helpers (Firestore Async with local Cache fallback)
async function getProducts() {
    dbInit();
    const db = await initFirebase();
    
    if (db) {
        try {
            const snapshot = await db.collection('products').get();
            let products = [];
            snapshot.forEach(doc => {
                products.push({ id: doc.id, ...doc.data() });
            });
            
            // Seed defaults if collection is empty
            if (products.length === 0) {
                console.log("Seeding Firestore with default products...");
                for (const p of INITIAL_PRODUCTS) {
                    const { id, ...data } = p;
                    await db.collection('products').doc(String(id)).set(data);
                    products.push(p);
                }
            }
            
            // Sync local storage cache
            localStorage.setItem('ikko_products', JSON.stringify(products));
            return products;
        } catch (e) {
            console.error("Error reading Firestore, falling back to local storage cache:", e);
        }
    }

    let products = JSON.parse(localStorage.getItem('ikko_products')) || [];
    let updated = false;
    
    // Auto-inject Demo Product or update its paymentLink if it matches the default fallback
    const demoIndex = products.findIndex(p => String(p.id) === '8270415000000_demo');
    if (demoIndex === -1) {
        const demoProduct = INITIAL_PRODUCTS.find(p => String(p.id) === '8270415000000_demo');
        if (demoProduct) {
            products.unshift(demoProduct);
            updated = true;
        }
    } else {
        // Force update paymentLink of demo product if it's using the old fallback
        if (products[demoIndex].paymentLink === 'https://razorpay.me/@luckydigitalmedia' || !products[demoIndex].paymentLink) {
            products[demoIndex].paymentLink = 'https://rzp.io/rzp/tHlmofq';
            updated = true;
        }
    }

    products = products.map(p => {
        if (!p.paymentLink) {
            p.paymentLink = 'https://razorpay.me/@luckydigitalmedia';
            updated = true;
        }
        return p;
    });
    if (updated) {
        localStorage.setItem('ikko_products', JSON.stringify(products));
    }
    return products;
}

async function saveProducts(products) {
    localStorage.setItem('ikko_products', JSON.stringify(products));

    const db = await initFirebase();
    if (db) {
        try {
            // Write each product to Firestore
            for (const p of products) {
                const { id, ...data } = p;
                await db.collection('products').doc(String(id)).set(data);
            }
            console.log("Synced products list to Firestore.");
        } catch (e) {
            console.error("Failed to save products to Firestore:", e);
        }
    }
}

async function deleteProduct(productId) {
    let products = await getProducts();
    products = products.filter(p => String(p.id) !== String(productId));
    localStorage.setItem('ikko_products', JSON.stringify(products));

    const db = await initFirebase();
    if (db) {
        try {
            await db.collection('products').doc(String(productId)).delete();
            console.log(`Product ${productId} deleted from Firestore.`);
        } catch (e) {
            console.error("Failed to delete product from Firestore:", e);
        }
    }
}

// Order Management Helpers
function getOrders() {
    dbInit();
    return JSON.parse(localStorage.getItem('ikko_orders'));
}

function saveOrder(order) {
    const orders = getOrders();
    orders.push(order);
    localStorage.setItem('ikko_orders', JSON.stringify(orders));
}

// Cart State Management Helpers
function getCart() {
    const cart = localStorage.getItem('ikko_cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('ikko_cart', JSON.stringify(cart));
    updateCartUI();
}

async function addToCart(productId, qty = 1) {
    const cart = getCart();
    const products = await getProducts();
    const product = products.find(p => String(p.id) === String(productId));
    
    if (!product) return;
    
    const existingItem = cart.find(item => String(item.id) === String(productId));
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            comparePrice: product.comparePrice,
            image: product.image,
            qty: qty
        });
    }
    saveCart(cart);
    openCartDrawer();
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

function updateCartQty(productId, qty) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.qty = parseInt(qty) || 1;
        if (item.qty <= 0) {
            removeFromCart(productId);
            return;
        }
    }
    saveCart(cart);
}

function clearCart() {
    saveCart([]);
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => {
        return total + (parsePrice(item.price) * item.qty);
    }, 0);
}

function getCartCount() {
    const cart = getCart();
    return cart.reduce((count, item) => count + item.qty, 0);
}

// Formatting utilities
function formatPrice(num) {
    return 'Rs. ' + num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function parsePrice(priceStr) {
    if (!priceStr) return 0;
    const cleaned = priceStr.replace(/[^\d.]/g, '').replace(/^\./, '');
    const val = parseFloat(cleaned);
    return isNaN(val) ? 0 : val;
}

// Header and Footer Rendering
// Header and Footer Rendering
function renderHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;
    
    const cartCount = getCartCount();
    const customer = JSON.parse(localStorage.getItem('ikko_customer'));
    const accountText = customer ? 'ACCOUNT' : 'LOGIN';
    
    headerPlaceholder.innerHTML = `
        <div class="announcement-bar">
            <div class="announcement-bar__text">Up to 90% Off Select Tablets & Smart Phone | Free Shipping All Over India |</div>
        </div>
        <header class="main-header">
            <div class="header-container">
                <a href="index.html" class="logo-link">IKKO DIGITAL</a>
                
                <div class="search-bar-container">
                    <form action="index.html" method="GET" class="search-form" onsubmit="event.preventDefault();">
                        <input type="text" id="header-search" placeholder="What are you looking for?" autocomplete="off">
                        <button type="submit" class="search-btn">
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                    </form>
                    <div id="search-results-dropdown" class="search-results-dropdown"></div>
                </div>
                
                <div class="header-actions">
                    <button class="header-action-btn cart-toggle-btn" onclick="openCartDrawer()" title="View Cart">
                        <div class="cart-icon-wrapper">
                            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                            <span class="cart-badge" id="cart-badge-count">${cartCount}</span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
        <nav class="lower-nav">
            <div class="lower-nav-container">
                <a href="index.html" class="nav-item">HOME</a>
                <a href="collections.html?type=all" class="nav-item">CATALOG</a>
                <a href="collections.html?type=all" class="nav-item">SHOP ALL</a>
                <a href="collections.html?type=tablets" class="nav-item">TABLETS</a>
                <a href="collections.html?type=smart-phone" class="nav-item">SMART PHONE</a>
                <a href="account.html" class="nav-item">${accountText}</a>
            </div>
        </nav>
    `;
    
    // Hook up search dropdown handler
    const searchInput = document.getElementById('header-search');
    const searchDropdown = document.getElementById('search-results-dropdown');
    
    if (searchInput) {
        searchInput.addEventListener('input', async (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (query.length < 2) {
                searchDropdown.style.display = 'none';
                return;
            }
            
            const products = await getProducts();
            const matches = products.filter(p => p.title.toLowerCase().includes(query)).slice(0, 5);
            
            if (matches.length === 0) {
                searchDropdown.innerHTML = '<div class="search-no-results">No products found</div>';
            } else {
                searchDropdown.innerHTML = matches.map(p => `
                    <a href="product.html?id=${p.id}" class="search-result-item">
                        <img src="${p.image}" alt="${p.title}">
                        <div class="search-result-info">
                            <span class="search-result-title">${p.title}</span>
                            <div class="search-result-prices">
                                <span class="search-result-sale">${p.price}</span>
                                <span class="search-result-compare">${p.comparePrice}</span>
                            </div>
                        </div>
                    </a>
                `).join('');
            }
            searchDropdown.style.display = 'block';
        });
        
        // Hide dropdown on click outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
                searchDropdown.style.display = 'none';
            }
        });
    }
}

function renderFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;
    
    footerPlaceholder.innerHTML = `
        <footer class="main-footer">
            <div class="footer-container">
                <div class="footer-col footer-about">
                    <h3>IKKO DIGITAL</h3>
                    <p>We bring you premium consumer electronics at unbeatable, direct-to-consumer promotional prices. Get the latest tech essentials delivered right to your doorstep.</p>

                </div>
                <div class="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html?tab=all">Shop All</a></li>
                        <li><a href="account.html">My Account</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Customer Care</h3>
                    <ul>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="terms-of-service.html">Terms of Service</a></li>
                        <li><a href="shipping-policy.html">Shipping Policy</a></li>
                        <li><a href="refund-policy.html">Refund Policy</a></li>
                        <li><a href="contact-information.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-col footer-newsletter">
                    <h3>Subscribe to our Newsletter</h3>
                    <p>Signup for release drops, discount codes, and stock alerts.</p>
                    <form onsubmit="event.preventDefault(); alert('Subscribed successfully!'); this.reset();" class="newsletter-form">
                        <input type="email" placeholder="Your email address" required>
                        <button type="submit">Join</button>
                    </form>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 IKKO DIGITAL. All rights reserved.</p>
            </div>
        </footer>
    `;
}

// Cart Drawer Renderer
function renderCartDrawer() {
    let drawer = document.getElementById('cart-drawer-element');
    if (!drawer) {
        drawer = document.createElement('div');
        drawer.id = 'cart-drawer-element';
        drawer.className = 'cart-drawer-wrapper';
        document.body.appendChild(drawer);
    }
    
    const cart = getCart();
    const total = getCartTotal();
    const count = getCartCount();
    
    drawer.innerHTML = `
        <div class="cart-drawer-overlay" onclick="closeCartDrawer()"></div>
        <div class="cart-drawer">
            <div class="cart-drawer-header">
                <h2>Shopping Cart (${count})</h2>
                <button class="cart-close-btn" onclick="closeCartDrawer()">&times;</button>
            </div>
            
            <div class="cart-drawer-body">
                ${cart.length === 0 ? `
                    <div class="empty-cart-view">
                        <svg viewBox="0 0 24 24" width="60" height="60" stroke="#a0aec0" stroke-width="1.5" fill="none"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <p>Your cart is empty</p>
                        <button class="continue-shopping-btn" onclick="closeCartDrawer()">Start Shopping</button>
                    </div>
                ` : `
                    <div class="cart-items-list">
                        ${cart.map(item => `
                            <div class="cart-item">
                                <div class="cart-item-img">
                                    <img src="${item.image}" alt="${item.title}">
                                </div>
                                <div class="cart-item-details">
                                    <a href="product.html?id=${item.id}" class="cart-item-title">${item.title}</a>
                                    <div class="cart-item-prices">
                                        <span class="cart-item-price">${item.price}</span>
                                        <span class="cart-item-compare">${item.comparePrice}</span>
                                    </div>
                                    <div class="cart-item-actions">
                                        <div class="qty-selector">
                                            <button onclick="updateCartQty('${item.id}', ${item.qty - 1})">-</button>
                                            <input type="number" value="${item.qty}" min="1" onchange="updateCartQty('${item.id}', this.value)">
                                            <button onclick="updateCartQty('${item.id}', ${item.qty + 1})">+</button>
                                        </div>
                                        <button class="cart-remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
            
            ${cart.length > 0 ? `
                <div class="cart-drawer-footer">
                    <div class="cart-subtotal">
                        <span>Subtotal:</span>
                        <span class="subtotal-amount">${formatPrice(total)}</span>
                    </div>
                    <p class="shipping-info-text">🚚 Free Shipping 5 - 7 Days</p>
                    <a href="checkout.html" class="checkout-btn">Proceed to Checkout</a>
                </div>
            ` : ''}
        </div>
    `;
}

function openCartDrawer() {
    renderCartDrawer();
    setTimeout(() => {
        document.getElementById('cart-drawer-element').classList.add('active');
    }, 10);
}

function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer-element');
    if (drawer) {
        drawer.classList.remove('active');
    }
}

function updateCartUI() {
    // Re-render drawer content if active
    const drawer = document.getElementById('cart-drawer-element');
    if (drawer && drawer.classList.contains('active')) {
        renderCartDrawer();
        drawer.classList.add('active');
    }
    
    // Update header badges
    const badge = document.getElementById('cart-badge-count');
    if (badge) {
        badge.innerText = getCartCount();
        badge.classList.remove('cart-bounce-anim');
        void badge.offsetWidth; // Trigger reflow to restart animation
        badge.classList.add('cart-bounce-anim');
    }
}

// Auto-run on load
window.addEventListener('DOMContentLoaded', () => {
    dbInit();
    renderHeader();
    renderFooter();
});
