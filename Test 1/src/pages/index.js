import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Search documentation, tutorials, and more!"
    >
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>How can we help?</h1>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search Docs, Tutorials, etc."
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      </header>

      {/* Cards Section */}
      <section className={styles.cardsSection}>
        <h2 className={styles.sectionTitle}>Getting Started</h2>
        <div className={styles.cardsGrid}>
          {Array.from({ length: 16 }, (_, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.cardIcon}>📘</div>
              <h3 className={styles.cardTitle}>Card {i + 1}</h3>
              <p className={styles.cardDescription}>
                Description for card {i + 1}.
              </p>
              <p className={styles.cardFooter}>X articles</p>
            </div>
          ))}
        </div>
        <div className={styles.contactButtonWrapper}>
          <button className={styles.contactButton}>Contact Us</button>
        </div>
      </section>
    </Layout>
  );
}
