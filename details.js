document.addEventListener('DOMContentLoaded', () => {
    const pokemonDetails = document.getElementById('pokemonDetails');
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonUrl = urlParams.get('url');
  
    function fetchPokemonDetails() {
      fetch(pokemonUrl)
        .then(response => response.json())
        .then(pokemon => {
          const detailsContainer = document.createElement('div');
          detailsContainer.innerHTML = `
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p><strong>Height:</strong> ${pokemon.height / 10} m</p>
            <p><strong>Weight:</strong> ${pokemon.weight / 10} kg</p>
            <p><strong>Abilities:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
            <p><strong>Types:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
            <div>
            <h3>Base Stats:</h3>
            <ul>
              ${pokemon.stats.map(stat => `<li><strong>${stat.stat.name}:</strong> ${stat.base_stat}</li>`).join('')}
            </ul>
            </div>
          `;
  
          pokemonDetails.appendChild(detailsContainer);
        })
        .catch(error => console.error('Erro ao buscar os detalhes do Pokémon:', error));
    }
  
    fetchPokemonDetails();
  });
  