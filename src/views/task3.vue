<template>
  <div class="about">
    <h1>手写ajax交互</h1>
    <p>
      //封装一个ajax请求
function ajax(options) {
    // 1. 创建XMLHttpRequest对象
    const xhr = new XMLHttpRequest()<br />

    // 2. 初始化参数的内容
    options = options || {}
    options.type = (options.type || 'GET').toUpperCase()
    options.dataType = options.dataType || 'json'
    const params = options.data<br />

    // 3. 与服务器建立连接<br />
    // 4. 发送请求
    if (options.type === 'GET') {
        xhr.open('GET', options.url + '?' + params, true)
        xhr.send(null)
    } else if (options.type === 'POST') {
        xhr.open('POST', options.url, true)
        xhr.send(params)
    }<br />
  
    // 5. 接收请求
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let status = xhr.status
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML)
            } else {
                options.fail && options.fail(status)
            }
        }
    }
}<br />

// 调用：
ajax({
    type: 'post',
    dataType: 'json',
    data: {},
    url: 'https://xxxx',
    success: function(text,xml){//请求成功后的回调函数
        console.log(text)
    },
    fail: function(status){请求失败后的回调函数
        console.log(status)
    }
})


    </p>
  </div>
</template>

