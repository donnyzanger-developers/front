document.getElementById('convertHtmlToPdf').addEventListener('click', e => {
    const loader = document.getElementById('loader');
    const website = document.getElementById('websiteInput').value;

    loader.hidden = false;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', API + '/html_to_pdf');
    xhr.responseType = 'blob';
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == "200") {
            var a = document.createElement('a');
            var blob = new Blob([xhr.response]);
            var url = window.URL || window.webkitURL;
            var blobUrl = url.createObjectURL(blob);
            a.href = blobUrl;
            a.download = "pdfsync.pdf";
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            loader.hidden = true;
        } else {
            loader.hidden = true;
            alert('An error occurred!');
        }
    };
    xhr.send('website=' + website);
});

document.getElementById('convert-to-jpg-btn').addEventListener('click', e => {
    var file = document.getElementById("file-select").files[0];
    var formData = new FormData();
    // if (file.type.match('image.*')) {
    formData.append('file', file, file.name);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", API + '/pdf_to_image', true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            var a = document.createElement('a');
            var blob = new Blob([xhr.response]);
            var url = window.URL || window.webkitURL;
            var blobUrl = url.createObjectURL(blob);
            a.href = blobUrl;
            a.download = "pdf2jpg2pdf.jpg";
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
        } else {
            alert('An error occurred!');
        }
    }
    xhr.send(formData);
})

document.getElementById('convert-to-pdf-btn').addEventListener('click', e => {
    var file = document.getElementById('file-select-2').files[0];
    var formData = new FormData();
    // if (file.type.match('image.*')) {
    formData.append('file', file, file.name);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", API + '/image_to_pdf', true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            var a = document.createElement('a');
            var blob = new Blob([xhr.response]);
            var url = window.URL || window.webkitURL;
            var blobUrl = url.createObjectURL(blob);
            a.href = blobUrl;
            a.download = "pdf2jpg2pdf.pdf";
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
        } else {
            alert('An error occurred!');
        }
    }
    xhr.send(formData);
})