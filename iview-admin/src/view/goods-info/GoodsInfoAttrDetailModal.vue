<template>
  <div>
    <Modal v-model="modal.attrDetail" title="详情" width="760">
      <div class="detail-info">
        <p v-html="form.intro"></p>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'GoodsInfoAttrDetail',
  data() {
    return {
      modal: {
        attrDetail: false
      },
      form: {
        id: null,
        shopId: null,
        categoryId: null,
        title: null,
        intro: null,
        shelfStatus: null,
        saleCount: null,
        clickCount: null,
        version: null,
        createTime: null,
        updateTime: null,
        isActive: null
      }
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
</style>
