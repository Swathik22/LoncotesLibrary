const _apiUrl = "/api/patrons";

export const getPatrons = () => {
  return fetch(_apiUrl).then((res) => res.json());
};

export const getPatronById=(id)=>{
    return fetch(`${_apiUrl}/${id}`).then((res)=>res.json());
}

export const updatePatron=(patron)=>{
    return fetch(`${_apiUrl}/${patron.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify(patron)
    }).then((res)=>{
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