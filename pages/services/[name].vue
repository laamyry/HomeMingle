<template>
<div>
    <StepsForm1/>
</div>


</template>
<script setup>
const route = useRoute();
const service = {
    id: 1,
    name: 'Home Cleaning',
    image: '/images/cleaning.jpg',
    slug: 'home-cleaning',
    price: 80,
    description: 'Lorem ipsum dolor sit',

}
</script>