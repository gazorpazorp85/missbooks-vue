<template>
  <div class="form-container">
    <input type="text" placeholder="search books" @input="onFilter" v-model="filterBy.txt" />
    <input type="number" placeholder="from price" @input="onFilter" v-model="filterBy.priceFrom" />
    <input type="number" placeholder="to price" @input="onFilter" v-model="filterBy.priceTo" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterBy: { txt: '', priceFrom: -Infinity, priceTo: Infinity }
    };
  },
  methods: {
    onFilter() {
      if (!this.filterBy.priceTo)  this.filterBy.priceTo = Infinity;
      this.$emit("filterBooks", this.filterBy);
    }
  }
};
</script>

<style>
.form-container input:not(:last-child){
  margin-right: 15px;
}
</style>