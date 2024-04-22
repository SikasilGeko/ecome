export let datazacena = JSON.parse(localStorage.getItem(`data`));
if (!datazacena) {
    datazacena = [];
}

export function addtoStorage() {
    localStorage.setItem(`data`, JSON.stringify(datazacena))
}