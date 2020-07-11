function onSignIn(googleUser) {
    const id_token = googleUser.getAuthResponse().id_token;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', API + '/tokensignin');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        document.getElementById("email-address").innerHTML = xhr.responseText;
        localStorage.setItem('googleToken', id_token);
        showAdminLink();
    };
    xhr.send('idtoken=' + id_token);
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        document.getElementById("email-address").innerHTML = '&nbsp;';
        localStorage.removeItem('googleToken');
        showAdminLink();
    });

}

async function userAdmin() {
    const res = await fetch(API + '/user_admin', {
        headers: {
            'Authorization': localStorage.getItem('googleToken')
        },
    })
    const userAdmin = await res.json();

    return userAdmin;
}

async function showAdminLink() {
    if (localStorage.getItem('googleToken')) {
        const admin = await userAdmin();
        if (admin) {
            document.getElementById("admin").hidden = false;
        }
    } else {
        document.getElementById("admin").hidden = true;
    }
}

showAdminLink();