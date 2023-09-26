import React from 'react'
import cl from './Button.module.css'

const Button = ({children, styles, ...props}) => {

    const btnStyles =
    {
        padding: styles.padding,
        borderRadius: styles.borderRadius,
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        width: styles.width,
        height: styles.height,
        fontSize: styles.fontSize ?? '18px',
        fontWeight: styles.fontWeight ?? 500,
        lineHeight: styles.lineHeight ?? '120%',
        letterSpacing: styles.letterSpacing || ' ',
        border: styles.border,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        juctifyContent: 'space-between',
        gap: styles.gap || 'none'
    }

    return (
        <button style={btnStyles} className={cl.btn} {...props}>
            { children }
        </button>
    )
}

export default Button