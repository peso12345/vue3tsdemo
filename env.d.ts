/*
 * @Author: peso12345
 * @LastEditors: peso12345
 * @Date: 2022-12-20 16:51:20
 * @Version: 0.0.1
 * @Description: 描述
 */

/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
 }