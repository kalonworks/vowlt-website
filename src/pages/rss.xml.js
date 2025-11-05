import rss from '@astrojs/rss';
  import { getCollection } from 'astro:content';

  export async function GET(context) {
    const posts = await getCollection('blog', ({ data }) => {
      return data.draft !== true;
    });

    // Sort by date, newest first
    const sortedPosts = posts.sort((a, b) => {
      return b.data.pubDate.getTime() - a.data.pubDate.getTime();
    });

    return rss({
      title: 'vowlt Blog',
      description: 'Building vowlt in public - updates, technical posts, and product development insights.',
      site: context.site,
      items: sortedPosts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.id}/`,
        categories: post.data.tags || [],
      })),
      customData: `<language>en-us</language>`,
    });
  }
