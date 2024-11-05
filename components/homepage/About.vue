<script setup lang="ts">
  import CustomModal from "~/components/common/CustomModal.vue"
  import { ref, onUnmounted, watch } from "vue"

  const showModal = ref(false)
  function toggleModal() {
    showModal.value = !showModal.value
  }
  // Watch for changes to `showModal` and toggle body overflow
  watch(showModal, (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  })

  // Cleanup function to reset overflow when the component unmounts
  onUnmounted(() => {
    document.body.style.overflow = ""
  })
</script>

<template>
  <div
    class="mx-auto my-6 px-6 sm:container md:my-10 xl:max-w-[1248px] xl:px-0"
  >
    <div class="flex items-center justify-between gap-4">
      <h2
        class="custum-xs:text-2xl text-xl font-semibold leading-120 text-black md:text-3xl"
      >
        Über Anamnesis®
      </h2>
      <NuxtLink to="#" class="group" @click.prevent="toggleModal">
        <NuxtImg
          src="/images/svg/edit-blue.svg"
          alt="edit blue"
          width="40"
          height="40"
          class="size-10 object-cover duration-300 group-hover:scale-95"
        />
      </NuxtLink>
    </div>
    <div class="mt-6 grid grid-cols-1 gap-8 md:mt-8 lg:grid-cols-2">
      <div class="w-full overflow-hidden rounded-lg">
        <video
          class="h-[351px] w-full rounded-lg max-md:h-[219px]"
          playsinline
          controls
          poster="/images/png/about-video-thumbnail.png"
          src="/videos/sample-video.webm"
          type="video/webm"
        ></video>
      </div>
      <div class="rounded-lg border-2 border-soft-peach p-6 md:p-8 lg:p-[33px]">
        <h2 class="text-custom-xl font-medium leading-125 text-black">
          Anamnesis®
        </h2>
        <p class="mt-4 text-lg font-bold leading-155 text-cloudy-grey">
          Anamnesis® verbindet Ihre Expertise mit Ihren Patient:innen und mit
          Ihren Kolleg:innen
        </p>
      </div>
    </div>
    <div
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
      v-if="showModal"
      @click.self="showModal = false"
    >
      <CustomModal @close="showModal = false" />
    </div>
  </div>
</template>
