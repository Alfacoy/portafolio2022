import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Hello from '../components/Hello';

export default function Home() {

  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={``}
      description="Actualmente vivo en Buenos Aires (Argentina) y me encuentro trabajando para Integrity Seguros como Analista Programador Junior.">
      <main className={styles.centro}>
        <Hello />
      </main>
    </Layout>
  );
}
