// async function userPaid() {
//     const res = await fetch(API + '/user_paid', {
//         headers: {
//             'Authorization': localStorage.getItem('googleToken')
//         },
//     })
//     const userPaid = await res.json();
    
//     return userPaid;
// }

// function main() {
//     if (await userPaid()) {
//         window.location = '/content.html';
//     }
// }

// main();