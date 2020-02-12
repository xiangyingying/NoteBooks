<template>
  <div class="about">
    <h1>This is an about page</h1>
    <modal v-show="isShow" @cancel="handleCancel"/>
    <button @click="toggle">切换</button>
  </div>
</template>
<script>
import Modal from '@/components/Modal.vue'
export default {
  name:"About",
  data(){
    return{
      isShow:false
    }
  },
  components:{
    Modal
  },
  methods:{
    toggle(){
      this.isShow=!this.isShow
    },
    handleCancel(){
      this.isShow=false
    }
  }
}
</script>
