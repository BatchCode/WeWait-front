import configs from '../services/Config'

export const getRandomBrewdog = () => {
    return fetch(`${configs.API.ROOT_ENDPOINT}/beers/randdom`, {
        method: 'GET',
        headers: configs.API.HEADERS,
    })
    .then((res) => {
        if (res.status !== 200) {
            throw new Error(`${configs.API.ERROR_CODE} ${res.status}`);
        }
        return res.json()
    })
    .catch((err) => {
        throw new Error(`${configs.API.ERROR} ${err}`);
    })
}