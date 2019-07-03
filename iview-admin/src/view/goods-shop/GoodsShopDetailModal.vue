<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">店铺编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">类目编号：</span><span v-text="form.categoryId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">主体类型：</span><span v-text="form.subjectType"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺Logo：</span><span v-text="form.logo"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺标题：</span><span v-text="form.title"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺简介：</span><span v-text="form.intro"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺等级：</span><span v-text="form.level"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">审核状态：</span><span v-text="form.checkStatus"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">审核描述：</span><span v-text="form.checkDescription"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">审核人编号：</span><span v-text="form.checkedUserId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">审核时间：</span><span v-text="form.checkedTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.version"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.createTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.updateTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.isActive"></span></i-col>

</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'GoodsShopDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
userId: null,
categoryId: null,
subjectType: null,
logo: null,
title: null,
intro: null,
level: null,
checkStatus: null,
checkDescription: null,
checkedUserId: null,
checkedTime: null,
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
