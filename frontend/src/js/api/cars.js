import axios from 'axios';

export async function all(){
    let data = await makeRequest('https://ragnar2019.firebaseio.com/data.json?auth=2wUlcDoifwuTy8NjhflVJF6BhDFMVpcom342PVHl');
    return data;
}

export async function add(car){
    let data = await makeRequest('https://ragnar2019.firebaseio.com/data.json?auth=2wUlcDoifwuTy8NjhflVJF6BhDFMVpcom342PVHl', {
        method: 'POST',
        data: JSON.stringify(car) // data - для axios, body - для fetch
    });

    return data;
}

//  AB: общий функционал для запросов;
function makeRequest(url, options = {}){
    return axios(url, options)                 // axios.get() - по умолчанию;
        .then((response) => {
        return response.data;
    });
}

// Пример Fetch;

// function makeRequest(url, options = {}){
//     return fetch(url, options).then((response) => {
//         if (response.status !== 200){
//             return response.text().then((text) => {
//                 throw new Error(text);
//             });
//         }
//
//         return response.json();
//     });
// }

