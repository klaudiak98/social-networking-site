const PostForm = () => {

    return(
        <div className="container py-5">
            <div className = 'row'>
                <div className = 'col'>
                    <div className = 'row mb-3'>
                        <div className = 'col text-center'>
                            <h2>Add new post</h2>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className = 'col'>
                            <form class="row g-3">
                                <div class="col-md-8">
                                    <label for="title" class="form-label">Title</label>
                                    <input type="text" class="form-control" id="title"/>
                                </div>
                                <div class="col-md-4">
                                    <label for="tags" class="form-label">Tags</label>
                                    <input type="text" class="form-control" id="tags"/>
                                </div>
                                <div class="col-12">
                                    <label for="desc" class="form-label">Description</label>
                                    <textarea class="form-control" id="desc" placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, doloribus quaerat. Facilis nesciunt voluptatem, nihil officia quibusdam dignissimos, rem vitae autem quidem labore esse ab!'/>
                                </div>
                                <div class="col-md-4">
                                    <label for="categorie" class="form-label">Categorie</label>
                                    <select id="categorie" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <h4>Image upload soon</h4>
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                    <label class="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Save and publish</button>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Save as draft</button>
                                </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostForm