export async function all(){
    let data = await makeRequest('https://ragnar2019.firebaseio.com/cars.json?auth=2wUlcDoifwuTy8NjhflVJF6BhDFMVpcom342PVHl');
    return data;
}

export async function one(id){
    let data = await makeRequest(`/js-frontend-api/articles.php?id=${id}`);
    return data;
}

export async function remove(id){
    let data = await makeRequest(`/js-frontend-api/articles.php?id=${id}`, {
        method: 'DELETE'
    });

    return data;
}

export async function add(article){
    let formData = new FormData();

    for(let name in article){
        formData.append(name, article[name]);
    }

    let data = await makeRequest('/js-frontend-api/articles.php', {
        method: 'POST',
        body: formData
    });

    return data;
}

export async function edit(id, article){
    let forServer = {
        ...article,
        id
    };

    let data = await makeRequest('/js-frontend-api/articles.php', {
        method: 'PUT',
        body: JSON.stringify(forServer)
    });

    return data;
}

function makeRequest(url, options = {}){
    return fetch(url, options).then((response) => {
        if (response.status !== 200){
            return response.text().then((text) => {
                throw new Error(text);
            });
        }

        return response.json();
    });
}

