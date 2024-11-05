<script setup lang="ts">
import ButtonV from '../common/ButtonV.vue';

const FIRST_BLOG_DATA = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    category: "Category - XX.XX.2024",
    date: "XX.XX.2024",
    blogImage: "/images/png/blog-first.png",
    blogArrow: "/images/png/blog-arrow.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu semper cum condimentum a tincidunt. Sapien ac massa sed mauris tempor. A urna mollis tincidunt at quam neque venenatis. Tristique tellus velit dui sit. Neque euismod sed interdum id amet egestas. Vulputate in odio mauris ut consectetur nec. Mauris convallis in quam diam. Adipiscing sit cursus magnis consectetur augue purus mi adipiscing velit. Tortor vehicula purus tristique semper posuere id nulla. Tincidunt vitae sed lacinia vel venenatis metus.",
  },
]
const SECOND_BLOG_DATA = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
    category: "Category - XX.XX.2024",
    blogImage: "/images/png/blog-second.png",
    blogArrow: "/images/png/blog-arrow.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci nisl ut nulla ornare duis elit. At accumsan enim leo feugiat. Nulla ac mauris.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
    category: "Category - XX.XX.2024",
    blogImage: "/images/png/blog-second.png",
    blogArrow: "/images/png/blog-arrow.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci nisl ut nulla ornare duis elit. At accumsan enim leo feugiat. Nulla ac mauris.",
  },
]

const BLOG_POST_DATA = [
  {
    id: 1,
    blogImage: "/images/png/blog-one.png",
    category: "Category - XX.XX.2024",
    title: "Lorem ipsum dolor sit",
    blogArrow: "/images/png/blog-arrow.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci nisl ut nulla ornare duis elit. At accumsan enim leo feugiat. Nulla ac mauris.",
  },
  {
    id: 2,
    blogImage: "/images/png/blog-two.png",
    category: "Category - XX.XX.2024",
    title: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
    blogArrow: "/images/png/blog-arrow.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci nisl ut nulla ornare duis elit. At accumsan enim leo feugiat. Nulla ac mauris.",
  },
  {
    id: 3,
    blogImage: "/images/png/blog-three.png",
    category: "Category - XX.XX.2024",
    title: "Lorem ipsum dolor sit",
    blogArrow: "/images/png/blog-arrow.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci nisl ut nulla ornare duis elit. At accumsan enim leo feugiat. Nulla ac mauris.",
  },
  {
    id: 4,
    blogImage: "/images/png/blog-four.png",
    category: "Category - XX.XX.2024",
    title: "Lorem ipsum dolor sit",
    blogArrow: "/images/png/blog-arrow.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci nisl ut nulla ornare duis elit. At accumsan enim leo feugiat. Nulla ac mauris.",
  },
  {
    id: 5,
    blogImage: "/images/png/blog-five.png",
    category: "Category - XX.XX.2024",
    title: "Lorem ipsum dolor sit",
    blogArrow: "/images/png/blog-arrow.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci nisl ut nulla ornare duis elit. At accumsan enim leo feugiat. Nulla ac mauris.",
  },
  {
    id: 6,
    blogImage: "/images/png/blog-six.png",
    category: "Category - XX.XX.2024",
    title: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
    blogArrow: "/images/png/blog-arrow.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci nisl ut nulla ornare duis elit. At accumsan enim leo feugiat. Nulla ac mauris.",
  },
  {
    id: 7,
    blogImage: "/images/png/blog-seven.png",
    category: "Category - XX.XX.2024",
    title: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
    blogArrow: "/images/png/blog-arrow.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci nisl ut nulla ornare duis elit. At accumsan enim leo feugiat. Nulla ac mauris.",
  },
  {
    id: 8,
    blogImage: "/images/png/blog-eight.png",
    category: "Category - XX.XX.2024",
    title: "Lorem ipsum dolor sit",
    blogArrow: "/images/png/blog-arrow.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci nisl ut nulla ornare duis elit. At accumsan enim leo feugiat. Nulla ac mauris.",
  },
  {
    id: 9,
    blogImage: "/images/png/blog-nine.png",
    category: "Category - XX.XX.2024",
    title: "Lorem ipsum dolor sit",
    blogArrow: "/images/png/blog-arrow.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci nisl ut nulla ornare duis elit. At accumsan enim leo feugiat. Nulla ac mauris.",
  },
]
</script>

