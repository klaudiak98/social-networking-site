import { useState, useEffect } from 'react'
import axios from 'axios'
import { useOutletContext } from "react-router-dom";

const PostForm = () => {

    const [user, setUser] = useOutletContext();
    const accessToken = localStorage.getItem('accessToken')

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    //const [image, setImage] = useState(null)
    const [tags, setTags] = useState('')

    const saveAndPublish = async () => {
        const data = {
            title: title,
            content: content,
            tags: tags,
            public_post: true,
            authorId: user.id
        }

        await axios.post(
            "http://localhost:5000/api/post/newPost", 
            data,
            {headers: {'Authorization': `Bearer ${accessToken}`}}
        )
        .then(
            res => {
                console.log(res)
                alert('new post added sucesfully! - public; go to your profile')
            }
        )
        .catch(
            err => console.log(err)
        )
    }

    const makeDraft = async () => {
        const data = {
            title: title,
            content: content,
            tags: tags,
            public_post: false,
            authorId: user.id
        }

        await axios.post(
            "http://localhost:5000/api/post/newPost", 
            data,
            {headers: {'Authorization': `Bearer ${accessToken}`}}
        )
        .then(
            res => {
                console.log(res)
                alert('new draft post added sucesfully! - private; go to your profile')
            }
        )
        .catch(
            err => console.log(err)
        )
    }

    return(
        <div className="container py-5">
            <div className = 'row'>
                <div className = 'col'>
                    <div className = 'row mb-3'>
                        <div className = 'col text-center'>
                            <h2>Add new post</h2>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className = 'col'>
                            <form className="row">
                                <div className="col">
                                    <div className="row mb-4">
                                        <div className="col-md-1">
                                            <svg id="Layer_1" version="1.1" viewBox="0 0 48 48" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill='#fff'><g><polygon points="11.8,45.7 10.4,44.3 30.8,24 10.4,3.7 11.8,2.3 33.5,24  "/></g></svg>
                                        </div>
                                        <div className="col-md-7">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="title" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="tags" className="form-label">Tags</label>
                                            <input type="text" className="form-control" id="tags" placeholder='#cat #animal #love' value={tags} onChange={e => setTags(e.target.value)}/>
                                        </div>
                                    </div>
                                
                                    <div className="row mb-4">
                                        <div className="col-md-1">
                                            <svg id="Layer_1" version="1.1" viewBox="0 0 48 48" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill='#fff'><g><g><path d="M20.8,27.2l2.1-6.3L38,5.8l4.2,4.2L27.1,25.1L20.8,27.2z M24.7,21.9L24,24l2.1-0.7L39.4,10L38,8.6L24.7,21.9z"/></g><g><path d="M42.9,9.3l-4.2-4.2l1.4-1.4c1.2-1.2,3-1.2,4.2,0c0.6,0.6,0.9,1.3,0.9,2.1c0,0.8-0.3,1.5-0.9,2.1L42.9,9.3z M41.5,5.1    l1.4,1.4c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7C42.5,4.7,41.9,4.7,41.5,5.1z"/></g></g><g><path d="M38,46H5c-1.7,0-3-1.3-3-3V10c0-1.7,1.3-3,3-3h27v2H5c-0.6,0-1,0.4-1,1v33c0,0.6,0.4,1,1,1h33c0.6,0,1-0.4,1-1V16h2v27   C41,44.7,39.7,46,38,46z"/></g></svg>
                                        </div>
                                        <div className="col-md-7">
                                            <label htmlFor="content" className="form-label">Content</label>
                                            <textarea className="form-control" id="content" placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, doloribus quaerat. Facilis nesciunt voluptatem, nihil officia quibusdam dignissimos, rem vitae autem quidem labore esse ab!' value={content} onChange={e => setContent(e.target.value)}/>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="categorie" className="form-label">Categorie</label>
                                            <select id="categorie" className="form-select">
                                            <option defaultValue>Choose...</option>
                                            <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-4">
                                        <div className="col-md-1">
                                            <svg id="Layer_1" version="1.1" viewBox="0 0 48 48" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill='#fff'><g><path d="M43,46H5c-1.7,0-3-1.3-3-3V21c0-1.7,1.3-3,3-3h8.7c0.4,0,0.7-0.2,0.9-0.5l0.9-1.9c0.4-1,1.5-1.7,2.7-1.7h11.5   c1.2,0,2.3,0.7,2.7,1.7l0.9,1.7c0.2,0.3,0.5,0.5,0.9,0.5H43c1.7,0,3,1.3,3,3v22C46,44.7,44.7,46,43,46z M5,20c-0.6,0-1,0.4-1,1v22   c0,0.6,0.4,1,1,1h38c0.6,0,1-0.4,1-1V21c0-0.6-0.4-1-1-1h-8.8c-1.1,0-2.1-0.6-2.7-1.6l-0.9-1.8c-0.2-0.4-0.5-0.5-0.9-0.5H18.2   c-0.4,0-0.7,0.2-0.9,0.5l-0.9,1.9c-0.4,1-1.5,1.7-2.7,1.7H5z"/></g><g><path d="M24,42c-5.5,0-10-4.5-10-10s4.5-10,10-10c5.5,0,10,4.5,10,10S29.5,42,24,42z M24,24c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-9 S28.4,24,24,24z"/></g></svg>
                                        </div>
                                        <div className="col-md-11">
                                            <label htmlFor="image" className="form-label">Image upload soon</label>
                                            <input type='file' id='image'className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="mb-4 d-flex gap-3">
                                        <button type="submit" className="btn btn-primary" onClick={saveAndPublish}>Save and publish</button>
                                        <button type="submit" className="btn btn-primary" onClick={makeDraft}>Save as draft</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostForm