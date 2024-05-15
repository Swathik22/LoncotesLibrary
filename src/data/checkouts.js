const _apiUrl="/api/checkouts";

export const getCheckouts=()=>{
    return fetch(_apiUrl).then((res)=>res.json());
}

export const createCheckout=(checkout)=>{
    return fetch(`${_apiUrl}`,{
        method:"POST",
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify(checkout),
      }).then((res) => res.json());
    
}

export const overdueCheckouts=()=>{
    return fetch(`_apiurl/overdue`).then((res)=>res.json());
}