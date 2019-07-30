<template>
  <div>
    <Modal v-model="modal.detail" title="评论图片详情" width="760">
      <div class="detail-info">
        <Row>
          <i-col span="4" v-for="(item, index) in formList" :key="index">
            <img :src="item.picUrl" class="zy-img" />
          </i-col>
        </Row>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'GoodsCommentPicDetail',
  data() {
    return {
      modal: {
        detail: false
      },
      formList: []
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<style>
.detail-info .ivu-col {
  margin-bottom: 10px;
}

.detail-title {
  font-weight: bold;
}

.zy-img {
  width: 200px;
  height: 200px;
  margin: 20px;
}
</style>
