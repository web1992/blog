import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';



const links = [
  {
    title: 'ScheduledThreadPoolExecutor',
    url: '/blog/ScheduledThreadPoolExecutor',
  },
  {
    title: 'ThreadPoolExecutor',
    url: '/blog/ThreadPoolExecutor',
  },
  {
    title: 'ThreadPoolExecutor 之构造参数',
    url: '/blog/thread-pool-executor-constructor',
  },
];

function Links({url, title}) {
  const link = useBaseUrl(url);
  return (
    <div>
      <p>
        <Link  to={link}>{title}</Link>
        </p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="">
        <div className="container">
          <p/>

          {links && links.length > 0 && (
            <div className="container">
                {links.map((props, idx) => (
                 <p>
                 <Links  key={idx} {...props}/>
                 </p>
                ))}
              </div>
       
        )}
        </div>
      <main>
    
      </main>
    </Layout>
  );
}

export default Home;
