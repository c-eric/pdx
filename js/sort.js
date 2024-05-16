const sortElements = document.getElementsByClassName("element-text");
let activeCounter = 0;
let activeTypes = [];

// Iterate over the HTMLCollection and add event listener to each element
for (let i = 0; i < sortElements.length; i++) {
  sortElements[i].addEventListener("click", toggleElement);
}

function toggleElement(event) {
  const clickedElement = event.target;
  const clickedElementClasses = clickedElement.classList;
  const elementTypeName = clickedElementClasses[1].split("-")[0];
  
  //clickedElement.classList.toggle("active"); ***
  /*
    This can be simplified by using the classList.toggle() method, which adds the class if it's not present and removes it if it is.
  */

  // Deselect element if button is already active
  if (clickedElementClasses.value.includes("active")) {
    activeCounter--;
    clickedElement.classList.remove("active");

    for (let i = 0; i < activeTypes.length; i++) {
      if (elementTypeName === activeTypes[i]) {
        if (i === 0) {
          activeTypes.shift();
        } else {
          activeTypes.pop();
        }
        console.log("----------");
        console.log(elementTypeName + " removed from activeTypes[]");
      }
    }

    if (activeCounter == 1) {
      fetchNDisplay(`http://localhost:8080/type/${activeTypes[0]}`);
      console.log("SUCCESS: " + activeTypes[0] + " fetched");
    }
    else {
      fetchNDisplay(`http://localhost:8080/pals`);
      console.log("SUCCESS: all pals fetched");
    }
    
  } 
  // Select element if button is not active
  else {
    try {
      activeCounter++;
      if (activeCounter > 2) throw "Too many element types selected";
      clickedElement.classList.add("active");
      activeTypes.push(elementTypeName);
      console.log("----------");
      console.log(elementTypeName + " added to activeTypes[]");

      if (activeCounter == 2) {
        fetchNDisplay(`http://localhost:8080/types/${activeTypes[0]}-${activeTypes[1]}`);
        console.log("SUCCESS: " + activeTypes[0] + " & " + activeTypes[1] + " fetched");
      } else {
        fetchNDisplay(`http://localhost:8080/type/${activeTypes[0]}`);
        console.log("SUCCESS: " + activeTypes[0] + " fetched");
      }
    } catch(err) {
      console.log(err);
      activeCounter = 2;
    }
  }
 
}