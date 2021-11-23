<template>
    <div>
          <Explore></Explore>
    </div>
</template>
<script>
import Explore from '../../components/Explore.vue'
   export default{
        components:{
           Explore
       }
   }
</script>
  <style scopped>
        @media (min-width: 1024px) {
            .container {
                max-width: 950px !important;
                padding-top: 30px !important;
            }
        }
    </style>
