import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBInputGroup,
  MDBIcon,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" style={{ backgroundColor: "rgb(252, 192, 10)" }}>
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <a href="/" className="navbar-brand">
            <img
              src="https://bootstrapious.com/i/snippets/sn-nav-logo/logo.png"
              width="60px"
              alt="hexagon"
              className="d-inline-block align-middle mr-2"
              style={{
                marginBottom: "15px",
              }}
            />
            <span
              className="text-uppercase font-weight-bold"
              style={{
                color: "white",
                fontSize: "35px",
              }}
            >
              Hexagon
            </span>
          </a>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink to="/login">
                <i className="fas fa-envelope" id="nav" />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink to="/cart">
                <i className="fas fa-heart" id="nav" />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink to="/cart">
                <i className="fas fa-phone" id="nav" />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem></MDBNavbarItem>
          </MDBNavbarNav>
          <MDBInputGroup className="searchBar">
            <input
              id="searchQueryInput"
              type="text"
              name="searchQueryInput"
              placeholder="Search"
              value=""
            />
            <button
              id="searchQuerySubmit"
              type="submit"
              name="searchQuerySubmit"
            >
              <i class="fa fa-search" />
            </button>
          </MDBInputGroup>
          <MDBIcon className="side fas fa-user-astronaut" />
          <MDBIcon className="side fas fa-cart-plus" />
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
