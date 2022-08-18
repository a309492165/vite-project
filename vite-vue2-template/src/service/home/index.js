import request from '../request'

export default {
    getList(params) {
        return request({
            url: '/theme/list',
            method: 'post',
            data: params
        })
    },
}
