import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           {/* <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link> */}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }


import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Harshil" description="Text based stuff here">
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

        <div style={{ textAlign: 'center' }}>
          <h1>
            Text based content, for harshildari.net
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </h1>
          <hr></hr>
          <Link className="button button--primary button--lg" to="/docs/Nox">
            Go to Screenplays
          </Link>
          <br></br>
          <br></br>
          <Link className="button button--primary button--lg" to="https://www.harshildari.net">
            Go back to harshildari.net
          </Link>
          <hr></hr>
        </div>
      </main>
    </Layout>
  );
}
