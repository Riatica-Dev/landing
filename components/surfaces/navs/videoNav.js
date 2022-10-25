import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import styles from "@/styles/vidoeNav.module.css";

const VidoeNav = () => {
  return (
    <header className={styles.header}>
      <video
        src="../video/blue.webm"
        className={styles.videoFluid}
        autoPlay
        muted={true}
        loop={true}
        poster="../images/preload.webp"
      />
      <div
        className={`d-flex ${styles.content} flex-column justify-content-between `}
      >
        <nav className="container py-2 pt-4">
          <div className={styles.navCenter}>
            <div className={styles.nav}>
              <div style={{ width: "200px", height: "41px" }}>
                <Link href="/">
                  <a className="text-white text-decoration-none">
                    <Image
                      src="/images/logos/white-logo.png"
                      layout="responsive"
                      width="200"
                      height="41"
                      alt="logo cloudfunding"
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.navLink}>
                <Link
                  href="https://medium.com/@CloudFundLena/after-the-icos-and-ieos-lena-instruments-offers-the-industry-a-new-way-of-crowdfunding-projects-on-14eb7f7f819f"
                  passHref
                >
                  <a
                    className={`text-decoration-none text-white ${styles.href}`}
                    target="_blank"
                    rel="noopener"
                  >
                    What is CloudFunding?
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="text-center container text-white">
          <h1>Your Decentralised Launchpad</h1>
          <h4 className="mb-4">Coming soon</h4>
          <p className="pt-2">
            Your Flare/Songbird project needs CloudFunding?
            <Link href="mailto:hello@cloudfunding.xyz" passHref>
              <a
                className={`text-decoration-none text-white d-block ${styles.href}`}
              >
                hello@cloudfunding.xyz
              </a>
            </Link>
          </p>
        </div>

        <div className="container">
          <div className={`${styles.BottomnNav} nav py-2 mb-2 mb-md-5`}>
            <div className="d-flex">
              <Link href="/wfp">
                <a
                  className={`${styles.href}  text-white nav-link text-center mt-4 d-flex`}
                  style={{ fontSize: "0.8rem" }}
                >
                  <div className="">
                    <Image
                      src="/images/wfp-white.png"
                      height="50px"
                      width="30px"
                      alt="logo-wfp"
                      layout="fixed"
                    />
                  </div>
                  <span className="ms-2 mt-3">Our commitment to the WFP</span>
                </a>
              </Link>
            </div>
            <div className="nav-item d-flex justify-content-center mt-2">
              <Link href="https://t.me/CloudFundingLena" passHref>
                <a
                  className={`${styles.href} text-white nav-link`}
                  title="Join us on Telegram"
                  target="_blank"
                  rel="noopener"
                >
                  <FaTelegramPlane fontSize={30} />
                </a>
              </Link>
            </div>
            <div className="nav-item d-flex ms-auto">
              <div className="mx-4">
                <div className="nav-item">
                  <Link href="https://twitter.com/CloudFundLena" passHref>
                    <a
                      title="Follow us on Twitter"
                      target="_blank"
                      rel="noopener"
                      className={`${styles.href} text-white nav-link`}
                    >
                      <AiOutlineTwitter fontSize={30} />
                    </a>
                  </Link>
                </div>
                <div className="nav-item">
                  <Link href="https://medium.com/@CloudFundLena" passHref>
                    <a
                      title="Join our Medium"
                      target="_blank"
                      rel="noopener"
                      className={`${styles.href} text-white nav-link`}
                    >
                      <BsMedium fontSize={30} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default VidoeNav;
