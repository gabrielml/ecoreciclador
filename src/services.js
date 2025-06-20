const API_URL = "http://localhost:8000/elements";

const list = document.getElementById("elementsList");
const btnShowList = document.getElementById("showList");

async function showElements(){
    list.innerHTML = "";

    const res = await fetch(API_URL);
    const elements = await res.json();

    elements.forEach((element) => {
       const li = document.createElement("li");
       li.innerHTML = `
         <strong>${element.product}</strong> | ${element.description}
       `;
       list.appendChild(li);
     });
}

btnShowList.addEventListener("click", showElements);
  

    
