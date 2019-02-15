import { getLocalStorageToken } from '@/libs/util'
import axios from '@/libs/api.request'
import Qs from 'qs'

export const deploy = (process) => {
    return new Promise((resolve, reject) => {
        axios.request({
            url: '/process-activiti/admin/do/deploy',
            method: 'POST',
            data: Qs.stringify({
              id: process.id,
              processName: process.processName,
              processKey: process.processKey,
              processPath: process.filePath
            }),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer ' + getLocalStorageToken()
            }
        }).then(response => {
            resolve(response)
        }).catch(error => {
           reject(error)
        })
    })
  }