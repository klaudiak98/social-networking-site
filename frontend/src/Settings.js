const Settings = ({user}) => {
    return (
<div className="container py-5">
            <div className = 'row'>
                <div className = 'col'>
                    <div className = 'row mb-3'>
                        <div className = 'col text-center'>
                            <h2>Settings</h2>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className = 'col'>
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="firstName" class="form-label">First name</label>
                                    <input type="text" class="form-control" id="firstName" placeholder={user.first_name}/>
                                </div>
                                <div class="col-md-6">
                                    <label for="lastName" class="form-label">Last name</label>
                                    <input type="text" class="form-control" id="lastName" placeholder={user.last_name}/>
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Description</label>
                                    <textarea class="form-control" id="inputAddress" placeholder= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores autem veniam voluptatum deleniti modi vitae?'/>
                                </div>
                                <div className="col-12">
                                    <h4>Image upload soon</h4>
                                </div>
                                <div class="col-md-4">
                                    <label for="oldpass" class="form-label">Old password</label>
                                    <input type="password" class="form-control" id="oldpass"/>
                                </div>
                                <div class="col-md-4">
                                    <label for="pass1" class="form-label">New password</label>
                                    <input type="password" class="form-control" id="pass1"/>
                                </div>
                                <div class="col-md-4">
                                    <label for="pass2" class="form-label">Retype new password</label>
                                    <input type="password" class="form-control" id="pass2"/>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Save changes</button>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Reset</button>
                                </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings