import { useEffect, useState } from "react"
import { getPatrons } from "../../data/patronsData"
import { Table } from "reactstrap"
import { Link } from "react-router-dom"

export const PatronList=()=>
{
    const[allPatrons,setAllPatrons]=useState([])

    useEffect(()=>{
        getPatrons().then(setAllPatrons)
    },[])

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
              <td>{p.isActive?'Active':'NotActive'}</td>
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