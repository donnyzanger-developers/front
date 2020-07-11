var url = new URL(window.location.href);
var id = url.searchParams.get("id");

async function main() {
    const res = await fetch(API + `/admin/users/${id}`, {
        headers: {
            'Authorization': localStorage.getItem('googleToken')
        }
    })
    const user = await res.json();
    document.getElementById('email').innerHTML = user.email;
    document.getElementById('delete').addEventListener('click', async e => {
        var result = confirm("Want to delete?");
        if (result) {
            const res = await fetch(API + '/admin/users/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('googleToken')
                }
            })
            // const deletedUser = await res.json();
            window.location = '/admin.html';
        }
    });
}

main();