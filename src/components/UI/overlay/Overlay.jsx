import React from 'react';
import cl from './Overlay.module.css'

const Overlay = ({isOpen, onClose, children}) => {
    return (
        <>
            {
                isOpen ? (
                    <div className={cl.overlay}>
                        <div className={cl.overlay_background} onClick={onClose}>
                            { children }
                        </div>
                    </div>
                ) : null
            }
        </>
    );
};

export default Overlay;