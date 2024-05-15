import { useEffect, useState } from "react"
import { getCheckouts } from "../../data/checkouts"
import { Table } from "reactstrap"

export const Checkouts=()=>{
    const[checkouts,setCheckouts]=useState([])

    useEffect(()=>{
        getCheckouts().then(data=>{
            setCheckouts(data)
        })
    },[])

    if(!checkouts)
    {
        return null
    }
    return <>
        <div className="container">
      <div className="sub-menu bg-light">
        <h4>Checkouts</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Material</th>
            <th>Patron</th>
            <th>CheckoutDate</th>
            <th>ReturnDate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {checkouts.map((co) =>{ 
            return (             
            <tr key={`Patrons-${co.id}`}>
              <th scope="row">{co.id}</th>
              <td>{co.material.materialName}</td>
              <td>{co.patron.firstName}</td>
              <td>{co.checkoutDate}</td>
              <td>{co.returnDate}</td>
              {/* <td>{p.isActive?<Button name={p.id} onClick={handleDeactivate}>Deactivate</Button>:'InActive'}</td>
              <td>
                <Link to={`${p.id}`}>Details</Link>
              </td> */}
            </tr>
          )})}
        </tbody>
      </Table>
    </div>
    </>
}