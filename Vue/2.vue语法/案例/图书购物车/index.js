const app = new Vue({
    el: "#app",
    data: {
        total_count: 0,
        books: [
            {
                id: 1,
                name: "数据结构及算法",
                date: "2023-01-31",
                price: 100.00,
                count: 1
            },
            {
                id: 2,
                name: "python",
                date: "2023-02-08",
                price: 60.00,
                count: 1
            },
            {
                id: 3,
                name: "Java",
                date: "2023-01-15",
                price: 80.00,
                count: 1
            },
            {
                id: 4,
                name: "c++",
                date: "2023-01-15",
                price: 10.00,
                count: 1
            },
        ]
    },
    methods: {
        deletebook: function(index){
            this.books.splice(this.books.indexOf(index),1)
        },
        getPrice: function(price){
            return '￥' + price
        },
        gettotalMoney: function(){
            totalMoney = 0
            for(book of this.books){
                totalMoney += (book.count*book.price)
            }
            return this.getPrice(totalMoney)
        },
        substract: function(index){
                this.books[index].count = this.books[index].count>0 ? this.books[index].count - 1 : 0
        },
        addcount: function(index){
            this.books[index].count = this.books[index].count + 1
    }
    }
})