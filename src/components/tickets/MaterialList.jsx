import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { getMaterials, removeMaterial } from "../../data/materialsData";
import { Link, useNavigate } from "react-router-dom";

export default function MaterialList() {
  const [materials, setMaterials] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    getMaterials().then(setMaterials);
  }, []);

  const handleOutOfCirculation=(e)=>{
    removeMaterial(e.target.name).then(()=>{
      navigate("/materials")
    })
  }

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Materials</h4>
        <Link to="/materials/create">Add</Link>
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
          {materials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Link to={`${m.id}`}>Details</Link>
              </td>
              <td>
                <Button name={m.id} onClick={handleOutOfCirculation}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
