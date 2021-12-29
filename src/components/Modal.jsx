// import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function MeuModal({handleShow, show, handleClose, title, text, acao, variant, textBtn}) {
    
    return (
      <>  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{text}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant={variant} onClick={acao}>
              {textBtn}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }