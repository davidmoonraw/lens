require('./server/db');
const product = require('./server/collection/product');

const productList = [
    {
        'name': 'VelvetElegance',
        'description': 'A high-end fashion brand renowned for its luxurious velvet apparel and accessories. A blend of timeless elegance and contemporary flair.',
        'url': 'foobar'
    },
    {
        'name': 'OpulentAura',
        'description': 'Adorned with rare gemstones and meticulously designed to capture the essence of opulence and glamour.',
        'url': 'foobar'
    },
    {
        'name': 'RoyalReflections',
        'description': 'This rare piece offers handcrafted details, sumptuous fabric, and exquisite accents that reflect regal sophistication and timeless style.',
        'url': 'foobar'
    },
    {
        'name': 'PrestigePanache',
        'description': 'Unique design in its own way. Tough, robust yet adequate for every occassion',
        'url': 'foobar'
    },
    {
        'name': 'PreLuxeLuminary',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'url': 'foobar'
    },
    {
        'name': 'GrandeurGala',
        'description': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'url': 'foobar'
    },
    {
        'name': 'GrandeouseBu',
        'description': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        'url': 'foobar'
    },
    {
        'name': 'Shakawasdf',
        'description': 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        'url': 'foobar'
    },
    {
        'name': 'GrJurgen Blahs',
        'description': 'Ut enim ad minim veniam, reprehenderit qui in ea voluptate velit  ea commodo consequat.',
        'url': 'foobar'
    },
]

const products = async()=> await product.insertMany(productList);

const populateDB = new Promise( (resolve,reject)=>{
    resolve(products().then((e)=>console.log(e)))
})
    

populateDB.then(()=>process.exit());

