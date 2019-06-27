<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">流程编号：</span><span v-text="form.id"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">流程Name：</span><span v-text="form.processName"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">流程Key：</span><span v-text="form.processKey"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">流程文件路径：</span><span v-text="form.filePath"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">流程描述：</span><span v-text="form.description"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否部署：</span><span v-text="form.isDeploy"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">部署时间：</span><span v-text="form.deployTime"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.version"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.createTime"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.updateTime"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.isActive"></span></i-col><i-col span="2"></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'ProcessDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
processName: null,
processKey: null,
filePath: null,
description: null,
isDeploy: null,
deployTime: null,
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
