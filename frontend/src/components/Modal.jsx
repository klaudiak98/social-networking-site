const Modal = ({id, title, message}) => {
  return (
    <div className="modal text-dark" id={id} tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p>{message}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Modal