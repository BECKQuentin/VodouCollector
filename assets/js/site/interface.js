let toolbar = document.getElementById('toolbar');
let page = document.getElementById('page');
let textNavLink = document.querySelectorAll('.nav-link span');

let hideToolbar = document.getElementById('hideToolbar');

hideToolbar.addEventListener('click', () => {
    retractToolbar();
})

if (localStorage.getItem('retractToolbar') === 'true') {
    retractToolbar();
}

function retractToolbar() {
    toolbar.classList.toggle('toolbar_retract');
    page.classList.toggle('toolbar_retract_page');
    hideToolbar.querySelector('i').classList.toggle('fa-chevron-right')
    hideToolbar.querySelector('i').classList.toggle('fa-chevron-left')

    toolbar.classList.toggle('col-md-2');
    page.classList.toggle('offset-md-2');
    page.classList.toggle('col-md-10');

    if (toolbar.classList.contains('toolbar_retract')) {
        hideShowToolbarSpan()
        localStorage.setItem('retractToolbar', 'true');
    } else {
        localStorage.setItem('retractToolbar', 'false');
        setTimeout(() => {
            hideShowToolbarSpan()
        }, 200)
    }
    function hideShowToolbarSpan() {
        textNavLink.forEach((item) => {
            item.classList.toggle('d-md-inline');
        })
    }
}




