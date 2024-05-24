//POST CONTACT US COMMENT
const formPost = function () {
  $('#submit').on('click',
    function () {
      // Gather user input data
      const email = $('#emailFormControlInput').val();
      const text = $('#messageFormControlInput').val();
      $.ajax({
        method: "POST",
        url: "form",
        data: { email: email, text: text },
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8"
      }).done(function (e) {
        console.log("Success: " + e);
      }).fail(function () {
        console.log("error");
        modalContentChange();
      }).always(function () {
        //Display modal
        $('#modalTrigger').trigger('click');
      })
    });
};

const modalContentChange = function () {
  /**
   * Update modal only on submit failure
   */

  //Header
  $('#modalTitle').text("Failure");
  //Body
  $('#modalText').text("Failed to submit form");
  //Icon 
  $('#modalIcon').removeClass().addClass("bi bi-exclamation-circle");
  //
  $('#acknowledge').removeClass().addClass("btn btn-danger");
};

// HTML MODAL SKELETON
let modal = `<!--MODAL-->
<div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalTitle">Success</h1>
          
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <span id="modalText">Your form has been succesfully submited</span>
          <i id="modalIcon" class="bi bi-check-circle text-success "></i>      
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button id="acknowledge" type="button" class="btn btn-success" data-bs-dismiss="modal">Acknowledged</button>
        </div>
      </div>
    </div>
  </div>
<!-- Trigger Modal -->
<button hidden id='modalTrigger'type="button"  data-bs-toggle="modal" data-bs-target="#formModal""></button>`;


$(document).ready(() => {
  $('body').append(modal);
  formPost();
});