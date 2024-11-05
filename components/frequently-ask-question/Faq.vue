<script lang="ts" setup>
  import { ref } from "vue"
  import Icon from "~/components/common/Icon.vue"
  const activeAccordion = ref(0)

  function toggleAccordion(index) {
    activeAccordion.value = activeAccordion.value === index ? null : index
  }
  const FAQ_LIST = [
    {
      question: "Was Sie erwarten dürfen?",
      answer:
        "Willkommen bei Anamnesis®. Anamnesis® ist eine SaaS (Software as a Service) Anwendung und nutzt dabei cloud- und webbasierte Funktionen und Komponenten, welche Ihnen ermöglicht aus der bestehenden Datenbank Ihre eigenen Fragebögen zusammenzustellen und zweckgemäss Ihrer Patienten, Ihrer Zuweisern zur Verfügung zu stellen. Die Einzelfragen füllt die Patient:in schrittweise aus, welche die Ärzt:in bereits vor der Konsultation lesen kann. Die Ärzt:in hat somit mehr Zeit für das individuelle Arzt-Patienten-Gespräch.",
    },
    {
      question: "Welcher Personenkreis nutzt die Anamnesis®",
      answer:
        "Willkommen bei Anamnesis®. Anamnesis® ist eine SaaS (Software as a Service) Anwendung und nutzt dabei cloud- und webbasierte Funktionen und Komponenten, welche Ihnen ermöglicht aus der bestehenden Datenbank Ihre eigenen Fragebögen zusammenzustellen und zweckgemäss Ihrer Patienten, Ihrer Zuweisern zur Verfügung zu stellen. Die Einzelfragen füllt die Patient:in schrittweise aus, welche die Ärzt:in bereits vor der Konsultation lesen kann. Die Ärzt:in hat somit mehr Zeit für das individuelle Arzt-Patienten-Gespräch.",
    },
    {
      question: "Muss ich eine Software installieren?",
      answer:
        "Willkommen bei Anamnesis®. Anamnesis® ist eine SaaS (Software as a Service) Anwendung und nutzt dabei cloud- und webbasierte Funktionen und Komponenten, welche Ihnen ermöglicht aus der bestehenden Datenbank Ihre eigenen Fragebögen zusammenzustellen und zweckgemäss Ihrer Patienten, Ihrer Zuweisern zur Verfügung zu stellen. Die Einzelfragen füllt die Patient:in schrittweise aus, welche die Ärzt:in bereits vor der Konsultation lesen kann. Die Ärzt:in hat somit mehr Zeit für das individuelle Arzt-Patienten-Gespräch.",
    },
    {
      question: "Kann ich vor dem Kauf die Anamnesis® testen?",
      answer:
        "Willkommen bei Anamnesis®. Anamnesis® ist eine SaaS (Software as a Service) Anwendung und nutzt dabei cloud- und webbasierte Funktionen und Komponenten, welche Ihnen ermöglicht aus der bestehenden Datenbank Ihre eigenen Fragebögen zusammenzustellen und zweckgemäss Ihrer Patienten, Ihrer Zuweisern zur Verfügung zu stellen. Die Einzelfragen füllt die Patient:in schrittweise aus, welche die Ärzt:in bereits vor der Konsultation lesen kann. Die Ärzt:in hat somit mehr Zeit für das individuelle Arzt-Patienten-Gespräch.",
    },
    {
      question: "Würde die Anamnesis® Ärzte verdrängen?",
      answer:
        "Willkommen bei Anamnesis®. Anamnesis® ist eine SaaS (Software as a Service) Anwendung und nutzt dabei cloud- und webbasierte Funktionen und Komponenten, welche Ihnen ermöglicht aus der bestehenden Datenbank Ihre eigenen Fragebögen zusammenzustellen und zweckgemäss Ihrer Patienten, Ihrer Zuweisern zur Verfügung zu stellen. Die Einzelfragen füllt die Patient:in schrittweise aus, welche die Ärzt:in bereits vor der Konsultation lesen kann. Die Ärzt:in hat somit mehr Zeit für das individuelle Arzt-Patienten-Gespräch.",
    },
    {
      question: "Wie werden die Daten geschützt und verarbeitet?",
      answer:
        "Willkommen bei Anamnesis®. Anamnesis® ist eine SaaS (Software as a Service) Anwendung und nutzt dabei cloud- und webbasierte Funktionen und Komponenten, welche Ihnen ermöglicht aus der bestehenden Datenbank Ihre eigenen Fragebögen zusammenzustellen und zweckgemäss Ihrer Patienten, Ihrer Zuweisern zur Verfügung zu stellen. Die Einzelfragen füllt die Patient:in schrittweise aus, welche die Ärzt:in bereits vor der Konsultation lesen kann. Die Ärzt:in hat somit mehr Zeit für das individuelle Arzt-Patienten-Gespräch.",
    },
    {
      question:
        "Kann ich die Anamnese-, Zuweisungsformulare auf dem mobilen Gerät generieren?",
      answer:
        "Willkommen bei Anamnesis®. Anamnesis® ist eine SaaS (Software as a Service) Anwendung und nutzt dabei cloud- und webbasierte Funktionen und Komponenten, welche Ihnen ermöglicht aus der bestehenden Datenbank Ihre eigenen Fragebögen zusammenzustellen und zweckgemäss Ihrer Patienten, Ihrer Zuweisern zur Verfügung zu stellen. Die Einzelfragen füllt die Patient:in schrittweise aus, welche die Ärzt:in bereits vor der Konsultation lesen kann. Die Ärzt:in hat somit mehr Zeit für das individuelle Arzt-Patienten-Gespräch.",
    },
    {
      question:
        "Können die Patient*innen zur Verfügung gestellten Anamnesebögen auf dem mobilen Endgerät ausfüllen?",
      answer:
        "Willkommen bei Anamnesis®. Anamnesis® ist eine SaaS (Software as a Service) Anwendung und nutzt dabei cloud- und webbasierte Funktionen und Komponenten, welche Ihnen ermöglicht aus der bestehenden Datenbank Ihre eigenen Fragebögen zusammenzustellen und zweckgemäss Ihrer Patienten, Ihrer Zuweisern zur Verfügung zu stellen. Die Einzelfragen füllt die Patient:in schrittweise aus, welche die Ärzt:in bereits vor der Konsultation lesen kann. Die Ärzt:in hat somit mehr Zeit für das individuelle Arzt-Patienten-Gespräch.",
    },
  ]
