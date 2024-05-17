const formPost = function(){
    $('#submit').on('click',
    function(){
        const email=$('#emailFormControlInput').val();
        const text=$('#messageFormControlInput').val();
        $.ajax({
            method: "POST",
            url: "form",
            data: { email: email, text: text }
        }).done(function(e) {
            console.log( "Success: " + e );
        }).fail(function() {
            console.log( "error" );
            modalContentChange();
        }).always(function(){
            //Display modal
            $('#modalTrigger').trigger('click')
            })
    }) 
}


const modalContentChange = function() {
    /**
     * Update modal only on submit failure
     */

    //Header
    $('#modalTitle').text("Failure")
    //Body
    $('#modalText').text("Failed to submit form")
    //Icon 
    $('#modalIcon').removeClass().addClass("bi bi-exclamation-circle");
    //
    $('#acknowledge').removeClass().addClass("btn btn-danger");
    
}

$(document).ready(()=>{
    formPost()
})