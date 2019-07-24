<template>
  <div>
    <Row>
      <i-col span="24">
        <Card>
          <Button @click="showAddModal" type="primary">添加</Button>&nbsp;
          <Dropdown @on-click="batchOpt">
            <Button type="primary">
              批量操作
              <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem name="batchActive">批量激活</DropdownItem>
              <DropdownItem name="batchInactive">
                <span style="color: red;">批量冻结</span>
              </DropdownItem>
              <DropdownItem name="batchRemove" divided>
                <span style="color: red;">批量删除</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>&nbsp;
          <Button @click="showSearchModal" type="primary">高级搜索</Button>&nbsp;
          <Tooltip content="刷新" placement="right">
            <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
          </Tooltip>
          <AdvertisementTableMain
            ref="table"
            v-on:searchTable="searchTable"
            v-on:showEditModal="showEditModal"
            v-on:showDetailModal="showDetailModal"
            v-on:showUploadModal="showUploadModal"
            v-on:showModuleDetail="showModuleDetail"
            v-on:showModuleSearch="showModuleSearch"
          />
        </Card>
      </i-col>
    </Row>
    <AdvertisementAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit" />
    <AdvertisementSearchModal ref="searchModal" v-on:searchTable="searchTable" />
    <AdvertisementDetailModal ref="detailModal" />
    <UploadModal
      ref="uploadModal"
      @search="searchTable"
      :title="uploadModal.title"
      :format="uploadModal.format"
    />
    <AdvertisementTypeDetailModal ref="moduleDetail" />
    <Modal
      v-model="modal.moduleSearch"
      title="选择广告类型查询"
      :mask-closable="false"
      width="960"
    >
      <AdvertisementTypeMainSingle
        ref="moduleSearch"
        v-on:confirmChoice="confirmChoice"
      />
      <div slot="footer">
        <Button type="text" size="large" @click="cancelModal('moduleSearch')">取消</Button>
        <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import * as utils from '@/api/utils-v2'
import * as ResponseStatus from '@/api/response-status'
import AdvertisementTableMain from './AdvertisementTableMain.vue'
import AdvertisementAddEditModal from './AdvertisementAddEditModal.vue'
import AdvertisementSearchModal from './AdvertisementSearchModal.vue'
import AdvertisementDetailModal from './AdvertisementDetailModal.vue'
import AdvertisementTypeDetailModal from '../advertisement-type/AdvertisementTypeDetailModal.vue'
import AdvertisementTypeMainSingle from '../advertisement-type/AdvertisementTypeMainSingle.vue'
import UploadModal from '_c/upload-modal'

export default {
  name: 'AdvertisementMain',
  components: {
    AdvertisementTableMain,
    AdvertisementAddEditModal,
    AdvertisementSearchModal,
    AdvertisementDetailModal,
    UploadModal,
    AdvertisementTypeDetailModal,
    AdvertisementTypeMainSingle
  },
  data() {
    return {
      urls: {
        batchRemoveUrl: '/advertisement/admin/batch-remove',
        batchActiveUrl: '/advertisement/admin/batch-active',
        oneUrl: '/advertisement-type/admin/one/',
      },
      uploadModal: {
        title: '上传广告图片',
        format: ['jpg', 'jpeg', 'png', 'bmp'],
        uploadUrl: '/advertisement/admin/upload/'
      },
      modal: {
        moduleSearch: false
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    searchTable() {
      utils.search(this)
    },
    showAddModal() {
      let addEditModal = this.$refs.addEditModal
      addEditModal.modal.add = true
    },
    add() {
      utils.add(this)
    },
    showEditModal(row) {
      let addEditModal = this.$refs.addEditModal
      utils
        .doGet(this.urls.oneUrl + row.adTypeId, {})
        .then(res => {
          if (ResponseStatus.OK === res.data.code) {
            const title = res.data.data.title
            if (title) {
              row.adTypeName = title
            }

            addEditModal.modal.edit = true
            addEditModal.form = row
          } else {
            this.$Message.error(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    edit() {
      utils.edit(this)
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
    batchOpt(itemName) {
      if (itemName === 'batchActive') {
        utils.batchActive(this, 0)
      } else if (itemName === 'batchInactive') {
        utils.batchActive(this, 1)
      } else if (itemName === 'batchRemove') {
        utils.batchRemove(this)
      }
    },
    showUploadModal(adId) {
      this.$refs.uploadModal.uploadUrl = this.uploadModal.uploadUrl + adId
      this.$refs.uploadModal.uploadModal = true
    },
    showModal(modal) {
      this.modal[modal] = true
    },
    cancelModal(modal) {
      this.modal[modal] = false
    },
    /**
     * 显示模块详情
     */
    showModuleDetail(id) {
      utils
        .doGet(this.urls.oneUrl + id, {})
        .then(res => {
          if (ResponseStatus.OK === res.data.code) {
            let moduleDetail = this.$refs.moduleDetail
            moduleDetail.form = res.data.data
            moduleDetail.modal.detail = true
          } else {
            this.$Message.error(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * 显示模块搜索
     */
    showModuleSearch() {
      this.showModal('moduleSearch')
    },
    /**
     * 底部的确认选择
     */
    bottomConfirmChoice() {
      this.$refs.moduleSearch.confirmSelection()
    },
    /**
     * 确认选择
     */
    confirmChoice(row) {
      this.cancelModal('moduleSearch')
      let searchModal = this.$refs.searchModal
      searchModal.searchForm.adTypeIdMin = searchModal.searchForm.adTypeIdMax =
        row.id
      this.searchTable()
    },
  }
}
</script>

<style>
</style>
