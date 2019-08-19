import Layout from '../../components/Layout';

import fetch from 'isomorphic-unfetch';
import uriUtil from '../../utils/uri';

const Post = props => (
  <Layout>
    <h1>{props.post.score}</h1>
    <p>{props.post.summary}</p>
    <img src={props.post.image} />
  </Layout>
);

Post.getInitialProps = async function(ctx) {
  const { id } = ctx.query;
  const res = await fetch(`${uriUtil.getFromCtx(ctx)}/api/search?id=${id}`);
  const post = await res.json();

  // console.log(`Fetched show: ${post.length}`);

  return { post: post[0] };
};

export default Post;