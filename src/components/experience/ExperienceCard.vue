<script lang="ts">
export default {
    props: {
        company: {
            type: String,
            default() {
                return ""
            }
        },
        companyIcon: {
            type: String,
            default() {
                return ""
            }
        },
        title: {
            type: String,
            default() {
                return ""
            }
        },
        location: {
            type: String,
            default() {
                return ""
            }
        },
        dates: {
            type: String,
            default() {
                return ""
            }
        },
        bullets: {
            type: Array,
            default() {
                return []
            }
        },
    },
}
</script>


<template>
    <div class="experience-card-container">
        <b-card>
            <div class="experience-header-row">
                <div class="experience-header-col">
                    <div class="flex-div flex-row">
                        <div class="flex-div">
                            <b-card no-body :img-src="companyIcon" class="my-icon-card">
                            </b-card>
                        </div>
                        <div class="flex-div my-company-text">
                            {{ company }}
                        </div>
                    </div>
                    <div class="flex-div">
                        {{ title }}
                    </div>
                </div>
                <div class="experience-header-col-left">
                    <div class="flex-div align-self-flex-end">
                        {{ location }}
                    </div>
                    <div class="flex-div align-self-flex-end">
                        {{ dates }}
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    <li v-for="bullet, idx in bullets" :key="idx">
                        {{ bullet }}
                    </li>
                </ul>
            </div>
        </b-card>
    </div>
</template>

<style scoped>
.experience-header-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
}

.experience-header-col {
    display: flex;
    flex-direction: column;
    max-width: 75%;
}

.experience-header-col-left {
    display: flex;
    flex-direction: column;
    margin-left: auto;
}

.experience-card-container {
    margin-bottom: 1rem;
}

.flex-div {
    display: flex;
}

.flex-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
}

.align-self-flex-end {
    align-self: flex-end;
}

.my-company-text {
    font-size: x-large;
    align-self: flex-end;
}

.my-icon-card {
    padding: 0.25rem;
    width: 3rem;
    margin-right: 1rem;
    /* border: 0; */
}
</style>