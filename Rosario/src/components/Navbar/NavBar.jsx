import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const [showMenuPage, setShowMenuPage] = useState(false);

  useEffect(() => {
    return () => {
      setShowMenuPage(false);
    };
  }, []);

  return (
    <Nav>
      <Nav.Link
        as={Link} 
        to="/Home"
        className="links"
        onClick={() => setShowMenuPage(true)}
      >
        Home
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/Historia"
        className="links"
        onClick={() => setShowMenuPage(true)}
      >
        Historia
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/Hospedaje"
        className="links"
        onClick={() => setShowMenuPage(true)}
      >
        Hospedaje
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/Estudiantes"
        className="links"
        onClick={() => setShowMenuPage(true)}
      >
        Estudiantes
      </Nav.Link>
      <NavDropdown title="Actividades" id="nav-dropdown">
        <NavDropdown.Item
          as={Link} 
          to="/Arquitectura"
          className="links"
        >
          Rosario arquitectonico
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link} 
          to="/Tours"
          className="links"
        >
          Rosario tours
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link} 
          to="/Cultural"
          className="links"
        >
          Rosario cultural
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link} 
          to="/Deportivo"
          className="links"
        >
          Rosario deportivo
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link} 
          to="/Movilidad"
          className="links"
        >
          Rosario movilidad
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default NavBar;
