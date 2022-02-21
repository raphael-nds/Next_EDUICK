import { api } from 'services/api'

export type DataCourses = {
  id: number
  image: string
  rating: number
  title: string
  total_lessons: number
}

export const useServiceCourses = () => {
  async function getCourses(page: number) {
    const response = await api.get(`/courses?_page=${page}&_limit=4`)

    return response.data
  }

  async function deleteCourse(id: number) {
    const response = await api.delete(`/courses/${id}`)

    return response.data
  }

  return { getCourses, deleteCourse }
}
