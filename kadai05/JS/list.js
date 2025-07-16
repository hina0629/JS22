/* ポケモン一覧の表示 */
const pokemonList = document.getElementById("pokemonList");

for (let i = 1; i <= 151; i++) {
    // ポケモンの番号をゼロパディング
    const listPaddedNumber = String(i).padStart(3, '0');

    const pokemonListCard = document.createElement('div');
    pokemonListCard.classList.add('pokemon-list-card');

    const pokemonListImage = document.createElement('img');
    pokemonListImage.src = `./img/${listPaddedNumber}.png`;
    pokemonListImage.alt = `ポケモンNo.${listPaddedNumber}`;
    console.log(`No.${listPaddedNumber}`);

    // マウスオーバーでGIFに変更
    pokemonListImage.addEventListener("mouseover", function () {
        pokemonListImage.src = `./img/${listPaddedNumber}gif.png`;
    });

    // 元の画像に戻す
    pokemonListImage.addEventListener("mouseout", function () {
        pokemonListImage.src = `./img/${listPaddedNumber}.png`;
    });

    
    // 日本語名の取得
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
    .then(response => response.json())
    .then(data => {
    const japaneseName = data.names.find(name => name.language.name === 'ja');
    const name = japaneseName ? japaneseName.name : '名前不明';

    const nameElement = document.createElement('p');
    nameElement.textContent = `${name}`;
    nameElement.classList.add('dotgothic16-regular');
    pokemonListCard.appendChild(nameElement);
    });

    pokemonListCard.appendChild(pokemonListImage);
    pokemonList.appendChild(pokemonListCard);
}