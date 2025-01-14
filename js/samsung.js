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
    title: "Samsung 980 PRO with Heatsink 2TB PCIe 4.0 NVMe SSD M.2 2280 | PS5 Compatible MZ-V8P2T0",
    img: "products images/samsung/prod 4.jpg",
    desc: "Blazing-fast 2TB PCIe 4.0 NVMe SSD with heatsink, optimized for PS5 and performance computing.",
    price: "Price:$150",
    button: "View Details",
    doc:"word files/Samsung 980 PRO with Heatsink 2TB PCIe 4.docx"
  },
  {
    id: 3,
    title: "Samsung 870 QVO 4TB 2.5 SATA III Internal SSD",
    img: "products images/samsung/prod 5.jpg",
    desc: "A 4TB 2.5 SATA III internal SSD, delivering reliable storage with fast read/write speeds.",
    price: "Price:$900",
    button: "View Details",
    doc:"word files/Samsung 870 QVO 4TB 2.docx"
  },
  {
    id: 4,
    title: "Samsung 990 PRO w/ Heatsink PCIe® 4.0 NVMe™ M.2 (2280) SSD 1TB MZ-V9P1T0 | Compatible with Playstation 5",
    img: "products images/samsung/prod 3.jpg",
    desc: "High-performance 1TB PCIe 4.0 NVMe SSD with heatsink, optimized for PS5 and extreme speeds.",
    price: "Price:$450",
    button: "View Details",
    doc:"word files/Samsung 990 PRO w.docx"
  },
  {
    id: 5,
    title: "Samsung 870 EVO 1TB SSD SATA 2.5 - MZ-77E1T0",
    img: "products images/samsung/prod 6.jpg",
    desc: "High-performance 1TB SATA SSD for fast, reliable storage and enhanced efficiency..",
    price: "Price:$800",
    button: "View Details",
    doc:"word files/Samsung 870 EVO 1TB SSD SATA 2.docx"
  },
  {
    id: 6,
    title: "Samsung SSD 980 PCIe Gen3x4 NVMe M.2 1TB 2280 | MZ-V8V1T0BW",
    img: "products images/samsung/prod 2.jpg",
    desc: "High-speed 1TB PCIe Gen3x4 NVMe M.2 SSD for enhanced performance and reliability.",
    price: "Price:$100",
    button: "View Details",
    doc:"word files/Samsung 980 PRO with Heatsink 2TB PCIe 4.docx"
  },
]

var row = document.getElementById("scards")

for (var i = 0; i < data.length; i++) {
  row.innerHTML += `
<div class="custom-card col-sm-6 col-md-4 col-lg-3 col-xl-3 m-2 rounded-3" style="width: 15rem; height=30rem">
      <img src="${data[i].img}" class="card-img" alt="...">
      <div class="card-body">
        <h5 class="card-title text-truncate-2">${data[i].title}</h5>          
      <p class="card-desc text-truncate-2">${data[i].desc}</p>
      <p class="card-price">${data[i].price}</p>
      <div class="card-buttons">
        <a href="samsungdetail.html?id=${i}" class="btn btn-cart ms-5">${data[i].button}</a> 
      </div>
      </div>
    </div> `
}