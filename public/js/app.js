// $(function(){
//     //init des balises de tags
//     $('.tag-input').tagsinput();
//     $('.input_edit_tags input').attr('onkeyup', "this.value=this.value.replace(/[^a-zA-Z,éèàùçêâ-]/g,'');");
//
//
//     //Récupération des tags de la BBD renvoyer par l'url tags-json
//     $.get("/tags-json", function( data ) {
//         let availableTags = []
//         for(i = 0; i < data.length; i++) {
//             availableTags.push(data[i].name)
//         }
//         // availableTags.forEach((tag) => {
//         //     $('#allTagsDropdown ul').append(
//         //         `<li class="dropdown-item">
//         //             `+tag+`
//         //         </li>`
//         //     )
//         // })
//
//         $('.input_edit_tags input').autocomplete({
//             source: availableTags,
//             messages: {
//                 noResults: '',
//                 results: '',
//             }
//
//         })
//     });
//

//
//
//
// })//JQuery