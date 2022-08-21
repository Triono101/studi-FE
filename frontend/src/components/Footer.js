import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter bgColor="white" className="text-center text-lg-start">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>
      <section>
        <MDBContainer className="ara text-center text-md-start mt-5">
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
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia accusantium quaerat veritatis.
              </p>
              <p>
                <MDBIcon icon="earth" className="me-2" /> Lampung, Indonesia -
                34385
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
                <MDBIcon far icon="clock" className="me-3" /> Mon - Sat (10:00am
                - 07:00pm)
              </p>
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
              <p>
                <a
                  href="#!"
                  style={{
                    textDecoration: "none",
                    color: "black",
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
                    color: "black",
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
                    color: "black",
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
                    color: "black",
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
                    color: "black",
                  }}
                >
                  Site Map
                </a>
              </p>
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
              <p>
                <a
                  href="#!"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Store Location
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{
                    textDecoration: "none",
                    color: "black",
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
                    color: "black",
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
                    color: "black",
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
                    color: "black",
                  }}
                >
                  Newsletter
                </a>
              </p>
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
              <p>
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
              <p>Follow us on social media</p>
              <>
                <MDBBtn
                  className="m-1"
                  style={{
                    backgroundColor: "#4267B2",
                    border: "none",
                    borderRadius: "50%",
                  }}
                  href="#"
                >
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn
                  className="m-1"
                  style={{
                    backgroundColor: "#1DA1F2",
                    border: "none",
                    borderRadius: "50%",
                  }}
                  href="#"
                >
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn
                  className="m-1"
                  style={{
                    backgroundColor: "#833AB4",
                    border: "none",
                    borderRadius: "50%",
                  }}
                  href="#"
                >
                  <MDBIcon fab icon="instagram" />
                </MDBBtn>

                <MDBBtn
                  className="m-1"
                  style={{
                    backgroundColor: "#0082ca",
                    border: "none",
                    borderRadius: "50%",
                  }}
                  href="#"
                >
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>

                <MDBBtn
                  className="m-1"
                  style={{
                    backgroundColor: "#25D366",
                    border: "none",
                    borderRadius: "50%",
                  }}
                  href="#"
                >
                  <MDBIcon fab icon="whatsapp" />
                </MDBBtn>
              </>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section>
        <MDBContainer
          className="text-center p-4"
          style={{ backgroundColor: "white" }}
        >
          Copyright &copy;{" "}
          <a
            className="fw-bold"
            href="https://mdbootstrap.com/"
            style={{
              textDecoration: "none",
              color: "#4267B2",
              fontWeight: "bold",
            }}
          >
            Hexagon
          </a>{" "}
          2022
        </MDBContainer>
      </section>
    </MDBFooter>
  );
};

export default Footer;
