const PCs = [
  {
    productId: "c45e8e92-5b8a-4a82-90e1-7baf7fbf26f1",
    productName: "ROG Strix G17 (2022) G713",
    price: 1200,
    viewCount: 256,
    spec: {
      cpu: "Intel i5 13400k",
      gpu: "NVIDIA RTX 3060",
      ram: "16GB DDR5",
      storage: "1TB",
      display: "17.3 IPS (1920 x 1080) 360hz",
      battery: "70wh",
      brightness: "600nit",
      port: "Type-C",
      weight: "1.3",
    },
    imageUrl: "https://www.ubuy.com.kh/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaWQvNjRjMTg3ZmMxOGFjZDM3OWFlNzA0MjZlLWFzdXMtcm9nLXN0cml4LTE1LTYtcjktcnR4LTMwNjAtZ2FtaW5nLmpwZw.jpg",
    },
      {
        productId: 1,
        productName: "ROG GZ301VU",
        price: 2099.00,
        viewCount: 256,
        spec: {
          cpu: "Intel Core I9 13900H",
          gpu: "NVIDIA RTX 2080 Ti",
          memory: "16GB DDR4",
          storage: "1TB SSD",
          display: "13.4 IPS QHD (2560 x 1600) 165Hz",
          windows: "11",
        },
        images: ["/laptopimg/rog5.jpg"]
      },
      {
        productId: 2,
        productName: "AORUS-5-SE4",
        price: 1529.00,
        viewCount: 256,
        spec: {
          cpu: "Intel Core I7 12700H",
          gpu: "NVIDIA RTX3070 8GB",
          memory: "16GB DDR4",
          storage: "512GB SSD",
          display: "15.6 IPS FHD (1920 x 1080) IPS, 144Hz"
        },
        images: ["/laptopimg/aorus.jpg"]
      },
      {
        productId: 3,
        productName: "Alienware-m15-R7",
        price: 1499.99,
        viewCount: 256,
        spec: {
          cpu: "Intel Core I7 12700H",
          gpu: "NVIDIA RTX 3060 6GB",
          memory: "32GB DDR4",
          storage: "1TB NVMe SSD",
          display: "15.6 IPS FHD (1920 x 1080) 165Hz",
        },
        images: ["/laptopimg/alien.jpg"]
      },
      {
        productId: 4,
        productName: "Acer Nitro 5",
        price: 799.99,
        viewCount: 256,
        spec: {
          cpu: "Intel Core i5-10300H",
          gpu: "NVIDIA GTX 1650",
          memory: "8GB DDR4",
          storage: "256GB SSD",
          display: "15.6 IPS FHD (1920 x 1080) 144Hz",
        },
        images: ["/laptopimg/nitro5.jpg"]
      },
      {
        productId: 5,
        productName: "HP EliteBook 850 G7 Notebook",
        price: 1199.99,
        viewCount: 256,
        spec: {
          cpu: "Intel Core i7-10510U",
          gpu: "Integrated Intel Graphics",
          memory: "16GB DDR4",
          storage: "512GB SSD",
          display: "15.6 IPS FHD (1920 x 1080)",
        },
        images: ["/laptopimg/hpelitebook.jpg"]
      },
      {
        productId: 6,
        productName: "Lenovo Ideapad 3",
        price: 599.99,
        viewCount: 256,
        spec: {
          cpu: "Intel Core i5-10210U",
          gpu: "Integrated Intel Graphics",
          memory: "8GB DDR4",
          storage: "256GB SSD",
          display: "14.0 IPS FHD (1920 x 1080)",
        },
        images: ["/laptopimg/ideapad3.jpg"]
      },
      {
        productId: 7,
        productName: "ASUS TUF (2019) Gaming Laptop, 15.6",
        price: 1499.99,
        viewCount: 256,
        spec: {
          cpu: "AMD Ryzen 7 4800H",
          gpu: "NVIDIA RTX 2060",
          memory: "16GB DDR4",
          storage: "1TB SSD",
          display: "15.6 IPS FHD (1920 x 1080) 144Hz",
        },
        images: ["/laptopimg/asustuf.jpg" ]
      },
      {
        productId: 8,
        productName: "SAMSUNG Galaxy Book Pro 15.6''FHD AMOLED",
        price: 1299.99,
        viewCount: 256,
        spec: {
          cpu: "Intel Core i7-1165G7",
          gpu: "Integrated Intel Iris Xe Graphics",
          memory: "16GB DDR4",
          storage: "512GB SSD",
          display: "15.6 IPS FHD (1920 x 1080) 144Hz",
        },
        images: ["/laptopimg/samsungbook.jpg"]
      },
      {
        productId: 9,
        productName: "Dell Alienware m17",
        price: 2999.99,
        viewCount: 256,
        spec: {
          cpu: "Intel Core i9-10980HK",
          gpu: "NVIDIA RTX 3080",
          memory: "32GB DDR4",
          storage: "2TB SSD",
          display: "17.3 IPS FHD (1920 x 1080) 144Hz",
        },
        images: ["/laptopimg/della1.jpg"]
      },
      {
        productId: 10,
        productName: "Lenovo Chromebook Duet, 2-in-1",
        price: 249.99,
        viewCount: 256,
        spec: {
          cpu: "Intel Celeron N4020",
          gpu: "Integrated Intel Graphics",
          memory: "8GB DDR4",
          storage: "256GB SSD",
          display: "13.0 IPS FHD (1920 x 1080)",
        },
        images: ["/laptopimg/chromebook.jpg", "/laptopimg/chromebook1.jpg", "/laptopimg/chromebook2.jpg"]
      },
      {
        productId: 11,
        productName: "Lenovo 82JU00N5US, Legion 5 - Gaming Laptop",
        price: 1299.99,
        viewCount: 256,
        spec: {
          cpu: "AMD Ryzen 5 5600H",
          gpu: "NVIDIA RTX 3060",
          memory: "16GB DDR4",
          storage: "512GB SSD",
          display: "15.6 IPS FHD (1920 x 1080) 144Hz",
        },
        images: ["/laptopimg/legion.jpg"]
      },
      {
        productId: 12,
        productName: "Lenovo IdeaPad 1 15.6 FHD Laptop",
        price: 449.99,
        viewCount: 256,
        spec: {
          cpu: "AMD Ryzen 3 3250U",
          gpu: "Integrated AMD Radeon Graphics",
          memory: "8GB DDR4",
          storage: "128GB SSD",
          display: "12.6 IPS FHD (1920 x 1080)",
        },
        images: ["/laptopimg/ideapad.jpg"]
      },
      {
        productId: 13,
        productName: "ASUS ROG Strix G17 (2024) Gaming Laptop, 17.3” 300Hz OLED",
        price: 2999.99,
        viewCount: 256,
        spec: {
          cpu: "Intel Core i9-14900K",
          gpu: "NVIDIA RTX 4080",
          memory: "64GB DDR5",
          storage: "2TB SSD",
          display: "17.3 IPS FHD (1920 x 1080) 360Hz",
        },
        images: ["/laptopimg/rog.jpg"]
      },
      {
        productId: 14,
        productName: "ASUS Vivobook 15.6'' FHD Slim Laptop",
        price: 899.99,
        viewCount: 256,
        spec: {
          cpu: "Intel Core i5-1135G7",
          gpu: "Intel Iris Xe Graphics",
          memory: "8GB DDR4",
          storage: "512GB SSD",
          display: "15.6 IPS FHD (1920 x 1080) 90Hz",
        },
        images: ["/laptopimg/vivobook.jpg"]
      },
      {
        productId: 15,
        productName: "ASUS Vivobook Pro 15 Laptop, 15.6” FHD Display",
        price: 799.99,
        viewCount: 256,
        spec: {
          cpu: "AMD Ryzen 5 5600H",
          gpu: "NVIDIA GTX 1650",
          memory: "8GB DDR4",
          storage: "512GB SSD",
          display: "15.6 IPS FHD (1920 x 1080) 144Hz",
        },
        images: ["/laptopimg/vivobookpro.jpg"]
      },
      {
        productId: 16,
        productName: "MacBook Pro M2 PRO",
        price: 1999.99,
        viewCount: 256,
        spec: {
          cpu: "Apple M2 Pro",
          gpu: "Integrated Graphics",
          memory: "16GB",
          storage: "512GB SSD",
          display: "5k MINI-LED 120Hz",
        },
        images: ["/laptopimg/m21.jpg"]
      },
      {
        productId: 17,
        productName: "Dell XPS 15",
        price: 1799.99,
        viewCount: 256,
        spec: {
          cpu: "Intel Core i7-10750H",
          gpu: "NVIDIA GTX 1650 Ti",
          memory: "16GB DDR4",
          storage: "1TB SSD",
          display: "16 OLED UHD (3840 x 2160) 60Hz",
        },
        images: ["/laptopimg/xps15.jpg"]
      },
      {
        productId: 18,
        productName: "Razer Blade 15",
        price: 1599.99,
        viewCount: 256,
        spec: {
          cpu: "Intel Core i7-10875H",
          gpu: "NVIDIA RTX 2070 Max-Q",
          memory: "16GB DDR4",
          storage: "512GB SSD",
          display: "15.6 FHD (1920 x 1080) 144Hz",
        },
        images: ["/laptopimg/blade15.jpg"]
      },
      {
        productId: 19,
        productName: "HP Spectre x360",
        price: 1449.99,
        viewCount: 256,
        spec: {
          cpu: "Intel Core i7-10750H",
          gpu: "Intel Iris Plus Graphics",
          memory: "16GB DDR4",
          storage: "1TB SSD",
          display: "15.6 IPS FHD (1920 x 1080) 144Hz",
        },
        images: ["/laptopimg/spectre.jpg"]
      },
      {
        productId: 20,
        productName: "Lenovo ThinkPad X1 Carbon",
        price: 1529.99,
        viewCount: 256,
        spec: {
          cpu: "Intel Core i7-10510U",
          gpu: "Intel UHD Graphics",
          memory: "16GB DDR3",
          storage: "512GB SSD",
          display: "15.6 IPS FHD (1920 x 1080) 60Hz",
        },
        images: ["/laptopimg/x12.jpg"]
      },
    
     {
      productId: "d9f7165c-0b55-4d4b-8d1a-3dbb6e9103e7",
      productName: "Desktop Computer",
      price: 899,
      viewCount: 180,
      spec: {
        cpu:"Intel Core I5 12400",
        gpu:"Intel UHD 6000",
        storage:"1TB",
        display:"16 IPS (1920 x 1080)",
      },
       imageUrl: "https://i5.walmartimages.com/seo/DELL-Optiplex-7040-Desktop-Computer-PC-Intel-Quad-Core-i5-2TB-HDD-8GB-DDR3-RAM-Windows-10-Pro-DVD-WIFI-19in-Monitor-USB-Keyboard-Mouse-Used-Like-New_22b50342-15c5-4e52-83b8-6194af42fd16.3744fdd76aab16f2f17b18c53204c61c.jpeg",

    },
  
    {
      productId: "7c91c819-84da-426f-b2db-40116f7a29d8",
      productName: "UltraWide Monitor",
      price: 499,
      viewCount: 120, 
      spec:{
        ScreenType:"IPS",
        Resolution:"3440 x 1440",
      }, 
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451095_sd.jpg",

    },      

    {
      productId: "f148c433-0281-477d-8464-b64a10b51ca8",
      productName: "Mechanical Keyboard",
      price: 79.99,
      viewCount: 300, 
       imageUrl: "https://assetsio.reedpopcdn.com/k552.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
  
    },
    {
      productId: "53f0f7d1-4b26-4322-b58d-1157f4659d61",
      productName: "Gaming Mouse",
      price: 49.99,
      viewCount: 150,
     imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/518YG4aQZ7L._AC_.jpg",
  
  }, 
];
export { PCs };
