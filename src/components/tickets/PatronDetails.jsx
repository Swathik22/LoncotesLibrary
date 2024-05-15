import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getPatronById } from "../../data/patronsData";
import { Button, Table } from "reactstrap";

export const PatronDetails=()=>{
    const[patron,setPatron]=useState(null)
    const{id}=useParams();

    useEffect(()=>{
        getPatronById(id).then(data=>{
            setPatron(data[0])
           
        })       
    },[])

    if(!patron)
    {
        return null;
    }
    return <>
    <div className="container">  
      <Table>
        <tbody>
          <tr>
            <th scope="row">FirstName</th>
            <td>{patron.firstName}</td>
          </tr>
          <tr>
            <th scope="row">LastName</th>
            <td>{patron.lastName}</td>
          </tr>
          <tr>
            <th scope="row">Address</th>
            <td>{patron.address}</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>{patron.email}</td>
          </tr>
          <tr>
            <th scope="row">IsActive</th>
            <td>{patron.isActive?"Active":"In Active"}</td>
          </tr>          
          <tr>
            <td>
            <Link to={`/patrons/edit/${id}`}>Edit</Link>
            </td>
          </tr>          
        
        </tbody>
      </Table>
      <h5>Checkouts</h5>
      {patron.lateFeeCheckouts?.length ? (
        <Table>
          <thead>
            <tr>
              <th>Patron</th>
              <th>Checkout Date</th>
              <th>Return Date</th>
              <th>Late Fee</th>
            </tr>
          </thead>
          <tbody>
            {patron.lateFeeCheckouts.map((co) => (
              <tr key={`checkout-${co.id}`}>
                <td>
                  {patron.firstName} {patron.lastName}
                </td>
                <td>{co.checkoutDate?.split("T")[0]}</td>
                <td>{co.returnDate?.split("T")[0] || "Checked Out"}</td>
                <td>{co.lateFee || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No checkouts for this patron</p>
      )}
    </div>
    </>
}