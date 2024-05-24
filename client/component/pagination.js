const modifyPaginationNumbers = (move) => {
    $(".page-number a").map(function () {
        let currentValue = parseInt(this.innerHTML);
        const value = move === 'prev' ? currentValue - 1 : currentValue + 1;
        this.innerHTML = value;
    })
};

const pageHandler = function (action) {

    let page = { number: 1 };
    let index = { number: 0 };

    if (page.number == 1) {
        action(page);
    };
    $('.page-number').click(async () => {
        page = await $(this).text();
        action(page);
    });
    $('#prev').click(async () => {
        await prevItem(index, page, modifyPaginationNumbers);
        action(page);
    });
    $('#next').click(async () => {
        await nextItem(index, page, modifyPaginationNumbers);
        action(page);
    });
};


const prevItem = (index, page, action) => {
    //do nothing
    //index == 0 && page == 1
    // index > 0 && page == 1
    if (index.number == 0 && page.number > 1) {
        page.number--;
        action(page.number);
    }
    else if (index.number > 0) {
        page.number--;
        index.number--;
    }
};

const nextItem = (index, page, action) => {
    //index ==1 && page == 1
    // index ==1 && page > 1
    if (index.number < 2) {
        index.number++;
        page.number++;
    }
    else if (index.number == 2) {
        page.number++;
        action(page.number);
    }
};