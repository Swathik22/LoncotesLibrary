import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getPatronById, updatePatron } from "../../data/patronsData";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export const EditPatron=()=>{
    const[patron,setPatron]=useState(null)
    const[address,setAddress]=useState("")
    const[email,setEmail]=useState("")
    const{id}=useParams();
    const navigate=useNavigate()

    useEffect(()=>{
        getPatronById(id).then(data=>
            setPatron(data[0]))        
    },[])

    const handleInputChanges=(e)=>{
        if(e.target.name=="address")
        {
            setAddress(e.target.value);
            patron.address=e.target.value;
        }
        if(e.target.name=="email")
        {
            setEmail(e.target.value);
            patron.email=e.target.value;
        }
    }

    const submit = () => {
        const updatedPatron = {
            id:id,
            firstName:patron.firstName,
            lastName:patron.lastName,
            address:address,
            email:email,
            isActive:patron.isActive          
        };
        
        updatePatron(updatedPatron).then(() => {
          navigate("/patrons");
        });
      };
      if(!patron)
      {
        return null;
      }
    return <>
    <div className="container">
      <h4>Edit Patron</h4>
      <Form>      
        <FormGroup>
          <Label htmlFor="firstName">FirstName</Label>
          <Input
            type="text"
            name="firstName"
            value={patron.firstName}                        
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="patronName">LastName</Label>
          <Input
            type="text"
            name="patronName"
            value={patron.lastName}  
                      
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="patronName">Address</Label>
          <Input
            type="text"
            name="address"
            value={patron.address?patron.address:""} 
            onChange={handleInputChanges}          
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="patronName">Email</Label>
          <Input
            type="text"
            name="email"
            value={patron.email?patron.email:""}    
            onChange={handleInputChanges}         
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="patronName">IsActive</Label>
          <Input
            type="text"
            name="patronName"
            value={patron.isActive?"Active":"InActive"}  
                      
          />
        </FormGroup>
        
        <Button onClick={submit}>Update</Button>
      </Form>
    </div>
    </>
}