<script lang="ts" setup></script>

<template>
  <section class="flex items-center xl:h-screen font-us-regular">
    <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
          <div class="relative lg:max-w-md">
            <img src="/public/images/handyman.jpeg" alt="aboutimage" class="relative z-10 object-cover w-full rounded h-96" />
            <div class="absolute bottom-0 right-0 z-10 p-8 bg-greeny-300 border-greeny-300 rounded-tl-3xl rounded-br-3xl shadow-md lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800">
              <p class="text-lg font-us-semi-bold md:w-72">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="absolute top-0 left-0 w-16 h-16 border-greeny-300 dark:text-gray-300 opacity-10" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                </svg>
                Home Mingle Hub: Connecting Dreams, Professionally.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0">
          <div class="pl-4 mb-6 border-l-4 border-greeny-300">
            <span class="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
            <h1 class="mt-2 text-3xl font-us-heavy text-darky-700 hover:text-greeny-300 md:text-5xl dark:text-gray-300">About Us</h1>
          </div>
          <p class="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">Welcome to Home Mingle Hub, where your home's potential meets limitless possibilities. Our journey began with a simple desire: to create a space where homeowners seamlessly connect with skilled professionals, turning their houses into dream homes.</p>
          <h1 class="text-3xl font-us-bold text-darky-700">Our Inspiration</h1>
          <p class="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">Rooted in the nostalgia of tight-knit communities and driven by personal experiences, Home Mingle Hub was conceived. The challenges of finding reliable professionals for home services sparked the idea of a platform that mirrors the warmth and trust of traditional neighborhoods.</p>
          <div class="flex mt-4 sm:mt-0">
            <a href="#" class="text-greeny-300 hover:text-greeny-300">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-greeny-300 hover:text-greeny-300 ms-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" /></svg>
              <span class="sr-only">Discord community</span>
            </a>
            <a href="#" class="text-greeny-300 hover:text-greeny-300 ms-5">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
              </svg>
              <span class="sr-only">Twitter page</span>
            </a>
            <a href="#" class="text-greeny-300 hover:text-greeny-300 ms-5">
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
    </div>
  </section>
</template>

<style scoped></style>
