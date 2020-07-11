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
    const res = await fetch(API + '/admin/users', {
        headers: {
            'Authorization': localStorage.getItem('googleToken')
        }
    })
    const users = await res.json();
    var html = `
        <div class="row">
            <div class="col-3">email</div>
            <div class="col-1">paid</div>
            <div class="col-1">admin</div>
            <div class="col-3">date</div>
            <div class="col-4">
                operations
            </div>
        </div>`
    users.forEach((user, i) => {
        html += ` 
            <div class="row">
                <div class="col-3">${user.email}</div>
                <div class="col-1">${user.paid}</div>
                <div class="col-1">${user.admin}</div>
                <div class="col-3">${user.created}</div>
                <div class="col-4">
                    <button id="edit-${i}">edit</button>
                    <button id="delete-${i}">delete</button>
                </div>
            </div>`
    });
    document.getElementById('user-table').innerHTML = html;
    users.forEach((user, i) => {
    // for (var i=0; i < users.length; i++) {
        document.getElementById(`edit-${i}`).addEventListener('click', async e => {
            window.location = `/user.html?id=${user._id}`;
        });
        document.getElementById(`delete-${i}`).addEventListener('click', async e => {
            window.location = `/user/delete.html?id=${user._id}`;
        });
    });
}

main();