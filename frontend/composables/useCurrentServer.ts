// composables/useCurrentServer.js 或者在一个组件中
export const useCurrentServer = () => {
    // 使用useHydration
    useHydration('currentServer',
        // 服务端执行的逻辑，返回初始值
        () => {
            return {
                currentServer: {
                    whois: 'nuxt',
                    dns: 'nuxt',
                    domain: 'nuxt',
                }
            };
        },
        // 客户端执行的逻辑，接收服务端设置的值
        (serverValue) => {
            // 在客户端处理或使用服务端传来的值
            console.log('Received from server:', serverValue);

            // 这里你可以根据需要将serverValue设置到Pinia store或Vue响应式状态中
            // 例如，更新Pinia store中的状态
            const configStore = useConfigStore();
            configStore.setCurrentServer(serverValue);
        }
    );
}
