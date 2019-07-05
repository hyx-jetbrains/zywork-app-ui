<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">广告编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">广告类型编号：</span><span v-text="form.adTypeId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">广告标题：</span><span v-text="form.title"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">广告图片：</span><span v-text="form.picUrl"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">广告顺序：</span><span v-text="form.adOrder"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">背景颜色：</span><span v-text="form.backgroundColor"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">关联页面链接：</span><span v-text="form.linkPageUrl"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">关联记录ID：</span><span v-text="form.linkId"></span></i-col>

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
        name: 'AdvertisementDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
adTypeId: null,
title: null,
picUrl: null,
adOrder: null,
backgroundColor: null,
linkPageUrl: null,
linkId: null,
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
