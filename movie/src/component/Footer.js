import React from "react";
const Footer = () => {
  return (
    <div class="container-fluid px-0" style={{ margin: 0, padding: 0 }}>
      <footer class="text-center text-lg-start text-white" style={{ backgroundColor: "#1c2331" }}>
        <section class="d-flex justify-content-between p-4" style={{ backgroundColor: "#6351ce" }}>
          <div class="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Team Member</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>
                This website is the product of a group of Full stack web developers of the Re:coded Bootcamp                
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Farah Alsoqi</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>
                  <a href="https://www.linkedin.com/in/farah-alsoqi0/" class="text-white">
                    LinkedIn 
                  </a>
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/farah-alsoqi0/" class="text-white">
                    GitHub 
                  </a>
                </p>
                <p>
                <a href="#!" class="text-white">FarahManna97@gmail.com</a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Baraa Sidair</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                  <p>
                <a href="https://github.com/baraab" class="text-white">
                  GitHub 
                </a>
                </p>
                <p>
                  <a href="#!" class="text-white">Email</a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Ammar KolKo</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>
                <a href="https://www.linkedin.com/in/ammar-kolko-39755674/" class="text-white">
                    LinkedIn 
                </a>
                  </p>
                  <p>
                <a href="https://github.com/Ammar-coder87" class="text-white">
                    GitHub 
                </a>
                </p>
                <p>
                  <a href="#!" class="text-white">Email</a>
                </p>
              </div>

            </div>
          </div>
        </section>

        <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2023 Copyright: <a class="text-white" href="https://www.re-coded.com/">Re:Coded.com</a>
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;
