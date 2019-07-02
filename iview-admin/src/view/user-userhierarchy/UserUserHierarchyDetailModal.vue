<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">手机号：</span><span v-text="form.userPhone"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">用户邮箱：</span><span v-text="form.userEmail"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">关系编号：</span><span v-text="form.userHierarchyId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">祖先编号：</span><span v-text="form.userHierarchyAncestorId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userHierarchyUserId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">用户级别：</span><span v-text="form.userHierarchyUserLevel"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.userHierarchyVersion"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.userHierarchyCreateTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.userHierarchyUpdateTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.userHierarchyIsActive"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">昵称：</span><span v-text="form.userDetailNickname"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">头像地址：</span><span v-text="form.userDetailHeadicon"></span></i-col>
<i-col span="2"></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'UserUserHierarchyDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    userId: null,
userPhone: null,
userEmail: null,
userHierarchyId: null,
userHierarchyAncestorId: null,
userHierarchyUserId: null,
userHierarchyUserLevel: null,
userHierarchyVersion: null,
userHierarchyCreateTime: null,
userHierarchyUpdateTime: null,
userHierarchyIsActive: null,
userDetailNickname: null,
userDetailHeadicon: null,

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
