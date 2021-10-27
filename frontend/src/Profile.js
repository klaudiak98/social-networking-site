const Profile = () =>  {
    return (
        <div className="container py-5">
            <div className = 'row'>
                <div className = 'col'>
                    <div className = 'row about mb-4'>
                        <div className = 'col-md-3 d-flex justify-content-center align-items-center'>
                            <img src = 'https://cdn-icons-png.flaticon.com/512/194/194938.png' alt='profile foto' className='w-75 rounded-circle border border-white border-2'></img>
                        </div>
                        <div className = 'col-md-9'>
                            <h2>Hello Klaudia</h2>
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
                                <div className = 'col-md-4 mb-3'>
                                    <div class="p-4 bg-dark border rounded-3">
                                        <h4>Post 1</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque recusandae accusantium eos tenetur nisi ratione quae officiis nulla eveniet sequi.</p>
                                        <button class="btn btn-outline-secondary" type="button">Check it</button>
                                    </div>
                                </div>
                                <div className = 'col-md-4 mb-3'>
                                    <div class="p-4 bg-dark border rounded-3">
                                        <h4>Post 2</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo nisi! Maiores veritatis quibusdam doloribus quos officiis, libero sequi. Praesentium tempora in nostrum impedit nesciunt, ipsam fugit eaque a illo placeat amet quidem consequatur ad error. Iusto ex quaerat consequatur provident maiores similique quibusdam ducimus!</p>
                                        <button class="btn btn-outline-secondary" type="button">Check it</button>
                                    </div>
                                </div>
                                <div className = 'col-md-4 mb-3'>
                                    <div class="p-4 bg-dark border rounded-3">
                                        <h4>Post 3</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati consequatur perspiciatis doloremque ducimus excepturi alias nihil in, esse mollitia ipsa voluptatem sapiente error nobis velit aliquam veniam quam totam?</p>
                                        <button class="btn btn-outline-secondary" type="button">Check it</button>
                                    </div>
                                </div>
                                <div className = 'col-md-4 mb-3'>
                                    <div class="p-4 bg-dark border rounded-3">
                                        <h4>Post 4</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem, alias nam quibusdam corrupti deleniti, molestias consequatur perferendis assumenda, quaerat cupiditate fugit ut! Dolorem reprehenderit rem provident nobis. Dolores, magni.</p>
                                        <button class="btn btn-outline-secondary" type="button">Check it</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'row friends mb-5'>
                        <div className = 'col'>
                            <div className = 'row'>
                                <div className = 'col text-center my-2'>
                                    <h3>Your friends</h3>
                                </div>
                            </div>
                            <div className = 'row text-center'>
                                <div className = 'col-md-3'>
                                    <h5>Friend 1</h5>
                                    <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" class="card-img-top w-50 mx-auto rounded-circle border border-white border-2 mb-5" alt="..."/>
                                </div>
                                <div className = 'col-md-3'>
                                    <h5>Friend 2</h5>
                                    <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" class="card-img-top w-50 mx-auto rounded-circle border border-white border-2 mb-5" alt="..."/>
                                </div>
                                <div className = 'col-md-3'>
                                    <h5>Friend 3</h5>
                                    <img src="https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png" class="card-img-top w-50 mx-auto rounded-circle border border-white border-2 mb-5" alt="..."/>
                                </div>
                                <div className = 'col-md-3'>
                                    <h5>Friend 4</h5>
                                     <img src="https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png" class="card-img-top w-50 mx-auto rounded-circle border border-white border-2 mb-5" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    )
}

export default  Profile
