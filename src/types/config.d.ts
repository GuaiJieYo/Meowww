/**
 * 命名空间 Theme，用于定义主题相关的类型接口
 */
declare namespace Theme {
  // 站点配置相关
  interface SiteConfig {
    /**
     * @name 网站标题
     * @type {string}
     */
    title: string;
    /**
     * @name 网站描述
     * @type {string}
     */
    description: string;
    /**
     * @name 网站关键词
     * @type {string}
     */
    keywords: string;
    /**
     * @name 网站图标
     * @type {string}
     */
    favicon: string;
    /**
     * @name 网站作者
     * @type {string}
     */
    author?: string;
    /**
     * @name 作者头像
     * @type {string}
     * 注：如果avatar为空，则使用favicon为头像
     */
    avatar?: string;
  }

  interface Config {
    /**
     * @name 站点配置相关
     * @type {SiteConfig}
     */
    site: SiteConfig;
  }
}

// 导出主要类型
export type ThemeConfig = Theme.Config;