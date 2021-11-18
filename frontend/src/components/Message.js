const open_message = 2  //message with the user id
const Message = ({user, messages, friends}) => {
    return (
        <div className="card text-dark">
            <div className="card-header fs-4 fw-bold">
                {friends.filter(friend => friend.id === messages[open_message].user_id)[0]?.name}
            </div>
            <div className="card-body container">
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <tbody>
                                {messages[open_message].all_messages.map((el, index) => {
                                    return (<Mess user={user} user_id={Object.keys(el)[0]} mess={Object.values(el)[0]} key={index}/>)
                                })}
                            </tbody>
                        </table>
                        <div>
                            <a href="/" className="btn btn-primary col-3">Sent message</a>
                            <input type = 'text' className = 'offset-1 col-8'/>
                        </div>  
                    </div>
                </div>   
            </div>
        </div>
    )
   
}

const Mess = ({user, user_id, mess}) => {
    return ( user.id == user_id ? 
        <tr>
            <td className='text-end' colSpan = '3'>{mess}</td>
        </tr> :
        <tr>
            <td colSpan = '3'>{mess}</td>
        </tr>         
    )
}

export default Message