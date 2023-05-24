// filter by location
const parkByLocation = document.getElementById("parksByLocation");
const parkByType = document.getElementById("parksByType");
const 

 
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

//  Display parks information 
function displayParks(park){
    FileList.innerHTML
}
parkByLocation.addEventListener("change", ()=>{
    let select
})
