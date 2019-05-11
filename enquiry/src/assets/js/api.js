import axios from 'axios';

axios.defaults.baseURL = process.env.API_ROOT;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const getApi = function (url, params) {
  return axios.get(url, {params}).then((response) => {
    if (response.status === 200) {
      return response;
    } else {
      alert('网络错误，请重试');
    }
  }).catch((err) => {
    console.log(err);
  })
}

const postApi = function (url, params) {
  return axios.post(url, params).then((response) => {
    if (response.status === 200) {
      return response;
    } else {
      alert('网络错误，请重试');
    }
  }).catch((err) => {
    console.log(err);
  })
}

const allApi = function (params) {
  let apiArr = [];
  object.values(params).map((item, index) => {
    if (item.method === 'get') {
      apiArr.push(getApi(item.url, item.params))
    } else {
      apiArr.push(postApi(item.url, item.params))
    }
  })
  axios.all(apiArr).then(axios.spread((response) => {
    return response
  }))
}

export {
  getApi,
  postApi,
  allApi
}