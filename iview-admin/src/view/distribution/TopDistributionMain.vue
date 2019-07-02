<template>
    <div>
        <Row>
            <i-col span="24">
                <Card>
                    <Button @click="showSearchModal" type="primary">高级搜索</Button>&nbsp;
                    <Tooltip content="刷新" placement="right">
                        <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
                    </Tooltip>
                    <TopDistributionTable ref="table" v-on:searchTable="searchTable" v-on:showDetailModal="showDetailModal"
                    v-on:showDistributionBelow="showDistributionBelow"/>
                </Card>
            </i-col>
        </Row>
        <TopDistributionSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <TopDistributionDetailModal ref="detailModal"/>
        <DistributionTreeDrawer ref="distributionTreeDrawer"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import TopDistributionTable from './TopDistributionTable.vue'
    import TopDistributionSearchModal from './TopDistributionSearchModal.vue'
    import TopDistributionDetailModal from './TopDistributionDetailModal.vue'
    import DistributionTreeDrawer from './DistributionTreeDrawer'
    export default {
        name: 'TopDistributionMain',
        components: {
            TopDistributionTable,
            TopDistributionSearchModal,
            TopDistributionDetailModal,
            DistributionTreeDrawer
        },
        data() {
            return {}
        },
        computed: {},
        mounted() {},
        methods: {
            searchTable() {
                utils.search(this)
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
            showDistributionBelow(row) {
                this.$refs.distributionTreeDrawer.initDistributionTreeData(row.userId, row.nickname, row.phone, row.headicon, 'below')
            }
        }
    }
</script>

<style>
</style>
