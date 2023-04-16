import React,{useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css'

  
const Cricket = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/data')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);
    return (
        <div className="Cricket"
        style={{
          display: 'flex',
          justifyContent: 'Left',
          alignItems: 'Left', 
          height: ''
        }}  
        >
        <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>NameOfEquipment</th>
          <th>PersonIssued</th>
          <th>PersonRoll_No</th>
        </tr>
      </thead>
      <tbody>
      {data.map(item => {
          if(item.Sport==="Cricket"){
            return(
          <tr key={item.ID}>
            <td>{item.ID}</td>
            <td>{item.NameOfEquipment}</td>
            <td>{item.PersonIssued}</td>
            <td>{item.PersonRoll_No}</td>
          </tr>
        );
        }
      })}
      </tbody>
    </table>
    
        </div>
      );
    };
    export default Cricket;