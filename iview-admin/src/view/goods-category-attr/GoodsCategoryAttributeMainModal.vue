<template>
    <div>
        <Modal v-model="categoryAttributeModal" title="商品类目属性" width="80%">
            <GoodsCategoryAttributeMain ref="goodsCategoryAttributeMain" @closeModal="closeModal"/>
             <div slot="footer">
                <Button type="text" size="large" @click="closeModal">取消</Button>
                <Button type="primary" size="large" @click="setAttrGroup">确定</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import GoodsCategoryAttributeMain from './GoodsCategoryAttributeMain.vue'
    export default {
        name: 'GoodsCategoryAttributeMainModal',
        components: {
            GoodsCategoryAttributeMain
        },
        data() {
            return {
                categoryAttributeModal: false
            }
        },
        computed: {},
        mounted() {},
        methods: {
            closeModal() {
                this.categoryAttributeModal = false
            },
            setAttrGroup() {
                this.$refs.goodsCategoryAttributeMain.setAttrGroup()
            }
        }
    }
</script>

<style>
</style>
