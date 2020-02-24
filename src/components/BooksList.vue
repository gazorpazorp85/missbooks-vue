<template>
  <section>
    <div v-if="books" class="books-container">
      <router-link v-for="book in books" :key="book._id" :to="`/books/${book._id}`">
        <BookPreview :book="book" />
      </router-link>
    </div>
  </section>
</template>

<script>
import BookPreview from "./BookPreview";

export default {
  props: ["books"],
  components: {
    BookPreview
  }
};
</script>

<style>
.books-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

a {
    text-decoration: none;
    color: inherit;
}

</style>