<template>
    <div>
        <Row>
            <i-col span="24">
                <Card>
                    <Button @click="setAttrGroup" type="primary">设置属性组合</Button>&nbsp;
                    <Button @click="showSearchModal" type="primary">高级搜索</Button>&nbsp;
                    <Tooltip content="刷新" placement="right">
                        <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
                    </Tooltip>
                    <GoodsCategoryAttributeTable ref="table" v-on:searchTable="searchTable" v-on:showDetailModal="showDetailModal"/>
                </Card>
            </i-col>
        </Row>
        <GoodsCategoryAttributeSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <GoodsCategoryAttributeDetailModal ref="detailModal"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import GoodsCategoryAttributeTable from './GoodsCategoryAttributeTable.vue'
    import GoodsCategoryAttributeSearchModal from './GoodsCategoryAttributeSearchModal.vue'
    import GoodsCategoryAttributeDetailModal from './GoodsCategoryAttributeDetailModal.vue'
    import * as ResponseStatus from '@/api/response-status'
    export default {
        name: 'GoodsCategoryAttributeMain',
        components: {
            GoodsCategoryAttributeTable,
            GoodsCategoryAttributeSearchModal,
            GoodsCategoryAttributeDetailModal
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
                // utils.search(this)
                utils.initSelectTableData(this, 'goodsAttributeId')
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
            setAttrGroup() {
                let tableComponent = this.$refs.table
                if (tableComponent.table.selections.length === 0) {
                     this.$Message.warning('请先选择需要设置为属性组合的属性')
                    return
                }
                this.$Spin.show()
                // 保存属性排序
                var params = []
                tableComponent.table.selections.forEach((item, index) => {
                    params.push({
                        goodsCategoryId: this.extraData.categoryId,
                        goodsAttributeId: item.goodsAttributeId,
                        goodsCategoryAttributeIsAttrGroup: 1
                    })
                })
                utils.doPostJson('/goods-category-attr/admin/update-attr-group', params, {}).then(response => {
                     this.$Spin.hide()
                    if (response.data.code === ResponseStatus.OK) {
                        this.$emit('closeModal')
                        this.$Message.success('成功设置类目属性组合')
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style>
</style>
