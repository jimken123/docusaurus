import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '',
    description: <></>,
    links: [
    ],
  },

];
        
<a name="top"></a>

function Feature({ imageUrl, title, description, links }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={clsx('no-auto-height', styles.featureImage)} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      {FeatureItems(links)}
    </div>
  );
}

function FeatureItems(links) {
  return (
    <ul class="feature-list">
      {links.map(({ url, title, items }) => (
        <li>
          <Link to={useBaseUrl(url)}>{title}</Link>
          {items?.length && FeatureItems(items)}
        </li>
      ))}
    </ul>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title"><Translate>CompanyName ProductName</Translate></h1>
          <p className="hero__subtitle"><Translate>...high-end widgets for low-stress success...</Translate></p>
          <img
            className={clsx('no-auto-height', styles.heroImage)}
            src={useBaseUrl('img/phoenix.svg')}
            alt={
              translate({
                message: 'ProductName Docs',
                description: 'ProductName Docs',
              })
            }
          />
          <div className={styles.buttons}>
            <Link
            className="button button--secondary button--lg"
            to="/docs/category/service-operator"><Translate>
            Service Operator</Translate>
          </Link>
          </div>
          <p></p>
          <div className={styles.buttons}>
            <Link
            className="button button--secondary button--lg"
            to="/docs/category/user"><Translate>
            User</Translate>
          </Link>
          </div>
        </div>
      </header>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">   
              <h3 className="text--center"><Translate>Lorem ipsum dolor</Translate></h3>
              <p className="text--center"><Translate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Translate></p>
              <p className="text--center"><Translate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Translate></p>
            </div>
          </section>
        )}
      </main>

      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <section className={styles.features}>
          <div className="container">
              <h3 className="text--center"><Translate>Documentation by version + Release Notes</Translate></h3>
            <div class="panel">

              <div class="panel">
                <div>
                  <h3 className="text--center"><Translate>Documentation</Translate></h3>
                  <p className="text--left"><Translate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Translate></p>
                </div>
              </div>

              <div class="panel">
                <div>
                  <h3 className="text--center"><Translate>Release Notes</Translate></h3>
                  <p className="text--left"><Translate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Translate></p>
                </div>
              </div>
            </div>
                <h2 className="text--center"><Translate>Advanced</Translate></h2>                   
                <p className="text--center"><Translate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Translate></p>

        </div>
        </section>
      </header>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">   
              <div><h3 className="text--center"><Translate>Contribute</Translate></h3>
              <h4 className="text--center"><Translate>Help us improve the ProductName docs</Translate></h4>
              <p className="text--center"><Translate>If you have something to add to our documentation, feel free to send us a pull request.</Translate></p>
              <p className="text--center"><Translate>The source code for our documentation website can be found in the GitHub link in the navbar at the top of every page.</Translate></p>
            </div>
            <h1 className="text--right"><a href="#top">&#8679;</a></h1>
            </div>
          </section>
        )}
      </main>



    </Layout>
  );
}

export default Home;
