/**
 * Data från backend
 */
let URL = "http://localhost:8080/Receptslutproj/resources/";

export async function getReceptData(){

    const result = await fetch(URL+"recept?id=1",{
        method: "GET",
        headers:{
          //  'Authorization': "Basic "
        }
    });

    return result.status === 200;
}


export async function postReceptData(data){
    fetch("/Receptslutproj/resources/recept",{
        method: "POST",
        headers:{
            'Authorization': "basic",
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(data)
    })

}


export async function deleteReceptData(id){
    fetch("/Receptslutproj/resources/recept?id="+id,{
        method: "DELETE",
        headers:{
            'Authorization': "Basic",
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