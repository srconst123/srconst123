import React, { useState } from "react";
import Modals from 'react-modal';
import Book from '../../pages/unitDetail/unitDetail';
import axios from "axios";
import { Link } from "react-router-dom";
import './Modal.css'


const Modal = ({ closemodal }) => {


  const [unitName, setunitName] = useState("");

  const handleClick = () => {


  }

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }
  const [isActive , setIsActive] = useState(false)
  const popup =() =>{
    setIsActive(!isActive)
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-10%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const dflex = {
    dflexb: {
      display: 'flex',
      width: '444px',
      margin: 'auto',
    }
  }



  return (
    <>
      <div className="text-center">
        <div className="dflex" >
          <a style={{marginBottom:'24px'}} className="btn btn-lg btn-secondary  " href="https://drive.google.com/file/d/1fQqzIPGCwlzdNc1HdCseH0ZtA7TtCjJ8/view">View Brochure</a>
          <button onClick={popup} className="brochure-button btn btn-lg btn-primary   ">Unit Selector</button>
        </div>

        { isActive && (
        <div className="cm"
        >  <div className="mdm">
          <div className="">
            <h2 >Choose Your Apartment</h2>
            <button className="btn" onClick={popup}>&times;</button>
          </div>
          <div className="modal-body">
            <div className="mrmodal">
              <h5>BLOCK A</h5>
              <table className="table">

                <tbody>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'1A'} className="btn btn-primary btn-sm"> 1A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 1B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1C'} className="btn btn-primary btn-sm"> 1C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1D'} className="btn btn-primary btn-sm"> 1D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1E'} className="btn btn-primary btn-sm"> 1E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1F'} className="btn btn-primary btn-sm"> 1F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'2A'} className="btn btn-primary btn-sm"> 2A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'2B'} className="btn btn-primary btn-sm"> 2B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'2C'} className="btn btn-primary btn-sm"> 2C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'2D'} className="btn btn-primary btn-sm"> 2D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'2E'} className="btn btn-primary btn-sm"> 2E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'2F'} className="btn btn-primary btn-sm"> 2F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'3A'} className="btn btn-primary btn-sm"> 3A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'3B'} className="btn btn-primary btn-sm"> 3B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'3C'} className="btn btn-primary btn-sm"> 3C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'3D'} className="btn btn-primary btn-sm"> 3D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'3E'} className="btn btn-primary btn-sm"> 3E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'3F'} className="btn btn-primary btn-sm"> 3F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'4A'} className="btn btn-primary btn-sm"> 4A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'5A'} className="btn btn-primary btn-sm"> 5A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'5B'} className="btn btn-primary btn-sm"> 5B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'5C'} className="btn btn-primary btn-sm"> 5C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'5D'} className="btn btn-primary btn-sm"> 5D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'5E'} className="btn btn-primary btn-sm"> 5E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'5F'} className="btn btn-primary btn-sm"> 5F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'6A'} className="btn btn-primary btn-sm"> 6A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'6B'} className="btn btn-primary btn-sm"> 6B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'6C'} className="btn btn-primary btn-sm"> 6C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'6D'} className="btn btn-primary btn-sm"> 6D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'6E'} className="btn btn-primary btn-sm"> 6E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'6F'} className="btn btn-primary btn-sm"> 6F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'7A'} className="btn btn-primary btn-sm"> 7A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'7B'} className="btn btn-primary btn-sm"> 7B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'7C'} className="btn btn-primary btn-sm"> 7C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'7D'} className="btn btn-primary btn-sm"> 7D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'7E'} className="btn btn-primary btn-sm"> 7E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'7F'} className="btn btn-primary btn-sm"> 7F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'8A'} className="btn btn-primary btn-sm"> 8A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'8B'} className="btn btn-primary btn-sm"> 8B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'8C'} className="btn btn-primary btn-sm"> 8C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'8D'} className="btn btn-primary btn-sm"> 8D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'8E'} className="btn btn-primary btn-sm"> 8E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'8F'} className="btn btn-primary btn-sm"> 8F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'9A'} className="btn btn-primary btn-sm"> 9A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'9B'} className="btn btn-primary btn-sm"> 9B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'9C'} className="btn btn-primary btn-sm"> 9C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'9D'} className="btn btn-primary btn-sm"> 9D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'9E'} className="btn btn-primary btn-sm"> 9E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'9F'} className="btn btn-primary btn-sm"> 9F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'10A'} className="btn fsm  btn-primary btn-sm"> 10A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'10B'} className="btn fsm btn-primary btn-sm"> 10B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'10C'} className="btn fsm btn-primary btn-sm"> 10C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'10D'} className="btn fsm btn-primary btn-sm"> 10D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'10E'} className="btn fsm btn-primary btn-sm"> 10E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'10F'} className="btn fsm btn-primary btn-sm"> 10F </Link>
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
                      <Link to="/unitDetail" state={'1A'} className="btn btn-primary btn-sm"> 1A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 1B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1C'} className="btn btn-primary btn-sm"> 1C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1D'} className="btn btn-primary btn-sm"> 1D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1E'} className="btn btn-primary btn-sm"> 1E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1F'} className="btn btn-primary btn-sm"> 1F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'2A'} className="btn btn-primary btn-sm"> 2A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'2B'} className="btn btn-primary btn-sm"> 2B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'2C'} className="btn btn-primary btn-sm"> 2C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'2D'} className="btn btn-primary btn-sm"> 2D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'2E'} className="btn btn-primary btn-sm"> 2E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'2F'} className="btn btn-primary btn-sm"> 2F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'3A'} className="btn btn-primary btn-sm"> 3A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'3B'} className="btn btn-primary btn-sm"> 3B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'3C'} className="btn btn-primary btn-sm"> 3C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'3D'} className="btn btn-primary btn-sm"> 3D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'3E'} className="btn btn-primary btn-sm"> 3E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'3F'} className="btn btn-primary btn-sm"> 3F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'4A'} className="btn btn-primary btn-sm"> 4A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'1B'} className="btn btn-primary btn-sm"> 4F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'5A'} className="btn btn-primary btn-sm"> 5A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'5B'} className="btn btn-primary btn-sm"> 5B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'5C'} className="btn btn-primary btn-sm"> 5C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'5D'} className="btn btn-primary btn-sm"> 5D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'5E'} className="btn btn-primary btn-sm"> 5E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'5F'} className="btn btn-primary btn-sm"> 5F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'6A'} className="btn btn-primary btn-sm"> 6A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'6B'} className="btn btn-primary btn-sm"> 6B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'6C'} className="btn btn-primary btn-sm"> 6C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'6D'} className="btn btn-primary btn-sm"> 6D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'6E'} className="btn btn-primary btn-sm"> 6E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'6F'} className="btn btn-primary btn-sm"> 6F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'7A'} className="btn btn-primary btn-sm"> 7A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'7B'} className="btn btn-primary btn-sm"> 7B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'7C'} className="btn btn-primary btn-sm"> 7C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'7D'} className="btn btn-primary btn-sm"> 7D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'7E'} className="btn btn-primary btn-sm"> 7E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'7F'} className="btn btn-primary btn-sm"> 7F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'8A'} className="btn btn-primary btn-sm"> 8A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'8B'} className="btn btn-primary btn-sm"> 8B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'8C'} className="btn btn-primary btn-sm"> 8C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'8D'} className="btn btn-primary btn-sm"> 8D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'8E'} className="btn btn-primary btn-sm"> 8E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'8F'} className="btn btn-primary btn-sm"> 8F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'9A'} className="btn btn-primary btn-sm"> 9A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'9B'} className="btn btn-primary btn-sm"> 9B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'9C'} className="btn btn-primary btn-sm"> 9C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'9D'} className="btn btn-primary btn-sm"> 9D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'9E'} className="btn btn-primary btn-sm"> 9E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'9F'} className="btn btn-primary btn-sm"> 9F </Link>
                    </td>



                  </tr>
                  <tr>


                    <td>
                      <Link to="/unitDetail" state={'10A'} className="btn fsm  btn-primary btn-sm"> 10A </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'10B'} className="btn fsm btn-primary btn-sm"> 10B </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'10C'} className="btn fsm btn-primary btn-sm"> 10C </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'10D'} className="btn fsm btn-primary btn-sm"> 10D </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'10E'} className="btn fsm btn-primary btn-sm"> 10E </Link>
                    </td>
                    <td>
                      <Link to="/unitDetail" state={'10F'} className="btn fsm btn-primary btn-sm"> 10F </Link>
                    </td>



                  </tr>


                </tbody>
              </table>
            </div>


          </div>
          </div>

        </div>)}
      </div>
      <div className="btn"></div>
    </>
  )
}
export default Modal