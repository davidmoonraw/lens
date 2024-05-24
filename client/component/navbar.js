$(document).ready(()=>{

    //change to JQUERY
    let body  = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', navbarHTML)

})


const navbarHTML = `<!--NAVIGATION BAR-->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">

      <a class="navbar-brand" href="#">
        <img src="./assets/glasskatana.jpg" class="img-thumbnail rounded-circle" alt="..." width="90" height="48">
      </a>

      <button class="navbar-toggler" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Features</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#successstory">Stories</a>
          </li>

          <li class="nav-item">
            <a id="collection" class="nav-link" href="#collection">Collection</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#contactus">Contact us</a>
          </li>

        </ul>
      </div>
    </div>
</nav>`