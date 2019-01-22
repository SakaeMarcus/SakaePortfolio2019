<template>
  <div class="portfolio">
    <h1 class="introduction">
      I'm
      <strong>Marcus Sakae</strong>, and this is my portfolio.
    </h1>
    <div class="tabs">
      <router-link class="tab" to="/">Showcase</router-link>
      <router-link class="tab" to="/about">About</router-link>
      <router-link class="tab" to="/license">License</router-link>
    </div>
    <router-view class="info-view"/>
  </div>
</template>
