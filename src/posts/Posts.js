import Post from './Post.js';

function Posts(props)
{
    return(
        <div>
            {
                props.posts.map
                (
                   post =>
                   (
                        <Post key={post.id}
                            id={post.id}
                            title={post.title}
                            content={post.content}
                            removePost={props.removePost}
                        />
      
                   )
                )
            }
        </div>
    )
}
export default Posts;