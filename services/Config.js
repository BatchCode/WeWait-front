const CONFIGS = {
    API: {
        URL: "https://wewaitapi.azurewebsites.net/api",
        // URL: "https://api.punkapi.com/v2",
        HEADERS: {
            "Content-Type": "application/json",
            Accept: "application/json",
            'Access-Control-Allow-Origin': '*',
        },
    },
    API_ERR: {
        ACC_NOT_FOUND: "[ERREUR] Login/Mot de passe incorrect",
        ACC_ALREADY_EXIST: "[ERREUR] Ce compte existe déjà!"
        // ERROR: `[FATAL] API Error - Unable to complete request \n`,
        // ERROR_CODE: `[FATAL] API Error : err`,
        // NOT_FOUND: `[FATAL] Data not found \n`,
        // CONFLICT: `[FATAL] Data already exists \n`,
    },
    MSG: {
        EMPTY_FIELD: `[ERR] Champs vide :`,
        WRONG_DATA: `[ERR] Saisie incorrecte`,
    }
}

export default CONFIGS;