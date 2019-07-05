<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">广告类型编号：</span><span v-text="form.advertisementTypeId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">类型名称：</span><span v-text="form.advertisementTypeTitle"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">类型代码：</span><span v-text="form.advertisementTypeCode"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">广告编号：</span><span v-text="form.advertisementId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">广告标题：</span><span v-text="form.advertisementTitle"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">广告图片：</span><span v-text="form.advertisementPicUrl"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">广告顺序：</span><span v-text="form.advertisementAdOrder"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">背景颜色：</span><span v-text="form.advertisementBackgroundColor"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">关联页面链接：</span><span v-text="form.advertisementLinkPageUrl"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">关联记录ID：</span><span v-text="form.advertisementLinkId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.advertisementVersion"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.advertisementCreateTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.advertisementUpdateTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.advertisementIsActive"></span></i-col>

</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'AdvertisementTypeAdsDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    advertisementTypeId: null,
advertisementTypeTitle: null,
advertisementTypeCode: null,
advertisementId: null,
advertisementTitle: null,
advertisementPicUrl: null,
advertisementAdOrder: null,
advertisementBackgroundColor: null,
advertisementLinkPageUrl: null,
advertisementLinkId: null,
advertisementVersion: null,
advertisementCreateTime: null,
advertisementUpdateTime: null,
advertisementIsActive: null,

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
