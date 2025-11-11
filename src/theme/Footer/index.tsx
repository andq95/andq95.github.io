import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

export default function Footer(): JSX.Element {
  const { colorMode } = useColorMode();

  // Một vài quote hiển thị ngẫu nhiên
  const quotes = [
    "Keep coding, keep improving 💻",
    "Turning coffee into code ☕",
    "Automate everything 🚀",
    "Data never lies 📊",
    "Building ideas into reality 🧠",
    "Stay curious, stay creative ✨",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <footer
      className={`${styles.footer} ${
        colorMode === "dark" ? styles.dark : styles.light
      }`}
    >
      <div className={styles.gradientOverlay} />

      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src="https://avatars.githubusercontent.com/u/40834431?v=4"
            alt="Logo"
            className={styles.logo}
          />
          <p>Đặng Quốc An — Backend & Machine Learning Developer</p>
        </div>

        <div className={styles.middle}>
          <h4><Translate>Link</Translate></h4>
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/cv">CV & Kỹ năng</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <h4><Translate>Connect</Translate></h4>
          <div className={styles.socials}>
            <a
              href="https://github.com/andq95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/an-đặng-quốc-764a90173"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
            <a href="mailto:dangquocan95@gmail.com">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
                alt="Email"
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.quote}>
        <p>{randomQuote}</p>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Đặng Quốc An. Made with ❤️ using
          Docusaurus.
        </p>
      </div>
    </footer>
  );
}
