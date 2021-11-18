import axios from "axios"
import Post from "./Post"
import { useState, useEffect } from "react"


const Profile = () =>  {    

    if (!localStorage.getItem('accessToken')?.length) {
        window.open('login',"_self")
    }

    // id, username, name
    const [userId, setUserId] = useState(null)
    const [username, setUsername] = useState('')
    const [userName, setUserName] = useState('')

    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        axios.get('http://localhost:5000/api/user/me', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }})
        .then(
            res => {
                console.log(res.data)
                setUserId(res.data.id)
                setUsername(res.data.username)
                setUserName(res.data.name)
            }
        )
        .catch(
            err => console.log(err)
        )
    }, [])
    
   
    
    //const filtered_friends = friends.sort(() => 0.5 - Math.random()).slice(0,4)

    const filtered_friends = []
    const posts = []

    return (
        <div className="container py-5">
            <div className = 'row'>
                <div className = 'col'>
                    <div className = 'row about mb-4'>
                        <div className = 'col-md-3 d-flex justify-content-center align-items-center'>
                            <img src = 'https://cdn-icons-png.flaticon.com/512/194/194938.png' alt='profile foto' className='w-75 rounded-circle border border-white border-2'></img>
                        </div>
                        <div className = 'col-md-9'>
                            <h2>Hello {username}</h2>
                            <q><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque quasi a enim obcaecati impedit eaque nam, sit recusandae ex! Obcaecati expedita voluptas dolorum vel mollitia deleniti, praesentium alias ullam quo adipisci doloremque itaque est quidem dolorem veritatis voluptate. Sint, rerum suscipit architecto magnam, repudiandae nostrum fugit ab maxime ullam et maiores nam doloremque tenetur omnis consequatur dicta, deserunt inventore! Sit ea iusto, reprehenderit necessitatibus ullam hic atque aspernatur nostrum quasi, harum voluptatibus repellat, aperiam corrupti vero quisquam doloribus deleniti. Nulla harum saepe molestias! Amet eaque ducimus inventore deserunt nihil animi ullam odit temporibus quo mollitia repellat, porro dolorum assumenda.</i></q>
                        </div>
                    </div>
                    <div className = 'row posts'>
                        <div className = 'col'>
                            <div className = 'row'>
                                <div className = 'col text-center my-2'>
                                    <h3>Your post</h3>
                                </div>
                            </div>
                            <div className = 'row'>
                                {posts.map(post => {
                                    return (
                                        <Post 
                                            id = {post.id}
                                            title = {post.title}
                                            content = {post.content}
                                            likes = {post.likes}
                                            key = {post.id}
                                            public_post = {post.public}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className = 'row friends my-4'>
                        <div className = 'col'>
                            <div className = 'row'>
                                <div className = 'col text-center my-3'>
                                    <h3>Your friends</h3>
                                </div>
                            </div>
                            <div className = 'row text-center'>

                                {filtered_friends.map(friend => {
                                    return (
                                        <div className = 'col-md-3' id = {friend.user_id} key = {friend.user_id}>
                                            <h5>{friend.first_name} {friend.last_name}</h5>
                                            <img src={friend.img} className="card-img-top w-50 mx-auto rounded-circle border border-white border-2 mb-5" alt="friend profile"/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    )
}

export default  Profile
