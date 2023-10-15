import { useState, useEffect } from "react"
import axios from "axios"

const Friends = () => {
    if (!localStorage.getItem('accessToken')?.length) {
        window.open('/login',"_self")
    }
    const [userId, setUserId] = useState(null)
    const [friends, setFriends] = useState([])
    const accessToken = localStorage.getItem('accessToken')
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/user/me', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }})
        .then(
            res => setUserId(res.data.id)
            
        )
        .catch(
            err => console.log(err)
        )
    }, [accessToken])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/friends/listFriends?userId=${userId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }})
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

    return(
        <div className="container py-5">
            <div className = 'row text-center'>
                <div className = 'col'>
                    <div className = 'row mb-4'>
                        <div className="col">
                            <div className="row mb-4">
                                <div className="col">
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Search user" aria-label="Search user"/>
                                        <button className="btn btn-outline-light" type="submit">Search</button>
                                    </form>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row mb-4">
                                <div className="col">
                                    <h2>Your friends</h2>
                                </div> 
                            </div>
                            <div className="row mb-5">
                                { friends.map(friend => {
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
        <div className="col-md-4 mb-3">
            <div className="p-4 bg-dark border rounded-3" id={friend.id}>
                {/* no img yet */}
                {
                    friend.img ? 
                    <img src={friend.img} className="card-img-top w-50 rounded-circle border border-white border-2" alt='friend foto'/>:
                    <svg id="Layer_1" version="1.1" viewBox="0 0 48 48" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill='#fff' height='5em'><g><path d="M24,26c6.6,0,12-5.4,12-12S30.6,2,24,2c-6.6,0-12,5.4-12,12S17.4,26,24,26z M24,4c5.5,0,10,4.5,10,10s-4.5,10-10,10   c-5.5,0-10-4.5-10-10S18.5,4,24,4z" /><path d="M33,28H15C7.8,28,2,33.8,2,41v5h2v-5c0-6.1,4.9-11,11-11h18c6.1,0,11,4.9,11,11v5h2v-5C46,33.8,40.2,28,33,28z"/></g></svg>
                } 
                
                <div className="card-body">
                    <h5 className="card-title">{friend.name}</h5>
                    {/* no description yet*/}
                    <p className="card-text fst-italic">{friend.description ? friend.description : 'Lorem ipsum dolor sit amet.'}</p>
                    <a href="/messages" className="btn btn-primary">Write a message</a>
                </div>
            </div>
        </div>
    )
}

export default Friends