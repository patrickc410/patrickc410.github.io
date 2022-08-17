<script lang="ts">
export default {
    props: {
        projectTitle: {
            type: String,
            default() {
                return ""
            }
        },
        projectDates: {
            type: String,
            default() {
                return ""
            }
        },
        projectBullets: {
            type: Array,
            default() {
                return []
            }
        },
    }
}
</script>


<template>
    <div class="projeect-card-container">
        <b-card>
            <div class="project-header-row">
                <div class="project-header-col">
                    <h4>
                        {{ projectTitle }}
                    </h4>
                </div>
                <div class="project-header-col-left">
                    {{ projectDates }}
                </div>
            </div>
            <div>
                <ul>
                    <li v-for="bullet, idx in projectBullets" :key="idx">
                        {{ bullet }}
                    </li>
                </ul>
            </div>
        </b-card>
    </div>
</template>

<style scoped>
.project-header-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
}

.project-header-col {
    display: flex;
}

.project-header-col-left {
    display: flex;
    margin-left: auto;
}

.projeect-card-container {
    margin-bottom: 1rem;
}
</style>