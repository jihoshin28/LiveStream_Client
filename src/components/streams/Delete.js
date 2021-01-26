import React from 'react'
import Modal from '../Modal.js'

const StreamDelete = () => {

    const actions = 
        (
            <div>
                <button className = "ui primary button">Delete</button>
                <button className = "ui button">Cancel</button>
            </div>
        )
      
    
    return (
        <div>
            <div>StreamDelete</div>
            <Modal 
                header = "Delete Stream" 
                content = "Are you sure you want to delete this stream?"
                actions = {actions}
            />
        </div>
    )
}

export default StreamDelete