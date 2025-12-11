'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
import { casesData } from '@/lib/cases-data';
import CaseCard from '@/components/sections/Cases/CaseCard';
import styles from './CasesPage.module.css';

type FilterType = 'all' | 'selected' | 'portfolio';

export default function CasesPage() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const dict = translations.CasesPage;
  
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [headerHeight, setHeaderHeight] = useState(80);

  // Filtrar cases baseado no filtro ativo
  const filteredCases = casesData.filter(caseItem => {
    if (activeFilter === 'all') return true;
    return caseItem.category === activeFilter;
  });

  return (
    <div className={styles.casesPage}>
      {/* Hero Section */}
      <section 
        className={styles.casesHero}
      >
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.mainTitle}>{dict.hero.title}</h1>
            <h2 className={styles.mainStatement}>{dict.hero.subtitle}</h2>
            <p className={styles.heroDescription}>{dict.hero.description}</p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.casesFilter}>
        <div className={styles.container}>
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              {dict.filters.all}
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'selected' ? styles.active : ''}`}
              onClick={() => setActiveFilter('selected')}
            >
              {dict.filters.selectedOperations}
            </button>
            <button
              className={`${styles.filterButton} ${activeFilter === 'portfolio' ? styles.active : ''}`}
              onClick={() => setActiveFilter('portfolio')}
            >
              {dict.filters.portfolio}
            </button>
          </div>

          {/* Category Description */}
          <div className={styles.categoryDescription}>
            {activeFilter === 'selected' && (
              <>
                <h3 className={styles.categoryTitle}>{dict.categories.selectedOperations.title}</h3>
                <p className={styles.categoryText}>{dict.categories.selectedOperations.description}</p>
              </>
            )}
            {activeFilter === 'portfolio' && (
              <>
                <h3 className={styles.categoryTitle}>{dict.categories.portfolio.title}</h3>
                <p className={styles.categoryText}>{dict.categories.portfolio.description}</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className={styles.casesGrid}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {filteredCases.map((caseItem) => (
              <CaseCard
                key={caseItem.id}
                caseItem={caseItem}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}