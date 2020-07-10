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
}

main();
