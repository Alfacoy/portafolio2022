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
      title={`Hola Mundo`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Hello />
      </main>
    </Layout>
  );
}
