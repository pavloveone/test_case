function Blog({ posts }: any) {
  return (
    <ul>
      {posts.map((post: any, index: number) => (
        <li key={post.title + index}>{post.title}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://nextjs-test-pi-hazel-56.vercel.app/data/games.json"
  );
  const posts = await res.json();
  // By returning {' props: posts '}, the Blog component
  // will receive 'posts' as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
