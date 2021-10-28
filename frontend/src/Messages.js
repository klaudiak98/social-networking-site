import MessagesList from "./MessagesList"
import Message from "./Message"
const messages = [
    {
        user_id: 2,
        unreaded: 0,
        all_messages: [
            {2: 'Hello'},
            {2: 'What are you doing?'},
            {1: 'hi'},
            {1: 'my new web page, bye!'},
            {2: 'bye'}
        ]
    },
    {
        user_id: 4,
        unreaded: 6,
        all_messages: [
            {4: 'hi'},
            {1: `hi, what's up?`},
            {4: 'we have a problem'},
            {4: 'we cannot find her cats'},
            {4: 'it disapeart!'},
            {4: 'are you here?'},
            {4: 'klaudia?'},
            {4: 'what we should do?'}
        ]
    },
    {
        user_id: 3,
        unreaded: 2,
        all_messages: [
            {1: 'Hi! Happy birthday!'},
            {3: 'ooo you remember!'},
            {3: 'thank you ♥'},
        ]
    }
]

const Messages = ({user, friends}) => {
    return (
        <div className="container py-5">
            <div className = 'row'>
                <div className = 'col'>
                    <div className = 'row mb-3'>
                        <div className = 'col text-center'>
                            <h2>Messages</h2>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className = 'col-md-3'>
                            <ul className="list-group list-group-flush rounded-2">
                                <MessagesList 
                                    messages={messages} 
                                    friends={friends}
                                />
                            </ul>
                        </div>
                        <div className = 'col-md-9'>
                            <Message user={user} messages={messages} friends={friends}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Messages