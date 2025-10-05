import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE } from '../config.theme';

/**
 * 生成RSS订阅源
 * @param {Object} context - 上下文对象，包含站点相关信息
 * @returns {Object} 返回RSS格式的数据
 */
export async function GET(context) {
	// 获取'blog'集合中的所有文章
	const posts = await getCollection('blog');
	// 返回RSS格式的数据
	return rss({
		title: SITE.title,            // 设置RSS标题为站点的标题
		description: SITE.description, // 设置RSS描述为站点的描述
		site: context.site,           // 使用上下文中的站点信息
		items: posts.map((post) => ({ // 将每篇文章转换为RSS项目
			...post.data,              // 展开文章的数据
			link: `/posts/${post.id}/`, // 设置文章链接
		})),
	});
}
