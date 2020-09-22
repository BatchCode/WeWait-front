const configs = {
    API: {
        ROOT_ENDPOINT: "https://api.punkapi.com/v2", 
        HEADERS: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        ERROR: `[FATAL] API Error - Unable to complete request \n`,
        ERROR_CODE: `[FATAL] API Error : err`,
        NOT_FOUND: `[FATAL] Data not found \n`,
        CONFLICT: `[FATAL] Data already exists \n`,
    },
    MSG: {
        EMPTY_FIELD: `[ERR] Champs vide :`,
        WRONG_DATA: `[ERR] Saisie incorrecte`,
    }
}

export default configs;