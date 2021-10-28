const Post = ({id, title, content, likes}) => {
    return (
        <div className = 'col-md-4 mb-3' id = {id}>
            <div class="p-4 bg-dark border rounded-3">
                <h4>{title}</h4>
                <p>{content}</p>
                <div className="container">
                    <div className="row text-center">
                        <button class="btn btn-outline-secondary col-6" type="button">Check it</button>
                        <p className='col-6 my-auto'>Likes: {likes}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post