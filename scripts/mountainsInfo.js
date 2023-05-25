const mountains = document.getElementById("mountainsList")

// iterate over mountains data file
for (let i=0; i<mountainsArray.length; i++){
    let mountain = mountainsArray[i];
    const option = document.createElement("option");
    option.innerHTML = mountain.name;
    option.value = mountain.name;
    mountains.appendChild(option);

}