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
    <h1>Batman TV Shows</h1>
    <ul style={galleryStyle}>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/posts/[id]" as={`/posts/${show.id}`}>
            <article style={articleStyle}>
              <img src={show.image.medium} />
              <a>{show.name}</a>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/search`);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;