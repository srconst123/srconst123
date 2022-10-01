import React, {useState} from "react";
import Modal1 from 'react-modal';



const bookModal = ({ closemodal }) =>{
    

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
      }
    
      
    
      function closeModal() {
        setIsOpen(false);
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

    return(
        <>
        <div className="text-center">
            <div >
                
                <button onClick={openModal} className="brochure-button btn btn-lg btn-outline-primary form-group col ">Unit Selector</button>
            </div>
            
                
        <Modal1
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel=" Modal"
        >   
        <div className="modal-header">
            <h2 >Choose Your Apartment</h2>
            <button className="btn" onClick={closeModal}>&times;</button>
        </div>
        <div className="modal-body">
            <div>
                <h5>BLOCK A</h5>
                <table className="table">
  
  <tbody>
    <tr>
      
      <td><a className="btn btn-primary" href="/unitDetail">1A</a></td>
      <td><a className="btn btn-primary">1B</a></td>
      <td><a className="btn btn-primary">1C</a></td>
      <td><a className="btn btn-primary">1D</a></td>
      <td><a className="btn btn-primary">1E</a></td>
      <td><a className="btn btn-primary">1F</a></td>
    </tr>
    <tr>
        <td><a className="btn btn-primary">2A</a></td>
        <td><a className="btn btn-primary">2B</a></td>
        <td><a className="btn btn-primary">2C</a></td>
        <td><a className="btn btn-primary">2D</a></td>
        <td><a className="btn btn-primary">2E</a></td>
        <td><a className="btn btn-primary">2F</a></td>
    </tr>
    
    
    
  </tbody>
</table>
            </div>
        </div>
            
      </Modal1>
    </div>
    <div className="btn"></div>
        </>
    )
}
export default bookModal