<script lang="ts" setup>
import type { NuxtLink } from '#build/components'
</script>

<template class="bg-black p-0 m-0">
  <div>
    <div class="relative bg-greeny-300">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="pr-16 sm:text-center sm:px-16">
          <p class="font-medium text-lighty-100">
            <span class="md:hidden"> We announced a new product! </span>
            <span class="hidden md:inline">Coming to Your Doorstep in the Blink of an Eye!</span>
            <span class="block sm:ml-2 sm:inline-block">
              <a href="#" class="text-lighty-100 font-bold underline"> Learn more <span aria-hidden="true">&rarr;</span></a>
            </span>
          </p>
        </div>
        <div class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button type="button" class="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-lighty-100">
            <span class="sr-only">Dismiss</span>
            <XIcon class="h-6 w-6 text-lighty-100" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <header class="flex items-center selection:bg-greeny-300">
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
            <li class="hover:text-greeny-300"><NuxtLink to="/account">Account</NuxtLink></li>
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

  <div class="">
    <div class="max-w-full">
      <div class="px-6 py-6 bg-greeny-300 md:px-12 lg:py-10 lg:px-16 xl:flex xl:items-center">
        <div class="xl:w-0 xl:flex-1">
          <h2 class="text-2xl font-us-heavy uppercase tracking-tight text-darky-700 sm:text-3xl">Unlock Home Secrets:</h2>
          <p class="mt-2 max-w-3xl font-us-semi-bold text-lg leading-6 text-darky-700">Subscribe for Exclusive Updates!</p>
        </div>
        <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <form class="sm:flex">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email-address" type="email" autocomplete="email" required class="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md" placeholder="Enter your email" />
            <button type="submit" class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-darky-700 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">Notify me</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer class="bg-[#00110A]">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="#" class="flex items-center">
            <img src="/public/images/Home-mangle-logo-white.png" class="h-14 me-3" alt="HomeMingle Logo" />
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-us-semi-bold text-greeny-300 uppercase dark:text-white">Resources</h2>
            <ul class="text-lighty-100 font-us-regular">
              <li class="mb-4">
                <a href="#" class="hover:underline">HomeMingle</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Services</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-us-semi-bold text-greeny-300 uppercase">Follow us</h2>
            <ul class="text-lighty-100 font-us-regular">
              <li class="mb-4">
                <a href="https://github.com/laamyry/HomeMingle" class="hover:underline">Github</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Discord</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-us-semi-bold text-greeny-300 uppercase">Legal</h2>
            <ul class="text-lighty-100 font-us-regular">
              <li class="mb-4">
                <a href="#" class="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-greeny-300 sm:mx-aut lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-lighty-100 sm:text-center">© 2023 <a href="#" class="hover:underline">HomeMingle™</a>. All Rights Reserved. </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0">
          <a href="#" class="text-lighty-100 hover:text-greeny-300">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
          <a href="#" class="text-lighty-100 hover:text-greeny-300 ms-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" /></svg>
            <span class="sr-only">Discord community</span>
          </a>
          <a href="#" class="text-lighty-100 hover:text-greeny-300 ms-5">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
              <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Twitter page</span>
          </a>
          <a href="#" class="text-lighty-100 hover:text-greeny-300 ms-5">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd" />
            </svg>
            <span class="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