</script>
<template>
  <div
    class="container mx-auto mb-20 -translate-y-16 px-6 md:-mb-3 md:-translate-y-24 xl:max-w-[1248px] xl:px-0"
  >
    <div class="rounded-lg bg-white p-6 shadow-cards md:p-8 lg:p-10">
      <div
        class="rounded-md border-2 border-soft-peach"
        v-for="(obj, index) of FAQ_LIST"
        :key="index"
        :class="index === 0 ? 'mt-0' : 'mt-4 md:mt-6 lg:mt-8'"
      >
        <button
          @click="toggleAccordion(index)"
          :class="activeAccordion === index ? 'pb-0' : 'pb-4 md:pb-[22px]'"
          class="flex items-center gap-4 px-4 pt-4 text-lg font-bold leading-155 text-congress-blue md:px-6 md:pt-[22px]"
        >
          <Icon
            :class="activeAccordion === index ? 'rotate-0' : 'rotate-180'"
            class="min-w-8 duration-300"
            name="faqArrow"
          />
          {{ obj.question }}
        </button>
        <div
          class="grid duration-300"
          :class="
            activeAccordion === index
              ? 'mb-4 mt-5 grid-rows-[1fr] md:mb-[22px]'
              : 'grid-rows-[0fr]'
          "
        >
          <p
            class="mx-4 max-w-[1104px] overflow-hidden text-lg font-semibold leading-155 text-black md:mx-6"
          >
            {{ obj.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
