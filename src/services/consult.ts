import type {
  DoctorPage,
  FollowType,
  KnowledgePage,
  KnowledgeParams,
  PageParams,
  TopDep,
  Image
} from '@/types/consult'
import { request } from '@/utils/request'

// 首页-查询推荐/减脂/饮食健康/关注页面--百科文章列表
export const getKnowledgePage = (params: KnowledgeParams) =>
  request<KnowledgePage>('/patient/home/knowledge', 'GET', params)

// 获取推荐关注医生
export const getDoctorPage = (params: PageParams) =>
  request<DoctorPage>('/home/page/doc', 'GET', params)

// 关注与取消关注
export const followOrUnfollow = (id: string, type: FollowType = 'doc') =>
  request('/like', 'POST', { id, type })

// 获得科室数据
export const getAllDep = () => request<TopDep>('/dep/all')

// 上传图片
export const uploadImg = (file: File) => {
  const fd = new FormData()
  fd.append('file', file)
  return request<Image>('upload', 'POST', fd)
}
