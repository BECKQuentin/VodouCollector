import { Controller } from '@hotwired/stimulus';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

export default class extends Controller {

    // connect() {
    //     // this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    //     console.log('ok')
    // }
    // static targets = [
    //     'button'
    // ]
    // static values = {
    //     url: String,
    //     interval: Number,
    //     params: Object,
    // }

    connect() {

    }

    addGroupBookmark(e) {
        let button = e.currentTarget;
        console.log(e);
    }


    saveBookmark(e) {
        let button = e.currentTarget;
        fetch(e.currentTarget.dataset.url).then( (response) => {
            button.querySelector('i').classList.toggle('fa-regular')
            button.querySelector('i').classList.toggle('fa-solid')
            if (button.querySelector('i').classList.contains('fa-regular')) {
                button.title = 'Ajouter aux favoris';
            } else {
                button.title = 'Retirer des favoris';
            }
            return response.blob();
        })
    }



}
