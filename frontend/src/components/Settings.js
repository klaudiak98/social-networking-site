const user = []
const Settings = () => {
    if (!localStorage.getItem('accessToken')?.length) {
        window.open('/login',"_self")
    }
    else
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
                            <form className="row">
                                <div className='col'>
                                    <div className="row mb-4">
                                        <div className="col-md-1">
                                            <svg id="Layer_1" version="1.1" viewBox="0 0 48 48" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill='#fff'><g><path d="M24,26c6.6,0,12-5.4,12-12S30.6,2,24,2c-6.6,0-12,5.4-12,12S17.4,26,24,26z M24,4c5.5,0,10,4.5,10,10s-4.5,10-10,10   c-5.5,0-10-4.5-10-10S18.5,4,24,4z" /><path d="M33,28H15C7.8,28,2,33.8,2,41v5h2v-5c0-6.1,4.9-11,11-11h18c6.1,0,11,4.9,11,11v5h2v-5C46,33.8,40.2,28,33,28z" /></g></svg>
                                        </div>
                                        <div className="col-md-5">
                                            <label htmlFor="firstName" className="form-label">First name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder={user.first_name}/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="lastName" className="form-label">Last name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder={user.last_name}/>
                                        </div>
                                    </div>
                                
                                    <div className="row mb-4">
                                        <div className="col-md-1">
                                            <svg id="Layer_1" version="1.1" viewBox="0 0 48 48" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill='#fff'><g><g><path d="M20.8,27.2l2.1-6.3L38,5.8l4.2,4.2L27.1,25.1L20.8,27.2z M24.7,21.9L24,24l2.1-0.7L39.4,10L38,8.6L24.7,21.9z"/></g><g><path d="M42.9,9.3l-4.2-4.2l1.4-1.4c1.2-1.2,3-1.2,4.2,0c0.6,0.6,0.9,1.3,0.9,2.1c0,0.8-0.3,1.5-0.9,2.1L42.9,9.3z M41.5,5.1    l1.4,1.4c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7C42.5,4.7,41.9,4.7,41.5,5.1z"/></g></g><g><path d="M38,46H5c-1.7,0-3-1.3-3-3V10c0-1.7,1.3-3,3-3h27v2H5c-0.6,0-1,0.4-1,1v33c0,0.6,0.4,1,1,1h33c0.6,0,1-0.4,1-1V16h2v27   C41,44.7,39.7,46,38,46z"/></g></svg>
                                        </div>
                                        <div className="col-md-11">
                                            <label htmlFor="description" className="form-label">Description</label>
                                            <textarea className="form-control" id="description" placeholder= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores autem veniam voluptatum deleniti modi vitae?'/>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-1">
                                            <svg id="Layer_1" version="1.1" viewBox="0 0 48 48" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill='#fff'><g><path d="M43,46H5c-1.7,0-3-1.3-3-3V21c0-1.7,1.3-3,3-3h8.7c0.4,0,0.7-0.2,0.9-0.5l0.9-1.9c0.4-1,1.5-1.7,2.7-1.7h11.5   c1.2,0,2.3,0.7,2.7,1.7l0.9,1.7c0.2,0.3,0.5,0.5,0.9,0.5H43c1.7,0,3,1.3,3,3v22C46,44.7,44.7,46,43,46z M5,20c-0.6,0-1,0.4-1,1v22   c0,0.6,0.4,1,1,1h38c0.6,0,1-0.4,1-1V21c0-0.6-0.4-1-1-1h-8.8c-1.1,0-2.1-0.6-2.7-1.6l-0.9-1.8c-0.2-0.4-0.5-0.5-0.9-0.5H18.2   c-0.4,0-0.7,0.2-0.9,0.5l-0.9,1.9c-0.4,1-1.5,1.7-2.7,1.7H5z"/></g><g><path d="M24,42c-5.5,0-10-4.5-10-10s4.5-10,10-10c5.5,0,10,4.5,10,10S29.5,42,24,42z M24,24c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-9 S28.4,24,24,24z"/></g></svg>
                                        </div>
                                        <div className="col-md-11">
                                            <label htmlFor="image" className="form-label">Image upload soon</label>
                                            <input type='file' id='image'className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-1">
                                            <svg version="1.1" viewBox="0 0 48 48" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill='#fff'><g className="st0" id="Padding__x26__Artboard"/><g id="Icons"><g><path className="st1" d="M30.40289,35.48264H17.59711c-1.32397,0-2.39726-1.07329-2.39726-2.39726v-8.94721    c0-1.32397,1.07329-2.39726,2.39726-2.39726h12.80579c1.32397,0,2.39726,1.07329,2.39726,2.39726v8.94721    C32.80016,34.40935,31.72687,35.48264,30.40289,35.48264z"/><line className="st1" x1="17.09956" x2="17.09956" y1="30.75305" y2="26.7138"/><path className="st1" d="M17.09956,24.88412c0-0.82396,0.66795-1.49191,1.49191-1.49191"/><g><path className="st1" d="M28.08499,21.73736v-3.38c0-2.25-1.83-4.09-4.08-4.09c-2.26,0-4.09,1.84-4.09,4.09v3.38 M18.16499,21.73736     v-3.38c0-3.22,2.62-5.84,5.83-5.84c3.22,0,5.84,2.62,5.84,5.84v3.38"/></g></g></g></svg>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="oldpass" className="form-label">Old password</label>
                                            <input type="password" className="form-control" id="oldpass"/>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="pass1" className="form-label">New password</label>
                                            <input type="password" className="form-control" id="pass1"/>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="pass2" className="form-label">Retype new password</label>
                                            <input type="password" className="form-control" id="pass2"/>
                                        </div>
                                    </div>
                                    <div className="mb-4 d-flex gap-3">
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                        <button type="submit" className="btn btn-primary">Reset</button>
                                    </div>
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