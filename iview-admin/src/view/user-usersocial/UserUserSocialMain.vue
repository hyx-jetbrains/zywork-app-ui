<template>
    <div>
        <Row>
            <i-col span="24">
                <Card>
                    <Button @click="showSearchModal" type="primary">高级搜索</Button>&nbsp;
                    <Tooltip content="刷新" placement="right">
                        <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
                    </Tooltip>
                    <UserUserSocialTable ref="table" v-on:searchTable="searchTable" v-on:showDetailModal="showDetailModal"/>
                </Card>
            </i-col>
        </Row>
        <UserUserSocialSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <UserUserSocialDetailModal ref="detailModal"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import UserUserSocialTable from './UserUserSocialTable.vue'
    import UserUserSocialSearchModal from './UserUserSocialSearchModal.vue'
    import UserUserSocialDetailModal from './UserUserSocialDetailModal.vue'
    export default {
        name: 'UserUserSocialMain',
        components: {
            UserUserSocialTable,
            UserUserSocialSearchModal,
            UserUserSocialDetailModal
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
