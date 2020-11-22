var h10_entites = {
    "heroes": [
        {
            "name":"Madame Zostra",
            "speed":[2,3,3,5,5,6,6,7],
            "might":[2,3,3,4,5,5,5,6],
            "sanity":[4,4,4,5,6,7,8,8],
            "knowledge":[1,3,4,4,4,5,6,6],
            "imgRel":"./resources/img/madame_zostra.jpg",
            "index":[2,3,2,3],
            "color_hex":"#186F8E"
        },
        {
            "name":"Ox Bellows",
            "speed":[2,2,2,3,4,5,5,6],
            "might":[4,5,5,6,6,7,8,8],
            "sanity":[2,2,3,4,5,5,6,7],
            "knowledge":[2,2,3,3,5,5,6,6],
            "imgRel":"./resources/img/ox_bellows.jpg",
            "index":[4,2,2,2],
            "color_hex":"#A5272E"
        },
        {
            "name":"Father Rhinehardt",
            "speed":[2,3,3,4,5,6,7,7],
            "might":[1,2,2,4,4,5,5,7],
            "sanity":[3,4,5,5,6,7,7,8],
            "knowledge":[1,3,3,4,5,6,6,8],
            "imgRel":"./resources/img/father_rhinehardt.jpg",
            "index":[2,2,4,3],
            "color_hex":"#F4F4EA"
        },
        {
            "name":"Zoe Ingstrom",
            "speed":[4,4,4,4,5,6,8,8],
            "might":[2,2,3,3,4,4,6,7],
            "sanity":[3,4,5,5,6,6,7,8],
            "knowledge":[1,2,3,4,4,5,5,5],
            "imgRel":"./resources/img/zoe_ingstrom.jpg",
            "index":[3,3,2,2],
            "color_hex":"#d39e46"
        },
        {
            "name":"Heather Granville",
            "speed":[3,3,4,5,6,6,7,8],
            "might":[3,3,3,4,5,6,7,8],
            "sanity":[3,3,3,4,5,6,6,6],
            "knowledge":[2,3,3,4,5,6,7,8],
            "imgRel":"./resources/img/heather_granville.jpg",
            "index":[2,2,2,4],
            "color_hex":"#7e516f"
        },
        {
            "name":"Peter Akimoto",
            "speed":[3,3,3,4,6,6,7,7],
            "might":[2,3,3,4,5,5,6,8],
            "sanity":[3,4,4,4,5,6,6,7],
            "knowledge":[3,4,4,5,6,6,7,8],
            "imgRel":"./resources/img/peter_akimoto.jpg",
            "index":[3,2,3,2],
            "color_hex":"#3b6c44"
        }
    ],
    "monsters": [
        {
            "name":"Zombie",
            "speed":2,
            "might":6,
            "sanity":2,
            "imgRel":""
        },
    ],
    "boss": [
        {
            "name":"The Madman",
            "speed":3,
            "might":5,
            "sanity":5,
            "imgRel":""
        }
    ]
}

var items = {

} 

var inventory = {

}

function loadCharacters() {
    var card;
    var index;
    var hero = h10_entites.heroes;
    for(i = 0; i < h10_entites.heroes.length; i++) {
        index = hero[i].index;
        card = '<div class="ch-card" onclick="confirm_character(\'' + hero[i].name + '\')"><img src=' + hero[i].imgRel + '><div class="ch-card-container"><h3 style="color: ' + hero[i].color_hex + '">' + hero[i].name +'</h3><table style="width: 100%;"><tr><th>Physical</th><th>Mental</th></tr><tr><td>Speed: <span class="val">' + hero[i].speed[index[0]] + '</span></th><td>Sanity: <span class="val">' + hero[i].sanity[index[2]] + '</span></td></tr><tr><td>Might: <span class="val">' + hero[i].might[index[1]] + '</span></td><td>Knowledge: <span class="val">' + hero[i].knowledge[index[3]] + '</span></td></tr></table></div></div>';
        document.getElementById("characters").insertAdjacentHTML("beforeend", card)
    }
}

function confirm_character(name) {
    h10_entites.heroes.forEach(function(hero, i) {
        if(hero.name == name) {
            document.getElementById("nameph").innerHTML = hero.name;
            var card = card = '<div class="ch-card" style="cursor: default;"><img src=' + hero.imgRel + '><div class="ch-card-container"><h3 style="color: ' + hero.color_hex + '">' + hero.name +'</h3><table style="width: 100%;"><tr><th>Physical</th><th>Mental</th></tr><tr><td>Speed: <span class="val">' + hero.speed[hero.index[0]] + '</span></th><td>Sanity: <span class="val">' + hero.sanity[hero.index[2]] + '</span></td></tr><tr><td>Might: <span class="val">' + hero.might[hero.index[1]] + '</span></td><td>Knowledge: <span class="val">' + hero.knowledge[hero.index[3]] + '</span></td></tr></table></div></div>';
            document.getElementById("confirm-card-container").insertAdjacentHTML("beforeend", card);
        }
        // console.log(hero.name);
    });

    document.getElementById("confirm").style.display = 'block';
    document.getElementById("select-character").style.display = 'none';
}

function goBack() {
    document.getElementById("confirm").style.display = 'none';
    document.getElementById("confirm-card-container").innerHTML = '';
    document.getElementById("select-character").style.display = 'block';
}

function confirmed() {
    document.getElementById("confirm").style.display = 'none';
}

function initialize() {
    console.log(h10_entites, items, inventory);

    loadCharacters();
    
    // Describe what to expect in game
    // choosing a character
    // Begin game
        // Movement 
}

initialize();


function tester() {
    console.log("It'll do stuff :D");
}