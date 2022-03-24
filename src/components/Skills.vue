<template>
    <div class="bot-right">
        <h2 class="subheading1">{{ msg }}</h2>
        <p class="content1" id="skills"><b>{{ skill_1 }}</b></p>    <div class="level" id="creativity"></div>
        <p class="content1" id="skills"><b>{{ skill_2 }}</b></p>    <div class="level" id="attention"></div>
        <p class="content1" id="skills"><b>{{ skill_3 }}</b></p>    <div class="level" id="interpersonal"></div>
        <p class="content1" id="skills"><b>{{ skill_4 }}</b></p>    <div class="level" id="html"></div>
        <p class="content1" id="skills"><b>{{ skill_5 }}</b></p>    <div class="level" id="css"></div>
        <p class="content1" id="skills"><b>{{ skill_6 }}</b></p>    <div class="level" id="javascript"></div>
    </div>
</template>

<script>
    export default {
        name: 'skills',
        data() {
            return {
                msg: 'SKILLS',
                skill_1: 'Creativity',
                skill_2: 'Attention to detail',
                skill_3: 'Interpersonal',
                skill_4: 'HTML',
                skill_5: 'CSS',
                skill_6: 'JavaScript'
            }
        }
    }
</script>