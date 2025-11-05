import rss from '@astrojs/rss';
  import { getPublishedPosts } from '../utils/blog.ts';
  import { SITE_CONFIG, RSS_CONFIG } from '../config/site.ts';
  import { ROUTES } from '../constants/index.ts';

  export async function GET(context) {
    const posts = await getPublishedPosts();

    return rss({
      title: SITE_CONFIG.blog.title,
      description: SITE_CONFIG.blog.description,
      site: context.site,
      items: posts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: ROUTES.blogPost(post.id),
        categories: post.data.tags || [],
      })),
      customData: `<language>${RSS_CONFIG.language}</language>`,
    });
  }
