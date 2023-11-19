console.log("script charge");

// ------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------GET formulaire utilisateur-------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------


const masterKey = "$2a$10$sIvMxOzunGBB5JXAmSeYjO.3ZdozgJXu7oXypD4UO9GP16Sx6ATBm";
const binId = "655a766a12a5d376599bd243";
const apiUrl = "https://api.jsonbin.io/v3";
let getData;

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

// ------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------POST formulaire utilisateur-------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------

async function postFormulaire() {
    const res = await fetch(`${apiUrl}/b/${binId}`, {
       method: 'POST',
        headers : {
                'Content-Type': 'application/json',
                'X-Master-Key': masterKey,
        },
       body: JSON.stringify(getData),
       });
   }
                                  
   let form = document.querySelector("form");
                                  
   form.addEventListener("submit", function(event){
       console.log("envoi formulaire");
   event.preventDefault();
   let recupInfo = new FormData(form);
   getData = Object.fromEntries(recupInfo);
   console.log(getData);
   
    postFormulaire();
   
    })


    