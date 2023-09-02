import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
  const posts = await getCollection('blog')

  return rss({
    title: "Manuel's Blog",
    description: 'Frontend developer, in 🖤 with React.',
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${post.slug}/`,
    })),
  })
}
