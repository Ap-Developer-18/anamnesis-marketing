<script setup lang="ts">
  import ButtonV from "~/components/common/ButtonV.vue"
  const DISCOVER_CARD_DATA = [
    {
      title: "Patientenanamnese",
      para: "Anamnesis® bietet Ihnen eine einzigartige Lösung für die Anamneseerhebung und für die Patientenaufnahme.",
      buttontext: "Entdecken",
      listData: ["Unlimitierte Konsultationsanlässe", "Ortsunabhängig"],
    },
    {
      title: "Zuweisungsmanagement",
      para: "Anamnesis® bietet eine ausgezeichnete interdisziplinäre Kommunikationsart an, welche den Referenzkliniken, den Referenzärztinnen und -Ärzten ermöglicht, ihre unlimitierten Zuweisungsinformationen und ihre eigenen Zuweisungsalgorithmen zu generieren und ihren Zuweisenden kostenfrei zur Verfügung zu stellen.",
      buttontext: "Für Zuweisende",
      listData: ["Ihre professionelle Zuweisungsmanagement"],
    },
  ]
</script>
<template>
  <div class="mx-auto px-6 sm:container xl:max-w-[1248px] xl:px-0">
    <div>
      <div
        v-for="(obj, i) of DISCOVER_CARD_DATA"
        :key="i"
        :class="
          i === 0
            ? 'mb-4 mt-6 bg-discover lg:pb-[84px] sm:mb-8'
            : 'mb-6 bg-refer md:mb-10'
        "
        class="relative z-10 overflow-hidden rounded-lg bg-cover bg-[80%_0%] bg-no-repeat p-6 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:bg-discover-blue md:p-8 lg:p-[56px_56px_44px]"
      >
        <div class="flex flex-col justify-between lg:flex-row">
          <div class="max-w-[590px]">
            <h2
              class="custom-xs:text-3xl text-2xl font-bold leading-111 text-white lg:text-4xl"
            >
              {{ obj.title }}
            </h2>
            <p
              class="my-6 max-w-[502px] text-lg font-semibold leading-140 text-white lg:text-xl"
            >
              {{ obj.para }}
            </p>
            <ButtonV
              class="mt-4 w-max rounded-full border-[2.55px] border-white px-[30px] py-3.5 text-xl font-semibold leading-140 text-white duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              {{ obj.buttontext }}
            </ButtonV>
          </div>
          <div class="flex flex-col justify-between">
            <NuxtLink to="#" class="group flex justify-end max-lg:hidden">
              <NuxtImg
                src="/images/svg/edit-white.svg"
                alt="plus"
                class="size-10 duration-300 group-hover:scale-95"
                width="40"
                height="40"
              />
            </NuxtLink>
            <div
              class="mt-6 pl-5 md:pl-0 flex list-disc flex-col items-end lg:mt-0"
              :class="
                obj.listData.length > 1
                  ? 'lg:translate-y-7'
                  : 'lg:-translate-y-6'
              "
            >
              <div v-for="(data, i) of obj.listData" :key="i">
                  <p
                  class="custom-xs:text-base flex justify-center gap-4 text-end text-sm font-semibold leading-140 md:text-lg xl:text-xl"
                  >
                  <span class="min-w-1  h-1 translate-y-[7px] md:translate-y-3 bg-white rounded-full"></span>
                  {{ data }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
