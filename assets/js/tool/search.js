// let search_item_toolbar = document.getElementById('search_item_toolbar')
let deploy_search_filter = document.getElementById('deploy_search_filter');

//Affichage des filtres de recherche
if (deploy_search_filter) {
    deploy_search_filter.addEventListener("click", () => {
        let search_filter_to_hide = document.getElementById('search_filter_to_hide');
        let i = deploy_search_filter.querySelector('.fas');
        i.classList.toggle('fa-chevron-up')
        i.classList.toggle('fa-chevron-down')
        search_filter_to_hide.classList.toggle('fadeIn')
        search_filter_to_hide.classList.toggle('fadeOut')
        setTimeout( () => {
            search_filter_to_hide.classList.toggle('hide')
            search_filter_to_hide.classList.toggle('show')
        }, (550))
    })
}


const isSortAlpha = document.getElementById('isSortAlpha')
const isSortAlphaReverse = document.getElementById('isSortAlphaReverse')
const isSortNumeric = document.getElementById('isSortNumeric')
const isSortNumericReverse = document.getElementById('isSortNumericReverse')
const sortDateUpdate = document.getElementById('sortDateUpdate')

isSortAlpha.addEventListener('change', e => {
    if(e.target.checked === true) {
        isSortAlphaReverse.checked = false
        isSortNumeric.checked = false
        isSortNumericReverse.checked = false
        sortDateUpdate.checked = false
    }
})
isSortAlphaReverse.addEventListener('change', e => {
    if(e.target.checked === true) {
        isSortAlpha.checked = false
        isSortNumeric.checked = false
        isSortNumericReverse.checked = false
        sortDateUpdate.checked = false
    }
})
isSortNumeric.addEventListener('change', e => {
    if(e.target.checked === true) {
        isSortAlpha.checked = false
        isSortAlphaReverse.checked = false
        isSortNumericReverse.checked = false
        sortDateUpdate.checked = false
    }
})
isSortNumericReverse.addEventListener('change', e => {
    if(e.target.checked === true) {
        isSortAlpha.checked = false
        isSortAlphaReverse.checked = false
        isSortNumeric.checked = false
        sortDateUpdate.checked = false
    }
})
sortDateUpdate.addEventListener('change', e => {
    if(e.target.checked === true) {
        isSortAlpha.checked = false
        isSortAlphaReverse.checked = false
        isSortNumeric.checked = false
        isSortNumericReverse.checked = false
    }
})
