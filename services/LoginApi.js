import CONFIGS from './Config'

// Local storage does not work on android

// export function isLoggedIn() {
//     return localStorage.getItem('access_token') !== null;
// }

export function Login(email, pwd, type) {

    // console.log(type)

    const body = {"email": email, "password": pwd} 

    return fetch(`${CONFIGS.API.URL}/Auth/User`, {
        method: 'POST',
        headers: CONFIGS.API.HEADERS,
        body: JSON.stringify(body)
    })
    .then((res) => {
        if (res.status !== 200) {
            throw new Error(`${res.status} - Erreur d'authentification`);
        }

        return res.json()
    })
    .then((res) => {
        // localStorage.setItem('access_token', "Bearer " + res.token)
        // return
    })
}