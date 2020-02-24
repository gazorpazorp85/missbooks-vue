<template>
  <section v-if="book">
    <div class="book-container">
      <img :src="book.thumbnail" />
      <h1>{{book.title}}</h1>
      <div>{{book.subtitle}}</div>
      <div v-for="author in book.authors" :key="author">Author: {{author}}</div>
      <div>Published: {{this.formatPublishedDate(book.publishedDate)}}</div>
      <BookDescription :description="book.description" />
      <div>Pages: {{this.formatPageCount(book.pageCount)}}</div>
      <div>
        Categories:
        <div v-for="category in book.categories" :key="category">{{category}}</div>
      </div>
      <div>Language: {{this.formatLanguage(book.language)}}</div>
      <div>
        <span class="price" :class="classObject">{{book.listPrice.amount}}</span>
        <span>{{this.formatCurrency(book.listPrice.currencyCode)}}</span>
        <img v-if="this.book.listPrice.isOnSale" src="../assets/imgs/sale.png" />
      </div>
    </div>
  </section>
</template>

<script>
import BookDescription from "../components/BookDescription";

import BookService from "../services/BookService";

export default {
  data() {
    return {
      book: null
    };
  },
  computed: {
    classObject() {
      return this.book.listPrice.amount < 20
        ? "cheap"
        : this.book.listPrice.amount > 150
        ? "expensive"
        : "";
    }
  },
  methods: {
    async getBook() {
      const bookId = this.$route.params.id;
      this.book = await BookService.getById(bookId);
    },
    formatCurrency(currency) {
      return BookService.formatCurrency(currency);
    },
    formatLanguage(language) {
      return BookService.formatLanguage(language);
    },
    formatPublishedDate(publishedDate) {
      return BookService.formatPublishedDate(publishedDate);
    },
    formatPageCount(pageCount) {
      return BookService.formatPageCount(pageCount);
    }
  },
  async created() {
    await this.getBook();
  },
  components: {
    BookDescription
  }
};
</script>

<style scoped>
.book-container {
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.price {
  margin-right: 3px;
}

.cheap {
  color: green;
}

.expensive {
  color: red;
}

</style>