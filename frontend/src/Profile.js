import Post from "./Post"

const posts = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minima. Temporibus, accusamus? Nisi autem excepturi consectetur sequi quidem, animi, fugit totam temporibus, quis delectus asperiores id eius omnis repellat ipsam.',
        date: 20-10-2021,
        likes: 5
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam adipisci ea doloribus, nesciunt numquam.',
        date: 22-10-2021,
        likes: 2
    },
    {
        id: 3,
        title: 'Post 3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam eveniet ipsam maxime aliquam ad iste incidunt facere. Accusamus, molestias magni enim reprehenderit doloribus odit deleniti quam nemo, aspernatur fuga mollitia illo animi? Commodi id provident quisquam iusto nesciunt totam eligendi deserunt magni, maxime, fugiat dolorum cupiditate porro voluptatum esse?',
        date: 22-10-2021,
        likes: 23
    },   
    {
        id: 4,
        title: 'Post 4',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, recusandae facilis, repellat, laborum aliquam ab dolor tempore officia numquam dolore fugit quaerat facere nobis ea.',
        date: 27-10-2021,
        likes: 10
    },   
]



const Profile = ({user, friends}) =>  {    
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
                            <h2>Hello {user.first_name}</h2>
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
                                        <div className = 'col-md-3' id = {friend.user_id}>
                                            <h5>{friend.first_name} {friend.last_name}</h5>
                                            <img src={friend.img} class="card-img-top w-50 mx-auto rounded-circle border border-white border-2 mb-5" alt="friend profile"/>
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
