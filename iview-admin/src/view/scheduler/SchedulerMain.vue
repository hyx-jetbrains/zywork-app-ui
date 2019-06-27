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
                            <DropdownItem name="batchInactive"><span style="color: red;">批量冻结</span></DropdownItem>
                            <DropdownItem name="batchRemove" divided><span style="color: red;">批量删除</span></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>&nbsp;
                    <Button @click="showSearchModal" type="primary">高级搜索</Button>&nbsp;
                    <Tooltip content="刷新" placement="right">
                        <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
                    </Tooltip>
                    <SchedulerTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" v-on:showDetailModal="showDetailModal"/>
                </Card>
            </i-col>
        </Row>
        <SchedulerAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <SchedulerSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <SchedulerDetailModal ref="detailModal"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import SchedulerTableMain from './SchedulerTableMain.vue'
    import SchedulerAddEditModal from './SchedulerAddEditModal.vue'
    import SchedulerSearchModal from './SchedulerSearchModal.vue'
    import SchedulerDetailModal from './SchedulerDetailModal.vue'
    import * as ResponseStatus from '@/api/response-status'
    import {
        modify
    } from '@/api/scheduler'
    export default {
        name: 'SchedulerMain',
        components: {
            SchedulerTableMain,
            SchedulerAddEditModal,
            SchedulerSearchModal,
            SchedulerDetailModal
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/scheduler/admin/batch-remove',
                    batchActiveUrl: '/scheduler/admin/batch-active'
                },
                cronForm: {
                    cronExp: null,
                    jobGroup: null,
                    jobId: null,
                    jobName: null,
                    triggerGroup: null,
                    triggerName: null,
                    jobClassName: null
                },
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
                addEditModal.modal.edit = true
                addEditModal.form = row
                addEditModal.oldCronExp = row.cronExpression
                addEditModal.currentJobStatus = row.jobStatus
                this.initCronForm(row)
            },
            edit() {
                utils.edit(this).then(response => {
                    if (response.data.code === ResponseStatus.OK) {
                        let addEditModal = this.$refs.addEditModal
                        if (addEditModal.oldCronExp !== addEditModal.newCronExp && addEditModal.currentJobStatus === 1) {
                            // 如果更新了cron表达式，并且是已经启动的任务，则需要重新启动任务
                            modify(this.cronForm).then(res => {
                                const data = res.data
                                if (data.code === ResponseStatus.OK) {
                                    this.$Message.success(data.message)
                                } else {
                                    this.$Message.error(data.message)
                                }   
                            }) .catch(err => {
                                this.$Message.error(err)
                            })
                        }
                    }
                })
                
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
            initCronForm(row) {
                this.cronForm.cronExp = row.cronExpression
                this.cronForm.jobGroup = row.groupName
                this.cronForm.jobId = row.id
                this.cronForm.jobName = row.name
                this.cronForm.triggerName = row.triggerName
                this.cronForm.triggerGroup = row.triggerGroup
                this.cronForm.jobClassName = row.className
            },
        }
    }
</script>

<style>
</style>
