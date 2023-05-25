//  by location


const parkByLocation = document.getElementById("parksByLocation");
const parkByType = document.getElementById("parksByType");
const listOfParks= document.getElementById("ListOfParks");

 
// iterate through location array from locationData.js file
for (let i=0; i<locationsArray.length; i++){
    let parkLocation = locationsArray[i];
    const option = document.createElement("option")
    option.innerHTML=parkLocation;
    option.value=parkLocation;
    parkByLocation.appendChild(option);
}

// iterate through type array from parkTypeData.js
 for (let i =0; i<parkTypesArray.length; i++){
    let parkType = parkTypesArray[i];
    const option = document.createElement("option");
    option.innerHTML=parkType;
    option.value=parkType;
    parkByType.appendChild(option);
 }

//  Build card on page load
for(let i=0; i<=10; i++){
    console.log(i)
   let park = nationalParksArray[i]
   console.log(park)
}

//  Display parks information 
function displayParks(){
   
};

// filter 
// function filterByLocation(){
//     let 
// }

