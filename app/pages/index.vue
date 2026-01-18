<template>
  <div class="container">
    <header class="header">
      <h1>🔍 Nuxt-Whois</h1>
      <p class="subtitle">一款好用的 Whois 工具</p>
    </header>

    <main class="main">
      <div class="search-box">
        <input 
          v-model="domain" 
          type="text" 
          placeholder="输入域名进行查询..."
          class="search-input"
          @keyup.enter="search"
        />
        <button @click="search" class="search-button">
          查询
        </button>
      </div>

      <div v-if="result" class="result">
        <h2>查询结果</h2>
        <pre>{{ result }}</pre>
      </div>
    </main>

    <footer class="footer">
      <p>基于 Nuxt 4 构建 | GPL-3.0 License</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const domain = ref('')
const result = ref('')

const search = async () => {
  if (!domain.value) return
  
  // TODO: 实现 Whois 查询逻辑
  result.value = `正在查询域名: ${domain.value}...`
  
  // 示例 API 调用
  const { data } = await useFetch('/api/hello')
  console.log('API Response:', data.value)
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header {
  text-align: center;
  color: white;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 1.25rem;
  margin-top: 0.5rem;
  opacity: 0.9;
}

.main {
  width: 100%;
  max-width: 600px;
}

.search-box {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.search-input {
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.search-button {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.search-button:hover {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.result {
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.result h2 {
  margin-top: 0;
  color: #667eea;
}

.result pre {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}

.footer {
  margin-top: 3rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}
</style>
