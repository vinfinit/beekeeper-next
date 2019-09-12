import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import UploadForm from '../components/UploadForm';
import InfiniteScroll from 'react-infinite-scroller';

import fetch from 'isomorphic-unfetch';
import uriUtil from '../utils/uri';

import styles from "../styles/main.scss";

const Index = props => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Cantarell&display=swap" rel="stylesheet"/>
    </Head>
    <Layout>
      <ul className={styles.flexContainer}>
        {props.bees.map(post => (
          <li key={post._id} className={styles.item}>
            <Link href="/posts/[id]" as={`/posts/${post._id}`}>
              <article className={styles.flexColumn}>
                <img src={post.image} />
                <a>Score: {post.score}</a>
              </article>
            </Link>
          </li>
        ))}
      </ul>
      <UploadForm></UploadForm>
    </Layout>
  </>
);

Index.getInitialProps = async function(ctx) {
  const res = await fetch(`${uriUtil.getFromCtx(ctx)}/api/search`);
  const bees = await res.json();

  console.log(`Bees data fetched. Count: ${bees.length}`);

  return { bees };
};

export default Index;