//const { number } = require("yargs");

var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Dien thoai Samsung',
        url: 'https://www.thegioididong.com/dtdd/samsung-galaxy-s22-ultra',
        target: '_blank',
        price: '10000',
        check: true,
    },
    methods: {
        say: function(text) {
            return 'Hello ' + text;
        },

        formartPrice() {
            var number = this.price;

            return new Intl.NumberFormat('de-DE', { style: 'currency', 
            currency: 'VND' }).format(number);
        }
    }
});
// He thong phan ung. Reactivity
console.log(vueInstance);


// setTimeout (() => {
//     vueInstance.title = 'Dien thoai Iphone';
// }, 3000);