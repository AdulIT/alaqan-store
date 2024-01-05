import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import {Card, CardHorizontal} from '../Card/Card';

import cl from './FlippableCard.module.css';

const FlippableCard = ({ frontTitle, backTitle, backText, children, ...props }) => {
    const [showFront, setShowFront] = useState(true)
    const [isOverlayOpen, setOverlayOpen] = useState(false)

    return (
        <div className={cl.flippable_card} {...props}>
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Card
                    frontTitle={frontTitle}
                    backTitle={backTitle}
                    backText={backText}
                    onClick={() => {
                        setShowFront((prev) => !prev)
                    }}
                >
                    { children }
                </Card>
            </CSSTransition>
        </div>
    );
};

const FlippableCardHorizontal = ({ frontTitle, backTitle, backText, children, ...props }) => {
    const [showFront, setShowFront] = useState(true)
    const [isOverlayOpen, setOverlayOpen] = useState(false)

    return (
        <div className={cl.flippable_card} {...props}>
            <div className={cl.overlay}>
                <CSSTransition
                    in={showFront}
                    timeout={300}
                    classNames='flip-h'
                >
                    <CardHorizontal
                        frontTitle={frontTitle}
                        backTitle={backTitle}
                        backText={backText}
                        onClick={() => {
                            setShowFront((prev) => !prev)
                        }}
                    >
                        { children }
                    </CardHorizontal>
                </CSSTransition>
            </div>
        </div>
    );
};

export {FlippableCard, FlippableCardHorizontal};