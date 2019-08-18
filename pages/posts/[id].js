import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.post.score}</h1>
    <p>{props.post.summary}</p>
    <img src={props.post.image} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL || ''}/api/search?id=${id}`);
  const post = await res.json();

  // console.log(`Fetched show: ${post.length}`);

  return { post: post[0] };
};

export default Post;