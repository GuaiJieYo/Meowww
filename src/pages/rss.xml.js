import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE } from '../config.theme';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE.title,
		description: SITE.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/posts/${post.id}/`,
		})),
	});
}
