// Calculate page number and update html elements
const modifyPaginationNumbers = (move) => {
    $(".page-number a").map(function () {
        let currentValue = parseInt(this.innerHTML);
        const value = move === 'prev' ? currentValue - 1 : currentValue + 1;
        this.innerHTML = value;
    })
};
//Handle pagination flow
const pageHandler = function (fetch) {

    let page = { number: 1 };
    let index = { number: 0 };

    if (page.number == 1) {
        fetch(page);
    };
    $('.page-number').click(async () => {
        page = await $(this).text();
        fetch(page);
    });
    $('#prev').click(async () => {
        await prevItem(index, page, modifyPaginationNumbers);
        fetch(page);
    });
    $('#next').click(async () => {
        await nextItem(index, page, modifyPaginationNumbers);
        fetch(page);
    });
};

//Handle 'previous' item for pagination scheme
const prevItem = (index, page, action) => {
    //do nothing for the following commented conditions
    //index == 0 && page == 1
    // index > 0 && page == 1
    if (index.number == 0 && page.number > 1) {
        page.number--;
        action('prev');
    }
    else if (index.number > 0) {
        page.number--;
        index.number--;
    }
};
//Handle 'next' item for pagination scheme
const nextItem = (index, page, action) => {
    //do nothing for the following commented conditions
    //index ==1 && page == 1
    // index ==1 && page > 1
    if (index.number < 2) {
        index.number++;
        page.number++;
    }
    else if (index.number == 2) {
        page.number++;
        action('next');
    }
};