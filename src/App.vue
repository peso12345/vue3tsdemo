<!--
 * @Author: peso12345
 * @LastEditors: peso12345
 * @Date: 2022-12-20 21:44:06
 * @Version: 0.0.1
 * @Description: 描述
-->
<script setup lang="ts">
import routess from '~pages'

const nihao = ref(0)

console.log(routess);
</script>
<!-- <RouterLink to="/">/</RouterLink>
        <RouterLink to="/homes">Homes</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <!-- <h1 v-for="item in routess" :key="item.path">{{ item.name }}</h1> -->
<template>
  <header>
    <div class="wrapper">
      <nav class=" border-solid border-cyan-400 border-8 flex flex-col absolute z-10">
        <!-- this -->
        <RouterLink class="btn text-4xl hover:underline" :to="item.path" v-for="item in routess" :key="item.path">{{
          item.name
        }}|</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
nav a:link,a:visited {
  color: rgb(41, 105, 241);
}
nav a:hover {
  color: rgb(116, 116, 126);
}
nav a:focus {
  color: rgb(235, 95, 30);
}
nav a:active {
  color: rgb(39, 39, 31);
}

</style>
