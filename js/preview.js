function previewPage() {
  const previewToggle = document.querySelector("#preview");

  previewToggle.addEventListener("click", () => {
    infoDiv.innerHTML = `
    <div class="pal-info">
        <p class="id">#001</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/0/01/Lamball_menu.png/" alt="">
        <h5 class="pal-name">Lamball</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#002</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/51/Cattiva_menu.png/" alt="">
        <h5 class="pal-name">Cattiva</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#003</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/f/f4/Chikipi_menu.png/" alt="">
        <h5 class="pal-name">Chikipi</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#004</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/d/dc/Lifmunk_menu.png/" alt="">
        <h5 class="pal-name">Lifmunk</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#005</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/d/d7/Foxparks_menu.png/" alt="">
        <h5 class="pal-name">Foxparks</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#006</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/5e/Fuack_menu.png/" alt="">
        <h5 class="pal-name">Fuack</h5>
        <div class="element">
            <p class="element-text water-color">Water</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#007</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/c/ce/Sparkit_menu.png/" alt="">
        <h5 class="pal-name">Sparkit</h5>
        <div class="element">
            <p class="element-text electric-color">Electric</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#008</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/4/40/Tanzee_menu.png/" alt="">
        <h5 class="pal-name">Tanzee</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#009</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/2/21/Rooby_menu.png/" alt="">
        <h5 class="pal-name">Rooby</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#010</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/3/38/Pengullet_menu.png/" alt="">
        <h5 class="pal-name">Pengullet</h5>
        <div class="element">
            <p class="element-text water-color">Water</p><p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#011</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/b/b5/Penking_menu.png/" alt="">
        <h5 class="pal-name">Penking</h5>
        <div class="element">
            <p class="element-text water-color">Water</p><p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#012</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/52/Jolthog_menu.png/" alt="">
        <h5 class="pal-name">Jolthog</h5>
        <div class="element">
            <p class="element-text electric-color">Electric</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#012B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/7/72/Jolthog_Cryst_menu.png" alt="">
        <h5 class="pal-name">Jolthog Cryst</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#013</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/2/2e/Gumoss_menu.png/" alt="">
        <h5 class="pal-name">Gumoss</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p><p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#014</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/9/9e/Vixy_menu.png/" alt="">
        <h5 class="pal-name">Vixy</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#015</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/e/ef/Hoocrates_menu.png/" alt="">
        <h5 class="pal-name">Hoocrates</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#016</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/a/a7/Teafant_menu.png/" alt="">
        <h5 class="pal-name">Teafant</h5>
        <div class="element">
            <p class="element-text water-color">Water</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#017</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/d/d9/Depresso_menu.png/" alt="">
        <h5 class="pal-name">Depresso</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#018</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/a/a1/Cremis_menu.png/" alt="">
        <h5 class="pal-name">Cremis</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#019</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/e/e6/Daedream_menu.png/" alt="">
        <h5 class="pal-name">Daedream</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#020</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/d/d0/Rushoar_menu.png/" alt="">
        <h5 class="pal-name">Rushoar</h5>
        <div class="element">
            <p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#021</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/55/Nox_menu.png/" alt="">
        <h5 class="pal-name">Nox</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#022</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/6/64/Fuddler_menu.png/" alt="">
        <h5 class="pal-name">Fuddler</h5>
        <div class="element">
            <p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#023</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/8/80/Killamari_menu.png/" alt="">
        <h5 class="pal-name">Killamari</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#024</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/1/17/Mau_menu.png/" alt="">
        <h5 class="pal-name">Mau</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#024B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/7/7a/Mau_Cryst_menu.png" alt="">
        <h5 class="pal-name">Mau Cryst</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#025</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/9/95/Celaray_menu.png/" alt="">
        <h5 class="pal-name">Celaray</h5>
        <div class="element">
            <p class="element-text water-color">Water</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#026</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/1/19/Direhowl_menu.png/" alt="">
        <h5 class="pal-name">Direhowl</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#027</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/5b/Tocotoco_menu.png/" alt="">
        <h5 class="pal-name">Tocotoco</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#028</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/5e/Flopie_menu.png/" alt="">
        <h5 class="pal-name">Flopie</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#029</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/3/3a/Mozzarina_menu.png/" alt="">
        <h5 class="pal-name">Mozzarina</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#030</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/1/13/Bristla_menu.png/" alt="">
        <h5 class="pal-name">Bristla</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#031</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/f/ff/Gobfin_menu.png/" alt="">
        <h5 class="pal-name">Gobfin</h5>
        <div class="element">
            <p class="element-text water-color">Water</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#031B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/9/9c/Gobfin_Ignis_menu.png" alt="">
        <h5 class="pal-name">Gobfin Ignis</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#032</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/0/08/Hangyu_menu.png/" alt="">
        <h5 class="pal-name">Hangyu</h5>
        <div class="element">
            <p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#032B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/4/49/Hangyu_Cryst_menu.png" alt="">
        <h5 class="pal-name">Hangyu Cryst</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#033</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/d/db/Mossanda_menu.png/" alt="">
        <h5 class="pal-name">Mossanda</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#033B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/0/05/Mossanda_Lux_menu.png" alt="">
        <h5 class="pal-name">Mossanda Lux</h5>
        <div class="element">
            <p class="element-text electric-color">Electric</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#034</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/f/fa/Woolipop_menu.png/" alt="">
        <h5 class="pal-name">Woolipop</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#035</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/a/a7/Caprity_menu.png/" alt="">
        <h5 class="pal-name">Caprity</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#036</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/7/7f/Melpaca_menu.png/" alt="">
        <h5 class="pal-name">Melpaca</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#037</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/4/40/Eikthyrdeer_menu.png/" alt="">
        <h5 class="pal-name">Eikthyrdeer</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#037B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/3/32/Eikthyrdeer_Terra_menu.png" alt="">
        <h5 class="pal-name">Eikthyrdeer Terra</h5>
        <div class="element">
            <p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#038</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/3/34/Nitewing_menu.png/" alt="">
        <h5 class="pal-name">Nitewing</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#039</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/7/7e/Ribbuny_menu.png/" alt="">
        <h5 class="pal-name">Ribbuny</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#040</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/4/40/Incineram_menu.png/" alt="">
        <h5 class="pal-name">Incineram</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p><p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#040B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/5b/Incineram_Noct_menu.png" alt="">
        <h5 class="pal-name">Incineram Noct</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#041</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/7/7e/Cinnamoth_menu.png/" alt="">
        <h5 class="pal-name">Cinnamoth</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#042</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/f/f5/Arsox_menu.png/" alt="">
        <h5 class="pal-name">Arsox</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#043</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/3/32/Dumud_menu.png/" alt="">
        <h5 class="pal-name">Dumud</h5>
        <div class="element">
            <p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#044</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/f/f6/Cawgnito_menu.png/" alt="">
        <h5 class="pal-name">Cawgnito</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#045</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/0/09/Leezpunk_menu.png/" alt="">
        <h5 class="pal-name">Leezpunk</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#045B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/e/ea/Leezpunk_Ignis_menu.png" alt="">
        <h5 class="pal-name">Leezpunk Ignis</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#046</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/0/00/Loupmoon_menu.png/" alt="">
        <h5 class="pal-name">Loupmoon</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#047</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/0/08/Galeclaw_menu.png/" alt="">
        <h5 class="pal-name">Galeclaw</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#048</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/b/bb/Robinquill_menu.png/" alt="">
        <h5 class="pal-name">Robinquill</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#048B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/4/45/Robinquill_Terra_menu.png" alt="">
        <h5 class="pal-name">Robinquill Terra</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p><p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#049</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/b/b5/Gorirat_menu.png/" alt="">
        <h5 class="pal-name">Gorirat</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#050</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/7/7b/Beegarde_menu.png/" alt="">
        <h5 class="pal-name">Beegarde</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#051</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/a/a0/Elizabee_menu.png/" alt="">
        <h5 class="pal-name">Elizabee</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#052</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/c/c3/Grintale_menu.png/" alt="">
        <h5 class="pal-name">Grintale</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#053</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/b/b5/Swee_menu.png/" alt="">
        <h5 class="pal-name">Swee</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#054</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/f/f3/Sweepa_menu.png/" alt="">
        <h5 class="pal-name">Sweepa</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#055</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/4/49/Chillet_menu.png/" alt="">
        <h5 class="pal-name">Chillet</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p><p class="element-text dragon-color">Dragon</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#056</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/0/0e/Univolt_menu.png/" alt="">
        <h5 class="pal-name">Univolt</h5>
        <div class="element">
            <p class="element-text electric-color">Electric</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#057</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/2/21/Foxcicle_menu.png/" alt="">
        <h5 class="pal-name">Foxcicle</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#058</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/e/e6/Pyrin_menu.png/" alt="">
        <h5 class="pal-name">Pyrin</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#058B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/2/2b/Pyrin_Noct_menu.png" alt="">
        <h5 class="pal-name">Pyrin Noct</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p><p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#059</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/c/c1/Reindrix_menu.png/" alt="">
        <h5 class="pal-name">Reindrix</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#060</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/3/3f/Rayhound_menu.png/" alt="">
        <h5 class="pal-name">Rayhound</h5>
        <div class="element">
            <p class="element-text electric-color">Electric</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#061</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/6/6b/Kitsun_menu.png/" alt="">
        <h5 class="pal-name">Kitsun</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#062</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/b/b0/Dazzi_menu.png/" alt="">
        <h5 class="pal-name">Dazzi</h5>
        <div class="element">
            <p class="element-text electric-color">Electric</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#063</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/3/38/Lunaris_menu.png/" alt="">
        <h5 class="pal-name">Lunaris</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#064</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/b/b7/Dinossom_menu.png/" alt="">
        <h5 class="pal-name">Dinossom</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p><p class="element-text dragon-color">Dragon</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#064B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/c/c7/Dinossom_Lux_menu.png" alt="">
        <h5 class="pal-name">Dinossom Lux</h5>
        <div class="element">
            <p class="element-text electric-color">Electric</p><p class="element-text dragon-color">Dragon</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#065</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/1/1d/Surfent_menu.png/" alt="">
        <h5 class="pal-name">Surfent</h5>
        <div class="element">
            <p class="element-text water-color">Water</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#065B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/f/ff/Surfent_Terra_menu.png" alt="">
        <h5 class="pal-name">Surfent Terra</h5>
        <div class="element">
            <p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#066</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/3/32/Maraith_menu.png/" alt="">
        <h5 class="pal-name">Maraith</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#067</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/5b/Digtoise_menu.png/" alt="">
        <h5 class="pal-name">Digtoise</h5>
        <div class="element">
            <p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#068</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/f/f2/Tombat_menu.png/" alt="">
        <h5 class="pal-name">Tombat</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#069</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/c/c8/Lovander_menu.png/" alt="">
        <h5 class="pal-name">Lovander</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#070</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/2/20/Flambelle_menu.png/" alt="">
        <h5 class="pal-name">Flambelle</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#071</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/e/ea/Vanwyrm_menu.png/" alt="">
        <h5 class="pal-name">Vanwyrm</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p><p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#071B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/1/19/Vanwyrm_Cryst_menu.png" alt="">
        <h5 class="pal-name">Vanwyrm Cryst</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p><p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#072</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/7/73/Bushi_menu.png/" alt="">
        <h5 class="pal-name">Bushi</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#073</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/a/a0/Beakon_menu.png/" alt="">
        <h5 class="pal-name">Beakon</h5>
        <div class="element">
            <p class="element-text electric-color">Electric</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#074</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/d/dd/Ragnahawk_menu.png/" alt="">
        <h5 class="pal-name">Ragnahawk</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#075</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/9/9e/Katress_menu.png/" alt="">
        <h5 class="pal-name">Katress</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#076</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/8/85/Wixen_menu.png/" alt="">
        <h5 class="pal-name">Wixen</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#077</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/4/43/Verdash_menu.png/" alt="">
        <h5 class="pal-name">Verdash</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#078</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/2/24/Vaelet_menu.png/" alt="">
        <h5 class="pal-name">Vaelet</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#079</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/6/66/Sibelyx_menu.png/" alt="">
        <h5 class="pal-name">Sibelyx</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#080</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/a/a6/Elphidran_menu.png/" alt="">
        <h5 class="pal-name">Elphidran</h5>
        <div class="element">
            <p class="element-text dragon-color">Dragon</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#080B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/5e/Elphidran_Aqua_menu.png" alt="">
        <h5 class="pal-name">Elphidran Aqua</h5>
        <div class="element">
            <p class="element-text dragon-color">Dragon</p><p class="element-text water-color">Water</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#081</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/1/1b/Kelpsea_menu.png/" alt="">
        <h5 class="pal-name">Kelpsea</h5>
        <div class="element">
            <p class="element-text water-color">Water</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#081B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/b/ba/Kelpsea_Ignis_menu.png" alt="">
        <h5 class="pal-name">Kelpsea Ignis</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#082</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/a/a0/Azurobe_menu.png/" alt="">
        <h5 class="pal-name">Azurobe</h5>
        <div class="element">
            <p class="element-text water-color">Water</p><p class="element-text dragon-color">Dragon</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#083</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/9/9d/Cryolinx_menu.png/" alt="">
        <h5 class="pal-name">Cryolinx</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#084</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/3/33/Blazehowl_menu.png/" alt="">
        <h5 class="pal-name">Blazehowl</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#084B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/5d/Blazehowl_Noct_menu.png" alt="">
        <h5 class="pal-name">Blazehowl Noct</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p><p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#085</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/0/01/Relaxaurus_menu.png/" alt="">
        <h5 class="pal-name">Relaxaurus</h5>
        <div class="element">
            <p class="element-text dragon-color">Dragon</p><p class="element-text water-color">Water</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#085B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/4/40/Relaxaurus_Lux_menu.png" alt="">
        <h5 class="pal-name">Relaxaurus Lux</h5>
        <div class="element">
            <p class="element-text dragon-color">Dragon</p><p class="element-text electric-color">Electric</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#086</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/b/bd/Broncherry_menu.png/" alt="">
        <h5 class="pal-name">Broncherry</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#086B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/d/db/Broncherry_Aqua_menu.png" alt="">
        <h5 class="pal-name">Broncherry Aqua</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p><p class="element-text water-color">Water</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#087</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/2/28/Petallia_menu.png/" alt="">
        <h5 class="pal-name">Petallia</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#088</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/d/d0/Reptyro_menu.png/" alt="">
        <h5 class="pal-name">Reptyro</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p><p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#088B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/2/2c/Ice_Reptyro_menu.png" alt="">
        <h5 class="pal-name">Ice Reptyro</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p><p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#089</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/9/9d/Kingpaca_menu.png/" alt="">
        <h5 class="pal-name">Kingpaca</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#089B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/5a/Ice_Kingpaca_menu.png" alt="">
        <h5 class="pal-name">Ice Kingpaca</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#090</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/5e/Mammorest_menu.png/" alt="">
        <h5 class="pal-name">Mammorest</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#090B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/d/db/Mammorest_Cryst_menu.png" alt="">
        <h5 class="pal-name">Mammorest Cryst</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#091</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/0/0e/Wumpo_menu.png/" alt="">
        <h5 class="pal-name">Wumpo</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#091B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/6/68/Wumpo_Botan_menu.png" alt="">
        <h5 class="pal-name">Wumpo Botan</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#092</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/a/a7/Warsect_menu.png/" alt="">
        <h5 class="pal-name">Warsect</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p><p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#093</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/6/68/Fenglope_menu.png/" alt="">
        <h5 class="pal-name">Fenglope</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#094</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/7/7d/Felbat_menu.png/" alt="">
        <h5 class="pal-name">Felbat</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#095</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/d/d9/Quivern_menu.png/" alt="">
        <h5 class="pal-name">Quivern</h5>
        <div class="element">
            <p class="element-text dragon-color">Dragon</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#096</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/e/ee/Blazamut_menu.png/" alt="">
        <h5 class="pal-name">Blazamut</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#097</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/3/3c/Helzephyr_menu.png/" alt="">
        <h5 class="pal-name">Helzephyr</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#098</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/d/d4/Astegon_menu.png/" alt="">
        <h5 class="pal-name">Astegon</h5>
        <div class="element">
            <p class="element-text dragon-color">Dragon</p><p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#099</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/57/Menasting_menu.png/" alt="">
        <h5 class="pal-name">Menasting</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p><p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#100</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/2/21/Anubis_menu.png/" alt="">
        <h5 class="pal-name">Anubis</h5>
        <div class="element">
            <p class="element-text ground-color">Ground</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#101</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/8/8e/Jormuntide_menu.png/" alt="">
        <h5 class="pal-name">Jormuntide</h5>
        <div class="element">
            <p class="element-text dragon-color">Dragon</p><p class="element-text water-color">Water</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#101B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/0/0d/Jormuntide_Ignis_menu.png" alt="">
        <h5 class="pal-name">Jormuntide Ignis</h5>
        <div class="element">
            <p class="element-text dragon-color">Dragon</p><p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#102</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/b/b4/Suzaku_menu.png/" alt="">
        <h5 class="pal-name">Suzaku</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#102B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/a/a1/Suzaku_Aqua_menu.png" alt="">
        <h5 class="pal-name">Suzaku Aqua</h5>
        <div class="element">
            <p class="element-text water-color">Water</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#103</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/1/13/Grizzbolt_menu.png/" alt="">
        <h5 class="pal-name">Grizzbolt</h5>
        <div class="element">
            <p class="element-text electric-color">Electric</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#104</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/5/5e/Lyleen_menu.png/" alt="">
        <h5 class="pal-name">Lyleen</h5>
        <div class="element">
            <p class="element-text grass-color">Grass</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#104B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/3/30/Lyleen_Noct_menu.png" alt="">
        <h5 class="pal-name">Lyleen Noct</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#105</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/9/99/Faleris_menu.png/" alt="">
        <h5 class="pal-name">Faleris</h5>
        <div class="element">
            <p class="element-text fire-color">Fire</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#106</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/6/6e/Orserk_menu.png/" alt="">
        <h5 class="pal-name">Orserk</h5>
        <div class="element">
            <p class="element-text dragon-color">Dragon</p><p class="element-text electric-color">Electric</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#107</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/0/0c/Shadowbeak_menu.png/" alt="">
        <h5 class="pal-name">Shadowbeak</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#108</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/0/09/Paladius_menu.png/" alt="">
        <h5 class="pal-name">Paladius</h5>
        <div class="element">
            <p class="element-text neutral-color">Neutral</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#109</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/1/13/Necromus_menu.png/" alt="">
        <h5 class="pal-name">Necromus</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#110</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/0/00/Frostallion_menu.png/" alt="">
        <h5 class="pal-name">Frostallion</h5>
        <div class="element">
            <p class="element-text ice-color">Ice</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#110B</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/1/14/Frostallion_Noct_menu.png" alt="">
        <h5 class="pal-name">Frostallion Noct</h5>
        <div class="element">
            <p class="element-text dark-color">Dark</p>
        </div>
        </div><div class="pal-info">
        <p class="id">#111</p>
        <img class="pal-img" src="https://static.wikia.nocookie.net/palworld/images/e/e5/Jetragon_menu.png/" alt="">
        <h5 class="pal-name">Jetragon</h5>
        <div class="element">
            <p class="element-text dragon-color">Dragon</p>
        </div>
        </div>
    `;
  });
}
