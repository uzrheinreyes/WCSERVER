const books = Vue.createApp({
    data() {
        return {
            showBooks: true,
            btitle: 'The Ledger',
            bauthor: 'Uzrhein Reyes',
            year: 2088
        }
    }, 

    methods:{
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
}
);

books.mount('#books')

