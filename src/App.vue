<script setup>
//import { Header } from "./components/Header.vue";
//import HelloWorld from "./components/HelloWorld.vue";
import { RouterLink, RouterView } from "vue-router";
//import SidebarMenu2 from "@/components/SidebarMenu2.vue";
</script>

<template>
  <!-- <div class="container-fluid">
    <div class="row flex-nowrap">
      <SidebarMenu2/>
      <div class="col py-3">
        <RouterView />
      </div>
    </div>
  </div> -->
  <!-- <RouterView></RouterView> -->
  <RouterView />
  <!-- <LoadingBar :active.sync='isLoading'/> -->
</template>
<script>
const toggleBtn = document.querySelector(".menu-toggle"); 
const sidebar = document.querySelector(".sidebar-wrapper");
const wrapper = document.querySelector(".wrapper");
// toggleBtn.addEventListener("click", function () {
//   wrapper.classList.toggle('toggled');
// });
export default {
  name: "App",
  // components: {
  //   LoadingBar
  // },
    data() {
    return {
      isActive: false,
      //isLoading: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.enable;
    },
  },
  mounted() {
    // this.toggleMenu (() =>{
    //   this.$refs.addEventListener("click", function() {
    //     wrapper.classList.toggle("toggled");
    //   })
    // });
    // toggleBtn.addEventListener("click", function () {
    //   wrapper.classList.toggle('toggled');
    // });
  },
}
</script>