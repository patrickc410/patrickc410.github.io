<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      height: 0
    }
  },
  computed: {
    backgroundHeightStyling(): any {
      return {
        height: this.height
      };
    }
  },
  methods: {
    handleContentHeight(height: number) {
      this.height = height;
    }
  }
});


</script>

<template>
  <div class="page-container">
    <header class="page-header">

      <b-navbar>
        <b-navbar-brand to="/">
          Patrick Crawford
        </b-navbar-brand>

        <b-navbar-nav pills>
          <b-nav-item class="my-nav-item" to="/">Experience</b-nav-item>
          <b-nav-item to="/projects">Projects</b-nav-item>
          <b-nav-item to="/education">Education</b-nav-item>
          <b-nav-item href="/resumes/Patrick_resume_2022-07-19.pdf">Resume</b-nav-item>
        </b-navbar-nav>

        <!-- <b-nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/resume">Resume</RouterLink>
        </b-nav> -->
      </b-navbar>
    </header>

    <div class="page-body-container" id="page-body-container">
      <div class="page-body-wrapper">
        <RouterView @content-height="handleContentHeight" />
      </div>
    </div>

    <div class="background-container">
      <img src="/src/assets/stacked-waves-haikei.svg" class="background-svg" v-bind:style="backgroundHeightStyling" />
    </div>
  </div>

</template>

<style scoped>
/* .page-container {
  margin: 1.5rem;
} */

.page-header {
  position: fixed;
  top: 0;
  background-color: aquamarine;
  padding: 1.5rem;
  max-width: 100%;
  width: 100%;
  z-index: 2;
}

.page-body-container {
  top: 7.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  z-index: 1;
}

.header-brand {
  justify-self: center;
  align-self: center;
  margin: 0;
}

.my-nav-item {
  justify-self: center;
  align-self: center;
}

.page-body-wrapper {
  margin-bottom: 3rem;
}

.background-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.background-svg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  /* width: 100%; */
  /* height: 100%; */
}
</style>
