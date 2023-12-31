document.addEventListener('DOMContentLoaded', () => {
    const pokemonList = document.getElementById('pokemonList');
  
    function fetchPokemonList() {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
          data.results.forEach(pokemon => {
            const listItem = document.createElement('li');
            const pokemonUrl = pokemon.url;
  
            fetch(pokemonUrl)
              .then(response => response.json())
              .then(pokemonData => {
                const image = document.createElement('img');
                image.src = pokemonData.sprites.front_default;
                image.alt = pokemonData.name;
  
                listItem.appendChild(image);
  
                const name = document.createElement('span');
                name.textContent = pokemonData.name;
                listItem.appendChild(name);
  
               
                listItem.addEventListener('click', () => {
                  window.open(`pokemon.html?url=${pokemonUrl}`, '_blank');
                });
              })
              .catch(error => console.error('Erro ao buscar dados do Pokémon:', error));
  
            listItem.classList.add('pokemon-item');
            listItem.dataset.url = pokemonUrl;
  
            pokemonList.appendChild(listItem);
          });
        })
        .catch(error => console.error('Erro ao buscar a lista de Pokémon:', error));
    }
  
    fetchPokemonList();
  });
  