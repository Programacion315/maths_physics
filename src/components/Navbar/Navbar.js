import React, { useState } from "react";

import {
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarToggler,
  CDropdownItem,
  CDropdownDivider,
  CDropdownMenu,
  CDropdownToggle,
  CDropdown,
  CNavLink,
  CNavItem,
  CNavbarNav,
  CCollapse,
} from "@coreui/react";

import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar expand="lg" colorScheme="light" className="bg-light">
      <CContainer fluid>
      <CNavbarBrand href="#">
                <img src="#"/>
      </CNavbarBrand>

        <CNavbarToggler
          aria-label="Toogle navigation"
          aria-aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />

        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#">Home</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Who I am?</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle>Maths</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Arithmetic</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Algebra</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Algebra</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Geometry</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Calculus</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};
