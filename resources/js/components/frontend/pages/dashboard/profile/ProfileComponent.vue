<template>
  <div>
      <Profile></Profile>

  </div>
</template>
<script>
import Profile from '../../../components/Profile.vue'
    export default {

        components:{
            Profile
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
