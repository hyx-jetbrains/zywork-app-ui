<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">文章编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">类别编号：</span><span v-text="form.categoryId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">文章标题：</span><span v-text="form.title"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">封面图片：</span><span v-text="form.coverImg"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">文章摘要：</span><span v-text="form.summary"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">文章内容：</span><span>请在表格中点击查看</span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">阅读量：</span><span v-text="form.viewCount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.version"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">创建人编号：</span><span v-text="form.createId"></span></i-col>
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
        name: 'ArticleDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
categoryId: null,
title: null,
coverImg: null,
summary: null,
content: null,
viewCount: null,
version: null,
createId: null,
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
