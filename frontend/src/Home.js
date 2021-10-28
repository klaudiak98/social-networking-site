import Footer from "./Footer"
import Messages from "./Messages"
import Navbar from "./Navbar"
import Profile from "./Profile"
import PostForm from "./PostForm"
import Friends from "./Friends"
import Settings from "./Settings"

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
        user_id: 5,
        first_name: 'Kate',
        last_name: 'Cat',
        img: 'https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png',
        description: 'none description'
    }
]

const Home = () => {
    return (
        <>
            <Navbar/>
            <Profile user={user} friends={friends}/>
            {/* <Messages user={user} friends={friends}/> */}
            {/* <Friends friends={friends}/> */}
            {/* <Settings user={user}/>*/}
            {/* <PostForm/> */}
            <Footer/>
        </>
    )
}

export default Home
