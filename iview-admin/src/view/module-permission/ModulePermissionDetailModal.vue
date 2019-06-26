<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">模块编号：</span><span v-text="form.moduleId"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">模块标题：</span><span v-text="form.moduleTitle"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">模块描述：</span><span v-text="form.moduleDescription"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">权限编号：</span><span v-text="form.permissionId"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">权限标题：</span><span v-text="form.permissionTitle"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">权限字符串：</span><span v-text="form.permissionPermission"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">权限描述：</span><span v-text="form.permissionDescription"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.permissionVersion"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.permissionCreateTime"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.permissionUpdateTime"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.permissionIsActive"></span></i-col><i-col span="2"></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'ModulePermissionDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    moduleId: null,
moduleTitle: null,
moduleDescription: null,
permissionId: null,
permissionTitle: null,
permissionPermission: null,
permissionDescription: null,
permissionVersion: null,
permissionCreateTime: null,
permissionUpdateTime: null,
permissionIsActive: null,

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
