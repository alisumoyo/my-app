import React, { useState } from 'react'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

function Dropdownicon() {

    const [isOpen, setIsOpen] = useState(false);

    const tooggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div>
            <FontAwesomeIcon icon={faEllipsisVertical} onClick={tooggleDropdown} style={{ color: 'rgba(94, 90, 90, 0.66)', cursor: 'pointer', fontSize: '20px' }} />
            {
                isOpen && (
                    <div className='dropdown' style={{ display: "flex", flexDirection: 'column' }}>
                        <a href='#' style={{ border: '1px solid #312f2fbf', backgroundColor: '#80808075' }}>Link</a>
                        <a href='#' style={{ border: '1px solid #312f2fbf', backgroundColor: '#80808075' }}>Home</a>
                        <a href='#' style={{ border: '1px solid #312f2fbf', backgroundColor: '#80808075' }}>Contact</a>
                        <a href='#' style={{ border: '1px solid #312f2fbf', backgroundColor: '#80808075' }}>Profile</a>
                        <a href='#' style={{ border: '1px solid #312f2fbf', backgroundColor: '#80808075' }}>Chats</a>
                    </div>
                )
            }
        </div>
    )
}

export default Dropdownicon

