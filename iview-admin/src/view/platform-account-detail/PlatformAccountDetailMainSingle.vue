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
                    <PlatformAccountDetailTableSingle ref="table" v-on:searchTable="searchTable" v-on:showDetailModal="showDetailModal"/>
                </Card>
            </i-col>
        </Row>
        <PlatformAccountDetailSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <PlatformAccountDetailDetailModal ref="detailModal"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import PlatformAccountDetailTableSingle from './PlatformAccountDetailTableSingle.vue'
    import PlatformAccountDetailSearchModal from './PlatformAccountDetailSearchModal.vue'
    import PlatformAccountDetailDetailModal from './PlatformAccountDetailDetailModal.vue'
    export default {
        name: 'PlatformAccountDetailMainMultiple',
        components: {
            PlatformAccountDetailTableSingle,
            PlatformAccountDetailSearchModal,
            PlatformAccountDetailDetailModal
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
            }
        }
    }
</script>

<style>
</style>
