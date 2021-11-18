const Post = ({id, title, content, likes, public_post}) => {
    
    
    return (
        public_post ? 
            <div className = 'col-md-4 mb-3' id = {id}>
                <div className="p-4 bg-dark border rounded-3">
                    <h4>{title}</h4>
                    <p>{content}</p>
                    <div className="container">
                        <div className="row text-center">
                            <button className="btn btn-outline-secondary col-6" type="button">Check it</button>
                            <p className='col-6 my-auto'>Likes: {likes}</p>
                        </div>
                    </div>
                </div>
            </div> :
            <div className = 'col-md-4 mb-3' id = {id}>
                <div className="p-4 bg-dark border rounded-3">
                    <h4>{title}</h4>
                    <p>{content}</p>
                    <div className="container">
                        <div className="row text-center">
                            <button className="btn btn-outline-secondary col-md-5" type="button">Check it</button>
                            <button className="btn btn-outline-secondary offset-2 col-md-5" type="button">Public</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Post