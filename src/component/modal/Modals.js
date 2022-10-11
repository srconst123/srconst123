import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modals.css'

function Modals() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button href="https://drive.google.com/file/d/1fQqzIPGCwlzdNc1HdCseH0ZtA7TtCjJ8/view" className="me-2 btn-secondary ">
      View Brochure
      </Button>
      <Button onClick={() => setLgShow(true)}>Unit Selector</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Choose Your Apartment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>          <div className="modal-body">
            <div className="mrmodal">
              <h5>BLOCK A</h5>
              <table className="table">

                <tbody>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'1A'} className="btn btn-primary btn-sm"> 1A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 1B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1C'} className="btn btn-primary btn-sm"> 1C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1D'} className="btn btn-primary btn-sm"> 1D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1E'} className="btn btn-primary btn-sm"> 1E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1F'} className="btn btn-primary btn-sm"> 1F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'2A'} className="btn btn-primary btn-sm"> 2A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'2B'} className="btn btn-primary btn-sm"> 2B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'2C'} className="btn btn-primary btn-sm"> 2C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'2D'} className="btn btn-primary btn-sm"> 2D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'2E'} className="btn btn-primary btn-sm"> 2E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'2F'} className="btn btn-primary btn-sm"> 2F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'3A'} className="btn btn-primary btn-sm"> 3A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'3B'} className="btn btn-primary btn-sm"> 3B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'3C'} className="btn btn-primary btn-sm"> 3C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'3D'} className="btn btn-primary btn-sm"> 3D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'3E'} className="btn btn-primary btn-sm"> 3E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'3F'} className="btn btn-primary btn-sm"> 3F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'4A'} className="btn btn-primary btn-sm"> 4A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'5A'} className="btn btn-primary btn-sm"> 5A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'5B'} className="btn btn-primary btn-sm"> 5B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'5C'} className="btn btn-primary btn-sm"> 5C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'5D'} className="btn btn-primary btn-sm"> 5D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'5E'} className="btn btn-primary btn-sm"> 5E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'5F'} className="btn btn-primary btn-sm"> 5F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'6A'} className="btn btn-primary btn-sm"> 6A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'6B'} className="btn btn-primary btn-sm"> 6B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'6C'} className="btn btn-primary btn-sm"> 6C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'6D'} className="btn btn-primary btn-sm"> 6D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'6E'} className="btn btn-primary btn-sm"> 6E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'6F'} className="btn btn-primary btn-sm"> 6F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'7A'} className="btn btn-primary btn-sm"> 7A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'7B'} className="btn btn-primary btn-sm"> 7B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'7C'} className="btn btn-primary btn-sm"> 7C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'7D'} className="btn btn-primary btn-sm"> 7D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'7E'} className="btn btn-primary btn-sm"> 7E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'7F'} className="btn btn-primary btn-sm"> 7F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'8A'} className="btn btn-primary btn-sm"> 8A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'8B'} className="btn btn-primary btn-sm"> 8B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'8C'} className="btn btn-primary btn-sm"> 8C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'8D'} className="btn btn-primary btn-sm"> 8D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'8E'} className="btn btn-primary btn-sm"> 8E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'8F'} className="btn btn-primary btn-sm"> 8F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'9A'} className="btn btn-primary btn-sm"> 9A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'9B'} className="btn btn-primary btn-sm"> 9B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'9C'} className="btn btn-primary btn-sm"> 9C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'9D'} className="btn btn-primary btn-sm"> 9D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'9E'} className="btn btn-primary btn-sm"> 9E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'9F'} className="btn btn-primary btn-sm"> 9F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'10A'} className="btn fsm  btn-primary btn-sm"> 10A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'10B'} className="btn fsm btn-primary btn-sm"> 10B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'10C'} className="btn fsm btn-primary btn-sm"> 10C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'10D'} className="btn fsm btn-primary btn-sm"> 10D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'10E'} className="btn fsm btn-primary btn-sm"> 10E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'10F'} className="btn fsm btn-primary btn-sm"> 10F </a>
                    </td>



                  </tr>


                </tbody>
              </table>
            </div>
            <div className="mlmodal">
              <h5>BLOCK B</h5>
              <table className="table">

                <tbody>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'1A'} className="btn btn-primary btn-sm"> 1A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 1B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1C'} className="btn btn-primary btn-sm"> 1C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1D'} className="btn btn-primary btn-sm"> 1D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1E'} className="btn btn-primary btn-sm"> 1E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1F'} className="btn btn-primary btn-sm"> 1F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'2A'} className="btn btn-primary btn-sm"> 2A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'2B'} className="btn btn-primary btn-sm"> 2B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'2C'} className="btn btn-primary btn-sm"> 2C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'2D'} className="btn btn-primary btn-sm"> 2D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'2E'} className="btn btn-primary btn-sm"> 2E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'2F'} className="btn btn-primary btn-sm"> 2F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'3A'} className="btn btn-primary btn-sm"> 3A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'3B'} className="btn btn-primary btn-sm"> 3B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'3C'} className="btn btn-primary btn-sm"> 3C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'3D'} className="btn btn-primary btn-sm"> 3D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'3E'} className="btn btn-primary btn-sm"> 3E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'3F'} className="btn btn-primary btn-sm"> 3F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'4A'} className="btn btn-primary btn-sm"> 4A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'5A'} className="btn btn-primary btn-sm"> 5A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'5B'} className="btn btn-primary btn-sm"> 5B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'5C'} className="btn btn-primary btn-sm"> 5C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'5D'} className="btn btn-primary btn-sm"> 5D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'5E'} className="btn btn-primary btn-sm"> 5E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'5F'} className="btn btn-primary btn-sm"> 5F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'6A'} className="btn btn-primary btn-sm"> 6A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'6B'} className="btn btn-primary btn-sm"> 6B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'6C'} className="btn btn-primary btn-sm"> 6C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'6D'} className="btn btn-primary btn-sm"> 6D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'6E'} className="btn btn-primary btn-sm"> 6E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'6F'} className="btn btn-primary btn-sm"> 6F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'7A'} className="btn btn-primary btn-sm"> 7A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'7B'} className="btn btn-primary btn-sm"> 7B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'7C'} className="btn btn-primary btn-sm"> 7C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'7D'} className="btn btn-primary btn-sm"> 7D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'7E'} className="btn btn-primary btn-sm"> 7E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'7F'} className="btn btn-primary btn-sm"> 7F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'8A'} className="btn btn-primary btn-sm"> 8A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'8B'} className="btn btn-primary btn-sm"> 8B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'8C'} className="btn btn-primary btn-sm"> 8C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'8D'} className="btn btn-primary btn-sm"> 8D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'8E'} className="btn btn-primary btn-sm"> 8E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'8F'} className="btn btn-primary btn-sm"> 8F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'9A'} className="btn btn-primary btn-sm"> 9A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'9B'} className="btn btn-primary btn-sm"> 9B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'9C'} className="btn btn-primary btn-sm"> 9C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'9D'} className="btn btn-primary btn-sm"> 9D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'9E'} className="btn btn-primary btn-sm"> 9E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'9F'} className="btn btn-primary btn-sm"> 9F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/unitDetail" state={'10A'} className="btn fsm  btn-primary btn-sm"> 10A </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'10B'} className="btn fsm btn-primary btn-sm"> 10B </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'10C'} className="btn fsm btn-primary btn-sm"> 10C </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'10D'} className="btn fsm btn-primary btn-sm"> 10D </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'10E'} className="btn fsm btn-primary btn-sm"> 10E </a>
                    </td>
                    <td>
                      <a href="/unitDetail" state={'10F'} className="btn fsm btn-primary btn-sm"> 10F </a>
                    </td>



                  </tr>


                </tbody>
              </table>
            </div>


          </div></Modal.Body>
      </Modal>
    </>
  );
}

export default Modals