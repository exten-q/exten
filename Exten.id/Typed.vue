<template>
    <span ref="typedElement"></span>
</template>

<script setup>
    const props = defineProps({
        strings: {
            type: Array,
            default: [],
        },
        speed: {
            type: Number,
            default: 40,
        },
        delay: {
            type: Number,
            default: 1000,
        },
        loop: {
            type: Boolean,
            default: false,
        },
    });

    const options = {
        strings: props.strings,
        typeSpeed: props.speed,
        backDelay: props.delay,
        loop: props.loop,
        smartBackspace: true,
    };

    const { typedElement } = useTyped(options);
</script>