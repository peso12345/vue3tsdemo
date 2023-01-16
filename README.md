# vue3 engineering configuration demo
这是个demo，关于vue3工程化的配置。
使用技术：
    vue3+ts+vite+pinia+scss+unplugin-auto-import+unplugin-vue-components+vite-plugin-pages+tailwindcss+autoprefixer+postcss+daisyui+elementplus；
vscode插件：
    Tailwind CSS IntelliSense
实现：
    1、组件和js、css按需加载；
    2、生产环境去除console；？vite-plugin-remove-console
    3、打包分包、压缩；？vite-plugin-compression
    4、快速开发。

## 配置用户代码

```
{
	"vue3ts": {
		"prefix": "vue3ts",
		"body": [
			"<script setup lang='ts'>",
			"",
			"const route = useRoute()",
			"",
			"const {data, route_name} = toRefs(reactive({",
			"\t\t//定义数组和对象",
			"\t\troute_name: route.name?.toString(),"
			"\t\tdata:'',",
			" }))",
			"",
			"const data2 = ref('')//定义普通类型",
			"",
			"onMounted(() => {",
			"\tconsole.log(`进入${route_name.value}组件==========>`);",
			"})",
			"onBeforeUnmount(() => {",
			"\tconsole.log(`<==========离开${route_name.value}组件`);",
			"})",
			"",
			"</script>",
			"",
			"<template>",
			"\t<main>",
			"\t\t<h1 class='hover:bg-sky-500 text-3xl flex justify-center items-center h-24 w-full cursor-pointer'>{{route_name}}页面</h1>",
			"\t</main>",
			"</template>",
			"",
			"<style lang='scss' scoped>",
			"\t",
			"</style>"
		],
		"description": "vue3+ts+scss+setup语法糖"
	}
}
```
## 项目相关资源配置
### npm npx
```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```
### tailwind.config.js
```
 // tailwind.config.js
  module.exports = {
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class',
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```
### 全局css文件引入
```
在你的全局css文件里面写入
/* ./src/index.css|main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### tsconfig.json
```
如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。
{
  "extends": "@vue/tsconfig/tsconfig.web.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
    },
    "types": ["element-plus/global"], // 这里
  },

  "references": [
    {
      "path": "./tsconfig.config.json"
    }
  ]
}

```
### vite-plugin-pages
```
引入文件系统，vite-plugin-pages：
// vite.config.ts
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: 'src/views',  // 1、
    }),
    AutoImport({ // 2、
      dts: "src/auto-imports.d.ts", // 这里的路径一定要src开头:src/auto-imports.d.ts
      imports: ['vue', 'vue-router'], // 这里
      resolvers: [ElementPlusResolver()],
    }),
    Components({ // 3、
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {  // 4、
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
      ]
    }
  },
})

```
### src/env.d.ts
```
// ./env.d.ts
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

declare module '*.vue' { // 声明vue文件
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
 }
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
