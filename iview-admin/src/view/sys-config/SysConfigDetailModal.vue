<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">配置编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">配置名称：</span><span v-text="form.name"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">配置内容(JSON)：</span><span><pre>{{form.value}}</pre></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">中文说明：</span><span v-text="form.description"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">配置注释：</span><span><pre>{{form.comment}}</pre></span></i-col>
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
        name: 'SysConfigDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
name: null,
value: null,
description: null,
comment: null,
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
