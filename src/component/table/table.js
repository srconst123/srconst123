import  {useState} from "react";
import './table.css';


const Table = () =>{

    const [category,setCategory] = useState([]);
    const getCategory = async ()=>{

        const res = await fetch('http://localhost:3001/api/get_apartment');
        const getdata = await res.json();
        setCategory(getdata);
        console.log(getdata);
    }

    return(
            <>
            <table className="table table-hover table-border text-center" >
  <thead>
    <tr>
      <th scope="col">Apartment</th>
      <th scope="col">Floor</th>
      <th scope="col">Block</th>
      <th scope="col">Area</th>
      <th scope="col">Rooms</th>
      <th scope="col">Status</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td scope="col">A1</td>
        <td scope="col">1</td>
        <td scope="col">A</td>
        <td scope="col">1200 sqft</td>
        <td scope="col">3</td>
        <td scope="col">Available</td>
        <td scope="col" ><a href="/flatEnquiry">BOOK NOW</a></td>
    </tr>
    <tr>
        <td scope="col">A1</td>
        <td scope="col">1</td>
        <td scope="col">A</td>
        <td scope="col">1200 sqft</td>
        <td scope="col">3</td>
        <td scope="col">Available</td>
        <td scope="col" ><a href="/flatEnquiry">BOOK NOW</a></td>
    </tr>

  </tbody>
</table>
            </>
    )
}
export default Table