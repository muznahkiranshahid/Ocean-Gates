var data = [
    {
      id: 1,
      title: "SanDisk Desk Drive - 4TB",
      img: "products images/sandisk/prod 9.jpg",
      desc: "A compact and reliable 4TB external drive, perfect for secure desktop storage.",
      price: "Price:$700",
      button: "View Details",
    doc:"word files/SanDisk Desk Drive.docx"
    },
    {
      id: 2,
      title: "SanDisk Ultra micro SDXC UHS-I 128GB Memory Card SDSQUNR-128G-GN6MN ",
      img: "products images/sandisk/prod 12.jpg",
      desc: "High-speed 128GB memory card for seamless storage, performance, and reliability.",
      price: "Price:$150",
      button: "View Details",
    doc:"word files/SanDisk Ultra microSDXC UHS.docx"
    },
    {
      id: 3,
      title: "SanDisk Extreme M.2 NVMe PCIe Gen 4.0 Internal SSD - 500GB",
      img: "products images/sandisk/prod 8.webp",
      desc: "Experience ultra-fast speeds with a 500GB PCIe Gen 4.0 NVMe SSD for seamless performance.",
      price: "Price:$650",
      button: "View Details",
    doc:"word files/SanDisk Extreme M.docx"
    },
    {
      id: 4,
      title: "SanDisk Portable SSD (Updated Firmware) - 1TB ",
      img: "products images/sandisk/prod 10.jpg",
      desc: "High-speed, reliable 1TB portable storage with enhanced firmware for optimal performance.",
      price: "Price:$450",
      button: "View Details",
    doc:"word files/SanDisk Portable SSD.docx"
    },
    {
      id: 5,
      title: "SanDisk 32GB Ultra Dual Drive M3.0 Flash Drive for Android™ Devices - SDDD3-032G-G46 ",
      img: "products images/sandisk/prod 11.jpg",
      desc: "Convenient 32GB dual flash drive for quick file transfer between Android devices and computers.",
      price: "Price:$200",
      button: "View Details",
    doc:"word files/SanDisk 32GB Ultra Dual Drive M3.docx"
    },
    {
      id: 6,
      title: "SanDisk Extreme PRO Portable SSD Up To 4TB - 1TB ",
      img: "products images/sandisk/prod 7.jpg",
      desc: "Ultra-fast, durable portable SSD offering 1TB storage with up to 4TB capacity options.",
      price: "Price:$150",
      button: "View Details",
    doc:"word files/SanDisk Extreme PRO Portable SSD Up to 4TB.docx"
    },
]

var row = document.getElementById("sdcards")

for (var i = 0; i < data.length; i++) {
  row.innerHTML += `
<div class="custom-card col-sm-6 col-md-4 col-lg-3 col-xl-3 m-2 rounded-3" style="width: 15rem; height=30rem">
      <img src="${data[i].img}" class="card-img" alt="...">
      <div class="card-body">
        <h5 class="card-title text-truncate-2">${data[i].title}</h5>          
      <p class="card-desc text-truncate-2">${data[i].desc}</p>
      <p class="card-price">${data[i].price}</p>
      <div class="card-buttons">
        <a href="sandiskdetail.html?id=${i}" class="btn btn-cart ms-5">${data[i].button}</a> 
      </div>
      </div>
    </div> `
}