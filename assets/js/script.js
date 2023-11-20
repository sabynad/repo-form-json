console.log("script charge");

// ------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------GET formulaire utilisateur-------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------


const masterKey = "$2a$10$sIvMxOzunGBB5JXAmSeYjO.3ZdozgJXu7oXypD4UO9GP16Sx6ATBm";
const binId = "655b1ff30574da7622c92a3a";
const apiUrl = "https://api.jsonbin.io/v3";
let getData;
let result;
let data;

await getDataFetch();
console.log("Voici la liste des utilisateurs: ", getData.record);

async function getDataFetch () {
    const res = await fetch(apiUrl+"/b/"+binId, {
        method: 'GET',
        headers :{
            'X-Master-Key': masterKey,
        }
    });
    getData = await res.json(); 
}

let tableau = [];
console.log("getData", getData);

for (let i = 0; i < getData.record.length; i++) {
    tableau.push(getData.record[i]);   
}
console.log("tableau", tableau);


async function postFormulaire() {
    const res = await fetch(`${apiUrl}/b/${binId}`, {
        method: 'PUT',
        headers : {
                'Content-Type': 'application/json',
                'X-Master-Key': masterKey,
        },
        body: JSON.stringify(tableau)
       });
       result = await res.json();
       console.log(result)
   }
                            
let form = document.querySelector("form");
                                  
form.addEventListener("submit", function(event){
    console.log("envoi formulaire");
    event.preventDefault();
    let recupInfo = new FormData(form);
    data = Object.fromEntries(recupInfo);
    tableau.push(data);
//    console.log(data);
   
    postFormulaire();
   
    })





