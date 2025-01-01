const shop = {
    owner: 'Amit',
    address: {
        street: ' Mirpur-6',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'keyboard', 'monitor'],
    revenue: 50000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);