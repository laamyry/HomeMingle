<template>
    <div class="flex flex-col bg-[#E0E0E0]">

        <div class="flex justify-center gap-10 w-[80%] mx-auto">
            <div class="flex justify-between items-center space-x-72">
                <div v-for="(step, index) in steps" :key="index" class="step" :class="{ active: index === currentStep }">
                    <div @click="currentStep = index" class="cursor-pointer">
                        <span
                            class="absolute top-0 left-0 w-0 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-0 lg:bottom-0 lg:top-auto"
                            aria-hidden="true" />

                        <span class="px-6 py-5 flex items-start text-sm font-medium">
                            <span class="flex-shrink-0">
                                <span class="fl w-10 h-10 flex items-center justify-center bg-greeny-300 rounded-full">
                                </span>
                            </span>
                            <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                                <span class="text-xs font-semibold tracking-wide uppercase">{{ step.name }}</span>
                                <span class="text-sm font-medium text-gray-500">{{ step.description }}</span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center mx-auto w-[80%] rounded-lg p-9 text-center">
            <p class="self-center text-center">fill your information</p>
        </div>
        <div class="flex flex-col ">
            <div v-if="currentStep === 0">
                <div id="first-tab" class="bg-lighty-100 w-[80%] rounded-lg mx-auto p-9">

                    <p class="py-3 ml-8 font-us-regular text-xl">Your task location</p>
                    <div class="flex justify-center mx-auto border rounded border-[#00110A]  w-[95%]">
                        <input id="input" type="text" class="focus:ring-transparent h-16 w-[99%] " />

                    </div>
                </div>
                <div id="second-tab" class="bg-lighty-100 w-[80%] rounded-lg mx-auto p-9 mt-6">
                    <p class="py-3 ml-8 font-us-regular text-xl">Task options</p>
                    <div class=" mx-auto">

                        <fieldset class="px-5 ml-8 font-us-regular text-base">
                            <legend class="font-us-semi-bold text-base">How big is your task?</legend>
                            <div class="flex items-center gap-1.5">
                                <input type="radio" name="service" id="Small" class="text-greeny-300 focus:ring-transparent"
                                    value="Small" />
                                <label for="apple">Small - Est. 1 hr</label>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <input type="radio" name="service" id="Medium"
                                    class="text-greeny-300 focus:ring-transparent" value="Medium" />
                                <label for="mango">Medium - Est. 2-3 hrs</label>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <input type="radio" name="service" id="Large" class="text-greeny-300 focus:ring-transparent"
                                    value="Large" />
                                <label for="banana"> Large - Est. 4+ hrs</label>
                            </div>
                        </fieldset>


                    </div>

                </div>
            </div>

            <div v-if="currentStep === 1">this is second step</div>
            <div v-if="currentStep === 2">this is third step</div>

        </div>
        <div class="flex justify-center w-[80%] mx-auto">
            <div class="flex justify-between w-full space-x-72 my-3">
                <button class="bg-greeny-300 p-2 w-20 rounded-md" @click="prevStep" :disabled="currentStep === 0">
                    Previous
                </button>
                <button class="bg-greeny-300 p-2 w-20 rounded-md" @click="nextStep" :disabled="currentStep === 2">
                    Next
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
const currentStep = ref(0);

const nextStep = () => {
    if (currentStep.value < 2) {
        currentStep.value++;
    }
};

const prevStep = () => {
    if (currentStep.value > 0) {
        currentStep.value--;
    }
};
const steps = [
    {
        id: "01",
        name: "Job Details",
        description: "Vitae sed mi luctus laoreet.",
        href: "#",
        status: "complete",
    },
    {
        id: "02",
        name: "Application form",
        description: "Cursus semper viverra.",
        href: "#",
        status: "current",
    },
    {
        id: "03",
        name: "Preview",
        description: "Penatibus eu quis ante.",
        href: "#",
        status: "upcoming",
    },
];
</script>

<style>
#input {
    border: none;
    outline: none;
}
</style>
