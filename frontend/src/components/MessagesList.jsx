const friends = [{id:1, name:'test'}]
const messages = [{id:1, unreaded:5, user_id:1}]

const MessagesList = () => {

    return (
        
        messages
            .sort(
                function(a,b) {
                    return b.unreaded - a.unreaded
                })
            .map(mess => {
                return (
                    <li className="list-group-item d-flex justify-content-between align-items-start" id={mess.user_id} key={mess.user_id}>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold ">
                                {friends.filter(friend => friend.id === mess.user_id)[0]?.name}
                            </div>
                            <i><small>{/*Object.values(mess.all_messages[mess.all_messages.length-1])[0]*/}</small></i>
                        </div>
                        <Unreaded amount={mess.unreaded}/>
                    </li>
                )
            })
    )
}

const Unreaded = ({amount}) => {
    return (amount ? 
        <span className="badge bg-danger rounded-pill"> {amount} </span> :
        <span className="badge bg-primary rounded-pill"> {amount} </span> 
        )    
}

export default MessagesList