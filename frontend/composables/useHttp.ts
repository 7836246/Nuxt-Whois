// 自动导出
export const useHttp = {
    post<T = any>(url: string, config?: any): Promise<T> {
        const runtimeConfig = useRuntimeConfig()
        const baseUrl = runtimeConfig.public.baseUrl
        return $fetch(url, {
            baseURL: baseUrl,
            method: 'POST',
            body: config,
        })
    },
}
