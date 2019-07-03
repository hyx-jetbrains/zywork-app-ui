<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">商品属性编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">属性名称：</span><span v-text="form.attrName"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">属性代码：</span><span v-text="form.attrCode"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">数据类型：</span><span v-text="form.attrType"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">数据长度：</span><span v-text="form.attrLength"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否必填：</span><span v-text="form.attrRequired"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否前端显示：</span><span v-text="form.attrDisplay"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.version"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.createTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.updateTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.isActive"></span></i-col>
<i-col span="2"></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'GoodsAttributeDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
attrName: null,
attrCode: null,
attrType: null,
attrLength: null,
attrRequired: null,
attrDisplay: null,
version: null,
createTime: null,
updateTime: null,
isActive: null,

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
