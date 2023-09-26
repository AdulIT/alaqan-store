import { useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../UI/button/Button'

import cl from './ContactUs.module.css'
import contactImg from '../../assets/img/contactUs/contact.png'
import Modal from '../Modal/Modal'

const ContactUs = () => {
    const { t } = useTranslation(["contactUs"])
    const [openModal, setOpenModal] = useState(false)

    const inputNameRef = useRef(null)
    const inputTelRef = useRef(null)
    const inputEmailRef = useRef(null)
    const inputMsgRef = useRef(null)

    const btnStyles =
    {
        padding: '20px 40px',
        borderRadius: '20px',
        background: '#FFF',
        color: '#1D1D1F',
    }

    const namePlaceholderText = t("contactFormNameInput")
    const telPlaceholderText = t("contactFormPhoneInput")
    const emailPlaceholderText = t("contactFormEmailInput")
    const messagePlaceholderText = t("contactFormMessageInput")

    function submitForm()
    {
        inputNameRef.current.value = ''
        inputTelRef.current.value = ''
        inputEmailRef.current.value = ''
        inputMsgRef.current.value = ''
    }

    return (
        <section className={cl.contact} id="contactus">
            <div className="container">
                <div className={cl.contact__wrapper}>
                    <div className={cl.contact__left}>
                        <h3 className={cl.contact__title}> {t("contactTitle")} </h3>
                        <p className={cl.contact__text}> {t("contactText")} </p>

                        <form action="#" className={cl.contact__form}>
                            <div className={cl.contact__form_wrapper}>
                                    <input
                                        className={cl.contact__form_input}
                                        type="text"
                                        id='name'
                                        name='name'
                                        placeholder={namePlaceholderText}
                                        ref={inputNameRef}
                                    />
                                    <input
                                        className={cl.contact__form_input}
                                        type="tel"
                                        id='tel'
                                        name='tel'
                                        placeholder={telPlaceholderText}
                                        ref={inputTelRef}
                                    />
                            </div>
                            <input
                                className={cl.contact__form_input}
                                type="email"
                                id='email'
                                name='email'
                                placeholder={emailPlaceholderText}
                                ref={inputEmailRef}
                            />
                            <textarea
                                className={cl.contact__form_input}
                                id='message'
                                name='message'
                                placeholder={messagePlaceholderText}
                                ref={inputMsgRef}
                            />
                        </form>
                    </div>

                    <img className={cl.contact__img} src={contactImg} alt="contact-img" />
                </div>

                <div className={cl.contact__line}></div>

                <div className={cl.contact__footer}>
                    <Button
                        styles={btnStyles}
                        className={cl.contact__footer_btn__mobile}
                        onClick={(e) => {
                            e.preventDefault()
                            submitForm()
                            setOpenModal(prev => !prev)
                        }}
                    > 
                        {t("contactFormContactUsBth")}
                    </Button>
                    <a href="tel: +7 777 777 7777" className={cl.contact__footer_call}>{t("contactCallText")} +7 777 777 7777</a>
                </div>
                {openModal && <Modal closeModal={setOpenModal} />}
            </div>
        </section>
    )
}

export default ContactUs