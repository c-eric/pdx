const sortElements = document.getElementsByClassName("element-text");
const searchInput = document.getElementById("search-input");
let activeTypes = [];

// Iterate over the HTMLCollection and add event listener to each element
for (let i = 0; i < sortElements.length; i++) {
  sortElements[i].addEventListener("click", toggleElement);
}

function toggleElement(event) {
  const clickedElement = event.target;
  const clickedElementClasses = clickedElement.classList;
  const elementTypeName = clickedElementClasses[1].split("-")[0];

  // Deselect element if button is already active
  if (clickedElementClasses.value.includes("active")) {
    clickedElement.classList.remove("active");

    activeTypes = activeTypes.filter(type => type !== elementTypeName);
    console.log("----------");
    console.log(elementTypeName + " removed from activeTypes[]");

    if (activeTypes.length == 1) {
      updateDisplayedPals(`https://pdx-api-2cd27046206a.herokuapp.com/type/${activeTypes[0]}`);
      console.log("SUCCESS: " + activeTypes[0] + " fetched");
    }
    else {
      updateDisplayedPals(`https://pdx-api-2cd27046206a.herokuapp.com/pals`);
      console.log("SUCCESS: all pals fetched");
    }
    
  } 
  // Select element if button is not active
  else {
    try {
      if (activeTypes.length == 2) throw "Too many element types selected";
      clickedElement.classList.add("active");
      activeTypes.push(elementTypeName);
      console.log("----------");
      console.log(elementTypeName + " added to activeTypes[]");

      if (activeTypes.length == 2) {
        updateDisplayedPals(`https://pdx-api-2cd27046206a.herokuapp.com/types/${activeTypes[0]}-${activeTypes[1]}`);
        console.log("SUCCESS: " + activeTypes[0] + " & " + activeTypes[1] + " fetched");
      } else {
        updateDisplayedPals(`https://pdx-api-2cd27046206a.herokuapp.com/type/${activeTypes[0]}`);
        console.log("SUCCESS: " + activeTypes[0] + " fetched");
      }
    } catch(err) {
      console.log(err);
    }
  }
}


// Listen for "keyup" on keys A-Z, Space and Backspace
searchInput.addEventListener("keyup", function(event) {
  // console.log(event.key);
  if ((event.key >= 'a' && event.key <= 'z') || event.key === 'Space' || event.key === 'Backspace') {
    handleSearch();
    // console.log(event.key + " pressed");
  }
});

// Handle search input
function handleSearch() {
  const searchTerm = searchInput.value;
  console.log(searchTerm);

  if (searchTerm != "") {
    updateDisplayedPals(`https://pdx-api-2cd27046206a.herokuapp.com/name/${searchTerm}`);
  } else {
    updateDisplayedPals(`https://pdx-api-2cd27046206a.herokuapp.com/pals`);
  }
}
