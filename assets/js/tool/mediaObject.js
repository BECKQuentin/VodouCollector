let media_form_name = document.getElementById('media_form_name');
//Affichage des noms des Fichiers ajoutés en temp de l'input
media_form_name.onchange = function(e) {
    let media_form_name = document.getElementById('objects_media_input_file_name');
    let files = e.target.files;
    if (files.length > 0) {
        media_form_name.style.display = 'block';
        for (let i = 0; i < files.length; i++) {
            let li = document.createElement('li');
            li.innerText = files[i].name;
            media_form_name.appendChild(li);
        }
    }
}

