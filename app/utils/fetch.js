
const getUser = (id = '') => {
    return fetch(`http://profileservice.lourencosanti.com/api/users/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
}

export {
    getUser
}