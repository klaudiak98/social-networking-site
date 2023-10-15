//import axios from "axios"

const Post = ({id, title, content, likes, public_post, tags}) => {
    
    let data = {
        id: id,
        title: title,
        content: content,
        likes: likes,
        public_post: public_post
    }

    const checkPostDetails = () => {
        alert('here you can check post details')
    }

    const setPublic = () => {
        // TO DO
    }

    return (
        public_post ? 
            <div className = 'col-md-4 mb-3' id = {id}>
                <div className="p-4 bg-dark border rounded-3">
                    <h4>{title}</h4>
                    <p>{content}</p>
                    <div className="container">
                        <div className="row text-center">
                            <button className="btn btn-outline-secondary col-6" type="button" onClick={checkPostDetails}>Check it</button>
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
                        <div className="row text-center mb-2">
                            <button className="btn btn-outline-secondary col-md-5" type="button" onClick={checkPostDetails}>Check it</button>
                            <button className="btn btn-outline-secondary offset-2 col-md-5" type="button" onClick={setPublic}>Public</button>
                        </div>
                        <small>{tags}</small>
                    </div>
                </div>
            </div>
    )
}

export default Post