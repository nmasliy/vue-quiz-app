<template>
  <div class="container max-w-3xl mx-auto flex flex-col p-4 min-h-screen justify-center items-center">
    <router-view v-slot="{ Component }">
      <transition appear name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition:  .4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>