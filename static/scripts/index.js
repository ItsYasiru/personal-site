const webhook = "https://discord.com/api/webhooks/881194999931371539/O2BOM8WIQjS_bzSky06QabKrSS60XyjpWXi9KtJZwpJ8eERtvrAK_mvoaikvOTnkgmmQ" // Leave it alone :'D

function sendMessage(content) {
    var request = new XMLHttpRequest();
    request.open("POST", webhook);

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        content: content
    }

    request.send(JSON.stringify(params));
}

function showForm() {
    var form = document.getElementById('form');
    var formButton1 = document.getElementById('form-button-1');
    var formButton2 = document.getElementById('form-button-2');

    form.style.display = 'contents';
    formButton1.style.display = 'none';
    formButton2.style.display = 'block';
}

function submitForm() {
    var name = document.getElementById('form-name').value;
    var email = document.getElementById('form-email').value;

    if (name == '' || email == '') {
        alert("Fields cannot be empty!")
    }

    sendMessage(`Client request Name: **'${name}'** Email: **'${email}'**`)

    var form = document.getElementById('form');
    var formButton1 = document.getElementById('form-button-1');
    var formButton2 = document.getElementById('form-button-2');

    form.style.display = 'none';
    formButton1.style.display = 'none';
    formButton2.style.display = 'none';
}
