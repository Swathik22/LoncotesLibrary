import { useEffect, useState } from "react"
import { getAvailableMaterials } from "../../data/materialsData"
import { Table } from "reactstrap"
import { Link } from "react-router-dom"

export const AvailableMaterials=()=>{
    const[availableMaterials,setAvailableMaterials]=useState([])

    useEffect(()=>{
        getAvailableMaterials().then((data)=>{
            setAvailableMaterials(data);
        })
    },[])
    if(!availableMaterials)
    {
        return null;
    }
    return <>
<div className="container">
      <div className="sub-menu bg-light">
        <h4>Available Materials</h4>        
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {availableMaterials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td><Link to={`${m.id}`}>Checkout</Link></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
}