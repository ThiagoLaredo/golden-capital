// src/app/cases/page.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
import { casesData } from '@/lib/cases-data';
import PageHeaderSection from '@/components/sections/PageHeaderSection/PageHeaderSection'; // Importar o componente
import CaseCard from '@/components/sections/Cases/CaseCard';
import { useFadeIn } from '@/hooks/useFadeIn';
import { formatText } from '@/utils/FormattedText/formatText';
import styles from './CasesPage.module.css';

export default function CasesPage() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const dict = translations.CasesPage;
  
  // Filtrar cases por categoria
  const selectedCases = casesData.filter(caseItem => caseItem.category === 'selected');
  const portfolioCases = casesData.filter(caseItem => caseItem.category === 'portfolio');
  
  // Referências para animação (remover titleRef pois agora está no componente)
  const introRef = useFadeIn({ delay: 0.3, y: 30 });
  const selectedTitleRef = useFadeIn({ delay: 0.4, y: 20 });
  const selectedGridRef = useFadeIn({ delay: 0.5, y: 30 });
  const portfolioTitleRef = useFadeIn({ delay: 0.6, y: 20 });
  const portfolioGridRef = useFadeIn({ delay: 0.7, y: 30 });

  return (
    <div className={styles.casesPage}>
      {/* Page Header Section - Substituir a Hero Section */}
      <PageHeaderSection 
        title={dict.hero.title}
        breadcrumbItems={[
          { label: translations.Navigation.home, href: '/' },
          { label: translations.Navigation.cases, href: '/cases', active: true }
        ]}
      />

      {/* Seção Selecionados */}
      <section className={styles.selectedSection}>
        <div className={styles.container}>
          <div ref={selectedTitleRef} className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{dict.categories.selectedOperations.title}</h2>
            <p className={styles.sectionSubtitle}>
              {formatText(dict.categories.selectedOperations.description)}
            </p>
          </div>
          
          <div ref={selectedGridRef} className={styles.grid}>
            {selectedCases.map((caseItem) => (
              <CaseCard
                key={caseItem.id}
                caseItem={caseItem}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Portfólio */}
      <section className={styles.portfolioSection}>
        <div className={styles.container}>
          <div ref={portfolioTitleRef} className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{dict.categories.portfolio.title}</h2>
            <p className={styles.sectionSubtitle}>
              {formatText(dict.categories.portfolio.description)}
            </p>
          </div>
          
          <div ref={portfolioGridRef} className={styles.grid}>
            {portfolioCases.map((caseItem) => (
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