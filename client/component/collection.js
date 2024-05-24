//REQUEST PRODUCT DATA
const fetchCollection = function (page) {
    $.ajax({
        async: true,
        method: "POST",
        url: "collection",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: { page }
    }).done(function ({ content, payload }) {
        if (content) {
            products(payload);
        }
    }).fail(function (e) {
        console.log("ERROR   ", e);
    })
};

//MAKE PRODUCTS
const products = (products) => {
    $('#products').empty();
    products.map(function (data) {
        $('#products').append(product(data));
    });
};

//HTML SKELETON FOR INDIVIDUAL PRODUCT
const product = ({ name, description, url }) => {
    //mock url for src
    return `<div class="col-2" style="width: 18rem;">
    <div class="card" style="height: 100%;">
        <img src="https://placehold.co/200x200" class="card-img-top" alt="...">
        <div class="card-body" style="height: 100%; overflow-y: auto;">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
        </div>
    </div>
</div>`
};