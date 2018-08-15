import Api from '@/services/api'

export default {
  index () {
    return Api().get('seminars')
  },
  post (data) {
    return Api().post('seminars', data)
  }
}
