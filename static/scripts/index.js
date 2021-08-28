const request = new XMLHttpRequest();

const webhook = "https://discord.com/api/webhooks/881194999931371539/O2BOM8WIQjS_bzSky06QabKrSS60XyjpWXi9KtJZwpJ8eERtvrAK_mvoaikvOTnkgmmQ" // Leave it alone :'D

const form = document.getElementById('form');
const formButton = document.getElementById('form-button');

function sendMessage(content) {
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        content: content
    }

    request.send(JSON.stringify(params));
}

function openForm() {
    form.style.display = 'contents';
    formButton.style.display = 'none';
    window.location.href='#form'
}

function submitForm() {
    var name = document.getElementById('form-name').value;
    var email = document.getElementById('form-email').value;

    if (name == '') {
        alert("Name cannot be empty!")
        window.location.href='#form-name'
    } else if (email == '') {
        alert("Email cannot be empty!")
        window.location.href='#form-email'
    } else {
        form.style.display = 'none';
        sendMessage(`Client request Name: **'${name}'** Email: **'${email}'**`)
    }
}

function closeForm() {
    window.location.href='#services'
    form.style.display = 'none';
    formButton.style.display = 'block';
}
