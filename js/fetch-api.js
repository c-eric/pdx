const limit = 137; // The number of items per page
const errDiv = document.getElementById("error-msg");
const infoDiv = document.getElementById("wrapper");
const searchInput = document.getElementById("search-input");
const searchDiv = document.getElementById("search-sort-wrapper");
const sortDiv = document.getElementById("sort");

let allPals = [];

fetch(`http://localhost:8080/pals`)
  .then((response) => response.json())
  .then((data) => {
    allPals = data;
    displayPals(allPals);
  })
  .catch((error) => {
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
  });

searchInput.addEventListener("keyup", handleSearch);

async function fetchPalBeforeRedirect(name) {
  try {
    const palData = await Promise.all([
      fetch(`http://localhost:8080/name/${name}`).then((res) => res.json()),
    ]);
    return true;
  } catch (error) {
    console.error("Faled to fetch Pal data before redirect");
  }
}

function displayPals(pal) {
  infoDiv.innerHTML = "";

  pal.forEach((pal) => {
      console.log(pal);

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

      listItem.addEventListener("click", async () => {
        const success = await fetchPalBeforeRedirect(palName);
        if (success) {
          // modal
        }
      })
      infoDiv.appendChild(listItem);
    
  });
}

function handleSearch() {
  const searchTerm = searchInput.value;
  console.log(searchTerm);

  if (searchTerm != "") {
    fetch(`http://localhost:8080/name/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        // add not found message
        allPals = data;
        displayPals(allPals);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    fetch(`http://localhost:8080/pals`)
      .then((response) => response.json())
      .then((data) => {
        allPals = data;
        displayPals(allPals);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
