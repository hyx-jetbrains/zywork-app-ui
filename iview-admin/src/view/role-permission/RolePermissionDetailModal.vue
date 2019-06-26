<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">角色编号：</span><span v-text="form.roleId"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">角色标题：</span><span v-text="form.roleTitle"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">权限编号：</span><span v-text="form.permissionId"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">权限标题：</span><span v-text="form.permissionTitle"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">权限字符串：</span><span v-text="form.permissionPermission"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">权限描述：</span><span v-text="form.permissionDescription"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.rolePermissionVersion"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.rolePermissionCreateTime"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.rolePermissionUpdateTime"></span></i-col><i-col span="2"></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'RolePermissionDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    roleId: null,
roleTitle: null,
permissionId: null,
permissionTitle: null,
permissionPermission: null,
permissionDescription: null,
rolePermissionVersion: null,
rolePermissionCreateTime: null,
rolePermissionUpdateTime: null,

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
