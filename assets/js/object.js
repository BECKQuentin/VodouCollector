let idObject = document.querySelector('.content_box');

if (idObject.dataset) {
    idObject = idObject.dataset.idObject
    let idsSearchObjs = localStorage.getItem('idsSearchObjs').split(',');

    //Si object inclut dans la recherche
    if (idsSearchObjs.includes(idObject)) {

        let indexOfObject = idsSearchObjs.indexOf(idObject);
        let idPrevElement = idsSearchObjs.at(indexOfObject-1);
        let idNextElement = idsSearchObjs.at(indexOfObject+1);

        //Si dernier element du tableau
        if (indexOfObject === idsSearchObjs.length-1) {
            idNextElement = idsSearchObjs[0];
        }

        //Changement des url de navigation des fiches suivantes
        let prevObject = document.getElementById('prev_object');
        let nextObject = document.getElementById('next_object');

        prevUrl = window.location.pathname.replace('/'+idObject, '/'+idPrevElement);
        nextUrl = window.location.pathname.replace('/'+idObject, '/'+idNextElement);

        prevObject.setAttribute('href', prevUrl);
        nextObject.setAttribute('href', nextUrl);

    } else {
        //n'est pas dans la liste, désafficher les icons de navigation suivant et précedent des fiches objets
    }
}

