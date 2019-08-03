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
                    <UserDetailTableSingle ref="table" v-on:searchTable="searchTable" v-on:showDetailModal="showDetailModal"/>
                </Card>
            </i-col>
        </Row>
        <UserDetailSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <UserDetailDetailModal ref="detailModal"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import UserDetailTableSingle from './UserDetailTableSingle.vue'
    import UserDetailSearchModal from './UserDetailSearchModal.vue'
    import UserDetailDetailModal from './UserDetailDetailModal.vue'
    export default {
        name: 'UserDetailMainMultiple',
        components: {
            UserDetailTableSingle,
            UserDetailSearchModal,
            UserDetailDetailModal
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
                const row = this.$refs.table.table.currentRow
                if (!row.id) {
                  this.$Message.error('请选择一行数据')
                  return
                }
                this.$emit('confirmChoice', row)
            }
        }
    }
</script>

<style>
</style>
