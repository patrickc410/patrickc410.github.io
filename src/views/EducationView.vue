<script lang="ts">
export default {
    emits: ['content-height'],
    mounted() {
        this.$emit('content-height', document.getElementById('educationView').clientHeight)
    }
}
</script>


<template>
    <div id="educationView">
        <h3>
            Georgia Institute of Technology
        </h3>
        <div>
            Master of Science in Computer Science
        </div>
    </div>
</template>