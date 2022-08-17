<script lang="ts">
import ExperienceCard from '@/components/experience/ExperienceCard.vue';

export default {
    components: {
        ExperienceCard
    },
    emits: ['content-height'],
    data() {
        return {
            experienceData: [
                {
                    "company": "IBM",
                    "companyIcon": "company_icons/ibm_icon2.svg",
                    "title": "Full Stack Development Intern / Corporate Security Team / Extreme Blue Technical Leadership Program",
                    "location": "Austin, TX",
                    "dates": "Summer 2022",
                    "bullets": [
                        "Developed and fine-tuned a keyword extraction method for analyzing text content of the average 20,000+ files involved in data theft cases",
                        "Designed Vue.js interactive dashboard for security analysts to make quicker decisions about incidents",
                        "Integrated data from GraphQL backend supported by PostgreSQL database",
                        "Created annotation tool from scratch for evaluating keyword extraction method performances",
                    ]
                },
                {
                    "company": "Ally Financial",
                    "companyIcon": "/company_icons/ally_icon.png",
                    "title": "Data Science Intern / Conversational AI Team",
                    "location": "Charlotte, NC",
                    "dates": "Summer 2021",
                    "bullets": [
                        "Created web application with Python Flask and Dash to analyze over 300,000 text conversations clustered into 1200+ topics using an unsupervised natural language topic model",
                        "Enhanced topic model REST API by exposing original 300-dimensional vector embeddings of words, topics and conversations, and reduced-dimension 2D and 3D embeddings for visualization purposes",
                    ]
                },
                {
                    "company": "Delta Air Lines",
                    "companyIcon": "/company_icons/delta_icon3.png",
                    "title": "Data Analytics Intern / Airport Customer Service Data Reporting Team",
                    "location": "Atlanta, GA",
                    "dates": "Spring 2020",
                    "bullets": [
                        "Analyzed data for 20 operational KPIs, and automated data reporting using SAS, SQL, and Tableau",
                        "Re-designed internal web application for better user experience using JavaScript, Bootstrap, and jQuery",
                    ]
                },
            ]
        }
    },
    mounted() {
        this.$emit('content-height', document.getElementById('experienceView').clientHeight)
    }
}
</script>

<template>
    <div id="experienceView">
        <ExperienceCard v-for="item, idx in experienceData" :key="idx" :company="item.company"
            :companyIcon="item.companyIcon" :title="item.title" :location="item.location" :dates="item.dates"
            :bullets="item.bullets"></ExperienceCard>
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
