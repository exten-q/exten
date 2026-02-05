<template>
    <div class="absolute inset-0 flex items-center justify-center min-h-full w-full">
        <div class="container py-12 lg:py-16">
            <div class="max-w-4xl text-center mx-auto">
                <p class="mt-6 mb-3 font-semibold lg:text-2xl">
                    Hello there!
                </p>

                <p class="mb-12 font-bold tracking-tight text-gray-900 text-4xl lg:text-5xl">
                    I'm a full-stack web developer.
                    <br>I design & build
                    <span class="block md:inline"></span>
                    <mark class="relative bg-image text-inherit bg-transparent bg-no-repeat bg-gradient-to-r from-yellow-200 via-yellow-200 to-yellow-200 bg-[length:100%_30%] bg-[position:0_80%]">
                        <Typed :strings="[
                            'Websites.',
                            'Web apps.',
                            'Mobile apps.',
                        ]" :speed="120" loop />
                    </mark>
                </p>

                <a href="contact.html" class="bg-indigo-500 rounded-full px-8 py-3 font-medium text-lg text-white">
                    Get in touch
                </NuxtLink>
            </div>
        </div>
    </div>
</template>