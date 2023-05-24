// filter
const parkByLocation = document.getElementById("parkByLocation");
// iterate through location array from data file
for (i=0; i<locationsArray.length; i++){
    let parkLocation = locationsArray[i];
    const option = document.createElement("option")
    option.innerHTML=parkLocation;
    option.value=parkLocation;
    parkByLocation.appendChild(option);
}

