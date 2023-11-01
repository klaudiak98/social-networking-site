import axios from "axios"
import Post from "./Post"
import { useState, useEffect } from "react"


const Profile = () =>  {    

    if (!localStorage.getItem('accessToken')?.length) {
        window.open('login',"_self")
    }

    // id, email, first name, last name
    const [userId, setUserId] = useState(null)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const fullName = firstName + ' ' + lastName

    const [friends, setFriends] = useState([])
    const [posts, setPosts] = useState([])

    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        const getUserInfo = async () =>
            await axios.get('http://localhost:5000/api/user/me', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }})

        getUserInfo()
        .then(
            res => {
                setUserId(res.data.id)
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
            }
        )
        .catch(
            err => console.log(err)
        )
    }, [])

    useEffect(() => {
        const getPosts = async () => 
            await axios.get(`http://localhost:5000/api/post/getByAuthor?userId=${userId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }})

        const getFriendsList = async () =>
            await axios.get(`http://localhost:5000/api/friends/listFriends?userId=${userId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }})

        getPosts()
        .then(
                res => {
                    console.log(res.data)
                    setPosts(res.data)
                }
            )
        .catch(
            err => console.log(err)
        )

        getFriendsList()
        .then(
            res => {
                console.log(res.data)
                setFriends(res.data)
            }
        )
        .catch(
            err => console.log(err)
        )

    }, [userId, accessToken])
    
    const filtered_friends = friends.sort(() => 0.5 - Math.random()).slice(0,4)

     return (
        <div className="container py-5">
            <div className = 'row'>
                <div className = 'col'>
                    <div className = 'row about mb-4'>
                        <div className = 'col-md-3 d-flex justify-content-center align-items-center'>
                            <img src = 'https://cdn-icons-png.flaticon.com/512/194/194938.png' alt='profile foto' className='w-75 rounded-circle border border-white border-2'></img>
                        </div>
                        <div className = 'col-md-9'>
                            <h2>Hello {fullName}</h2>
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
                                            public_post = {post.public_post}
                                            tags = {post.tags}
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
                                    return <Friend friend={friend} key={friend.id}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    )
}

const Friend = ({friend}) => {
    return (
        <div className = 'col-md-3' id = {friend.id} key = {friend.id}>
            <h5>{friend.name}</h5>
            {
                friend.img ? 
                <img src={friend.img} className="card-img-top w-50 mx-auto rounded-circle border border-white border-2 mb-5" alt='friend foto'/>:
                <svg id="Layer_1" version="1.1" viewBox="0 0 48 48" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill='#fff' height='5em'><g><path d="M24,26c6.6,0,12-5.4,12-12S30.6,2,24,2c-6.6,0-12,5.4-12,12S17.4,26,24,26z M24,4c5.5,0,10,4.5,10,10s-4.5,10-10,10   c-5.5,0-10-4.5-10-10S18.5,4,24,4z" /><path d="M33,28H15C7.8,28,2,33.8,2,41v5h2v-5c0-6.1,4.9-11,11-11h18c6.1,0,11,4.9,11,11v5h2v-5C46,33.8,40.2,28,33,28z"/></g></svg>
            } 
        </div>
    )
}

export default  Profile
