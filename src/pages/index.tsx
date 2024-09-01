import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import ReactGA from "react-ga4";

import styles from "./index.module.css";
import HomepageIntro from "../components/HomepageIntro";
import HomepageExperience from "../components/HomepageExperience";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  ReactGA.initialize("G-YS7V4J17HJ");

  return (
    <Layout
      title={`An Dang`}
      description="A Backend Developer with lots of hobbies"
    >
      {/* <HomepageHeader /> */}
      <main>
        <HomepageIntro></HomepageIntro>
        {/* <HomepageFeatures /> */}
        <HomepageExperience />
      </main>
    </Layout>
  );
}
