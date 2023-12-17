<template>
    <div class="flex flex-col space-y-4">
        <div class="flex justify-between items-center space-x-4">
            <div
                v-for="(step, index) in steps"
                :key="index"
                class="step"
                :class="{ active: index === currentStep }"
            >
                <div @click="currentStep = index" class="cursor-pointer">
                    <span
                        class="absolute top-0 left-0 w-0 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-0 lg:bottom-0 lg:top-auto"
                        aria-hidden="true"
                    />

                    <span
                        class="px-6 py-5 flex items-start text-sm font-medium"
                    >
                        <span class="flex-shrink-0">
                            <span
                                class="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full"
                            >
                            </span>
                        </span>
                        <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                            <span
                                class="text-xs font-semibold tracking-wide uppercase"
                                >{{ step.name }}</span
                            >
                            <span class="text-sm font-medium text-gray-500">{{
                                step.description
                            }}</span>
                        </span>
                    </span>
                </div>
            </div>
        </div>

        <div v-if="currentStep === 0">this is first step</div>
        <div v-if="currentStep === 1">this is second step</div>
        <div v-if="currentStep === 2">this is third step</div>

        <div class="flex justify-between">
            <button @click="prevStep" :disabled="currentStep === 0">
                Previous
            </button>
            <button @click="nextStep" :disabled="currentStep === 2">
                Next
            </button>
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
/* Optional custom styles for buttons, etc. */
</style>
