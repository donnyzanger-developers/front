async function userAdmin() {
    const res = await fetch(API + '/user_admin', {
        headers: {
            'Authorization': localStorage.getItem('googleToken')
        },
    })
    const userAdmin = await res.json();
    
    return userAdmin;
}

async function main() {
    const googleToken = localStorage.getItem('googleToken');  
    if (!googleToken) {
        window.location = '/index.html';
    } else {
        const isAdmin = await userAdmin()
        if (!isAdmin) {
            window.location = '/index.html';
        }
    }
}

main();