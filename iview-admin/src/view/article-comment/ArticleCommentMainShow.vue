<template>
    <div>
        <Row>
            <i-col span="24">
                <Card>
                    <Button @click="showSearchModal" type="primary">高级搜索</Button>&nbsp;
                    <Tooltip content="刷新" placement="right">
                        <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
                    </Tooltip>
                    <ArticleCommentTableShow ref="table" v-on:searchTable="searchTable" v-on:showDetailModal="showDetailModal"/>
                </Card>
            </i-col>
        </Row>
        <ArticleCommentSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <ArticleCommentDetailModal ref="detailModal"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import ArticleCommentTableShow from './ArticleCommentTableShow.vue'
    import ArticleCommentSearchModal from './ArticleCommentSearchModal.vue'
    import ArticleCommentDetailModal from './ArticleCommentDetailModal.vue'
    export default {
        name: 'ArticleCommentMainShow',
        components: {
            ArticleCommentTableShow,
            ArticleCommentSearchModal,
            ArticleCommentDetailModal
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
