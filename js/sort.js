const sortElements = document.getElementsByClassName("element-text");

// Iterate over the HTMLCollection and add event listener to each element
for (let i = 0; i < sortElements.length; i++) {
  sortElements[i].addEventListener("click", toggleElement);
}

function toggleElement(event) {
  const clickedElement = event.target;
  // console.log("Before classList:", clickedElement.classList.value);

  const clickedElementClasses = clickedElement.classList;

//   console.log(clickedElementClasses);

  if (clickedElementClasses.value.includes("active")) {
    clickedElement.classList.remove("active");

    fetch(`http://localhost:8080/pals`)
      .then((response) => response.json())
      .then((data) => {
        allPals = data;
        displayPals(allPals);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    clickedElement.classList.add("active");

    const elementClass = clickedElementClasses[1]
    const fetchType = elementClass.split("-")[0];
    // console.log(fetchType);

    fetch(`http://localhost:8080/type/${fetchType}`)
      .then((response) => response.json())
      .then((data) => {
        allPals = data;
        displayPals(allPals);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  // console.log("After classList:", clickedElement.classList.value);
}
