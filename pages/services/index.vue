<script lang="ts" setup>
    import { ref } from 'vue';

interface Category {
    id: number;
    name: string;
    image: string;
    description: string;
    jobs: string[];
}

const categories = ref<Category[]>([
  {
    id: 1,
    name: 'Handyman',
    image: '/images/handyman.jpg',
    description: 'Versatile Home Repairs and Maintenance',
    jobs: ['Fixing Leaky Faucets', 'Patching Drywall', 'Installing Light Fixtures'],
  },
  {
    id: 2,
    name: 'Moving Services',
    image: '/images/moving-services.jpg',
    description: 'Seamless Relocation Solutions',
    jobs: ['Local Residential Moves', 'Furniture Assembly', 'Packing and Unpacking'],
  },
  {
    id: 3,
    name: 'Furniture Assembly',
    image: '/images/furniture-assembly.jpg',
    description: 'Expert Furniture Building Services',
    jobs: ['IKEA Furniture Assembly', 'Custom Furniture Construction', 'Office Furniture Setup'],
  },
  {
    id: 4,
    name: 'Mounting & Installation',
    image: '/images/mounting-installation.jpeg',
    description: 'Secure Mounting and Setup',
    jobs: ['TV Wall Mounting', 'Shelving Installation', 'Appliance Setup'],
  },
  {
    id: 5,
    name: 'Cleaning',
    image: '/images/handyman.jpg',
    description: 'Thorough Home Sanitization Services',
    jobs: ['Deep Cleaning', 'Regular Home Cleaning', 'Carpet and Upholstery Cleaning'],
  },
  {
    id: 6,
    name: 'Shopping + Delivery',
    image: '/images/handyman.jpg',
    description: 'Convenient Shopping Assistance',
    jobs: ['Grocery Shopping', 'Parcel Pickup and Delivery', 'Personal Shopping'],
  },
  {
    id: 7,
    name: 'Yardwork Services',
    image: '/images/handyman.jpg',
    description: 'Professional Outdoor Maintenance',
    jobs: ['Lawn Mowing', 'Garden Maintenance', 'Tree Trimming'],
  },
  {
    id: 8,
    name: 'Winter Tasks',
    image: '/images/handyman.jpg',
    description: 'Winter-Ready Home Services',
    jobs: ['Snow Removal', 'Holiday Decoration Setup', 'Winter Home Inspection'],
  },
  {
    id: 9,
    image: '/images/handyman.jpg',
    name: 'Personal Assistant',
    description: 'Efficient Personal Support Services',
    jobs: ['Calendar Management', 'Travel Planning', 'Research Assistance'],
  },
  {
    id: 10,
    name: 'Baby Prep',
    image: '/images/handyman.jpg',
    description: 'Expert Assistance for Parenthood',
    jobs: ['Nursery Setup', 'Baby Gear Assembly', 'Childproofing'],
  },
  {
    id: 11,
    name: 'Office Services',
    image: '/images/handyman.jpg',
    description: 'Streamlined Office Support Solutions',
    jobs: ['Office Organization', 'Equipment Installation', 'Office Supplies Procurement'],
  },
  {
    id: 12,
    name: 'Contactless Tasks',
    image: '/images/handyman.jpg',
    description: 'Safe and Convenient Contactless Services',
    jobs: ['Virtual Assistance', 'Remote Consultations', 'Digital Task Management'],
  },
])

// const inputString = "display words then space";
// const resultString = inputString.replace(/\s+/g, '-');
// console.log(resultString);

</script>

<template bg-black flex flex-col min-h-screen max-w-md>
    <div id="banner" class="flex relative min-w-max w-full h-96 mt-2">
        <img src="/images/banner.jpg" class="object-cover w-full " alt="banner">
        <h1 class="absolute text-5xl text-lighty-100 font-us-regular top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Comprehensive Home Services</h1>
    </div>
    <div id="car_container" class="flex justify-center flex-row flex-wrap items-center mx-auto m-10 gap-5 ">
      <span v-for="item in categories" :key="item.id">
        <div id="card" class="flex flex-wrap w-[23rem] border border-[#b9b9b9] rounded">
          <div id="image" class="shadow-lg h-60">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div :id="'id' + item.id" class="w-[23rem] h-96 self-center py-4 px-5 bg-[#fdfdfd] rounded-b-md shadow-md shadow-[#8e8e8e] p-1">
            <div id="titl" class="font-us-semi-bold text-md uppercase text-darky-700">
              {{ item.name }}
            </div>
            <div id="description" class="font-us-regular text-[#5f5f5f]">
              {{ item.description }}
              <hr class="w-20% h-1 bg-[#00110A] border my-3">
            </div>

            <div class="mt-6 gap-3">
                <ul>
                    <li v-for="job in item.jobs" :key="job" class="font-us-regular text-greeny-300 mb-4">
                        <!-- <NuxtLink :to="`/${job.replace(/\s+/g, '-')}`">{{ job }}</NuxtLink> -->
                        <NuxtLink :to="'services/' + item.name">{{ job }}</NuxtLink>

                        
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </span>
    </div>
  </template>

<script lang="ts" setup>



</script>


<style scoped>

</style>
