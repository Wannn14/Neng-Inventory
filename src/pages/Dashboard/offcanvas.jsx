import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { Link } from "react-router-dom";
import "./dashboard.css";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        MENU
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MENU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="Off-menu mb-3">
          <div className="menu">
            <a href="./"> GUDANG </a>
          </div>
          <div className="menu">
            <a href="./"> PURCASHING </a>
          </div>
          <div className="menu">
            <a href="./"> PRODUKSI </a>
          </div>
          <div className="menu">
            <a href="./"> BARANG JADI </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
