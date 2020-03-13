/**
 * Data från backend
 */
let URL = "http://localhost:8080/Receptslutproj/resources/";

export async function getReceptData() {

  const result = await fetch(URL + "recept?id=1", {
    method: "GET",
    headers: {

    }
  });

  return await result.json();
}



//instruktion för vitChocklad
export async function getReceptData2() {

  const result = await fetch(URL + "recept?id=2", {
    method: "GET",
    headers: {

    }
  });

  return await result.json();
}



export async function getReceptData3() {

  const result = await fetch(URL + "recept?id=3", {
    method: "GET",
    headers: {

    }
  });

  return await result.json();
}

export async function postReceptData(data) {
  fetch("/Receptslutproj/resources/recept", {
    method: "POST",
    headers: {
      'Authorization': "basic",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

}


export async function deleteReceptData(id) {
  fetch("/Receptslutproj/resources/recept?id=" + id, {
    method: "DELETE",
    headers: {
      'Authorization': "Basic",
      "Content-Type": "application/json"
    }
  })

}