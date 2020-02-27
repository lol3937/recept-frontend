/**
 * Data från backend
 */
export async function HämtaData(){
    let result = await fetch("/Receptslutproj/resources/recepts/")

    if(result.ok)
    {
        const data = await result.json();

        return data;
    }
}


export async function postReceptData(data){
    fetch("/Receptslutproj/resources/recept",{
        method: "POST",
        headers:{
            'Authorization': basicAuth,
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(data)
    })

}


export async function deleteReceptData(id){
    fetch("/Receptslutproj/resources/recept?id="+id,{
        method: "DELETE",
        headers:{
            'Authorization': basicAuth,
        "Content-Type" : "application/json"
    }
    })

}

/*export async function FechProtectedData(authString, url, method) {
    const res = await fetch(url, {
      method: method,
      headers: {
        'Authorization': authString
      }
    });

  if(res.status === 401){
    throw "Fel Lösen/anv"
  }
  basicAuth = authString;
    const data = await res.json();
    return data;
}

let basicAuth = "";*/