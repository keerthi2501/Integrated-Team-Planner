import React, { useState } from 'react';
import Modal from 'react-modal';

const Table = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [tableData, setTableData] = useState([
    {
      associateName: "Rajiv Madassery",
      w3id: "rajiv@ibm.com",
      managerName: "",
      role: "Manager",
      location: "Bangalore",
    }, 
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setModalIsOpen(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Process the form data or update the state as needed
    console.log(selectedRow);
    setModalIsOpen(false)
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>w3ID</th>
            <th>Mang</th>
            <th>ROLE</th>
            <th>Loc</th>
          </tr> 
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr>
              <td>{row.associateName}</td>
              <td>{row.w3id}</td>
              <td>{row.managerName}</td>
              <td>{row.role}</td>
              <td>{row.location}</td>
              <td>
                <button onClick={() => handleEditClick(row)}>Edit</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        // contentLabel="Form Modal"
        // className='form-style'
        style={{
          content: {
            width: '25%',
            height: '30%',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
            textAlign:'center'
          },
        }}
      >
      {selectedRow && (
          <form onSubmit={handleFormSubmit}>
            <h2>Edit Details</h2>
              <input
              style={{
                padding:'7px',
                boxSizing:'border-box',
                outline:'none',
                display:'block',
                border: 'none',
                borderBottom:'1px solid #ddd',
                 background: 'transparent',
                margine:'10px',
                font:'16px Arial, Helvetica, sans-serif',
                height:'20px',
              }}  
                type="text"
                name="associateName"
                value={selectedRow.associateName}
                onChange={(e) =>
                  setSelectedRow((prevRow) => ({
                    ...prevRow,
                    associateName: e.target.value,
                  }))
                }
              />
              <input
                type="text"
                name="w3id"
                value={selectedRow.w3id}
                style={{
                  padding:'7px',
                  boxSizing:'border-box',
                  outline:'none',
                  display:'block',
                  border: 'none',
                  borderBottom:'1px solid #ddd',
                   background: 'transparent',
                  margine:'10px',
                  font:'16px Arial, Helvetica, sans-serif',
                  height:'20px',
                }}  
                onChange={(e) =>
                  setSelectedRow((prevRow) => ({
                    ...prevRow,
                    w3id: e.target.value,
                  }))
                }
              />
              <input
                type="text"
                name="location"
                value={selectedRow.location}
                style={{
                  padding:'7px',
                  boxSizing:'border-box',
                  outline:'none',
                  display:'block',
                  border: 'none',
                  borderBottom:'1px solid #ddd',
                   background: 'transparent',
                  margine:'10px',
                  font:'16px Arial, Helvetica, sans-serif',
                  height:'20px',
                }}  
                onChange={(e) =>
                  setSelectedRow((prevRow) => ({
                    ...prevRow,
                    location: e.target.value,
                  }))
                }
              />

            <input type="submit" value="Update" />
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </form>
      )}
      </Modal>
    </div>
  );
};

export default Table;
