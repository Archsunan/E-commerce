const products = [
    // Smartphones
    {
        id: "moto-g05",
        name: "Motorola G05",
        price: "₹6,999",
        originalPrice: "₹9,999",
        description: "Forest Green 4 GB RAM 64 GB Storage. Experience the power and speed of the new Motorola G05. Featuring a vibrant display, long-lasting battery, and a sleek Forest Green finish.",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxy3sJEJZ1Z76NAxF92lkiY0JEyvGoc2JTTvom0hiPR1nfGfrJNHYxphCW5Es0MeOMlQ7JOcJwg7sFCrBsRaZYKrHOMnZPWNzWhY2F-v8pfC7LvppEdxCSfQ",
        specs: ["RAM: 4 GB", "Storage: 64 GB", "Color: Forest Green", "Network: 4G/5G"]
    },
    {
        id: "samsung-m05",
        name: "Samsung M05",
        price: "₹10,999",
        originalPrice: "₹15,999",
        description: "Mint Green, 4GB RAM, 64 GB Storage. A reliable smartphone with Samsung's trusted display technology and great battery life.",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSwi5YNEj7W1WXxZ4dHDraUMZwvnV2RJg-dT_z5hcFP4tCJCjxu4imhAXR4zA749FbgQQjizOH7D2GxOKceYXK-ETa2QRxj1eMVrlJ9DG-Uwl1kwfhJgCNu4aI",
        specs: ["RAM: 4 GB", "Storage: 64 GB", "Color: Mint Green", "Battery: 5000mAh"]
    },
    {
        id: "nothing-3a-pro",
        name: "Nothing 3A Pro",
        price: "₹12,999",
        originalPrice: "₹18,999",
        description: "Gray, 8 GB RAM, 128 GB Storage. Stand out with the unique Glyph interface and smooth performance of Nothing OS.",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR27jsAqcjPKMI4dE6EK-vpNUxtF8vEckBEyR0obrNH3btZg7iTkxmBdJct6QhxwtPqzsXVWltYSPHbbjKtElhUBJtlhaO5lwpuIJK-xAJVGhUOmtQdwzKM",
        specs: ["RAM: 8 GB", "Storage: 128 GB", "Color: Gray", "OS: Nothing OS"]
    },
    {
        id: "redmi-14c-5g",
        name: "Redmi 14C 5g",
        price: "₹11,999",
        originalPrice: "₹17,999",
        description: "Starlight Blue, 8 GB RAM, 128 GB Storage. High-speed 5G connectivity meets stunning design and camera capabilities.",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrNV5iVPSMiWrBM2KnHNdH5iJmYR2RVDkTVMCPRaQnqw4VAVQRWvANxXL1x_B-y9f8TfWV33BvL1761dRAbJ5yjjvdh7MwL-p-_IpddayuGLY_7wtKa7xL",
        specs: ["RAM: 8 GB", "Storage: 128 GB", "Color: Starlight Blue", "Network: 5G"]
    },
    {
        id: "poco-c61",
        name: "POCO C61",
        price: "₹7,999",
        originalPrice: "₹11,999",
        description: "Mystical Green, 4GB RAM, 64 GB Storage. Performance on a budget with a stylish glass-back design.",
        image: "https://rukminim2.flixcart.com/image/1200/1200/xif0q/mobile/c/n/9/-original-imah2qyrg2xryu8m.jpeg",
        specs: ["RAM: 4 GB", "Storage: 64 GB", "Color: Mystical Green", "Display: 90Hz"]
    },
    {
        id: "redmi-a5",
        name: "Redmi A5",
        price: "₹20,999",
        originalPrice: "₹25,999",
        description: "Sky Blue, 4GB RAM, 64 GB Storage. Premium features in a compact and colorful package.",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTKhCLomg_7i9_G6hi1-cZEEDh4R3-u98pW4bsmZrpgZeXJ-bKJg1qelFDGvPBJAqX3i8eBuYDoFPCvl2v8U_dpHPriFjzkEeE-62Kf6BYAt3MlDHr48Jmr",
        specs: ["RAM: 4 GB", "Storage: 64 GB", "Color: Sky Blue", "Camera: AI Dual"]
    },
    {
        id: "nothing-5g",
        name: "Nothing 5G",
        price: "₹13,999",
        originalPrice: "₹18,999",
        description: "White, 8 GB RAM, 128 GB Storage. Transparent design philosophy meeting powerful hardware.",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQoWezMy3-9SkSxoSz7LRwtobd_eZkoi-i7LwdTKaMuILhmbrRCqP91f_AO7ZAVmkC9y0CGEPTbVRQxo7WPrhJ8ROmMZylhmjZOVJV-L7D-_uYk_1BoWHc40A",
        specs: ["RAM: 8 GB", "Storage: 128 GB", "Color: White", "Interface: Glyph"]
    },
    
    // Smartwatches
    {
        id: "boult-crown",
        name: "Boult Crown",
        price: "₹3,999",
        originalPrice: "₹8,999",
        description: "Latest 5G enabled smartwatch with OLED display. Premium design for the modern user.",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTQTOSR7eWalJHZRvVbI42qJhmYuPQMd3weIpjV1YIGp9ahQmtin6ygxZTQB77SDh5NjEiMwLTX-5tVtCz2FR3vtOsf9w8Zp3KaLnJT4ScRiKQWjA2yLZjv",
        specs: ["Display: OLED", "Connectivity: BT Calling", "Water Resistance: IP67"]
    },
    {
        id: "boat-enigma",
        name: "Boat Enigma",
        price: "₹1,999",
        originalPrice: "₹3,999",
        description: "Track fitness, notifications, and more with this stylish smartwatch.",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTN0yk3LqkIM3EAAn0xS6cJbfnxIOp3iFI-Qh-zUsp4GEtgbJ_5xp_7gTRQ0iRlXoxJWdmA2PxXFAfpRN-a8UBaVxse7gLmUa0zyPiJNcdNmyEPZtSv6_6gBQ",
        specs: ["Modes: 100+ Sports", "Battery: 7 Days", "Sensor: HR & SpO2"]
    },
    {
        id: "samsung-watch7",
        name: "Samsung Watch7",
        price: "₹2,999",
        originalPrice: "₹4,999",
        description: "Advanced health tracking and seamless integration with the Galaxy ecosystem.",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQepZj8GoGjBHbroRaUNJqGPUKK6ST62GHYpa3T3HD-4wPtwTLC-gnPjmaWgYIq-2NjiF5h5nZ80eVRKY9pUvh5NhnqDQvS_eHTdeR9QtwSejctD_i-wNMy",
        specs: ["OS: Wear OS", "Display: Super AMOLED", "Tracking: BioActive Sensor"]
    },
    {
        id: "noise-colorfit",
        name: "Noise Colorfit",
        price: "₹1,549",
        originalPrice: "₹5,999",
        description: "Vibrant display and comprehensive activity tracking at an unbeatable price.",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTdhQZihZ3BgnO9ZViyzIcev5nhOclFtM41m-MyfLQ-4eoDmGA-HvYuU1tkSwhs5X1N6NRSApoaaEFzhGjQoPzri-1E9pTrCg70P8rbCcB0HWpcP_Iz6GYKyw",
        specs: ["Display: 1.69 inch", "Battery: 10 Days", "Features: Cloud Faces"]
    },
    {
        id: "redmi-a4-watch",
        name: "Redmi A4",
        price: "₹3,999",
        originalPrice: "₹10,999",
        description: "Sleek design with long battery life and essential fitness features.",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKChKZsq8eNKBoNJThrAO5Z_IZkjDQ1t3DziVufpqBG738ez4BHpwr4W427utCq7EiosrsX9vnQBFYxMqxosGClIgL_Hn_KdF_mXD6Nre9rfBxuGtEyKkvYg",
        specs: ["Display: HD", "Battery: 12 Days", "GPS: Built-in"]
    },
    {
        id: "fastrack-revolt",
        name: "Fastrack Revolt",
        price: "₹8,999",
        originalPrice: "₹11,999",
        description: "Rugged design for the adventurous, with unique styling tailored for youth.",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSz6PWLMP5Nvdvh9CfB3ovS0IvvixCqbYQuZgzpSeMnD-O0ZwJcRRDPPMEE_mYSpYVkBeNaClopXomZ1BQfdgTkHCtRo1GXrIDHUA2WRduqIT9hkYJRV2mvQw",
        specs: ["Design: Rugged", "Series: Revolt", "Style: Unisex"]
    },

    // SmartTVs
    {
        id: "samsung-tv",
        name: "Samsung TV",
        price: "₹13,999",
        originalPrice: "₹18,999",
        description: "Samsung 43 inch Class Quantum 4K UHD QLED HDR Smart TV. Stunning colors and contrast.",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSf96bz-BvDeVKeppYCMXzr0F7P0AFufC0h3bEVsP0wzZWG9gPcigcro2QYc5lxfzZn4vUR1iuoKs6sxP5juEAS6KN7Cx-5IqYW5_IgHzSaExc_rYE5ZVRO8w",
        specs: ["Size: 43 Inch", "Resolution: 4K UHD", "Panel: QLED", "HDR: Yes"]
    },
    {
        id: "sony-tv",
        name: "Sony TV",
        price: "₹7,999",
        originalPrice: "₹15,999",
        description: "Sony 40 inch Class 1080p HDR Smart TV. Crystal clear picture and immersive sound.",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcREZ810MDiGLGFxDR4pxNWWHJlhgMS3r-TinQ38AJUVlFGLWTbbScupphIYEDDVta8v-qa4diwos_mtm9BrhpXRVziUjHsBdVkm7O2cyf67rfR_avLfakk0",
        specs: ["Size: 40 Inch", "Resolution: 1080p", "HDR: Yes", "Smart: Yes"]
    },
    {
        id: "vizio-tv",
        name: "Vizio TV",
        price: "₹10,999",
        originalPrice: "₹19,999",
        description: "Vizio 32 inch Class Select Series Full HD Smart TV with Roku Voice Remote.",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRLMwt23UgaSRyunecXpRVhAHacDPZzcpzVz0T0pMCAx-e6fBtPj8IVF76OHu1V5kSa83ya03P2qfH_NkAJgogzLZXbACpaFiRJE-2dkDNitplvLiIkGdv7",
        specs: ["Size: 32 Inch", "Resolution: Full HD", "Platform: Roku TV", "Voice Remote: Yes"]
    },
    {
        id: "lg-tv",
        name: "LG TV",
        price: "₹20,999",
        originalPrice: "₹25,999",
        description: "LG 43\" Class QNED80T Series QNED 4K Smart TV. Quantum Dot NanoCell technology.",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQMFG2KYBEDQT7OPXObBIdxgwQMc5ykDD6ST95ripczEMrAv0SYIgX5srNLyBu2vwe2EOKryeNCLaJkJLjXjRyglUqfSQwNGJWdfF1TMvw",
        specs: ["Size: 43 Inch", "Resolution: 4K QNED", "Processor: AI 4K", "Gaming: Game Optimizer"]
    },

    // Generic Category Representatives (for Home Page)
    {
        id: "smartphone-cat",
        name: "Smartphone Category",
        price: "Starts from ₹6,999",
        originalPrice: "",
        description: "Explore our wide range of latest 5G enabled smartphones.",
        image: "mobile.jpg",
        specs: ["Latest 5G", "OLED Displays", "Top Brands"]
    },
    {
        id: "smartwatch-cat",
        name: "Smartwatch Category",
        price: "Starts from ₹1,549",
        originalPrice: "",
        description: "Track fitness, notifications, and more with our premium smartwatches.",
        image: "shopping.webp",
        specs: ["Fitness Tracking", "Notifications", "Long Battery"]
    },
    {
        id: "smarttv-cat",
        name: "Smart TV Category",
        price: "Starts from ₹7,999",
        originalPrice: "",
        description: "Experience cinema at home with our collection of Smart TVs.",
        image: "tv.avif",
        specs: ["4K UHD", "Smart Features", "Voice Control"]
    }
];
