import React, { Fragment, useState } from "react";
import styles from "./Home.module.css";
import { websites } from "../resources/websites";

function Home() {
  const [activeIframe, setActiveIframe] = useState<null | string>(null);

  return (
    <div className={styles.console}>
      {activeIframe ? (
        <div className={styles.iframeContainer}>
          <iframe
            className={styles.iframe}
            src={activeIframe}
            title="Active Website"
          />
          <button
            className={styles.closeButton}
            onClick={() => setActiveIframe(null)}
          >
            X
          </button>
        </div>
      ) : (
        <Fragment>
          <div className={styles.header}>
            <div className={styles.headerTitle}>SLINKS</div>
            <div className={styles.headerDescription}>
              Starknet Apps on your feed
            </div>
          </div>
          <div className={styles.websiteGrid}>
            {websites.map((website, index) => (
              <div
                key={index}
                className={styles.websiteItem}
                onClick={() => {
                  setActiveIframe(website.url);
                }}
              >
                <img
                  className={styles.websiteImage}
                  src={website.thumbnail}
                  alt={website.title}
                />
                <div className={styles.websiteTitle}>{website.title}</div>
                <div className={styles.websiteDescription}>
                  {website.description}
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default Home;
