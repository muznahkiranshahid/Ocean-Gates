document.getElementById(
  "header"
).innerHTML = `  
            <nav class="navbar navbar-expand-lg bg-primary-subtle" height="50">
                <a class="navbar-brand" href="index.html">
                    <img src="products images/LOGO-removebg-preview.png" alt="Logo" width="80" height="50"
                        class="d-inline-block ms-5">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item fs-5 fw-medium actve">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item fs-5 fw-medium ">
                            <a class="nav-link" href="product.html">Products</a>
                        </li>
                        <li class="nav-item fs-5 fw-medium">
                            <div class="dropdown">
                                <a class="btn dropdown-toggle nav-link fs-5" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">Brands</a>
                                <ul class="dropdown-menu brand-dropdown">
                                    <li><a class="dropdown-item" href="kingston.html">Kingston</a></li>
                                    <li><a class="dropdown-item" href="lacie.html">LaCie</a></li>
                                    <li><a class="dropdown-item" href="samsung.html">Samsung</a></li>
                                    <li><a class="dropdown-item" href="sandisk.html">Sandisk</a></li>
                                    <li><a class="dropdown-item" href="western-digital.html">Western Digital</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item fs-5 fw-medium ">
                            <a class="nav-link" href="comparison.html"> Comparison</a>
                        </li>
                        <li class="nav-item fs-5 fw-medium">
                            <a class="nav-link" href="aboutus.html">About us</a>
                        </li>
                         <li class="nav-item fs-5 fw-medium">
                            <a class="nav-link" href="contactus.html">Contact us</a>
                        </li>
                        <li class="nav-item fs-5 fw-medium">
                            <a class="nav-link" href="gallery.html">Gallery</a>
                        </li>
                        <li class="nav-item fs-5 fw-medium">
                            <a class="nav-link" href="FAQs.html">FAQs</a>
                        </li>
                        <li class="nav-item fs-5 fw-medium">
                            <a class="nav-link"href="sitemap.html">Site map</a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
    

// FOOTER
document.getElementById("footer").innerHTML = `<div class="pt-4 bg-primary-subtle container-fluid">
                <div class="container">
                    <div class="row">
                        <!-- Footer Links -->
                        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
                            <h5 class="h2 text">Quick Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="index.html" class=" text-dark footer-link">Home
                                    </a></li>
                                <li><a href="product.html" class=" text-dark footer-link">Products
                                    </a></li>
                                <li><a href="comparison.html" class=" text-dark footer-link">Comparison</a>
                                </li>
                                <li><a href="aboutus.html" class=" text-dark footer-link">About us</a>
                                </li>
                            </ul>
                        </div>
                        <!-- Footer Links -->
                        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <h5 class="h2 text">Costumer Care</h5>
                            <ul class="list-unstyled">
                                <li><a href="gallery.html" class=" text-dark footer-link">Gallery</a></li>
                                <li><a href="sitemap.html" class=" text-dark footer-link">Sitemap</a></li>
                                <li><a href="contactus.html" class=" text-dark footer-link">Contact Us</a>
                                </li>
                                <li><a href="FAQs.html" class=" text-dark footer-link">FAQs</a></li>
                            </ul>
                        </div>
                        <!-- Trust quotes -->
                        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <h5 class="h2 text">What Our Customers Say</h5>
                            <blockquote class="blockquote ">
                                <p class="mb-0 text-dark">"Ocean Gate's products have been game-changing for our business."</p>
                            </blockquote>
                        </div>

                        <!-- Logo and Copyright -->
                        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center text-md-start mb-3">
                            <img src="products images/LOGO-removebg-preview.png" alt="Ocean Gate Logo" class="mb-2"
                                style="max-width: 150px;">
                            <p class=" text-dark">&copy; 2024 Ocean Gate. All Rights Reserved.</p>
                        </div>
                        <!-- Social Media -->
                        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <h5 class="h2 text">Stay Updated</h5>
                            <div class="col text-center">
                                <a href="#" class="text-dark mx-2"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="text-dark mx-2"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="text-dark mx-2"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="text-dark mx-2"><i class="fab fa-linkedin"></i></a>
                                <a href="#" class="text-dark mx-2"><i class="fa-brands fa-youtube"></i></i></a>
                            </div>
                        </div>
                        <!-- About us section -->
                        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-3">
                            <h5 class="h2 text">About Ocean Gate</h5>
                            <p class=" text-dark">At Ocean Gate, we design cutting-edge hardware solutions for businesses of all sizes. Our
                                mission is to
                                innovate and simplify your technology needs.</p>
                        </div>
                    </div>
                </div>
            </div>`;
