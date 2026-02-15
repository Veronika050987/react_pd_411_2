function Post(props)
{
    let {id, title, content, removePost} = props;

    return(
        <div key={id}>
            <fieldset key={id}>
                <legend style={{fontWeight:"bold"}}>{title}</legend>
                <p>{content}</p>
                <button onClick={()=> removePost(id)}>delete</button>
            </fieldset>
        </div>
    )
}
export default Post;