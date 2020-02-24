<template>
  <div>
    Description: {{this.fullDescription()}}
    <span
      class="pointer read-more-less-button"
      @click="this.isDescriptionShown"
    >{{getButtonTxt}}</span>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      isRequired: true
    }
  },
  data() {
    return {
      isFullDescriptionShown: false,
      newDescription: ""
    };
  },
  computed: {
    getButtonTxt() {
      return this.isFullDescriptionShown ? " Read Less" : " Read More";
    }
  },
  methods: {
    fullDescription() {
      const descriptionLength = this.description.length;
      if (descriptionLength < 100) return this.description;

      return (this.newDescription = this.isFullDescriptionShown
        ? this.description.substring(0, descriptionLength)
        : this.description.substring(0, 80).concat("..."));
    },
    isDescriptionShown() {
      this.isFullDescriptionShown = !this.isFullDescriptionShown;
    }
  }
};
</script>

<style>
.pointer {
  cursor: pointer;
}

.read-more-less-button {
  color: blue;
}
</style>