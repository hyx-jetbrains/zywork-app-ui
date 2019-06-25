<template>
    <div>
        <Row>
            <i-col span="24">
                <Card>
                    <Button @click="showSearchModal" type="primary">高级搜索</Button>&nbsp;
                    <Tooltip content="刷新" placement="right">
                        <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
                    </Tooltip>
                    <UserOrganizationTable ref="table" v-on:searchTable="searchTable" v-on:showDetailModal="showDetailModal"/>
                </Card>
            </i-col>
        </Row>
        <UserOrganizationSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <UserOrganizationDetailModal ref="detailModal"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import UserOrganizationTable from './UserOrganizationTable.vue'
    import UserOrganizationSearchModal from './UserOrganizationSearchModal.vue'
    import UserOrganizationDetailModal from './UserOrganizationDetailModal.vue'
    export default {
        name: 'UserOrganizationMain',
        components: {
            UserOrganizationTable,
            UserOrganizationSearchModal,
            UserOrganizationDetailModal
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
            }
        }
    }
</script>

<style>
</style>
