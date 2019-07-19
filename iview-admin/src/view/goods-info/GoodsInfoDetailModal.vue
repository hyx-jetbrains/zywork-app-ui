<template>
  <div>
    <Modal v-model="modal.detail" title="详情" width="760">
      <div class="detail-info">
        <Row>
          <i-col span="11">
            <span class="detail-title">商品编号：</span>
            <span v-text="form.id"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">店铺编号：</span>
            <span v-text="form.shopId"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">类目编号：</span>
            <span v-text="form.categoryId"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">商品标题：</span>
            <span v-text="form.title"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">销量：</span>
            <span v-text="form.saleCount"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">上架状态：</span>
            <span v-text="form.shelfStatus === 0 ? '上架' : '下架'"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">版本号：</span>
            <span v-text="form.version"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">点击数：</span>
            <span v-text="form.clickCount"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
             <span class="detail-title">更新时间：</span>
            <span v-text="form.updateTime"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">创建时间：</span>
            <span v-text="form.createTime"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">是否激活：</span>
            <span v-text="form.isActive === 0 ? '激活' : '冻结'"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
          </i-col>
        </Row>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'GoodsInfoDetail',
  data() {
    return {
      modal: {
        detail: false
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
