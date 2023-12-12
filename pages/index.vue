<!-- start of the template -->
<template class="p-0 m-0">
  <div class="selection:bg-greeny-300">
    <div class="w-[25%] flex items-center mx-auto justify-center font-us-bold uppercase line-clamp-2 text-center mt-20 text-2xl text-darky-700">
      <p>Where Skills Meet Spaces, Crafting Homes to Perfection</p>
    </div>
    <!-- search bar with two images -->
    <div id="container" class="flex items-center">
      <div id="search" class="flex justify-between items-center float-left w-[80%] mx-auto">
        <div id="image1">
          <img src="/images/hammer.png" class="w-52" alt="hammer" />
        </div>
        <!-- search bar -->
        <div id="search" class="max-w-md mx-auto w-[40%]">
          <div class="p-2 border border-[#303030] rounded-full relative">
            <input type="search" placeholder="Services near me" class="px-3 bg-transparent border-transparent outline-none w-[92%]" />
            <Icon name="fa6-solid:magnifying-glass" class="text-greeny-300" />
          </div>
        </div>
        <div id="image2">
          <img src="/images/drill.png" class="w-52" alt="drill" />
        </div>
      </div>
    </div>
    <!-- services title-->
    <div id="title" class="text-center font-us-bold uppercase text-darky-700">
      <h2 class="underline decoration-4 underline-offset-4 mb-14">Trending services</h2>
    </div>
    <!-- services section using js to create-->
    <div id="car_container" class="flex justify-center flex-row items-center mx-auto max-w-md gap-5">
      <span v-for="item in services">
        <div id="card" class="flex flex-col w-64 text-center justify-center">
          <div id="image" class="shadow-lg">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div :id="'id' + item.id" class="w-60 self-center bg-[#EAEAEA] rounded-b-md shadow-md p-1">
            <div id="titl" class="font-us-semi-bold text-md uppercase text-darky-700">
              {{ item.title }}
            </div>
            <div id="price" class="font-us-regular text-darky-700">
              {{ 'Starting at '}} <span class="text-greeny-300 font-us-bold">{{ item.price + '€' }}</span>
            </div>
          </div>
        </div>
      </span>
    </div>
    <!-- review title -->
    <div id="title" class="text-center font-us-bold uppercase text-darky-700">
      <h2 class="underline decoration-4 underline-offset-4 mt-16">customers talking</h2>
    </div>
    <!-- review section using js to create-->
    <div class="w-full flex items-center justify-center mx-auto mt-2">
      <figure class="flex justify-center flex-row mx-auto gap-16 mt-9 self-center">
        <span v-for="item in review" :key="item.id">
          <div class="flex flex-row items-center">
            <div class="flex items-center">
              <p class="pe-3 font-us-semi-bold text-darky-700 text-2xl">{{ item.username }}</p>
            </div>

            <div class="flex items-center text-greeny-300">
              <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>

          <blockquote class="w-72 text-justify">
            <p class="text-1xl font-us-regular text-darky-700">"{{ item.review }}"</p>
          </blockquote>
          <figcaption class="flex items-center mt-6 space-x-3 rtl:space-x-reverse"></figcaption>
        </span>
      </figure>
    </div>
  </div>
  
</template>
<!-- end of the template -->
<!-- start of js -->
<script lang="ts" setup>
const services = [
  {
    id: 1,
    title: 'Home Cleaning',
    image: '/images/cleaning.jpg',
    price: 80,
  },
  {
    id: 2,
    title: 'Security Installation',
    image: '/images/sec.jpg',
    price: 150,
  },
  {
    id: 3,
    title: 'Electrical Maintenance',
    image: '/images/electric.jpg',
    price: 90,
  },
  {
    id: 4,
    title: 'Furniture Assembly',
    image: '/images/furniture.jpeg',
    price: 60,
  },
  {
    id: 5,
    title: 'Interior Painting',
    image: '/images/paint.jpg',
    price: 120,
  },
]

const review = [
  {
    id: 1,
    username: 'Sarah J',
    review: 'Home Mingle Hub made finding a skilled plumber so easy! The platform is user-friendly, and I quickly connected with a reliable professional. The service was prompt, and the plumber did an excellent job. Highly recommend!',
  },
  {
    id: 2,
    username: 'Mike R',
    review: 'Used Home Mingle Hub for electrical repairs, and it was a great experience. The professional was knowledgeable and fixed the issue efficiently. The only suggestion would be to add more professionals in my area.',
  },
  {
    id: 3,
    username: 'Alex M',
    review: "Home Mingle Hub is a game-changer for home services. I found an amazing landscaper for my garden. The process was smooth, but I wish there were more details about each professional's expertise on their profiles.",
  },
  {
    id: 4,
    username: 'Med L',
    review: "Aleksandr was fantastic! He came with all the equipment to do the job, even the hardware I didn't know I would need. He hung a heavy chandelier perfectly and fixed a cabinet to our wall. 100% would hire",
  },
]
</script>
<!-- end of js -->
<!-- optional css -->
<style>
#search {
  margin-top: -25px;
}

</style>
