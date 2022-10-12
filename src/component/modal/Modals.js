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
                      <a href="/A1A" state={'1A'} className="btn btn-primary btn-sm"> 1A </a>
                    </td>
                    <td>
                      <a href="/A1B" state={'1B'} className="btn btn-primary btn-sm"> 1B </a>
                    </td>
                    <td>
                      <a href="/A1C" state={'1C'} className="btn btn-primary btn-sm"> 1C </a>
                    </td>
                    <td>
                      <a href="/A1D" state={'1D'} className="btn btn-primary btn-sm"> 1D </a>
                    </td>
                    <td>
                      <a href="/A1E" state={'1E'} className="btn btn-primary btn-sm"> 1E </a>
                    </td>
                    <td>
                      <a href="/A1F" state={'1F'} className="btn btn-primary btn-sm"> 1F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/A2A" state={'2A'} className="btn btn-primary btn-sm"> 2A </a>
                    </td>
                    <td>
                      <a href="/A2B" state={'2B'} className="btn btn-primary btn-sm"> 2B </a>
                    </td>
                    <td>
                      <a href="/A2C" state={'2C'} className="btn btn-primary btn-sm"> 2C </a>
                    </td>
                    <td>
                      <a href="/A2D" state={'2D'} className="btn btn-primary btn-sm"> 2D </a>
                    </td>
                    <td>
                      <a href="/A2E" state={'2E'} className="btn btn-primary btn-sm"> 2E </a>
                    </td>
                    <td>
                      <a href="/A2F" state={'2F'} className="btn btn-primary btn-sm"> 2F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/A3A" state={'3A'} className="btn btn-primary btn-sm"> 3A </a>
                    </td>
                    <td>
                      <a href="/A3B" state={'3B'} className="btn btn-primary btn-sm"> 3B </a>
                    </td>
                    <td>
                      <a href="/A3C" state={'3C'} className="btn btn-primary btn-sm"> 3C </a>
                    </td>
                    <td>
                      <a href="/A3D" state={'3D'} className="btn btn-primary btn-sm"> 3D </a>
                    </td>
                    <td>
                      <a href="/A3E" state={'3E'} className="btn btn-primary btn-sm"> 3E </a>
                    </td>
                    <td>
                      <a href="/A3F" state={'3F'} className="btn btn-primary btn-sm"> 3F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/A4A" state={'4A'} className="btn btn-primary btn-sm"> 4A </a>
                    </td>
                    <td>
                      <a href="/A4B" state={'1B'} className="btn btn-primary btn-sm"> 4B </a>
                    </td>
                    <td>
                      <a href="/A4C" state={'1B'} className="btn btn-primary btn-sm"> 4C </a>
                    </td>
                    <td>
                      <a href="/A4D" state={'1B'} className="btn btn-primary btn-sm"> 4D </a>
                    </td>
                    <td>
                      <a href="/A4E" state={'1B'} className="btn btn-primary btn-sm"> 4E </a>
                    </td>
                    <td>
                      <a href="/A4F" state={'1B'} className="btn btn-primary btn-sm"> 4F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/A5A" state={'5A'} className="btn btn-primary btn-sm"> 5A </a>
                    </td>
                    <td>
                      <a href="/A5B" state={'5B'} className="btn btn-primary btn-sm"> 5B </a>
                    </td>
                    <td>
                      <a href="/A5C" state={'5C'} className="btn btn-primary btn-sm"> 5C </a>
                    </td>
                    <td>
                      <a href="/A5D" state={'5D'} className="btn btn-primary btn-sm"> 5D </a>
                    </td>
                    <td>
                      <a href="/A5E" state={'5E'} className="btn btn-primary btn-sm"> 5E </a>
                    </td>
                    <td>
                      <a href="/A5F" state={'5F'} className="btn btn-primary btn-sm"> 5F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/A6A" state={'6A'} className="btn btn-primary btn-sm"> 6A </a>
                    </td>
                    <td>
                      <a href="/A6B" state={'6B'} className="btn btn-primary btn-sm"> 6B </a>
                    </td>
                    <td>
                      <a href="/A6C" state={'6C'} className="btn btn-primary btn-sm"> 6C </a>
                    </td>
                    <td>
                      <a href="/A6D" state={'6D'} className="btn btn-primary btn-sm"> 6D </a>
                    </td>
                    <td>
                      <a href="/A6E" state={'6E'} className="btn btn-primary btn-sm"> 6E </a>
                    </td>
                    <td>
                      <a href="/A6F" state={'6F'} className="btn btn-primary btn-sm"> 6F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/A7A" state={'7A'} className="btn btn-primary btn-sm"> 7A </a>
                    </td>
                    <td>
                      <a href="/A7B" state={'7B'} className="btn btn-primary btn-sm"> 7B </a>
                    </td>
                    <td>
                      <a href="/A7C" state={'7C'} className="btn btn-primary btn-sm"> 7C </a>
                    </td>
                    <td>
                      <a href="/A7D" state={'7D'} className="btn btn-primary btn-sm"> 7D </a>
                    </td>
                    <td>
                      <a href="/A7E" state={'7E'} className="btn btn-primary btn-sm"> 7E </a>
                    </td>
                    <td>
                      <a href="/A7F" state={'7F'} className="btn btn-primary btn-sm"> 7F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/A8A" state={'8A'} className="btn btn-primary btn-sm"> 8A </a>
                    </td>
                    <td>
                      <a href="/A8B" state={'8B'} className="btn btn-primary btn-sm"> 8B </a>
                    </td>
                    <td>
                      <a href="/A8C" state={'8C'} className="btn btn-primary btn-sm"> 8C </a>
                    </td>
                    <td>
                      <a href="/A8D" state={'8D'} className="btn btn-primary btn-sm"> 8D </a>
                    </td>
                    <td>
                      <a href="/A8E" state={'8E'} className="btn btn-primary btn-sm"> 8E </a>
                    </td>
                    <td>
                      <a href="/A8F" state={'8F'} className="btn btn-primary btn-sm"> 8F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/A9A" state={'9A'} className="btn btn-primary btn-sm"> 9A </a>
                    </td>
                    <td>
                      <a href="/A9B" state={'9B'} className="btn btn-primary btn-sm"> 9B </a>
                    </td>
                    <td>
                      <a href="/A9C" state={'9C'} className="btn btn-primary btn-sm"> 9C </a>
                    </td>
                    <td>
                      <a href="/A9D" state={'9D'} className="btn btn-primary btn-sm"> 9D </a>
                    </td>
                    <td>
                      <a href="/A9E" state={'9E'} className="btn btn-primary btn-sm"> 9E </a>
                    </td>
                    <td>
                      <a href="/A9F" state={'9F'} className="btn btn-primary btn-sm"> 9F </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/A10A" state={'10A'} className="btn fsm  btn-primary btn-sm"> 10A </a>
                    </td>
                    <td>
                      <a href="/A10B" state={'10B'} className="btn fsm btn-primary btn-sm"> 10B </a>
                    </td>
                    <td>
                      <a href="/A10C" state={'10C'} className="btn fsm btn-primary btn-sm"> 10C </a>
                    </td>
                    <td>
                      <a href="/A10D" state={'10D'} className="btn fsm btn-primary btn-sm"> 10D </a>
                    </td>
                    <td>
                      <a href="/A10E" state={'10E'} className="btn fsm btn-primary btn-sm"> 10E </a>
                    </td>
                    <td>
                      <a href="/A10F" state={'10F'} className="btn fsm btn-primary btn-sm"> 10F </a>
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
                      <a href="/B1A" state={'1A'} className="btn btn-primary btn-sm"> 1A </a>
                    </td>
                    <td>
                      <a href="/B1B" state={'1B'} className="btn btn-primary btn-sm"> 1B </a>
                    </td>
                    <td>
                      <a href="/B1C" state={'1C'} className="btn btn-primary btn-sm"> 1C </a>
                    </td>
                    <td>
                      <a href="/B1D" state={'1D'} className="btn btn-primary btn-sm"> 1D </a>
                    </td>
                    <td>
                      <a href="/B1E" state={'1E'} className="btn btn-primary btn-sm"> 1E </a>
                    </td>
                    <td>
                      <a href="/B1F" state={'1F'} className="btn btn-primary btn-sm"> 1F </a>
                    </td>
                    <td>
                      <a href="/B1G" state={'1D'} className="btn btn-primary btn-sm"> 1G </a>
                    </td>
                    <td>
                      <a href="/B1H" state={'1E'} className="btn btn-primary btn-sm"> 1H </a>
                    </td>
                    <td>
                      <a href="/B1I" state={'1F'} className="btn btn-primary btn-sm"> 1I </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/B2A" state={'2A'} className="btn btn-primary btn-sm"> 2A </a>
                    </td>
                    <td>
                      <a href="/B2B" state={'2B'} className="btn btn-primary btn-sm"> 2B </a>
                    </td>
                    <td>
                      <a href="/B2C" state={'2C'} className="btn btn-primary btn-sm"> 2C </a>
                    </td>
                    <td>
                      <a href="/B2D" state={'2D'} className="btn btn-primary btn-sm"> 2D </a>
                    </td>
                    <td>
                      <a href="/B2E" state={'2E'} className="btn btn-primary btn-sm"> 2E </a>
                    </td>
                    <td>
                      <a href="/B2F" state={'2F'} className="btn btn-primary btn-sm"> 2F </a>
                    </td>
                    <td>
                      <a href="/B2G" state={'1D'} className="btn btn-primary btn-sm"> 2G </a>
                    </td>
                    <td>
                      <a href="/B2H" state={'1E'} className="btn btn-primary btn-sm"> 2H </a>
                    </td>
                    <td>
                      <a href="/B2I" state={'1F'} className="btn btn-primary btn-sm"> 2I </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/B3A" state={'3A'} className="btn btn-primary btn-sm"> 3A </a>
                    </td>
                    <td>
                      <a href="/B3B" state={'3B'} className="btn btn-primary btn-sm"> 3B </a>
                    </td>
                    <td>
                      <a href="/B3C" state={'3C'} className="btn btn-primary btn-sm"> 3C </a>
                    </td>
                    <td>
                      <a href="/B3D" state={'3D'} className="btn btn-primary btn-sm"> 3D </a>
                    </td>
                    <td>
                      <a href="/B3E" state={'3E'} className="btn btn-primary btn-sm"> 3E </a>
                    </td>
                    <td>
                      <a href="/B3F" state={'3F'} className="btn btn-primary btn-sm"> 3F </a>
                    </td>
                    <td>
                      <a href="/B3G" state={'1D'} className="btn btn-primary btn-sm"> 3G </a>
                    </td>
                    <td>
                      <a href="/B3H" state={'1E'} className="btn btn-primary btn-sm"> 3H </a>
                    </td>
                    <td>
                      <a href="/B3I" state={'1F'} className="btn btn-primary btn-sm"> 3I </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/B4A" state={'4A'} className="btn btn-primary btn-sm"> 4A </a>
                    </td>
                    <td>
                      <a href="/B4B" state={'1B'} className="btn btn-primary btn-sm"> 4B </a>
                    </td>
                    <td>
                      <a href="/B4C" state={'1B'} className="btn btn-primary btn-sm"> 4C </a>
                    </td>
                    <td>
                      <a href="/B4D" state={'1B'} className="btn btn-primary btn-sm"> 4D </a>
                    </td>
                    <td>
                      <a href="/B4E" state={'1B'} className="btn btn-primary btn-sm"> 4E </a>
                    </td>
                    <td>
                      <a href="/B4F" state={'1B'} className="btn btn-primary btn-sm"> 4F </a>
                    </td>
                    <td>
                      <a href="/B4G" state={'1D'} className="btn btn-primary btn-sm"> 4G </a>
                    </td>
                    <td>
                      <a href="/B4H" state={'1E'} className="btn btn-primary btn-sm"> 4H </a>
                    </td>
                    <td>
                      <a href="/B4I" state={'1F'} className="btn btn-primary btn-sm"> 4I </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/B5A" state={'5A'} className="btn btn-primary btn-sm"> 5A </a>
                    </td>
                    <td>
                      <a href="/B5B" state={'5B'} className="btn btn-primary btn-sm"> 5B </a>
                    </td>
                    <td>
                      <a href="/B5C" state={'5C'} className="btn btn-primary btn-sm"> 5C </a>
                    </td>
                    <td>
                      <a href="/B5D" state={'5D'} className="btn btn-primary btn-sm"> 5D </a>
                    </td>
                    <td>
                      <a href="/B5E" state={'5E'} className="btn btn-primary btn-sm"> 5E </a>
                    </td>
                    <td>
                      <a href="/B5F" state={'5F'} className="btn btn-primary btn-sm"> 5F </a>
                    </td>
                    <td>
                      <a href="/B5G" state={'1D'} className="btn btn-primary btn-sm"> 5G </a>
                    </td>
                    <td>
                      <a href="/B5H" state={'1E'} className="btn btn-primary btn-sm"> B5 </a>
                    </td>
                    <td>
                      <a href="/B5I" state={'1F'} className="btn btn-primary btn-sm"> 5I </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/B6A" state={'6A'} className="btn btn-primary btn-sm"> 6A </a>
                    </td>
                    <td>
                      <a href="/B6B" state={'6B'} className="btn btn-primary btn-sm"> 6B </a>
                    </td>
                    <td>
                      <a href="/B6C" state={'6C'} className="btn btn-primary btn-sm"> 6C </a>
                    </td>
                    <td>
                      <a href="/B6D" state={'6D'} className="btn btn-primary btn-sm"> 6D </a>
                    </td>
                    <td>
                      <a href="/B6E" state={'6E'} className="btn btn-primary btn-sm"> 6E </a>
                    </td>
                    <td>
                      <a href="/B6F" state={'6F'} className="btn btn-primary btn-sm"> 6F </a>
                    </td>
                    <td>
                      <a href="/B6G" state={'1D'} className="btn btn-primary btn-sm"> 6G </a>
                    </td>
                    <td>
                      <a href="/B6H" state={'1E'} className="btn btn-primary btn-sm"> 6H </a>
                    </td>
                    <td>
                      <a href="/B6I" state={'1F'} className="btn btn-primary btn-sm"> 6I </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/B7A" state={'7A'} className="btn btn-primary btn-sm"> 7A </a>
                    </td>
                    <td>
                      <a href="/B7B" state={'7B'} className="btn btn-primary btn-sm"> 7B </a>
                    </td>
                    <td>
                      <a href="/B7C" state={'7C'} className="btn btn-primary btn-sm"> 7C </a>
                    </td>
                    <td>
                      <a href="/B7D" state={'7D'} className="btn btn-primary btn-sm"> 7D </a>
                    </td>
                    <td>
                      <a href="/B7E" state={'7E'} className="btn btn-primary btn-sm"> 7E </a>
                    </td>
                    <td>
                      <a href="/B7F" state={'7F'} className="btn btn-primary btn-sm"> 7F </a>
                    </td>
                    <td>
                      <a href="/B7G" state={'1D'} className="btn btn-primary btn-sm"> 7G </a>
                    </td>
                    <td>
                      <a href="/B7H" state={'1E'} className="btn btn-primary btn-sm"> 7H </a>
                    </td>
                    <td>
                      <a href="/B7I" state={'1F'} className="btn btn-primary btn-sm"> 7I </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/B8A" state={'8A'} className="btn btn-primary btn-sm"> 8A </a>
                    </td>
                    <td>
                      <a href="/B8B" state={'8B'} className="btn btn-primary btn-sm"> 8B </a>
                    </td>
                    <td>
                      <a href="/B8C" state={'8C'} className="btn btn-primary btn-sm"> 8C </a>
                    </td>
                    <td>
                      <a href="/B8D" state={'8D'} className="btn btn-primary btn-sm"> 8D </a>
                    </td>
                    <td>
                      <a href="/B8E" state={'8E'} className="btn btn-primary btn-sm"> 8E </a>
                    </td>
                    <td>
                      <a href="/B8F" state={'8F'} className="btn btn-primary btn-sm"> 8F </a>
                    </td>
                    <td>
                      <a href="/B8G" state={'1D'} className="btn btn-primary btn-sm"> 8G </a>
                    </td>
                    <td>
                      <a href="/B8H" state={'1E'} className="btn btn-primary btn-sm"> 8H </a>
                    </td>
                    <td>
                      <a href="/B8I" state={'1F'} className="btn btn-primary btn-sm"> 8I </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/B9A" state={'9A'} className="btn btn-primary btn-sm"> 9A </a>
                    </td>
                    <td>
                      <a href="/B9B" state={'9B'} className="btn btn-primary btn-sm"> 9B </a>
                    </td>
                    <td>
                      <a href="/B9C" state={'9C'} className="btn btn-primary btn-sm"> 9C </a>
                    </td>
                    <td>
                      <a href="/B9D" state={'9D'} className="btn btn-primary btn-sm"> 9D </a>
                    </td>
                    <td>
                      <a href="/B9E" state={'9E'} className="btn btn-primary btn-sm"> 9E </a>
                    </td>
                    <td>
                      <a href="/B9F" state={'9F'} className="btn btn-primary btn-sm"> 9F </a>
                    </td>
                    <td>
                      <a href="/B9G" state={'1D'} className="btn btn-primary btn-sm"> 9G </a>
                    </td>
                    <td>
                      <a href="/B9H" state={'1E'} className="btn btn-primary btn-sm"> 9H </a>
                    </td>
                    <td>
                      <a href="/B9I" state={'1F'} className="btn btn-primary btn-sm"> 9I </a>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <a href="/B10A" state={'10A'} className="btn fsm  btn-primary btn-sm"> 10A </a>
                    </td>
                    <td>
                      <a href="/B10B" state={'10B'} className="btn fsm btn-primary btn-sm"> 10B </a>
                    </td>
                    <td>
                      <a href="/B10C" state={'10C'} className="btn fsm btn-primary btn-sm"> 10C </a>
                    </td>
                    <td>
                      <a href="/B10D" state={'10D'} className="btn fsm btn-primary btn-sm"> 10D </a>
                    </td>
                    <td>
                      <a href="/B10E" state={'10E'} className="btn fsm btn-primary btn-sm"> 10E </a>
                    </td>
                    <td>
                      <a href="/B10F" state={'10F'} className="btn fsm btn-primary btn-sm"> 10F </a>
                    </td>
                    <td>
                      <a href="/B10G" state={'1D'} className="btn btn-primary btn-sm"> 10G </a>
                    </td>
                    <td>
                      <a href="/B10H" state={'1E'} className="btn btn-primary btn-sm"> 10H </a>
                    </td>
                    <td>
                      <a href="/B10I" state={'1F'} className="btn btn-primary btn-sm"> 10I </a>
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