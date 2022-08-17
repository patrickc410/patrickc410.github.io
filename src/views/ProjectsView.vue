<script lang="ts">
import ProjectCard from '@/components/project/ProjectCard.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        ProjectCard
    },
    emits: ['content-height'],
    data() {
        return {
            projectsData: [
                {
                    "projectTitle": "Deep Learning Semester Project",
                    "projectDates": "Spring 2022",
                    "projectBullets": [
                        "Trained text generation model to produce paraphrase sentences based on given input sentence on a corpus of 30,000 paraphrase sentence pairs from Google PAWS and Microsoft Research Paraphrase Corpus datasets",
                        "Fine-tuned using PyTorch pretrained T5-base language model; experimented with Transformer adapter module architectures; calculated BLEU score performance metrics; reported findings in ICLR-style paper"
                    ]
                },
                {
                    "projectTitle": "Mobile Applications and Services Semester Project",
                    "projectDates": "Fall 2021",
                    "projectBullets": [
                        "Designed React Native iOS social media application for viewing and sharing restaurant recommendations",
                        "Implemented authentication and NoSQL database through Firebase Authentication and Firestore database"
                    ]
                },
                {
                    "projectTitle": "Machine Learning Semester Project",
                    "projectDates": "Fall 2021",
                    "projectBullets": [
                        "Built random forest and neural network genre classifiers, achieving up to 75% accuracy for genre groups",
                        "Curated dataset combining song data from the Million Song Dataset with audio features from Spotify API"
                    ]
                }
            ]
        }
    },
    mounted() {
        this.$emit('content-height', document.getElementById('projectsView')?.clientHeight)
    }
});
</script>

<template>
    <div id="projectsView">
        <ProjectCard v-for="project, idx in projectsData" :key="idx" :projectTitle="project.projectTitle"
            :projectDates="project.projectDates" :projectBullets="project.projectBullets"></ProjectCard>
    </div>
</template>

<style scoped>
.project-header-row {
    display: flex;
    flex-direction: row;
}

.project-header-col {
    display: flex;
}

.project-header-col-left {
    display: flex;
    margin-left: auto;
}
</style>
