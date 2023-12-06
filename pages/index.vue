<template>
  <div>
    <div class="w-[25%] flex items-center mx-auto justify-center font-us-bold uppercase line-clamp-2 text-center mt-20 text-2xl text-darky-700">
      <p>Where Skills Meet Spaces, Crafting Homes to Perfection</p>
    </div>
    <div id="container" class="flex items-center">
      <div id="search" class="flex justify-between items-center float-left w-[80%] mx-auto">
        <dvi id="image1">
          <img src="/images/hammer.png" class="w-52" alt="hammer" />
        </dvi>
        <dvi id="search" class="max-w-md mx-auto w-[40%]">
          <div class="p-2 border border-[#303030] rounded-full relative">
            <input type="search" placeholder="Services near me" class="px-3 bg-transparent border-transparent outline-none w-[92%]" />
            <Icon name="fa6-solid:magnifying-glass" class="text-greeny-300" />
          </div>
        </dvi>
        <dvi id="image2">
          <img src="/images/drill.png" class="w-52" alt="drill" />
        </dvi>
      </div>
    </div>
    <div id="title" class="text-center font-us-bold uppercase text-darky-700">
      <h2 class="underline decoration-4 underline-offset-4 mb-5">Trending services</h2>
    </div>
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
              {{ 'Starting at ' + item.price + '€' }}
            </div>
          </div>
        </div>
      </span>
    </div>


  </div>
</template>

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
</script>

<style>
#search {
  margin-top: -25px;
}

#id1 {
}
</style>
