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
        window.location = '/';
    } else {
        const isAdmin = await userAdmin()
        if (!isAdmin) {
            window.location = '/';
        }
    }
    const res = await fetch(API + '/admin/users', {
        headers: {
            'Authorization': localStorage.getItem('googleToken')
        }
    })
    const users = await res.json();
    var html = `
        <div class="col-container">
            <div class="col">email</div>
            <div class="col">paid</div>
            <div class="col">admin</div>
            <div class="col">date</div>
            <div class="col">
                operations
            </div>
        </div>`
    users.forEach((user, i) => {
        html += ` 
            <div class="col-container">
                <div class="col">${user.email}</div>
                <div class="col">${user.paid}</div>
                <div class="col">${user.admin}</div>
                <div class="col">${user.created}</div>
                <div class="col">
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