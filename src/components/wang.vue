<template>
  <div>
      {{msg}}
      <div @click="getData">点击我</div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "wang111"
    }
  },
  methods:{
    getData () {
      alert(1)
    }
  }
}
</script>
