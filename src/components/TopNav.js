import React, { useState, useEffect } from 'react';

const TopNav = () => {
    const [scrolling, setScrolling] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkClass = 'text-purple-donJuan mx-6 hover:text-red-dragonfruit border-y border-light-pearlBush hover:border-red-dragonfruit';
    const logoClass = '';
    const navbarClass = scrolling ? 'scale-20' : '';

    const handleShow = (event) => {
        setShow(!show)
    }

    const smoothScrollTo = (target) => {
        const element = document.querySelector(target);
            if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        handleShow()
    };


    useEffect(() => {
        if (show) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [show]);

    return (
        <div>
            <div className='topnav'>
                {!show ?
                    <img className="navbutton hide"
                        onClick={handleShow}
                        src="https://i.imgur.com/Q1Y2vV9.png"
                        alt="hb icon"/>
                        :
                    <img className="navbutton"
                        onClick={handleShow}
                        src="https://i.imgur.com/lLC6OMW.png"
                        alt="x icon"/>}
            </div>
            <div
                className={show? 'cover': "none"}
                onClick={handleShow}
            >
                <div className='centered'>
                    <h1 className={linkClass}
                        onClick={() => smoothScrollTo('#home')}
                        style={{fontSize: "50px"}}>
                        Home
                    </h1>
                    <h1 className={linkClass}
                        onClick={() => smoothScrollTo('#about')}
                        style={{fontSize: "50px"}}>
                        About
                    </h1>
                    <h1 className={linkClass}
                        onClick={() => smoothScrollTo('#portfolio')}
                        style={{fontSize: "50px"}}>
                        Work
                    </h1>
                    <h1 className={linkClass}
                        onClick={() => smoothScrollTo('#skills')}
                        style={{fontSize: "50px"}}>
                        Skills
                    </h1>
                    <h1 className={linkClass}
                        onClick={() => smoothScrollTo('#resume')}
                        style={{fontSize: "50px"}}>
                        Experience
                    </h1>
                    <h1 className={linkClass}
                        onClick={() => smoothScrollTo('#contact')}
                        style={{fontSize: "50px"}}>
                        Contact
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
