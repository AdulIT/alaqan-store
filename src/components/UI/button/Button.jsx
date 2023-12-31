import cl from './Button.module.css'

/* eslint react/prop-types: 0 */
const Button = ({children, styles, ...props}) => {

    const btnStyles =
    {
        padding: styles.padding,
        borderRadius: styles.borderRadius,
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        width: styles.width,
        height: styles.height,
        fontSize: styles.fontSize ?? '1.8rem',
        fontWeight: styles.fontWeight ?? 500,
        lineHeight: styles.lineHeight ?? '120%',
        letterSpacing: styles.letterSpacing || ' ',
        border: styles.border,
        cursor: 'pointer',
        display: styles.display || 'flex',
        alignItems: styles.alignItems || 'center',
        justifyContent: styles.justifyContent || 'space-between',
        gap: styles.gap || 'none'
    }

    return (
        <button style={btnStyles} className={cl.btn} {...props}>
            { children }
        </button>
    )
}

export default Button