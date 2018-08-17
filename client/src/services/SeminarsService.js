import Api from '@/services/api'

export default {
  index (search) {
    return Api().get('seminars', {
      params: {
        search: search
      }
    })
  },
  post (data) {
    return Api().post('seminars', data)
  },
  show (seminarId){
    return Api().get(`seminars/${seminarId}`)
  }
}
