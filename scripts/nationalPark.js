//  by location


const parkByLocation = document.getElementById("parksByLocation");
const parkByType = document.getElementById("parksByType");
const listOfParks = document.getElementById("ListOfParks");


// iterate through location array from locationData.js file
for (let i = 0; i < locationsArray.length; i++) {
    let parkLocation = locationsArray[i];
    const option = document.createElement("option")
    option.innerHTML = parkLocation;
    option.value = parkLocation;
    parkByLocation.appendChild(option);
}

// iterate through type array from parkTypeData.js
for (let i = 0; i < parkTypesArray.length; i++) {
    let parkType = parkTypesArray[i];
    const option = document.createElement("option");
    option.innerHTML = parkType;
    option.value = parkType;
    parkByType.appendChild(option);
}

//  Build card on page load to show 10 parks
for (let i = 0; i <= 10; i++) {
    console.log(i)
    let park = nationalParksArray[i]
    console.log(park)

    // grab park info to display in card
    let parkCard = buildParkCard(park);
    listOfParks.appendChild(parkCard);
}

// build card function
function buildParkCard(park) {
    let divCol = document.createElement("div");
    divCol.innerHTML = `
    <div class="col">
    <div class="card">
     <div class="card-body">
       <h5 class="card-title">${park.LocationName}</h5>
       <h5 class="card-title">${park.Address}</h5>
       <h5 class="card-title">${park.City}, ${park.State}, ${park.ZipCode}</h5>
       <h5 class="card-title">${park.Phone}</h5>
       <a href="${park.Visit ? park.Visit : "#"}" class="btn btn-primary">${park.Visit ? "Go to site" : "No link"}</a>
     </div>
   </div>
   </div>`

    return divCol;
}

// filter park by search by location
// parkByLocation.addEventListener("change", ()=>{
//     let selectedPark = parkByLocation.selectedOptions[0].value;
//     listOfParks.innerHTML="";
//     let parks = nationalParksArray.filter(park => park.State.toLocaleLowerCase() === selectedPark.toLocaleLowerCase())
//     parks.forEach(park=>{
//         return buildParkCard(park);
        
//     })
// })


// parkByLocation.addEventListener("change", ()=>{
//     let selectedPark = parkByLocation.selectedOptions[0].value;
//     listOfParks.innerHTML="";
//     let park= nationalParksArray.forEach(park=>{
//         if(contains(selectedPark, park.State)){
//             parkCard(park);
//         }
//     })
// })

parkByLocation.addEventListener("change", ()=>{
    let selectedPark = parkByLocation.selectedOptions[0].value;
    listOfParks.innerHTML="";
    let parks = nationalParksArray
    if(selectedPark != "anyChosenValue"){
        parks = parks.filter(park=>park.State.toLowerCase()===selectedPark.toLowerCase())
    }
    parks.forEach(park=>{
        // grab park info to display in card
    let parkCard = buildParkCard(park);
    listOfParks.appendChild(parkCard);
    })
})