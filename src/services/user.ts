import type { CodeType, PatientList, User, UserInfo } from '@/types/user'
import { request } from '@/utils/request'

// 密码登录
export const loginByPassword = (mobile: string, password: string) => {
  return request<User>('login/password', 'POST', { mobile, password })
}

// 短信验证码登录
export const loginByMobile = (mobile: string, code: string) =>
  request<User>('login', 'POST', { mobile, code })

// 发送验证码
export const sendMobileCode = (mobile: string, type: CodeType) =>
  request('code', 'GET', { mobile, type })

// 获取个人用户信息
export const getUserInfo = () => request<UserInfo>('/patient/myUser')

// 获取患者列表信息
export const getPatientList = () => request<PatientList>('/patient/mylist')
