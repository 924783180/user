# API

 - *: 必填

## login

 - login: 登录接口
 
 ```
   name : '/login'
   params : {
     username: 'String', // 用户名，不大于30位
     password: 'String' // MD5()加密后的密码
   }
   return : {
     data : { // 数据集合
       userInfo : { // 用户信息
         name : '', // 用户昵称
         role : ''  // 用户权限
       },
       token : '' // 令牌
     },
     msg : 'success',
     state : 0 // 0代表成功
   }
   state : {
     0 : '成功',
     10001 : '密码错误',
     10002 : '账号不存在',
   }
 ```
 
## user

 - getUserList: 获取用户列表

 ```
   name : '/user/getUserList'
   params : {
     page: 'Number', // 页数，正整数 *
     pageSize: 'Number', // 每页数量，正整数，默认为10
     name: 'String', // 条件查询
     token: 'String', // 令牌 *
   }
   return : {
     data : { // 数据集合
       dataList : [ // 用户列表信息
         {
           id : 1, // 用户id
           name : '', // 用户名称 
           username : '' // 用户账号
         }
       ],
       total : '' // 总条数
       page : '' // 页数
     },
     msg : 'success',
     state : 0 // 0代表成功
   }
   state : {
     0 : '成功'
   }
 ```

 - deleteUser: 删除用户，支持批量删除

 ```
   name : '/user/deleteUser'
   params : {
     ids: 'Array', // 要删除的id *
     token: 'String', // 令牌 *
   }
   return : {
     data : null,
     msg : 'success',
     state : 0 // 0代表成功
   }
   state : {
     0 : '成功',
     10003 : '删除失败'
   }
 ```

 - addUser: 添加用户

 ```
   name : '/user/addUser'
   params : {
     username: 'String', // 用户账号，不得多于30位 *
     password: 'String', // MD5()加密后的密码，6到8位 *
     name: 'String', // 用户昵称，不得多于30位 *
     token: 'String', // 令牌 *
   }
   return : {
     data : null,
     msg : 'success',
     state : 0 // 0代表成功
   }
   state : {
     0 : '成功',
     10004 : '添加失败'
   }
 ```
 
 - updateUser: 修改用户

 ```
   name : '/user/addUser'
   params : {
     id: 'Number', // 用户id *
     name: 'String', // 用户昵称，不得多于30位 *
     token: 'String', // 令牌 *
   }
   return : {
     data : null,
     msg : 'success',
     state : 0 // 0代表成功
   }
   state : {
     0 : '成功',
     10005 : '修改失败'
   }
 ```
 
 - checkUsername: 验证用户账号是否存在

 ```
   name : '/user/checkUsername'
   params : {
     username: 'String', // 用户昵账号 *
     token: 'String', // 令牌 *
   }
   return : {
     data : {
       isRepeat : true // 是否重复
     },
     msg : 'success',
     state : 0 // 0代表成功
   }
   state : {
     0 : '成功'
   }
 ```






















































