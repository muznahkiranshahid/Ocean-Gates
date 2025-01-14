var data = [
    {
      id: 1,
      title: "WD Purple Surveillance Hard Drive - 1TB WD11PURZ 64MB Cache SATA",
      img: "products images/western digital/prod 26.jpg",
      desc: "A 1TB surveillance hard drive with 64MB cache, optimized for reliable 24/7 recording..",
      price: "Price:$550",
      button: "View Details",
    doc:"word files/WD Purple Surveillance Hard Drive.docx"
    },
    {
      id: 2,
      title: "WD Blue SN580 NVMe™ SSD 500GB WDS500 G3B0E PCIe Gen4 x4 M.2 2280 ",
      img: "products images/western digital/prod 27.jpg",
      desc: "High-speed 500GB NVMe SSD with PCIe Gen4 for fast storage and performance.",
      price: "Price:$500",
      button: "View Details",
    doc:"word files/WD Blue SN580 NVMe.docx"
    },
    {
      id: 3,
      title: "WD My Passport 1TB External USB 3.0 Portable Hard Drive - Black - WDBYVG0010BBK",
      img: "products images/western digital/prod 25.jpg",
      desc: "Portable 1TB USB 3.0 hard drive for reliable, fast and secure storage on the move.",
      price: "Price:$500",
      button: "View Details",
    doc:"word files/WD My Passport 1TB External USB 3.docx"
    },
    {
      id: 4,
      title: "WD Red Pro NAS Hard Drive - 2TB ",
      img: "products images/western digital/prod 29.jpg",
      desc: "Reliable 2TB NAS hard drive designed for high-performance and 24/7 operation.",
      price: "Price:$700",
      button: "View Details",
    doc:"word files/WD Red Pro NAS Hard Drive.docx"
    },
    {
      id: 5,
      title: "WD_BLACK C50 Storage Expansion Card for Xbox ",
      img: "products images/western digital/prod 30.webp",
      desc: "Seamless 1TB storage expansion for Xbox, offering fast load times and enhanced gaming performance.",
      price: "Price:$200",
      button: "View Details",
    doc:"word files/WD.docx"
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
]

var row = document.getElementById("wdcards")

for (var i = 0; i < data.length; i++) {
  row.innerHTML += `
<div class="custom-card col-sm-6 col-md-4 col-lg-3 col-xl-3 m-2 rounded-3" style="width: 15rem; height=30rem">
      <img src="${data[i].img}" class="card-img" alt="...">
      <div class="card-body">
        <h5 class="card-title text-truncate-2">${data[i].title}</h5>          
      <p class="card-desc text-truncate-2">${data[i].desc}</p>
      <p class="card-price">${data[i].price}</p>
      <div class="card-buttons">
        <a href="wddetail.html?id=${i}" class="btn btn-cart ms-5">${data[i].button}</a> 
      </div>
      </div>
    </div> `
}