import React, { useState, useRef, useEffect } from 'react';
import styles from './Console.module.css';

const Grid = ({ websites }) => {
  const [activeIframe, setActiveIframe] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const gridRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (gridRef.current) {
        const scrollPosition = gridRef.current.scrollTop;
        const itemHeight = gridRef.current.children[0].offsetHeight;
        const newSelectedIndex = Math.floor(scrollPosition / itemHeight);
        setSelectedIndex(newSelectedIndex);
      }
    };

    const gridElement = gridRef.current;
    if (gridElement) {
      gridElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (gridElement) {
        gridElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.console}>
      {activeIframe ? (
        <div className={styles.iframeContainer}>
          <iframe className={styles.iframe} src={activeIframe} title="Active Website" />
          <button className={styles.closeButton} onClick={() => setActiveIframe(null)}>
            X
          </button>
        </div>
      ) : (
        <>
          <div className={styles.header}>
            <div className={styles.credit}>CREDIT 10</div>
            <div className={styles.highScore}>HI-SCORE 9999</div>
          </div>
          <h1 className={styles.title}>SELECT YOUR BLINK</h1>
          <div className={styles.websiteGrid} ref={gridRef}>
            {websites.map((website, index) => (
              <div
                key={index}
                className={`${styles.websiteItem} ${index === selectedIndex ? styles.selected : ''}`}
                onClick={() => {
                  setSelectedIndex(index);
                  setActiveIframe(website.url);
                }}
              >
                <img
                  className={styles.websiteImage}
                  src={website.thumbnail}
                  alt={website.title}
                />
                <div className={styles.websiteTitle}>{website.title}</div>
              </div>
            ))}
          </div>
          <div className={styles.footer}>PRESS START</div>
        </>
      )}
    </div>
  );
};

export default Grid;