import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">React Dasar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
