import React, { useState } from 'react';
import styles from './Console.module.css';

const Grid = ({ websites }) => {
  const [activeIframe, setActiveIframe] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
          <h1 className={styles.title}>SELECT YOUR SLINK</h1>
          <div className={styles.websiteGrid}>
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
          <div className={styles.insertCoin}>INSERT COIN</div>
        </>
      )}
    </div>
  );
};

export default Grid;