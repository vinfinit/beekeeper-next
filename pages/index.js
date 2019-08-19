import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroller';

const galleryStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  listStyle: 'none',
  padding: 0
};

const articleStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const Index = props => (
  <Layout>
    <h1>Beekeeper</h1>
    <ul style={galleryStyle}>
      {props.posts.map(post => (
        <li key={post._id}>
          <Link href="/posts/[id]" as={`/posts/${post._id}`}>
            <article style={articleStyle}>
              <img src={post.image} />
              <a>Score: {post.score}</a>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function(ctx) {
  const { 
    req: {
      headers: {
        'x-forwarded-host': host = '',
        'x-forwarded-proto': proto = '',
      } = {},
    } = {},
  } = ctx;
  const uri = proto && host ? `${proto}://${host}` : '';
  const res = await fetch(`${uri}/api/search`);
  const posts = await res.json();

  console.log(`Posts data fetched. Count: ${posts.length}`);

  return { posts };
};

export default Index;