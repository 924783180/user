import request from "@/request";
/* 获取用户信息列表 */
export function getUserList(data) {
  return request({
    url : '/user/getUserList',
    method : "post",
    data
  });
}
/* 添加用户信息 */
export function addUser(data) {
  return request({
    url : '/user/addUser',
    method : "post",
    data
  });
}
/* 修改用户信息 */
export function updateUser(data) {
  return request({
    url : '/user/updateUser',
    method : "post",
    data
  });
}
/* 删除用户信息 */
export function deleteUser(data) {
  return request({
    url : '/user/deleteUser',
    method : "post",
    data
  });
}
/* 验证用户名是否重复 */
export function checkUsername(data) {
  return request({
    url : '/user/checkUsername',
    method : "post",
    data
  });
}
