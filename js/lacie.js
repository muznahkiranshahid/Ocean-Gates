var data = [
    {
      id: 1,
      title: "LaCie 4TB Rugged SSD PRO Thunderbolt 3 External SSD",
      img: "products images/LaCie/prod 13.jpg",
      desc: "A durable 4TB external SSD with Thunderbolt 3, designed for pro-level speed and rugged reliability.",
      price: "Price:$400",
      button: "View Details",
    doc:"word files/LaCie 4TB Rugged SSD PRO Thunderbolt 3 External SSD.docx"
    },
    {
      id: 2,
      title: "LaCie 10TB 1big Dock Thunderbolt 3 External Hard Drive",
      img: "products images/LaCie/prod 17.jpg",
      desc: "Powerful 10TB storage solution with docking capabilities for seamless data management.",
      price: "Price:$600",
      button: "View Details",
    doc:"word files/LaCie 10TB d2 Professional USB.docx"
    },
    {
      id: 3,
      title: "LaCie 2TB Mobile SSD Secure External Drive (Space Gray)",
      img: "products images/LaCie/prod 14.jpg",
      desc: "Secure and sleek 2TB portable SSD in Space Gray, offering fast performance.",
      price: "Price:$200",
      button: "View Details",
    doc:"word files/LaCie 2TB Mobile SSD Secure External Drive.docx"
    },
    {
      id: 4,
      title: "LaCie 10TB d2 Professional USB-C 3.2 Gen 2 External Hard Drive",
      img: "products images/LaCie/prod 15.jpg",
      desc: "Reliable 10TB external hard drive with USB-C 3.2 Gen 2 for professional-grade performance.",
      price: "Price:$300",
      button: "View Details",
    doc:"word files/LaCie 10TB d2 Professional USB.docx"
    },
    {
      id: 5,
      title: "LaCie 24TB d2 Professional USB-C 3.2 Gen 2 External Hard Drive",
      img: "products images/LaCie/prod 16.jpg",
      desc: "24TB external hard drive with USB-C 3.2 Gen 2 for professional storage and performance.",
      price: "Price:$250",
      button: "View Details",
    doc:"word files/LaCie 24TB d2 Professional USB.docx"
    },
    {
      id: 6,
      title: "LaCie 16TB 2big Dock 2-Bay Thunderbolt 3 RAID Array ",
      img: "products images/LaCie/prod 18.jpg",
      desc: "A 16TB 2-bay Thunderbolt 3 RAID array, providing high-capacity storage and fast data transfer.",
      price: "Price:$600",
      button: "View Details",
    doc:"word files/LaCie 16TB 2big Dock 2.docx"
    },
]

var row = document.getElementById("lccards")

for (var i = 0; i < data.length; i++) {
  row.innerHTML += `
<div class="custom-card col-sm-6 col-md-4 col-lg-3 col-xl-3 m-2 rounded-3" style="width: 15rem; height=30rem">
      <img src="${data[i].img}" class="card-img" alt="...">
      <div class="card-body">
        <h5 class="card-title text-truncate-2">${data[i].title}</h5>          
      <p class="card-desc text-truncate-2">${data[i].desc}</p>
      <p class="card-price">${data[i].price}</p>
      <div class="card-buttons">
        <a href="laciedetail.html?id=${i}" class="btn btn-cart ms-5">${data[i].button}</a> 
      </div>
      </div>
    </div> `
}