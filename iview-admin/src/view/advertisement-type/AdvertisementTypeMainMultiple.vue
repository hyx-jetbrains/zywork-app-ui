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
                    <AdvertisementTypeTableMultiple ref="table" v-on:searchTable="searchTable" v-on:showDetailModal="showDetailModal"/>
                </Card>
            </i-col>
        </Row>
        <AdvertisementTypeSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <AdvertisementTypeDetailModal ref="detailModal"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import AdvertisementTypeTableMultiple from './AdvertisementTypeTableMultiple.vue'
    import AdvertisementTypeSearchModal from './AdvertisementTypeSearchModal.vue'
    import AdvertisementTypeDetailModal from './AdvertisementTypeDetailModal.vue'
    export default {
        name: 'AdvertisementTypeMainMultiple',
        components: {
            AdvertisementTypeTableMultiple,
            AdvertisementTypeSearchModal,
            AdvertisementTypeDetailModal
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
