import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getMaterial } from "../../data/materialsData"
import { Button, Table } from "reactstrap"
import { createCheckout } from "../../data/checkouts"

export const MaterialCheckout=()=>{
    const[material,setMaterial]=useState(null)
    const[patronId,setPatronId]=useState(0)
    const{id}=useParams()
    const navigate=useNavigate();

    useEffect(()=>{
        getMaterial(id).then(data=>{
            setMaterial(data[0])
        })
    },[])

    const checkout=()=>{
        const checkoutObj={
            materialId:id,
            patronId:patronId
        }
        createCheckout(checkoutObj).then(()=>{
            navigate("/browse")
        })
    }

    if(!material)
    {
        return null;
    }
    return <>
    <div className="container">
      <h2>{material.materialName}</h2>
      <Table>
        <tbody>
          <tr>
            <th scope="row">Type</th>
            <td>{material.materialType.name}</td>
          </tr>
          <tr>
            <th scope="row">Genre</th>
            <td>{material.genre.name}</td>
          </tr>
          <tr>
          <th scope="row">Enter Patron Id</th>
          <td>
            <input 
                type="text" 
                onChange={(e)=>{
                    setPatronId(e.target.value)
                }}/></td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={checkout}>Submit</Button>
      </div>
    </>
}