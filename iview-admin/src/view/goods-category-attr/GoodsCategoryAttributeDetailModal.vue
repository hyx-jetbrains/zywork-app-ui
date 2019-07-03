<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">商品类目编号：</span><span v-text="form.goodsCategoryId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">类目名称：</span><span v-text="form.goodsCategoryTitle"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">商品属性编号：</span><span v-text="form.goodsAttributeId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">属性名称：</span><span v-text="form.goodsAttributeAttrName"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">属性代码：</span><span v-text="form.goodsAttributeAttrCode"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">数据类型：</span><span v-text="form.goodsAttributeAttrType"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">数据长度：</span><span v-text="form.goodsAttributeAttrLength"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否必填：</span><span v-text="form.goodsAttributeAttrRequired"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否前端显示：</span><span v-text="form.goodsAttributeAttrDisplay"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">属性排序：</span><span v-text="form.goodsCategoryAttributeAttrOrder"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.goodsCategoryAttributeVersion"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.goodsCategoryAttributeCreateTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.goodsCategoryAttributeUpdateTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.goodsCategoryAttributeIsActive"></span></i-col>

</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'GoodsCategoryAttributeDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    goodsCategoryId: null,
goodsCategoryTitle: null,
goodsAttributeId: null,
goodsAttributeAttrName: null,
goodsAttributeAttrCode: null,
goodsAttributeAttrType: null,
goodsAttributeAttrLength: null,
goodsAttributeAttrRequired: null,
goodsAttributeAttrDisplay: null,
goodsCategoryAttributeAttrOrder: null,
goodsCategoryAttributeVersion: null,
goodsCategoryAttributeCreateTime: null,
goodsCategoryAttributeUpdateTime: null,
goodsCategoryAttributeIsActive: null,

                }
            }
        },
        computed: {},
        mounted() {},
        methods: {}
    }
</script>

<style>
    .detail-info .ivu-col{
        margin-bottom: 10px;
    }

    .detail-title {
        font-weight: bold;
    }
</style>
