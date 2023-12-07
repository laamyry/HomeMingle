<script lang="ts" setup></script>

<template bg-black flex flex-col min-h-screen>
  <div id="car_container" class="flex justify-center flex-row items-center mx-auto max-w-md m-10 gap-5">
    <span v-for="item in category" :key="item.id">
      <div id="card" class="flex flex-col w-64 justify-center">
        <div id="image" class="shadow-lg">
          <img :src="item.image" :alt="item.title" />
        </div>
        <div :id="'id' + item.id" class="w-64 h-96 self-center py-2 px-3 bg-[#EAEAEA] rounded-b-md shadow-md p-1">
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
</template>

<script lang="ts" setup>
const category = [
  {
    id: 1,
    title: 'Home Cleaning',
    image: '/images/cleaning.jpg',
    description: 80,
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

<style scoped></style>
