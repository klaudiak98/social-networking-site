const friends = []

const Friends = () => {
    if (!localStorage.getItem('accessToken')?.length) {
        window.open('/login',"_self")
    }
    else
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
                                    return <Friend friend={friend} key={friend.user_id}/>
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
            <div className="p-4 bg-dark border rounded-3" id={friend.user_id}>
                <img src={friend.img} className="card-img-top w-50 rounded-circle border border-white border-2" alt='freind foto'/>
                <div className="card-body">
                    <h5 className="card-title">{friend.first_name} {friend.last_name}</h5>
                    <p className="card-text fst-italic">{friend.description}</p>
                    <a href="/" className="btn btn-primary">Write a message</a>
                </div>
            </div>
        </div>
    )
}

export default Friends