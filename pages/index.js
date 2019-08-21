import Link from 'next/link';
import Layout from '../components/Layout';
import UploadForm from '../components/UploadForm';
import InfiniteScroll from 'react-infinite-scroller';

import fetch from 'isomorphic-unfetch';
import uriUtil from '../utils/uri';

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
      {props.bees.map(post => (
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
    <UploadForm></UploadForm>
  </Layout>
);

Index.getInitialProps = async function(ctx) {
  const res = await fetch(`${uriUtil.getFromCtx(ctx)}/api/search`);
  const bees = await res.json();

  console.log(`Bees data fetched. Count: ${bees.length}`);

  return { bees };
};

export default Index;