<template>
  <div class="book-container">
    <img class="book-thumbnail" :src="book.thumbnail" />
    <div class="book-preview-details">
      <div class="capitalize">{{book.title}}</div>
      <div class="price-container">
        <div>
          <span class="price" :class="classObject">{{book.listPrice.amount}}</span>
          <span>{{this.formatCurrency(book.listPrice.currencyCode)}}</span>
        </div>
        <img
          v-if="book.listPrice.isOnSale"
          class="sale-thumbnail"
          src="../assets/imgs/sale-thumbnail.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BookService from "../services/BookService";

export default {
  props: {
    book: {
      isRequired: true
    }
  },
  computed: {
    classObject() {
      return (this.book.listPrice.amount < 20) ? 'cheap' : 
             (this.book.listPrice.amount > 150) ? 'expensive' : '';
    }
  },
  methods: {
    formatCurrency(currency) {
      return BookService.formatCurrency(currency);
    }
  }
};
</script>

<style scoped>
.book-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border: 2px solid black;
  border-radius: 25px;
  margin: 10px 10px;
}

.book-thumbnail {
  height: 100px;
  width: 75px;
  margin-bottom: 10px;
}

.book-preview-details {
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}

.price-container {
  height: 30px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.price {
  margin-right: 3px;
}

.sale-thumbnail {
  margin-left: 10px;
}

.cheap {
  color: green;
}

.expensive {
  color: red;
}

.capitalize {
  text-transform: capitalize;
}
</style>