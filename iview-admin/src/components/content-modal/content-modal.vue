<template>
  <Modal v-model="contentModal" :title="title" :mask-closable="true" width="760"> 
    <div v-html="content"></div>
    <div slot="footer">
      <Button type="primary" size="large" @click="contentModal = false">关闭</Button>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'ContentModal',
  data () {
    return {
      contentModal: false,
      title: '查看内容',
      content: '暂无内容'
    }
  },
  methods: {},
  mounted () {}
}
</script>

<style lang="less">
</style>
