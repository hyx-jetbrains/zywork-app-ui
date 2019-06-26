<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">权限编号：</span><span v-text="form.id"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">所属模块：</span><span v-text="form.moduleId"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">权限标题：</span><span v-text="form.title"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">权限字符串：</span><span v-text="form.permission"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">权限描述：</span><span v-text="form.description"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.version"></span></i-col>
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
        name: 'PermissionDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
moduleId: null,
title: null,
permission: null,
description: null,
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
