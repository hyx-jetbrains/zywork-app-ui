<template>
    <div>
        <Row>
            <i-col span="24">
                <Card>
                    <Button @click="showSearchModal" type="primary">高级搜索</Button>&nbsp;
                    <Tooltip content="刷新" placement="right">
                        <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
                    </Tooltip>
                    <UserUserHierarchyTable ref="table" v-on:searchTable="searchTable" v-on:showDetailModal="showDetailModal"
                    v-on:showDistributionAbove="showDistributionAbove" v-on:showDistributionBelow="showDistributionBelow"/>
                </Card>
            </i-col>
        </Row>
        <UserUserHierarchySearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <UserUserHierarchyDetailModal ref="detailModal"/>
        <DistributionTreeDrawer ref="distributionTreeDrawer"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import UserUserHierarchyTable from './UserUserHierarchyTable.vue'
    import UserUserHierarchySearchModal from './UserUserHierarchySearchModal.vue'
    import UserUserHierarchyDetailModal from './UserUserHierarchyDetailModal.vue'
    import DistributionTreeDrawer from '../distribution/DistributionTreeDrawer'
    export default {
        name: 'UserUserHierarchyMain',
        components: {
            UserUserHierarchyTable,
            UserUserHierarchySearchModal,
            UserUserHierarchyDetailModal,
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
            showDistributionAbove(row) {
                this.$refs.distributionTreeDrawer.initDistributionTreeData(row.userId, row.userDetailNickname, row.userPhone, row.userDetailHeadicon, 'above')
            },
            showDistributionBelow(row) {
                this.$refs.distributionTreeDrawer.initDistributionTreeData(row.userId, row.userDetailNickname, row.userPhone, row.userDetailHeadicon, 'below')
            }
        }
    }
</script>

<style>
</style>
