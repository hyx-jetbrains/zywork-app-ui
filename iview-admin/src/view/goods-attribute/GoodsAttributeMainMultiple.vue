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
                    <GoodsAttributeTableMultiple ref="table" v-on:searchTable="searchTable" v-on:showDetailModal="showDetailModal"/>
                </Card>
            </i-col>
        </Row>
        <GoodsAttributeSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <GoodsAttributeDetailModal ref="detailModal"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import GoodsAttributeTableMultiple from './GoodsAttributeTableMultiple.vue'
    import GoodsAttributeSearchModal from './GoodsAttributeSearchModal.vue'
    import GoodsAttributeDetailModal from './GoodsAttributeDetailModal.vue'
    import {updateGoodsCategoryAttr} from '@/api/goods_category'
    import * as ResponseStatus from '@/api/response-status'
    export default {
        name: 'GoodsAttributeMainMultiple',
        components: {
            GoodsAttributeTableMultiple,
            GoodsAttributeSearchModal,
            GoodsAttributeDetailModal
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
                var params = []
                this.$refs.table.table.selections.forEach(item => {
                    params.push({
                        goodsCategoryId: this.extraData.categoryId,
                        goodsAttributeId: item.id
                    })
                })
                if (this.selectedData !== null && this.selectedData.length > 0) {
                    // 保留原始属性的排序
                    params.forEach((param, index) => {
                        this.selectedData.forEach((data, idx) => {
                            if (data.goodsAttributeId === param.goodsAttributeId) {
                                param.goodsCategoryAttributeAttrOrder = data.goodsCategoryAttributeAttrOrder
                            }
                        })
                    })
                }
                updateGoodsCategoryAttr(params).then(res => {
                    const data = res.data
                    if (data.code === ResponseStatus.OK) {
                    this.$Message.info("分配属性成功")
                    this.$emit('closeDrawer')
                    } else {
                    this.$Message.error(data.message)
                    }
                }).catch(err => {
                    this.$Message.error(err)
                })
            },
            cancelSelect() {
                this.$refs.table.$refs.dataTable.selectAll(false)
            }
        }
    }
</script>

<style>
</style>
