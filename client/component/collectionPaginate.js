$(document).ready(()=>{
    $('#collection').on('click', function(){
        $('#main').hide();
        $('#products').removeClass('d-none');
        $('#pagination').removeClass('d-none');
        pageHandler(fetchCollection);
    })
});