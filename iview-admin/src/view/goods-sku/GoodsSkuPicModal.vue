<template>
  <div>
    <Modal v-model="modal.imgModal" title="选择SKU图片">
      <div v-if="choosePic.id !== 0">
        <img :src="'/' + choosePic.url" style="width: 120px; height: 120px;">
      </div>
        <div class="demo-upload-list" v-for="pic in pics" :key="pic.name">
              <img :src="'/' + pic.picUrl">
              <div class="demo-upload-list-cover">
                  <Icon type="ios-eye-outline" @click="handleView(pic.picUrl)"></Icon>
                  <Icon type="md-checkmark" @click="handleChoose(pic)"></Icon>
              </div>
        </div>
    </Modal>
    <Modal v-model="modal.imgViewModal" title="查看图片">
      <img :src="'/' + picUrl" v-if="modal.imgViewModal" style="width: 100%">
    </Modal>
  </div>
</template>

<script>
  import * as utils from '@/api/utils-v2'
  import {allPicByGoods, getPicById} from '@/api/goods_pic'
  import SkuDetailModal from '_c/sku-detail-modal'
  import * as ResponseStatus from '@/api/response-status'

  export default {
    name: 'GoodsSkuPicModal',
    data() {
      return {
        goodsId: 0,
        skuId: 0,
        currentPicId: null,
        choosePic: {
          id: 0,
          url: ''
        },
        picUrl: '',
        pics: [],
        modal: {
          imgModal: false,
          imgViewModal: false
        },
      }
    },
    computed: {},
    mounted() {},
    methods: {
      loadPics() {
        this.choosePic = {
          id: 0,
          url: ''
        }
        if (this.currentPicId) {
          getPicById(this.currentPicId).then(response => {
            if (response.data.code === ResponseStatus.OK) {
              this.choosePic.id = this.currentPicId
              this.choosePic.url = response.data.data.picUrl
            }
          }).catch(error => {
            console.log(error)
          })
        }
        let params = {
          goodsId: this.goodsId,
          sortColumn: 'picOrder',
          sortOrder: 'asc'
        }
        allPicByGoods(params).then(response => {
          if (response.data.code === ResponseStatus.OK) {
            this.pics = response.data.data.rows
          } else {
            this.$Message.error(response.data.message)
          }
        }).catch(error => {
          console.log(error)
        })
      },
      handleView (picUrl) {
        this.picUrl = picUrl
        this.modal.imgViewModal = true
      },
      handleChoose(pic) {
        this.$Spin.show()
        this.choosePic.url = pic.picUrl
        this.choosePic.id = pic.id
        utils.doPostJson('/goods-sku/admin/update', 
        {
          id: this.skuId,
          goodsId: this.goodsId,
          picId: pic.id
        }, {}).then(response => {
          this.$Spin.hide()
          if (response.data.code !== ResponseStatus.OK) {
                this.$Message.error(response.data.message)
              } else {
                this.$Message.success(response.data.message)
                this.$emit('searchTable')
              }
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style>
    .demo-upload-list {
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>

