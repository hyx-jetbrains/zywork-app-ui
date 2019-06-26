<template>
    <div>
        <Row>
            <i-col span="24">
                <Card>
                    <Button @click="confirmSelection" type="primary">确认选择</Button>&nbsp;
                    <Button @click="showSearchModal" type="primary">高级搜索</Button>&nbsp;
                    <Tooltip content="刷新" placement="right">
                        <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
                    </Tooltip>
                    <RoleTableMultiple ref="table" v-on:searchTable="searchTable" v-on:showDetailModal="showDetailModal"/>
                </Card>
            </i-col>
        </Row>
        <RoleSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <RoleDetailModal ref="detailModal"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import {saveUserRole} from '@/api/user'
    import * as ResponseStatus from '@/api/response-status'
    import RoleTableMultiple from './RoleTableMultiple.vue'
    import RoleSearchModal from './RoleSearchModal.vue'
    import RoleDetailModal from './RoleDetailModal.vue'
    export default {
        name: 'RoleMainMultiple',
        components: {
            RoleTableMultiple,
            RoleSearchModal,
            RoleDetailModal
        },
        data() {
            return {
                selectedData: [],
                selectedDataIdProp: '',
                extraData: {}
            }
        },
        computed: {},
        mounted() {},
        methods: {
            searchTable() {
                utils.initSelectTableData(this)
            },
            showDetailModal(row) {
                let detailModal = this.$refs.detailModal
                detailModal.modal.detail = true
                detailModal.form = row
            },
            showSearchModal() {
                let searchModal = this.$refs.searchModal
                searchModal.modal.search = true
            },
            confirmSelection() {
                // 确认选择的逻辑
                if (this.extraData.userId === '') {
                    this.$Message.error('请刷新页面重试')
                    return
                }
                var params = []
                this.$refs.table.table.selections.forEach(item => {
                    params.push({
                        roleId: item.id,
                        userId: this.extraData.userId
                    })
                })
                saveUserRole(params).then(res => {
                    const data = res.data
                    if (data.code === ResponseStatus.OK) {
                        this.$Message.info("分配角色成功")
                        this.$emit('closeDrawer')
                    } else {
                        this.$Message.error(data.message)
                    }
                }).catch(err => {
                    this.$Message.error(err)
                })
            },
            // 取消选择
            cancelSelect() {
                this.$refs.table.$refs.dataTable.selectAll(false);
            }
        }
    }
</script>

<style>
</style>
