<template>
  <Modal v-model="modal.img" title="图片预览" :mask-closable="true" width="760">
      <img :src="imgSrc" style="width: 100%;" />
      <div slot="footer">
        <Button type="default" size="large" @click="modal.img = false">关闭</Button>
      </div>
    </Modal>
</template>

<script>
export default {
  name: 'ImgModal',
  props: {},
  components: {},
  data() {
    return {
      modal: {
        img: false
      },
      imgSrc: ''
    }
  },
  methods: {
    
  },
  mounted() {}
}
</script>

<style lang="less">

</style>
