/**
 * 本文件是主题配置文件
 * 请根据需要修改配置 只需要修改ThemeConfig的内容即可
 * 如果不知道需要修改哪些内容可以参考src/types/config.d.ts的定义
 */
import type { ThemeConfig } from "./types/config"
// 主配置
const ThemeConfig: ThemeConfig = {
  site: {
    title: "GuaiJie の 日记本",
    description: "一名小透明的学习&日常笔记。",
    keywords: "GuaiJie,前端,全栈,学习笔记,日记",
    favicon: "/favicon.svg",
  }
}

// 分段导出
export const SITE = ThemeConfig.site;