/* ポケモン一覧 */
const pokemonList = document.getElementById("pokemonList");

const typeButtons = document.getElementById("typeButtons");
let allPokemonData = [];

const footer = document.querySelector('.footer-wrapper');

const buttons = typeButtons.querySelectorAll('button');

// ポケモンのデータを取得
async function fetchPokemonData(id) {
    const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const speciesData = await speciesRes.json();
    const nameData = speciesData.names.find(name => name.language.name === 'ja');
    const name = nameData ? nameData.name : '名前不明';

    const typeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const typeData = await typeRes.json();
    const types = typeData.types.map(type => type.type.name);

    return { id, name, types };
}

async function loadAllPokemon() {
    for (let i = 1; i <= 151; i++) {
        const data = await fetchPokemonData(i);
        allPokemonData.push(data);
    }
    displayPokemon(allPokemonData);
}

function displayPokemon(pokemonArray) {
    // いったんクリア
    pokemonList.innerHTML = '';

    // 該当ポケモンがいないとき
    if (pokemonArray.length === 0) {
        const messege = document.createElement('p');
        messege.textContent = '該当するポケモンなし';
        messege.classList.add('notfound');
        messege.classList.add('pokemon-list-card');
        pokemonList.classList.remove('pokemon-list');
        pokemonList.appendChild(messege);
        footer.classList.add('footer-notfound');
        return;
    }

    pokemonArray.forEach(pokemon => {
        pokemonList.classList.add('pokemon-list');
        footer.classList.remove('footer-notfound');

        // ポケモンの番号をゼロパディング
        const listPaddedNumber = String(pokemon.id).padStart(3, '0');
        const card = document.createElement('div');
        card.classList.add('pokemon-list-card');

        const img = document.createElement('img');
        img.src = `./img/${listPaddedNumber}.png`;
        img.alt = `ポケモンNo.${listPaddedNumber}`;

        // マウスオーバーでGIFに変更
        img.addEventListener("mouseover", function () {
            img.src = `./img/${listPaddedNumber}gif.png`;
        });
        // 元の画像に戻す
        img.addEventListener("mouseout", function () {
            img.src = `./img/${listPaddedNumber}.png`;
        });

        // 名前
        const nameElement = document.createElement('p');
        nameElement.textContent = pokemon.name;
        nameElement.classList.add('dotgothic16-regular');

        card.appendChild(img);
        card.appendChild(nameElement);
        pokemonList.appendChild(card);
    });
}

// タイプボタン
typeButtons.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const selectedType = event.target.dataset.type;
        const filtered = allPokemonData.filter(pokemon => 
            pokemon.types.includes(selectedType));
        displayPokemon(filtered);
        const selectButton = document.getElementById(selectedType);
        selectButton.classList.add('select-button');
        // 他のボタンの選択状態を解除
        buttons.forEach(button => {
            if (button !== selectButton) {
                button.classList.remove('select-button');
            }
        });
    }
});

// クリアボタン
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function () {
    displayPokemon(allPokemonData);
    buttons.forEach(button => {
        button.classList.remove('select-button');
    });
});

// 検索
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const keyword = event.target.value.trim().toLowerCase();
        const filtered = allPokemonData.filter(pokemon => 
            pokemon.name.toLowerCase().includes(keyword));
        displayPokemon(filtered);
        buttons.forEach(button => {
            button.classList.remove('select-button');
        });
    }
});

const params = new URLSearchParams(window.location.search);
const keyword = params.get("search");

if (keyword) {
    const filtered = allPokemonData.filter(pokemon => 
        pokemon.name.toLowerCase().includes(keyword));
    displayPokemon(filtered);
    buttons.forEach(button => {
            button.classList.remove('select-button');
    });
}

// 初期ロード
loadAllPokemon();