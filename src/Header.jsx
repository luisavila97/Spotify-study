import React, { createRef, useState, useEffect } from 'react';

const Header = ({ children, sticky = false, className, ...rest }) => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = React.createRef();

  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        { threshold: [1] }
      );

    observer.observe(cachedRef);

    return function () {
      observer.unobserve(cachedRef);
    };
  }, []);

  return (
    <header
      className={className + (isSticky ? ' isSticky' : '')}
      ref={ref}
      {...rest}
    >
      {children}
    </header>
  );
};

export default Header;
