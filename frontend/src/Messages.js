const Messages = () => {
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
                            <ul class="list-group list-group-flush rounded-2">
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold ">Friend 1</div>
                                    <i><small>So what we should do?</small></i>
                                    </div>
                                    <span class="badge bg-danger rounded-pill">13</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Friend 2</div>
                                    <i><small>ok</small></i>
                                    </div>
                                    <span class="badge bg-danger rounded-pill">2</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Friend 3</div>
                                    <i><small>thanks, bye ♥</small></i>
                                    </div>
                                    <span class="badge bg-primary rounded-pill">0</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Friend 4</div>
                                    <i><small>No messages</small></i>
                                    </div>
                                    <span class="badge bg-primary rounded-pill">0</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">Friend 5</div>
                                    <i><small>No messages</small></i>
                                    </div>
                                    <span class="badge bg-primary rounded-pill">0</span>
                                </li>
                            </ul>
                        </div>
                        <div className = 'col-md-9'>
                            <div class="card text-dark">
                                <div class="card-header fs-4 fw-bold">
                                    Friend 3
                                </div>
                                <div class="card-body container">
                                    <div className="row">
                                        <div className="col">
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                <td colspan = '3'>Hello</td>
                                                </tr>
                                                <tr>
                                                <td className='text-end' colspan = '3'>hi</td>
                                                </tr>
                                                <tr>
                                                <td colspan="3">What are you doing?</td>
                                                </tr>
                                                <tr>
                                                <td className='text-end' colspan="3">my new web page, bye!</td>
                                                </tr>
                                                <tr>
                                                <td colspan="3">bye</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div>
                                            <a href="/" class="btn btn-primary col-3">Sent message</a>
                                            <input type = 'text' className = 'offset-1 col-8'/>
                                        </div>  
                                    </div>
                                    </div>
                                   
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Messages