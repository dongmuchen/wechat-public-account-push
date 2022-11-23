/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx27228200bf8aeab0',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '67afb183ac2558db16787e9383f41300',

  PROVINCE: '江苏',
  CITY: '连云港',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '67afb183ac2558db16787e9383f41300',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Z42BaQ5xlFhEqCZT5_ygU5mnfXBNgxGGCuaE9URwgY	',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-09',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*12-11', name: '宝贝', year: '1997', date: '12-11',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '01-09', name: '郭郭', year: '1998', date: '01-09',
        },
        {
          type: '12-02', name: '在一起', year: '2019', date: '12-02',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-12-02' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2019-12-02' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Z42BaQ5xlFhEqCZT5_ygU5mnfXBNgxGGCuaE9URwgY	',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oUG_55-ifNatSUt6h3LDF4xr9nZ4',
    }
  ],

}

module.exports = USER_CONFIG

