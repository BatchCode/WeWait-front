import CONFIG from 'con';

export function Event(category)
{
    const body = {"category": category}

    return fetch(`${CONFIGS.API.URL}/Events`, {
        method: 'GET', 
        headers: CONFIGS.API.HEADERS, 
        body: JSON.stringify(body)
    })
    .then((res)=> {
        if(res.status !== 200) {
            throw new Error(`${res.status} - Erreur d'authentification`);
        }
        return res.json()
    })

}