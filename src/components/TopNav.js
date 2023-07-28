import React, { useState, useEffect } from 'react';

const TopNav = () => {
  const [scrolling, setScrolling] = useState(false);

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

  const smoothScrollTo = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav>
          <div className='topnav'>
            <button className={linkClass} onClick={() => smoothScrollTo('#home')}>Home</button>
            <button className={linkClass} onClick={() => smoothScrollTo('#resume')}>Experience</button>
            <button className={linkClass} onClick={() => smoothScrollTo('#portfolio')}>Work</button>
            <button className={linkClass} onClick={() => smoothScrollTo('#skills')}>Skills</button>
            <button className={linkClass} onClick={() => smoothScrollTo('#about')}>About</button>
            <button className={linkClass} onClick={() => smoothScrollTo('#contact')}>Contact</button>
          </div>
    </nav>
  );
};

export default TopNav;
