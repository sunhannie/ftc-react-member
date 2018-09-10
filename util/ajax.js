
function formToJson(formData) {
  const o = {};

  for (let [key, value] of formData) {
    console.log('Form Data:');
    console.log(`${key}: ${value}`);
    o[key] = value.trim();
  }
  return JSON.stringify(o);
}


function ajax(url, formData) {
//   const headers = new Headers({
//     "Accept": "application/json"
//   });
  const headers = { // 请求头（可以是Headers对象，也可是JSON对象）
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }

//   if (formData) {
//     headers.set('Content-Type', 'application/json');
//   }

  // const init = {
  //   method: formData ? 'POST' : 'GET',
  //   headers:headers,
  //   mode: 'same-origin',
  //   credentials: 'same-origin',
  //   redirect: 'error'
  // }
  const init = {
    method: formData ? 'POST' : 'GET',
    headers:headers,
    mode: 'cors',
    credentials: 'include',
    redirect: 'error'
  }

  if (formData) {
    init.body = formToJson(formData)
  }

  return fetch(url, init)
  .then(res => {
    if (res.status !== 200) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(json => {
    if (json.error) {
      return Promise.reject(`API Error: ${json.message}`);
    }
    return json;
  }); 
}

export default ajax;

