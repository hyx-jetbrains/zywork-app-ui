<template>
    <div>
        <Modal v-model="categoryAttributeModal" title="商品类目属性" width="80%">
            <GoodsCategoryAttributeMain ref="goodsCategoryAttributeMain" @closeModal="closeModal"/>
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
            }
        }
    }
</script>

<style>
</style>
