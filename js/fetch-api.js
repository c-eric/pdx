const errDiv = document.getElementById("error-msg");
const infoDiv = document.getElementById("wrapper");
const searchDiv = document.getElementById("search-sort-wrapper");
const sortDiv = document.getElementById("sort");

let allPals = [];

window.onload = async function() {
  try {
    await updateDisplayedPals(`https://pdx-api-2cd27046206a.herokuapp.com/pals`);
  } catch (error) {
    console.error("Error:", error);
    searchDiv.innerHTML = "";
    sortDiv.innerHTML = "";
    errDiv.innerHTML = `
        <div id="err-msg">If you see this message it is because the data was unable to be fetched.
           This is because the API is locally hosted. However, if you wish to preview what the website would've looked like if it managed to fetch the data.
           Please press the button below.
           <br><br>
           Note: Due to search and sort feature relying on backend, it is disabled in the preview.
           <br>
           <button id="preview">Preview</button>
        </div>
        `;
    previewPage();
  }
}

// Fetch and display specific pals based on URL
async function fetchPalsData(url) {
  try {
    const response = await fetch(url);

    // Response status handling
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

// Update displayed pals based on data fetched from 'fetchPalsData'
async function updateDisplayedPals(url) {
  try {
    const palsData = await fetchPalsData(url);
    displayPals(palsData);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Capitalize first letter of string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Display pals fetched from database
function displayPals(pal) {
  infoDiv.innerHTML = "";

  pal.forEach((pal) => {
      // console.log(pal);

      let elementHTML = "";

      let palKey = pal.key; // ID
      let palIMG = pal.imageWiki; // Image
      let palName = pal.name; // Name
      let palElement1 = pal.types[0].name; // Type 1
      let palElement2 = pal.types[1]?.name; // Type 2

      let palElementCap1 = capitalizeFirstLetter(palElement1);
      elementHTML = `<p class="element-text ${palElement1}-color">${palElementCap1}</p>`;

      if (palElement2 != undefined) {
        let palElementCap2 = capitalizeFirstLetter(palElement2);
        elementHTML += `<p class="element-text ${palElement2}-color">${palElementCap2}</p>`;
      }

      // PAL CARDS
      const listItem = document.createElement("div");
      listItem.className = "pal-info";
      listItem.innerHTML = `
      <p class="id">#${palKey}</p>
      <img class="pal-img" src="${palIMG}" alt="">
      <h5 class="pal-name">${palName}</h5>
      <div class="element">
          ${elementHTML}
      </div>
      `;

      infoDiv.appendChild(listItem);
    
  });
}


