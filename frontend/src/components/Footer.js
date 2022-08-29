import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../components/Footer.css";

const Footer = () => {
  return (
    <MDBFooter className="footer-text text-center text-lg-start">
      <section>
        <div className="footer text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h4
                className="fw-bold mb-4"
                style={{
                  fontWeight: "bold",
                }}
              >
                Contact Us
              </h4>
              <div className="text-1">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia accusantium quaerat veritatis.
                </p>
                <p>
                  <MDBIcon icon="map-marked-alt" className="me-2" /> Lampung,
                  Indonesia - 34385
                </p>
                <p>
                  <MDBIcon far icon="envelope" className="me-3" />{" "}
                  hexagon-shop@example.com
                </p>
                <p>
                  <MDBIcon fas icon="mobile-alt" className="me-3" /> +62 812 345
                  67890
                </p>
                <p>
                  <MDBIcon far icon="clock" className="me-3" /> Mon - Sat
                  (10:00am - 07:00pm)
                </p>
              </div>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h4
                className="fw-bold mb-4"
                style={{
                  fontWeight: "bold",
                }}
              >
                <MDBIcon className="me-3" />
                Information
              </h4>
              <div className="text-1">
                <p>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    About Us
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Delivery Information
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Orders
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Returns
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Site Map
                  </a>
                </p>
              </div>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h4
                className="fw-bold mb-4"
                style={{
                  fontWeight: "bold",
                }}
              >
                My Account
              </h4>
              <div className="text-1">
                <p>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Address
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Order History
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Wish List
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Setting
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    My Catalog
                  </a>
                </p>
              </div>
            </MDBCol>
            <MDBCol md="6" lg="4" xl="3" className="mx-auto mb-4">
              <h4
                className="fw-bold mb-4"
                style={{
                  fontWeight: "bold",
                }}
              >
                Newsletter
              </h4>
              <div className="text-1">
                <p style={{ color: "white" }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia accusantium quaerat veritatis.
                </p>
                <form action="#">
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email Address ..."
                      aria-label="Email Address ..."
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="dana btn btn-primary"
                      id="button-addon2"
                      type="button"
                    >
                      {" "}
                      Subscribe
                    </button>
                  </div>
                </form>{" "}
                <br />
                <p style={{ color: "white" }}>Follow us on social media</p>
              </div>
              <>
                <MDBBtn className="btn1 m-1" href="#">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn className="btn2 m-1" href="#">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn className="btn3 m-1" href="#">
                  <MDBIcon fab icon="instagram" />
                </MDBBtn>

                <MDBBtn className="btn4 m-1" href="#">
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>

                <MDBBtn className="btn5 m-1" href="#">
                  <MDBIcon fab icon="whatsapp" />
                </MDBBtn>
              </>
            </MDBCol>
          </MDBRow>
        </div>
      </section>
      <MDBContainer className="year text-center p-4" style={{ color: "white" }}>
        Copyright &copy; 2022{" "}
        <a className="fw-bold" href="https://mdbootstrap.com/">
          Shinsegae Inc
        </a>{" "}
        . All Rights Reserved.
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
