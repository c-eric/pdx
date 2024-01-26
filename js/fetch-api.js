const page = 1; // The page number to fetch
const limit = 137; // The number of items per page

fetch(`http://localhost:8080/?page=${page}&?limit=${limit}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // `data` is the response from your API
    console.log(data);
    console.log(data.content);
    // console.log(data.content[0].name);

    const infoDiv = document.getElementById("wrapper");
    infoDiv.innerHTML = ""; // wipe demo cards

    for (let i = 0; i < 137; i++) {
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
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  
