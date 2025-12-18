'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
import { casesData } from '@/lib/cases-data';
import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb';
import CaseCard from '@/components/sections/Cases/CaseCard';
import { useFadeIn } from '@/hooks/useFadeIn';
import { formatText } from '@/utils/FormattedText/formatText'; // Importe a função
import styles from './CasesPage.module.css';

type FilterType = 'all' | 'selected' | 'portfolio';

export default function CasesPage() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const dict = translations.CasesPage;
  
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  
  // Referências para animação
  const titleRef = useFadeIn({ delay: 0.1, y: 20 });
  const introRef = useFadeIn({ delay: 0.3, y: 30 });
  const filterRef = useFadeIn({ delay: 0.4, y: 30 });
  const gridRef = useFadeIn({ delay: 0.5, y: 30 });

  // Filtrar cases baseado no filtro ativo
  const filteredCases = casesData.filter(caseItem => {
    if (activeFilter === 'all') return true;
    return caseItem.category === activeFilter;
  });

  return (
    <div className={styles.casesPage}>
      {/* Hero Section - Mesmo padrão das outras páginas */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <h1 ref={titleRef} className={styles.pageTitle}>{dict.hero.title}</h1>
            </div>
            <div className={styles.heroRight}>
              <Breadcrumb 
                items={[
                  { label: translations.Navigation.home, href: '/' },
                  { label: translations.Navigation.cases, href: '/cases', active: true }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introdução Section - Seguindo o mesmo padrão */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div ref={introRef} className={styles.introContent}>
            <h2 className={styles.introTitle}>{dict.hero.subtitle}</h2>
            <h3 className={styles.introSubtitle}>
              {formatText(dict.hero.description)}
            </h3>
            {/* Se houver uma descrição adicional, você pode adicionar aqui */}
            {/* <p className={styles.introDescription}>
              {formatText(dict.intro.description)}
            </p> */}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section ref={filterRef} className={styles.casesFilter}>
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
          <div ref={gridRef} className={styles.grid}>
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