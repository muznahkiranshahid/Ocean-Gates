var data = [
    {
      id: 1,
      title: "Kingston FURY Renegade PCIe 4.0 NVMe M.2 SSD ",
      img: "products images/kingston/prod 22.jpg",
      desc: "A fast PCIe 4.0 NVMe M.2 SSD, delivering top-tier performance for gaming and demanding applications.",
      price: "Price:$800",
      button: "View Detais",
      doc:"word files/Kingston FURY Renegade PCIe 4.docx"
    },
    {
      id: 2,
      title: "Kingston DataTraveler Exodia M USB Flash Drive 64GB USB 3.2 |DTXM/64GB ",
      img: "products images/kingston/prod 20.jpg",
      desc: "Compact 64GB USB 3.2 flash drive for fast and reliable data storage on the go.",
      price: "Price:$600",
      button: "View Details",
    doc:"word files/Kingston Data Traveler Exodia M USB Flash Drive 64GB USB 3.docx"
    },
    {
      id: 3,
      title: "XS1000 External Solid State Drive (SSD)",
      img: "products images/kingston/prod 23.jpeg",
      desc: "Compact and fast external SSD for effortless and secure storage on the go.",
      price: "Price:$300",
      button: "View Details",
    doc:"word files/XS1000 External Solid State Drive.docx"
    },
    {
      id: 4,
      title: "Kingston NV3 PCIe 4.0 NVMe SSD ",
      img: "products images/kingston/prod 24.jpg",
      desc: "High-performance PCIe 4.0 NVMe SSD delivering speed and reliability for modern computing.",
      price: "Price:$400",
      button: "View Details",
    doc:"word files/Kingston NV3 PCIe 4.docx"
    },
    {
      id: 5,
      title: "Kingston NV2 PCIe 4.0 NVMe M.2 2280 SSD 1TB - SNV2S/1000G ",
      img: "products images/kingston/prod 21.jpg",
      desc: "Blazing-fast 1TB SSD storage for enhanced performance and reliability.",
      price: "Price:$300",
      button: "View Details",
    doc:"word files/Kingston NV2 PCIe 4.docx"
    },
    {
      id: 6,
      title: "Kingston XS1000 1TB External Solid State Drive SSD ",
      img: "products images/kingston/prod 19.jpg",
      desc: "Compact and fast 1TB external SSD designed for portability and reliable performance.",
      price: "Price:$75",
      button: "View Details",
    doc:"word files/Kingston XS1000 1TB External Solid State Drive SSD.docx"
    }
]

var row = document.getElementById("kcards")

for (var i = 0; i < data.length; i++) {
  row.innerHTML += `
<div class="custom-card col-sm-6 col-md-4 col-lg-3 col-xl-3 m-2 rounded-3" style="width: 15rem; height=30rem">
      <img src="${data[i].img}" class="card-img" alt="...">
      <div class="card-body">
        <h5 class="card-title text-truncate-2">${data[i].title}</h5>          
      <p class="card-desc text-truncate-2">${data[i].desc}</p>
      <p class="card-price">${data[i].price}</p>
      <div class="card-buttons">
        <a href="kingstondetail.html?id=${i}" class="btn btn-cart ms-5">${data[i].button}</a> 
      </div>
      </div>
    </div> `
}