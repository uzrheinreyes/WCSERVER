<template>
    <div>
      <div class="top-left">
        <!--PROFILE PICTURE-->
        <div class="image"></div>
        <img src="./assets/Picture.png" class="picture">
        <!--HEADING-->
        <h1 class="heading1">{{ firstname }} <br> {{ lastname }}</h1><br>
        <p class="subtitle">{{ subtitle }}</p>
      </div>

      <div class="bot-left">
        <h2 class="subheading1">{{ msg }}</h2>
        <p class="content1"><b>Full Name</b><br>{{ fullname }}</p>
        <p class="content1"><b>Full Address</b><br>{{ street }} <br> {{ city }}</p>
        <p class="content1"><b>Phone No.</b><br>{{ phone_no }}</p>
        <p class="content1"><b>Email</b><br>{{ emailaddress }}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'profile',
        data() {
            return {
                msg: 'PROFILE',

                firstname: 'Uzrhein',
                lastname: 'Reyes',
                subtitle: ' Web Developer',

                fullname: 'Uzrhein Miranda Reyes',
                street: '#118, Purok 7, Sto. Tomas,',
                city: 'San Luis, Pampanga',
                phone_no: '+63 947 618 8437',
                emailaddress: 'lhuzrheiner@gmail.com'
            }
        }
    }
</script>
