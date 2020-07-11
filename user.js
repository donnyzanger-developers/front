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
    document.getElementById('paid').value = user.paid;
    document.getElementById('save').addEventListener('click', async e => {
        var paid = document.getElementById('paid').value;
        const res = await fetch(API + '/admin/users/' + id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('googleToken')
            },
            body: JSON.stringify({
              paid: paid
            })
        })
        const updatedUser = await res.json();
        window.location = '/admin.html';
    });
}

main();

// document.getElementById('paid').addEventListener('change', e => {
// alert(document.getElementById('paid').value)
// });