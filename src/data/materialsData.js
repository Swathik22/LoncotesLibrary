const _apiUrl = "/api/materials";

export const getMaterials = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getMaterial = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const createMaterial = (material) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  }).then((res) => res.json());
};

export const removeMaterial=(id)=>{
  return fetch(`${_apiUrl}/${id}/SetOutofCirculation`,{method:"POST"}).then(res=>{
    if(res.status==204)
    {
        return null;
    }
    else
    {
        return res.json();
    }
});
}

export const getAvailableMaterials=()=>{
  return fetch(`${_apiUrl}/available`).then((res)=>res.json());
}
