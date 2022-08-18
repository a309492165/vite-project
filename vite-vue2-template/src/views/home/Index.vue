<template>
  <div>
    <h1>Home</h1>
    <a-button type="dashed" @click="onClick">
      add count
    </a-button>
    <a-button type="primary" @click="handleRequest">
      发起请求
    </a-button>
    <div>
      <h2>{{ count }}</h2>
    </div>
  </div>
</template>

<script>
import $service from '@/service/home/index.js'

export default {
  name: "Index",
  data() {
    return {}
  },
  computed: {
    count() {
      return this.$store.getters.count
    }
  },
  methods: {
    onClick() {
      this.$message.info('add count', );
      this.$store.commit('increment')
    },
    handleRequest() {
      $service.getList().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>