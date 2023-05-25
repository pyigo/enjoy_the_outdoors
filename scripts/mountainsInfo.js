const mountains = document.getElementById("mountainsList")
const mountainsCards = document.getElementById("mountainsCards")

// iterate over mountains data file
for (let i = 0; i < mountainsArray.length; i++) {
  let mountain = mountainsArray[i];
  const option = document.createElement("option");
  option.innerHTML = mountain.name;
  option.value = mountain.name;
  mountains.appendChild(option);

}

// Build card to display mountains info on page load
for (let i = 0; i <= 10; i++) {
  let mountain = mountainsArray[i]

  console.log(mountain)
  // fetch mountain info and display in card
  let mountainCard = builMountainCard(mountain);
  mountainsCards.appendChild(mountainCard);
}

// build card function
function builMountainCard(mountain) {
  let divCol = document.createElement("div");
  divCol.innerHTML = `
    <div class="col">
    <div class="card">
    <img src="images/${mountain.img}" class="card-img-top" alt="${mountain.img}">
     <div class="card-body">
       <h5 class="card-title">${mountain.name}</h5>
       <h5 class="card-title">Elevation: ${mountain.elevation}, Effort: ${mountain.effort}</h5>
       <p class="card-text">${mountain.desc}</p>
       <h5 class="card-title">${mountain.coords.lat} ${mountain.coords.lng}</h5>
     </div>
   </div>
   </div>`

  return divCol;
}
