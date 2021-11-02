import axios from 'axios';

//Using a dummy Pokemon API at https://pokeapi.co/
const BASE_URL: string = 'https://pokeapi.co/api/v2'; 

export function getPokemonById(id: number): Promise<object> {
    return new Promise((resolve, reject) => {
        axios
            .get(`${BASE_URL}/pokemon/${id}`)
            .then((resp) => {
                resolve(resp.data);
            })
            .catch(reject);
    });
}

export function getPokemonTypeById(id: number): Promise<object> {
    return new Promise((resolve, reject) => {
        axios
            .get(`${BASE_URL}/type/${id}`)
            .then((resp) => {
                resolve(resp.data);
            })
            .catch(reject);
    });
}

export default { getPokemonById, getPokemonTypeById };