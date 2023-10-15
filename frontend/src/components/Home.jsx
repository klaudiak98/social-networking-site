import Footer from "./Footer"
import Messages from "./Messages"
import Navbar from "./Navbar"
import Profile from "./Profile"
import PostForm from "./PostForm"
import Friends from "./Friends"
import Settings from "./Settings"
import { Outlet, Link } from "react-router-dom";

const user = {role: 'user', first_name: 'Klaudia', last_name: 'Tmp' ,id: 1}
const friends = [
    {
        user_id: 2,
        first_name: 'Jan',
        last_name: 'Kowalski',
        img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam molestiae cumque incidunt, maiores iste minima id facere blanditiis unde nulla.'
    },
    {
        user_id: 3,
        first_name: 'Anna',
        last_name: 'Kowalska',
        img: 'https://cdn-icons-png.flaticon.com/512/194/194938.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam molestiae cumque incidunt, maiores iste minima id facere blanditiis unde nulla.'
    },
    {
        user_id: 4,
        first_name: 'John',
        last_name: 'Smith',
        img: 'https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium at nesciunt laborum minima? Reiciendis, atque?'
    },
    {
        user_id: 5,
        first_name: 'Ana',
        last_name: 'Smith',
        img: 'https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sequi.'
    },
    {
        user_id: 6,
        first_name: 'Kate',
        last_name: 'Cat',
        img: 'https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png',
        description: 'none description'
    }
]

const posts = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minima. Temporibus, accusamus? Nisi autem excepturi consectetur sequi quidem, animi, fugit totam temporibus, quis delectus asperiores id eius omnis repellat ipsam.',
        date: 20-10-2021,
        likes: 5,
        public: 1
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam adipisci ea doloribus, nesciunt numquam.',
        date: 22-10-2021,
        likes: 0,
        public: 0
    },
    {
        id: 3,
        title: 'Post 3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam eveniet ipsam maxime aliquam ad iste incidunt facere. Accusamus, molestias magni enim reprehenderit doloribus odit deleniti quam nemo, aspernatur fuga mollitia illo animi? Commodi id provident quisquam iusto nesciunt totam eligendi deserunt magni, maxime, fugiat dolorum cupiditate porro voluptatum esse?',
        date: 22-10-2021,
        likes: 23,
        public: 1
    },   
    {
        id: 4,
        title: 'Post 4',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, recusandae facilis, repellat, laborum aliquam ab dolor tempore officia numquam dolore fugit quaerat facere nobis ea.',
        date: 27-10-2021,
        likes: 10,
        public: 1
    },   
]

const Home = () => {
    return (
        <>

            <Navbar/>
            <Profile user={user} friends={friends} posts={posts}/>
            {/* <Messages user={user} friends={friends}/> */}
            {/* <Friends friends={friends}/> */}
            {/* <Settings user={user}/> */}
            {/* <PostForm/> */}
                <Outlet />

            <Footer/>

        </>
    )
}

export default Home
