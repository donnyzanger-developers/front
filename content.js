function getContent(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // console.log(xhr.response);
            } else {
                window.location = '/payments.html';
                localStorage.setItem('googleToken', localStorage.getItem('googleToken'));
            }
        }
    }
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Authorization', localStorage.getItem('googleToken'));
    xhr.send('');
}

const googleToken = localStorage.getItem('googleToken');
const url = API + '/content'; 

if (googleToken) {
    getContent(url);
} else {
    window.location = '/';
}