<template>
  <div class="mx-auto px-6 sm:container xl:max-w-[1296px]">
    <div class="relative bottom-[87px] sm:bottom-24 rounded-lg bg-white p-6 md:p-10 md:pb-11 shadow-cards">
      <h1 class="text-3xl font-semibold text-black">Recent blog posts</h1>
      <div class="mx-auto mt-4 sm:mt-8 flex flex-wrap items-center">
        <div class="w-full lg:w-1/2 lg:pr-4">
          <div v-for="(blog, index) of FIRST_BLOG_DATA" :key="blog.id">
            <div class="rounded-lg border-2 border-soft-peach p-6 pb-12 h-full">
              <img :src="blog.blogImage" alt="Blog image" class="h-[240px] object-cover object-top w-full rounded-lg" />
              <p class="mt-8 text-sm font-semibold text-congress-blue">
                {{ blog.category }}
              </p>
              <div class="flex w-full items-center justify-between">
                <h2 class="mt-3 text-2xl font-semibold text-black">
                  {{ blog.title }}
                </h2>
                <img :src="blog.blogArrow" alt="Blog image" width="12px" height="12px" />
              </div>
              <p class="mt-3 text-cloudy-grey">{{ blog.description }}</p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 lg:pl-4 max-sm:mt-4 max-lg:mt-8">
          <div v-for="(blog, index) of SECOND_BLOG_DATA" :key="blog.id" :class="index === 1 ? 'mt-4 sm:mt-8' : ''">
            <div class="rounded-lg border-2 border-soft-peach p-6 h-full">
              <div class="flex items-center gap-8 max-xl:flex-col">
                <img :src="blog.blogImage" alt="Blog image"
                  class="h-[240px] w-full xl:w-[244px] rounded-lg object-top object-cover" />
                <div>
                  <p class="text-sm font-semibold text-congress-blue">
                    {{ blog.category }}
                  </p>
                  <div class="flex w-full items-center justify-between gap-4">
                    <h2 class="mt-3 text-2xl font-semibold text-black">
                      {{ blog.title }}
                    </h2>
                    <img :src="blog.blogArrow" alt="Blog image" width="12px" height="12px" />
                  </div>
                  <p class="mt-3 text-cloudy-grey">{{ blog.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 class="text-3xl font-semibold text-black mt-12 mb-8">All blog posts</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8">
        <div v-for="(blog, index) of BLOG_POST_DATA" :key="blog.id">
          <div class="rounded-lg border-2 border-soft-peach p-6 h-full">
            <img :src="blog.blogImage" alt="Blog image" class="h-[240px] object-cover object-top w-full rounded-lg" />
            <p class="mt-8 text-sm font-semibold text-congress-blue">
              {{ blog.category }}
            </p>
            <div class="flex w-full items-center justify-between">
              <h2 class="mt-3 text-2xl font-semibold text-black">
                {{ blog.title }}
              </h2>
              <img :src="blog.blogArrow" alt="Blog image" width="12px" height="12px" />
            </div>
            <p class="mt-3 text-cloudy-grey">{{ blog.description }}</p>
          </div>
        </div>
      </div>
        <ButtonV
          class="w-[160px] h-[60px] rounded-[120px] border-2 border-congress-blue text-congress-blue font-semibold text-xl mt-8 mx-auto">
          Load More
        </ButtonV>
    </div>
  </div>
</template>
