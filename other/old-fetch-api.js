const page = 1; // The page number to fetch
const limit = 137; // The number of items per page
const errDiv = document.getElementById("error-msg");
const infoDiv = document.getElementById("wrapper");

fetch(`http://localhost:8080/?page=${page}&?limit=${limit}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // `data` is the response from API
    console.log(data);
    console.log(data.content);

    infoDiv.innerHTML = ""; // wipe demo cards

    for (let i = 0; i < limit; i++) {
        let elementHTML = "";

        let palKey = data.content[i].key; // ID
        let palIMG = data.content[i].imageWiki; // Image
        let palName = data.content[i].name; // Name
        let palElement1 = data.content[i].types[0] // Type 1
        let palElement2 = data.content[i].types[1] // Type 2

        // console.log(data.content[i].types[0]);

        let palElementCap1 = capitalizeFirstLetter(palElement1) 
        elementHTML = `<p class="element-text ${palElement1}-color">${palElementCap1}</p>`
        
        if (palElement2 != undefined) {
            let palElementCap2 = capitalizeFirstLetter(palElement2)
            elementHTML += `<p class="element-text ${palElement2}-color">${palElementCap2}</p>`
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

        // PAL MODALS
        // const modalItem = document.createElement("div");
        // modalItem.className = "pal-details"
        // modalItem.innerHTML = `
        
        // `;
        // infoDiv.appendChild(modalItem);
        
    }
    console.log(infoDiv.innerHTML);
  })
  .catch((error) => {
    console.error("Error:", error);
    errDiv.innerHTML = `
    <div id="err-msg">If you see this message it is because the data was unable to be fetched.
       This is because the API is locally hosted. However, if you wish to preview what the website would've looked like if it managed to fetch the data.
       Please press the button below.
       <br>
       <button id="preview">Preview</button>
    </div>
    `; 
    previewPage();
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  
