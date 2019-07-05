<template>
  <div>
    <Modal :transfer="false" v-model="modal.picOrder" title="设置图片排序" width="60%">
    <Row>
      <i-col span="24">
        <Card>
          <Button @click="confirmSelection" type="primary">确认排序</Button>&nbsp;
          <Tooltip content="刷新" placement="right">
            <Button icon="md-refresh" type="success" shape="circle" @click="search"></Button>
          </Tooltip>
          <div class="drag-box-card">
            <Spin size="large" fix v-if="spinShow"></Spin>
            <drag-list-single :list.sync="pics" :dropConClass="dropConClass" @on-change="handleChange">
              <h4 slot="title">鼠标拖动以修改图片顺序</h4>
              <div class="drag-item" slot="content" slot-scope="content" style="text-align: center;">
                <img :src="content.item.name" style="width: 120px; height: 120px;">
              </div>
            </drag-list-single>
          </div>
        </Card>
      </i-col>
    </Row>
    <div slot="footer">
        <Button type="text" size="large" @click="modal.picOrder = false">取消</Button>
        <Button type="primary" size="large" @click="confirmSelection">确认排序</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import DragListSingle from '_c/drag-list-single'
  import * as utils from '@/api/utils-v2'
  import {allPicByGoods, updateGoodsPic} from '@/api/goods_pic'
  import * as ResponseStatus from '@/api/response-status'

  export default {
    name: 'GoodsPicOrderModal',
    components: {
      DragListSingle
    },
    data() {
      return {
        goodsId: null,
        pics: [],
        dropConClass: {
          left: ['drop-box', 'left-drop-box'],
          right: ['drop-box', 'right-drop-box']
        },
        spinShow: false,
        modal: {
          picOrder: false
        },
      }
    },
    computed: {},
    mounted() {},
    methods: {
      initData(goodsId) {
        this.spinShow = true
        this.goodsId = goodsId
        this.pics.splice(0, this.pics.length)
        var params = {
          goodsId: goodsId,
          sortColumn: 'picOrder',
          sortOrder: 'asc'
        }
        allPicByGoods(params).then(res => {
          this.spinShow = false
          const data = res.data
          if (data.code !== ResponseStatus.OK) {
            this.$Message.error(data.message)
            return
          }
          if (data.data.rows.length > 0) {
            data.data.rows.forEach((row, index) => {
              this.pics.push(
                {
                  id: row.id, 
                  name: '/' + row.picUrl
                }
              )
            })
          }
        }).catch(err => {
          this.$Message.error(err)
        })
      },
      search() {
        this.initData(this.goodsId)
      },
      handleChange ({ src, target, oldIndex, newIndex }) {
        // this.handleList.push(`${src} => ${target}, ${oldIndex} => ${newIndex}`)
      },
      confirmSelection() {
        if (this.pics.length === 0) {
          this.$Message.warning('商品没有图片，请先上传商品图片')
          return;
        }
        this.$Spin.show()
        // 保存属性排序
        var params = []
        for (let i = 0, len = this.pics.length; i < len; i++) {
          params.push({
            id: this.pics[i].id,
            picOrder: i + 1
          })
        }
        updateGoodsPic(params).then(response => {
          this.$Spin.hide()
          if (response.data.code === ResponseStatus.OK) {
            this.$Message.success('成功更新商品图片排序')
            this.modal.picOrder = false
          } else {
            this.$Message.error(response.data.message)
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="less">
.drag-box-card{
  display: inline-block;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  .drag-item{
    margin: 5px;
  }
  h3{
    padding: 10px 15px;
  }
  .drop-box{
    height: auto;
    border-radius: 5px;
  }
  .left-drop-box{
    margin-right: 10px;
  }
}
</style>
