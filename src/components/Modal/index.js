function Modal({ currentProject, onClose }) {

    const { name, description, picture, repo, link } = currentProject
    
    return (
      <div>
        <div className="modal">
          <div className="modalContainer">
            <h3 className="modalTitle">{name}</h3>
            <img src={picture} alt={name} className='modalImage'/>
            <div className="modalButton">
              <button className="btnStyle"><a className="btnText" href={repo}>GitHub Repo</a></button>
              <button className="btnStyle"><a className="btnText" href={link}>Website Link</a></button>
            </div>
            <p className="modalDescription">{description}</p>
            <button className="btnStyle" id="close" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Modal;