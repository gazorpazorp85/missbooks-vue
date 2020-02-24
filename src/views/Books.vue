<template>
  <div class="books-main-container">
    <BookFilter @filterBooks="onFilterBooks" />
    <BooksList :books="booksToShow" />
  </div>
</template>

<script>
import BooksList from "../components/BooksList";
import BookFilter from "../components/BookFilter";

import BookService from "../services/BookService";

export default {
  data() {
    return {
      books: [],
      filterBy: { txt: '', priceFrom: -Infinity, priceTo: Infinity }
    };
  },
  computed: {
    booksToShow() {
      const lowerCaseFilterTxt = this.filterBy.txt.toLowerCase();
      return this.books.filter(book =>
        book.title.toLowerCase().includes(lowerCaseFilterTxt)
        && (book.listPrice.amount >= this.filterBy.priceFrom) 
        && (book.listPrice.amount <= this.filterBy.priceTo))
    }
  },
  async created() {
    this.books = await BookService.query();
  },
  methods: {
    onFilterBooks(filterBy) {
      this.filterBy = filterBy;
    }
  },
  components: {
    BooksList,
    BookFilter
  }
};
</script>

<style>
.books-main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>
