<script lang="ts" setup>
import type { NuxtLink } from '#build/components'
</script>

<template>
  <div>
    <div class="relative bg-greeny-300">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="pr-16 sm:text-center sm:px-16">
          <p class="font-medium text-lighty-100">
            <span class="md:hidden"> We announced a new product! </span>
            <span class="hidden md:inline"> Big news! We're excited to announce a brand new product. </span>
            <span class="block sm:ml-2 sm:inline-block">
              <a href="#" class="text-white font-bold underline"> Learn more <span aria-hidden="true">&rarr;</span></a>
            </span>
          </p>
        </div>
        <div class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button type="button" class="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white">
            <span class="sr-only">Dismiss</span>
            <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <header class="flex items-center">
      <nav class="flex justify-between items-center float-left w-[90%] mx-auto">
        <div>
          <img class="w-64" src="/images/Home-mangle-logo.png" alt="logo" />
        </div>
        <div class="nav md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[9%] md:w-auto w-full flex items-center px-5">
          <ul class="font-us-light uppercase flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mt-2 mx-auto mr-56">
            <li class="hover:text-greeny-300"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="hover:text-greeny-300"><NuxtLink to="/services">Services</NuxtLink></li>
            <li class="hover:text-greeny-300"><NuxtLink to="/about-us">About us</NuxtLink></li>
            <li class="hover:text-greeny-300"><NuxtLink to="/blog">blog</NuxtLink></li>
            <li class="hover:text-greeny-300"><NuxtLink to="/account"></NuxtLink>Account</li>
          </ul>
        </div>
        <div class="flex justify-between items-center float-left">
          <a class="flex items-center gap-[1vw] mt-2 mr-4" href="#"><Icon name="fa6-brands:facebook-f" size="18" /></a>
          <a class="flex items-center gap-[1vw] mt-2" href="#"><Icon name="fa6-brands:instagram" size="18" /></a>
          <ion-icon onclick="onToggleMenu(this)" class="mt-2 text-2xl cursor-pointer md:hidden" name="menu"></ion-icon>
        </div>
      </nav>
    </header>
    <slot />
  </div>
</template>

<style scoped></style>
