$(function(){

    let root = document.documentElement

    window.onload = () => {
        let mainColorInput = document.getElementById('color_main_choice')
        let secondColorInput = document.getElementById('color_second_choice')
        let thirdColorInput = document.getElementById('color_third_choice')
        let textColorInput = document.getElementById('color_text_choice')

        if (localStorage.getItem('main-color') || localStorage.getItem('second-color') || localStorage.getItem('third-color') || localStorage.getItem('text-color')) {
            //recuperation et utilisation des valuers stockées dans le dépôt local
            document.querySelector(':root').style.setProperty('--main', localStorage.getItem('main-color'));
            document.querySelector(':root').style.setProperty('--second', localStorage.getItem('second-color'));
            document.querySelector(':root').style.setProperty('--third', localStorage.getItem('second-color'));
            document.querySelector(':root').style.setProperty('--text', localStorage.getItem('text-color'));
            if ( mainColorInput != null) {
                //Affichage des couleurs récupérés dans l'input de choix des couleurs
                mainColorInput.value = localStorage.getItem('main-color');
                secondColorInput.value = localStorage.getItem('second-color');
                thirdColorInput.value = localStorage.getItem('third-color');
                textColorInput.value = localStorage.getItem('text-color');
            }
        } else {
            //charger les valeurs des variables css définies dans l'input de choix des couleurs
            let mainColor = getComputedStyle(root).getPropertyValue('--main')
            let secondColor = getComputedStyle(root).getPropertyValue('--second')
            let thirdColor = getComputedStyle(root).getPropertyValue('--third')
            let textColor = getComputedStyle(root).getPropertyValue('--text')
            mainColorInput.value = mainColor.trim()
            secondColorInput.value = secondColor.trim()
            thirdColorInput.value = thirdColor.trim()
            textColorInput.value = textColor.trim()
        }
    }

    //Changer les valeurs de couleur au cliques
    $('#color_choice button').click(function() {
        //recuperation des valeurs des inputs color
        let inputMainColor = document.getElementById("color_main_choice").value;
        let inputSecondColor = document.getElementById("color_second_choice").value;
        let inputThirdColor = document.getElementById("color_third_choice").value;
        let inputTextColor = document.getElementById("color_text_choice").value;
        //changement des variables avec les valeurs récupérées
        root.style.setProperty('--main', inputMainColor)
        root.style.setProperty('--second', inputSecondColor)
        root.style.setProperty('--third', inputThirdColor)
        root.style.setProperty('--text', inputTextColor)
        //stockage dans le dépôt local
        localStorage.setItem('main-color', inputMainColor);
        localStorage.setItem('second-color', inputSecondColor);
        localStorage.setItem('third-color', inputThirdColor);
        localStorage.setItem('text-color', inputTextColor);
    })

    //function reset color
    $('#reset_color').click(function() {
        localStorage.removeItem('main-color')
        localStorage.removeItem('second-color')
        localStorage.removeItem('third-color')
        localStorage.removeItem('text-color')

        location.reload(true)
    })


})//JQuery