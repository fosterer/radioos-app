import React from 'react';
import { CSSTransition } from 'react-transition-group';

function useFadeIn() {

    function Fader({ children, animate = true }) {
        return (
            <CSSTransition
                in={animate}
                classNames="fade"
                appear={true}
                timeout={350}>
                {children}
            </CSSTransition>
        );
    }

    return { Fader };
}

export default useFadeIn;