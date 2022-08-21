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

  // state = {
  //   searchText: "",
  // };

  // handleSearchInput = (event) => {
  //   this.setState({
  //     searchText: event.target.value,
  //   });
  // };

  // handleSearchSubmit = () => {
  //   if (this.state.searchText) {
  //     this.props.history.push({
  //       pathname: "/results",
  //       state: {
  //         searchText: this.state.searchText,
  //       },
  //     });
  //   } else {
  //     alert("Please enter some search text!");
  //   }
  // };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#fcc00a" }}
      >
        <button
          className="navbar1 navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <span className="my-2 my-sm-0 mx-2">
          <a href="wikipedia.com" className="navbar1">
            About Us
          </a>
        </span>
        <span className="my-2 my-sm-0 mx-2">
          <a href="wikipedia.com" className="navbar1">
            Contact
          </a>
        </span>
        <span className="navbar1 my-2 my-sm-0 mx-2">
          <a href="wikipedia.com" className="navbar1">
            Location
          </a>
        </span>
        <span className="my-2 my-sm-0 mx-2">
          <a href="wikipedia.com" className="navbar1">
            Delivery
          </a>
        </span>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <span className="navbar-nav ml-auto">
            <span className="my-2 my-sm-0 mx-2">
              <a href="wikipedia.com" className="navbar1">
                My Account
              </a>
            </span>
            <span className="my-2 my-sm-0 mx-2">
              <a href="wikipedia.com" className="navbar1">
                Site Map
              </a>
            </span>
            <span className="my-2 my-sm-0 mx-2">
              <a href="wikipedia.com" className="navbar1">
                History
              </a>
            </span>
            <span className="my-2 my-sm-0 mx-2">
              <a href="wikipedia.com" className="navbar1">
                Setting
              </a>
            </span>
          </span>
        </div>
      </nav>

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
              <span className="hex text-uppercase font-weight-bold">
                Shinsegae
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
                <MDBNavbarLink
                  to="/login"
                  className="fas fa-envelope"
                  id="nav"
                ></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  to="/cart"
                  className="fas fa-folder-open"
                  id="nav"
                ></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  to="/cart"
                  className="fas fa-coffee"
                  id="nav"
                ></MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBInputGroup className="searchBar">
              <input
                // onChange={this.handleSearchInput}
                // value={this.state.searchText}
                type="text"
                id="searchQueryInput"
                name="searchQueryInput"
                placeholder="Search"
              />
              <button
                // onClick={this.handleSearchSubmit}
                id="searchQuerySubmit"
                type="submit"
                name="searchQuerySubmit"
              >
                <i className="fa fa-search" />
              </button>
            </MDBInputGroup>
            <MDBCollapse navbar show={showBasic}>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                <MDBIcon className="side far fa-user" />
                <MDBIcon className="side fas fa-heart" />
                <MDBIcon className="side fas fa-shopping-basket" />
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Header;
