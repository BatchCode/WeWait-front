import CONFIGS from './Config'

export function isLoggedIn() {
    return localStorage.getItem('access_token') !== null;
}

let a = "lol"
let b = " OMG"

export function Login(email, pwd, type) {

    // console.log(type)

    const body = {"email": email, "password": pwd} 

    // a = "changed";
    return fetch(`${CONFIGS.API.URL}/Auth/User`, {
        method: 'POST',
        headers: CONFIGS.API.HEADERS,
        body: JSON.stringify(body)
    })
    .then((res) => {
        if (res.status !== 200) {
            throw new Error (`${res.status} : Erreur d'authentification`);
        }

        // res.json().then(tok => console.log(tok.token))
        return res.json()

        // console.log(res.json())

        // return res.json()
    })
    
    // .then((res) => {
    //     let token = res.token;
    //     console.log(token)

    //     localStorage.setItem('access_token', "Bearer " + token)

    //     console.log(res)
        
    //     return res
    // })


    // return {a, b}
}