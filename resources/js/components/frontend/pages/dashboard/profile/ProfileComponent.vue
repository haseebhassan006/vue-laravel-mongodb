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
<style scopped>
  @media (min-width: 1024px) {
            header .header_inner {
                max-width: 980px;
            }

            .pro-container {
                max-width: 860px;
            }
        }
</style>
