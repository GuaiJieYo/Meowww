import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// 从./posts目录中载入MD和MDX文件
	loader: glob({ base: './posts', pattern: '**/*.{md,mdx}' }),
	// 读取frontMatter的内容进行类型检查
	schema: ({ image }) =>
		z.object({
			title: z.string(), // 文章标题
			description: z.string(), // 文章简述
			pubDate: z.coerce.date(), // 发布日期
			tags: z.array(z.string()).optional(), // 文章标签
			updatedDate: z.coerce.date().optional(), // 更新日期
			heroImage: image().optional(), // 封面图片
		}),
});

export const collections = { blog };
