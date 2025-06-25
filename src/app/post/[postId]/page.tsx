interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostPageParams {
  postId: string;
}

const PostPage = async ({params}: {params: Promise <PostPageParams>}) => {
    const {postId} = await params

    const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json())

    return ( <><h1>Пости</h1>
    
    <p>{post.id}</p>
    <p>{post.title}</p>
    <p>{post.body}</p></> );
}
 
export default PostPage;