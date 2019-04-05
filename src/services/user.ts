import { Get, Post } from '@/utils/request';

// 用户登录
export function fetchLogin(data) {
  return Post('/users/login', data);
}

// 退出登录
export function fetchLogout() {
  return Get('/users/logout');
}

// 获取当前用户信息
export async function fetchCurrent() {
  return Get('/users/current');
}


