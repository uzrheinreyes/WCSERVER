<template>
      <div class="bot-mid">
      <h2 class="subheading1">{{ msg }}</h2>
      <p class="content1"><b>{{ stage_1 }}</b><br>{{ school_1 }}<br><i>{{ course_1 }}</i><br>{{ status_1 }}</p>
      <p class="content1"><b>{{ stage_2 }}</b><br>{{ school_2 }}<br><i>{{ status_2 }}</i></p>
      <p class="content1"><b>{{ stage_3 }}</b><br>{{ school_3 }}<br><i>{{ status_3 }}</i></p>
      </div>
</template>

<script>
    export default {
        name: 'education',
        data() {
            return {
                msg: 'EDUCATION',

                stage_1: 'College',
                school_1: 'Holy Angel University (2020-2024)',
                course_1: 'Bachelors of Science in Information Technology',
                status_1: 'Major in Web Development',

                stage_2 : 'Secondary School',
                school_2: 'University of the Assumption (2014-2020)',
                status_2: 'With Honors',

                stage_3 : 'Primary School',
                school_3: 'San Luis Elementary School (2008-2014)',
                status_3: '5th Honorable Mention'
            }
        }
    }
</script>