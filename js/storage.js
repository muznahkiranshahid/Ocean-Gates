var data = [
  {
    id: 1,
    title: "Samsung 870 EVO 500GB SSD SATA 2.5- MZ-77E500",
    img: "products images/samsung/prod 1.jpg",
    desc: "A reliable 500GB SATA 2.5-inch SSD offering fast speeds and efficient performance for storage upgrades.",
    price: "Price:$500",
    button: "View Details",
    doc:"word files/Samsung 870 EVO 500GB SSD SATA 2.docx"
  
  },
  {
    id: 2,
    title: "LaCie 4TB Rugged SSD PRO Thunderbolt 3 External SSD",
    img: "products images/LaCie/prod 13.jpg",
    desc: "A durable 4TB external SSD with Thunderbolt 3, designed for pro-level speed and rugged reliability.",
    price: "Price:$400",
    button: "View Details",
    doc:"word files/LaCie 4TB Rugged SSD PRO Thunderbolt 3 External SSD.docx"
  },
  {
    id: 3,
    title: "SanDisk Desk Drive - 4TB",
    img: "products images/sandisk/prod 9.jpg",
    desc: "A compact and reliable 4TB external drive, perfect for secure desktop storage.",
    price: "Price:$700",
    button: "View Details",
    doc:"word files/SanDisk Desk Drive.docx"
  },
  {
    id: 4,
    title: "WD Purple Surveillance Hard Drive - 1TB WD11PURZ 64MB Cache SATA",
    img: "products images/western digital/prod 26.jpg",
    desc: "A 1TB surveillance hard drive with 64MB cache, optimized for reliable 24/7 recording..",
    price: "Price:$550",
    button: "View Details",
    doc:"word files/WD Purple Surveillance Hard Drive.docx"
  },
  {
    id: 5,
    title: "Kingston FURY Renegade PCIe 4.0 NVMe M.2 SSD ",
    img: "products images/kingston/prod 22.jpg",
    desc: "A fast PCIe 4.0 NVMe M.2 SSD, delivering top-tier performance for gaming and demanding applications.",
    price: "Price:$800",
    button: "View Details",
    doc:"word files/Kingston FURY Renegade PCIe 4.docx"
  },
  {
    id: 6,
    title: "WD My Cloud EX2 Ultra 2-Bay Personal Cloud Storage Server (Diskless) NAS ",
    img: "products images/western digital/prod 28.jpg",
    desc: "A diskless 2-bay NAS offering secure, customizable cloud storage with easy access.",
    price: "Price:$900",
    button: "View Details",
    doc:"word files/WD My Cloud EX2 Ultra 2.docx",
  },
  {
    id: 7,
    title: "SanDisk Ultra micro SDXC UHS-I 128GB Memory Card SDSQUNR-128G-GN6MN ",
    img: "products images/sandisk/prod 12.jpg",
    desc: "High-speed 128GB memory card for seamless storage, performance, and reliability.",
    price: "Price:$150",
    button: "View Details",
    doc:"word files/SanDisk Ultra microSDXC UHS.docx"
  },
  {
    id: 8,
    title: "Samsung 870 QVO 4TB 2.5 SATA III Internal SSD",
    img: "products images/samsung/prod 5.jpg",
    desc: "A 4TB 2.5 SATA III internal SSD, delivering reliable storage with fast read/write speeds.",
    price: "Price:$900",
    button: "View Details",
    doc:"word files/Samsung 870 QVO 4TB 2.docx"
  },
  {
    id: 9,
    title: "Kingston NV2 PCIe 4.0 NVMe M.2 2280 SSD 1TB - SNV2S/1000G ",
    img: "products images/kingston/prod 21.jpg",
    desc: "Blazing-fast 1TB SSD storage for enhanced performance and reliability.",
    price: "Price:$300",
    button: "View Details",
    doc:"word files/Kingston NV2 PCIe 4.docx"
  },
  {
    id: 10,
    title: "SanDisk Extreme M.2 NVMe PCIe Gen 4.0 Internal SSD - 500GB",
    img: "products images/sandisk/prod 8.webp",
    desc: "Experience ultra-fast speeds with a 500GB PCIe Gen 4.0 NVMe SSD for seamless performance.",
    price: "Price:$650",
    button: "View Details",
    doc:"word files/SanDisk Extreme M.docx"
  },
  {
    id: 11,
    title: "XS1000 External Solid State Drive (SSD)",
    img: "products images/kingston/prod 23.jpeg",
    desc: "Compact and fast external SSD for effortless and secure storage on the go.",
    price: "Price:$300",
    button: "View Details",
    doc:"word files/XS1000 External Solid State Drive.docx"
  },
  {
    id: 12,
    title: "WD My Passport 1TB External USB 3.0 Portable Hard Drive - Black - WDBYVG0010BBK",
    img: "products images/western digital/prod 25.jpg",
    desc: "Portable 1TB USB 3.0 hard drive for reliable, fast and secure storage on the move.",
    price: "Price:$500",
    button: "View Details",
    doc:"word files/WD My Passport 1TB External USB 3.docx"
  },
  {
    id: 13,
    title: "SanDisk 32GB Ultra Dual Drive M3.0 Flash Drive for Android™ Devices - SDDD3-032G-G46 ",
    img: "products images/sandisk/prod 11.jpg",
    desc: "Convenient 32GB dual flash drive for quick file transfer between Android devices and computers.",
    price: "Price:$200",
    button: "View Details",
    doc:"word files/SanDisk 32GB Ultra Dual Drive M3.docx"
  },
  {
    id: 14,
    title: "Samsung 870 EVO 1TB SSD SATA 2.5 - MZ-77E1T0",
    img: "products images/samsung/prod 6.jpg",
    desc: "High-performance 1TB SATA SSD for fast, reliable storage and enhanced efficiency..",
    price: "Price:$800",
    button: "View Details",
    doc:"word files/Samsung 870 EVO 1TB SSD SATA 2.docx"
  },
  {
    id: 15,
    title: "WD Blue SN580 NVMe™ SSD 500GB WDS500 G3B0E PCIe Gen4 x4 M.2 2280 ",
    img: "products images/western digital/prod 27.jpg",
    desc: "High-speed 500GB NVMe SSD with PCIe Gen4 for fast storage and performance.",
    price: "Price:$500",
    button: "View Details",
    doc:"word files/WD Blue SN580 NVMe.docx"
  },
  {
    id: 16,
    title: "LaCie 10TB 1big Dock Thunderbolt 3 External Hard Drive",
    img: "products images/LaCie/prod 17.jpg",
    desc: "Powerful 10TB storage solution with docking capabilities for seamless data management.",
    price: "Price:$600",
    button: "View Details",
    doc:"word files/LaCie 10TB d2 Professional USB.docx"
  },
  {
    id: 17,
    title: "Samsung 990 PRO w/ Heatsink PCIe® 4.0 NVMe™ M.2 (2280) SSD 1TB MZ-V9P1T0 | Compatible with Playstation 5",
    img: "products images/samsung/prod 3.jpg",
    desc: "High-performance 1TB PCIe 4.0 NVMe SSD with heatsink, optimized for PS5 and extreme speeds.",
    price: "Price:$450",
    button: "View Details",
    doc:"word files/Samsung 990 PRO w.docx"
  },
  {
    id: 18,
    title: "WD Red Pro NAS Hard Drive - 2TB ",
    img: "products images/western digital/prod 29.jpg",
    desc: "Reliable 2TB NAS hard drive designed for high-performance and 24/7 operation.",
    price: "Price:$700",
    button: "View Details",
    doc:"word files/WD Red Pro NAS Hard Drive.docx"
  },
  {
    id: 19,
    title: "Kingston DataTraveler Exodia M USB Flash Drive 64GB USB 3.2 |DTXM/64GB ",
    img: "products images/kingston/prod 20.jpg",
    desc: "Compact 64GB USB 3.2 flash drive for fast and reliable data storage on the go.",
    price: "Price:$600",
    button: "View Details",
    doc:"word files/Kingston Data Traveler Exodia M USB Flash Drive 64GB USB 3.docx"
  },
  {
    id: 20,
    title: "SanDisk Portable SSD (Updated Firmware) - 1TB ",
    img: "products images/sandisk/prod 10.jpg",
    desc: "High-speed, reliable 1TB portable storage with enhanced firmware for optimal performance.",
    price: "Price:$450",
    button: "View Details",
    doc:"word files/SanDisk Portable SSD.docx"
  },
  {
    id: 21,
    title: "LaCie 2TB Mobile SSD Secure External Drive (Space Gray)",
    img: "products images/LaCie/prod 14.jpg",
    desc: "Secure and sleek 2TB portable SSD in Space Gray, offering fast performance.",
    price: "Price:$200",
    button: "View Details",
    doc:"word files/LaCie 2TB Mobile SSD Secure External Drive.docx"
  },
  {
    id: 22,
    title: "Samsung 980 PRO with Heatsink 2TB PCIe 4.0 NVMe SSD M.2 2280 | PS5 Compatible MZ-V8P2T0",
    img: "products images/samsung/prod 4.jpg",
    desc: "Blazing-fast 2TB PCIe 4.0 NVMe SSD with heatsink, optimized for PS5 and performance computing.",
    price: "Price:$150",
    button: "View Details",
    doc:"word files/Samsung 980 PRO with Heatsink 2TB PCIe 4.docx"
  },
  {
    id: 23,
    title: "LaCie 10TB d2 Professional USB-C 3.2 Gen 2 External Hard Drive",
    img: "products images/LaCie/prod 15.jpg",
    desc: "Reliable 10TB external hard drive with USB-C 3.2 Gen 2 for professional-grade performance.",
    price: "Price:$300",
    button: "View Details",
    doc:"word files/LaCie 10TB d2 Professional USB.docx"
  },
  {
    id: 24,
    title: "Kingston NV3 PCIe 4.0 NVMe SSD ",
    img: "products images/kingston/prod 24.jpg",
    desc: "High-performance PCIe 4.0 NVMe SSD delivering speed and reliability for modern computing.",
    price: "Price:$400",
    button: "View Details",
    doc:"word files/Kingston NV3 PCIe 4.docx"
  },
  {
    id: 25,
    title: "SanDisk Extreme PRO Portable SSD Up To 4TB - 1TB ",
    img: "products images/sandisk/prod 7.jpg",
    desc: "Ultra-fast, durable portable SSD offering 1TB storage with up to 4TB capacity options.",
    price: "Price:$150",
    button: "View Details",
    doc:"word files/SanDisk Extreme PRO Portable SSD Up to 4TB.docx"
  },
  {
    id: 26,
    title: "Kingston XS1000 1TB External Solid State Drive SSD ",
    img: "products images/kingston/prod 19.jpg",
    desc: "Compact and fast 1TB external SSD designed for portability and reliable performance.",
    price: "Price:$75",
    button: "View Details",
    doc:"word files/Kingston XS1000 1TB External Solid State Drive SSD.docx"
  },
  {
    id: 27,
    title: "Samsung SSD 980 PCIe Gen3x4 NVMe M.2 1TB 2280 | MZ-V8V1T0BW",
    img: "products images/samsung/prod 2.jpg",
    desc: "High-speed 1TB PCIe Gen3x4 NVMe M.2 SSD for enhanced performance and reliability.",
    price: "Price:$100",
    button: "View Details",
    doc:"word files/Samsung 980 PRO with Heatsink 2TB PCIe 4.docx"
  },
  {
    id: 28,
    title: "LaCie 24TB d2 Professional USB-C 3.2 Gen 2 External Hard Drive",
    img: "products images/LaCie/prod 16.jpg",
    desc: "24TB external hard drive with USB-C 3.2 Gen 2 for professional storage and performance.",
    price: "Price:$250",
    button: "View Details",
    doc:"word files/LaCie 24TB d2 Professional USB.docx"
  },
  {
    id: 29,
    title: "WD_BLACK C50 Storage Expansion Card for Xbox ",
    img: "products images/western digital/prod 30.webp",
    desc: "Seamless 1TB storage expansion for Xbox, offering fast load times and enhanced gaming performance.",
    price: "Price:$200",
    button: "View Details",
    doc:"word files/WD.docx"
  },
  {
    id: 30,
    title: "LaCie 16TB 2big Dock 2-Bay Thunderbolt 3 RAID Array ",
    img: "products images/LaCie/prod 18.jpg",
    desc: "A 16TB 2-bay Thunderbolt 3 RAID array, providing high-capacity storage and fast data transfer.",
    price: "Price:$600",
    button: "View Details",
    doc:"word files/LaCie 16TB 2big Dock 2.docx"
  }
];







