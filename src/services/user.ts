import type { User } from '@/types/user'
import { request } from '@/utils/request'

// 密码登录
export const loginByPassword = (mobile: string, password: string) => {
  return request<User>('login/password', 'POST', { mobile, password })
}
