const baseURL= 'https://pokeapi.co/api/v2/pokemon/';
const searchInput = document.querySelector('.search-input');
const pokemoncontainer = document.querySelector('.card-container');
const formInput = document.querySelector('#formInput')


//busco el pokemon concatenando la base url con el id que obtengo del input

const pokemones = async (id) => {
    try {
        const response = await fetch(baseURL+id);
        const pokemon = await response.json();
        // console.log(pokemon);
        renderpokemon(pokemon);
        
    } catch (error) {
        alert (`No se han encontrado pokemon's con ese ID`);
    }
}

const renderpokemon = pokemon => {
    const img = pokemon.sprites.other.home.front_default;
    const tipo = pokemon.types[0].type.name; 
    const {name,height,weight} = pokemon;
    pokemoncontainer.innerHTML = 
`
    <div class="card">
        <h1>${name}</h1>
        <img src="${img}"  width="300px"  />
        <h2>Tipo: ${tipo}</h2>
        <h2>Altura: ${height / 10} Metros</h2>
        <h2>Peso: ${weight / 10} Kilogramos</h2>
    </div> 
    
`
}


formInput.addEventListener('submit', e => {
    // Cancelo comportamiento por defecto del input con preventDefault
    e.preventDefault();
    // Creo variable que capture el valor del input.
    const valor = searchInput.value;
    // console.log(valor);
    if (searchInput.value > 0  ){
    pokemones(valor);
}
    else{
    alert(`Por favor ingrese un número`);
}
    searchInput.value = '';
});