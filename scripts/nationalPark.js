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

    let park = nationalParksArray[i]
    // console.log(park)

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
//     let park= nationalParksArray.forEach(park=>{
//         if(contains(selectedPark, park.State)){
//             parkCard(park);
//         }
//     })
// })

parkByLocation.addEventListener("change", () => {
    let selectedState = parkByLocation.selectedOptions[0].value;
    listOfParks.innerHTML = "";
    let parks = nationalParksArray;
    if (selectedState != "anyChosenValue") {
        parks = parks.filter(park => park.State.toLowerCase() === selectedState.toLowerCase())
    }
    parks.forEach(park => {
        // grab park info to display in card
        let parkCard = buildParkCard(park);
        listOfParks.appendChild(parkCard);
    })
})

// filter by type
parkByType.addEventListener("change", () => {
    let selectedType = parkByType.selectedOptions[0].value;
    listOfParks.innerHTML = "";

    let parks = nationalParksArray;
    let parksByType = []; //empty array before we get results from seleted type
    parks.forEach(park => {
        if (contains(selectedType, park.LocationName)) {
            parksByType.push(park) //populate empty array with result from selected type
        }
    })

    parksByType.forEach(park => {
        // grab park info to display in card
        let parkCard = buildParkCard(park);
        listOfParks.appendChild(parkCard);
    })

})

// Kevin's function contains
function contains(needle, haystack) {
    const NOT_FOUND = -1;
    let doesContain = true

    needle = needle.toLowerCase();
    haystack = haystack.toLowerCase();

    index = haystack.indexOf(needle);

    if (index == NOT_FOUND) {
        doesContain = false;
    }

    return doesContain;
}