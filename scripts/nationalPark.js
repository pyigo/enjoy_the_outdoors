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
    let parkCard = buildParkCard(park)
    listOfParks.appendChild(parkCard)
}

// build card function
function buildParkCard(park) {
    // <div class="col">
    //  <div class="card">
    //   <div class="card-body">
    //     <h5 class="card-title">Name</h5>
    //     <h5 class="card-title">Address</h5>
    //     <h5 class="card-title">City, State, Zip</h5>
    //     <h5 class="card-title">Phone</h5>
    //     <a href="#" class="btn btn-primary">visit</a>
    //   </div>
    // </div>
    // </div>

    let divCol = document.createElement("div");
    divCol.innerHTML = `
    <div class="col">
    <div class="card">
     <div class="card-body">
       <h5 class="card-title">${park.LocationName}</h5>
       <h5 class="card-title">${park.Address}</h5>
       <h5 class="card-title">${park.City}, ${park.State}, ${park.ZipCode}</h5>
       <h5 class="card-title">${park.Phone}</h5>
       <a href="${park.Visit ?  park.Visit: "#"  }" class="btn btn-primary">${park.Visit ? "Go to site": "No link"}</a>
     </div>
   </div>
   </div>`

    return divCol;
}

//  Display parks information 
function displayParks() {

};

// filter 
// function filterByLocation(){
//     let 
// }

