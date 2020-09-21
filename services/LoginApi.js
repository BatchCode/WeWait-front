const rootEndpoint = "https://api.punkapi.com/v2";

const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
}

export const getRandomBrewdog = () => {
    fetch(`${rootEndpoint}/beers/random`, { headers }).then(
        ({ status, json }) => {
            if (status != 200) 
                throw new Error(`[FATAL] Got response from API: err ${status}`);
            else return json.json()
        }
    )
}