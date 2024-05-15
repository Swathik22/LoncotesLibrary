import { useEffect, useState } from "react"
import { deactivatePatron, getPatrons } from "../../data/patronsData"
import { Button, Table } from "reactstrap"
import { Link, useNavigate } from "react-router-dom"

export const PatronList=()=>
{
    const[allPatrons,setAllPatrons]=useState([])
    const navigate=useNavigate();

    useEffect(()=>{
        getPatrons().then(setAllPatrons)
    },[])

    const handleDeactivate=(e)=>{
        deactivatePatron(e.target.name).then(() => {
            navigate("/patrons")}
        )
    }
    return <>
   <div className="container">
      <div className="sub-menu bg-light">
        <h4>Patrons</h4>
        {/* <Link to="/materials/create">Add</Link> */}
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address</th>
            <th>Email</th>
            <th>IsActive</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allPatrons.map((p) =>{ 
            return (
             
            <tr key={`Patrons-${p.id}`}>
              <th scope="row">{p.id}</th>
              <td>{p.firstName}</td>
              <td>{p.lastName}</td>
              <td>{p.address}</td>
              <td>{p.email}</td>
              <td>{p.isActive?<Button name={p.id} onClick={handleDeactivate}>Deactivate</Button>:'InActive'}</td>
              <td>
                <Link to={`${p.id}`}>Details</Link>
              </td>
            </tr>
          )})}
        </tbody>
      </Table>
    </div>
 
    </>
}