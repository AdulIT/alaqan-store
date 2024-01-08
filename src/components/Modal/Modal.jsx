import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import cl from './Modal.module.css'
import popupImg from '../../assets/img/popup.png'
import checkMarkIcon from '../../assets/icons/checkMark.svg'
import Button from '../UI/button/Button';

const Modal = ({closeModal, ...props}) => {
    const { t } = useTranslation(["modal"])
    const btnStyles =
    {
        padding: '20px 40px',
        borderRadius: '20px',
        backgroundColor: '#1D1D1F',
        color: '#FFF',
    }

    return (
        <div {...props} className={cl.modal}>
            <img className={cl.modal__img} src={popupImg} alt="popup-img" />

            <div className={cl.modal__info}>
                <div className={cl.modal__info_checkmark}>
                    <img
                        src={checkMarkIcon}
                        alt="check-mark-icon"
                        loading='lazy'
                    />
                </div>
                <h2 className={cl.modal__info_title}> {t("modalTitle")} </h2>
                <p className={cl.modal__info_text}>{t("modalText")}</p>
                <Button
                    styles={btnStyles}
                    className={cl.modal__btn_close}
                    onClick={() => closeModal(false)}
                >
                    {t("modalBtnText")}
                </Button>
            </div>
        </div>
    );
};

export default Modal;