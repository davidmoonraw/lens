$(document).ready(()=>{

    //change to JQUERY
    let body  = document.querySelector('#main');
    body.insertAdjacentHTML('beforeend', footerHTML)

});

// HTML FOOTER SKELETON
const footerHTML = `<!--Footer-->     
<div class="row gy-5">
<div class="col-12 text-center">
<footer>Copyright Lens ~ 2024</footer>
</div>
</div>`
