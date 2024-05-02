import { useEffect, useState, useCallback } from 'react'
import axiosInstance from '../helpers/axios.instance'
import { IFetchProps } from '../types/hooks.types'

const useFetch = ({ url }: IFetchProps) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<any>(null)

  const fetchData = useCallback(async () => {
    try {
      const response = await axiosInstance.get(url)
      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return {
    loading,
    data
  }
}

export default useFetch
