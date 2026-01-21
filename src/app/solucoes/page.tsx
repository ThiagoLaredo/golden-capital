// src/app/solucoes/page.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
import PageHeaderSection from '@/components/sections/PageHeaderSection/PageHeaderSection'; // Importar o componente
import SolutionList from '@/components/sections/SolutionList/SolutionList';
import DetailedSolution from '@/components/sections/DetailedSolution/DetailedSolution';
import { formatMarkdownText } from '@/utils/FormattedText/formatText';
import { useFadeIn } from '@/hooks/useFadeIn';
import styles from './SolucoesPage.module.css';

export default function SolucoesPage() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const dict = translations.SolutionsPage;

  // Referências para animação (remover titleRef)
  const introRef = useFadeIn({ delay: 0.3, y: 30 });
  const solutionsListRef = useFadeIn({ delay: 0.5, y: 30 });

  // Dados das soluções
  const solutionsData = [
    {
      id: 1,
      icon: 'puzzle',
      title: dict.solutions.estruturação.title,
      description: dict.solutions.estruturação.description,
      items: dict.solutions.estruturação.items || [],
      image: '/images/solucoes/estruturacao.jpg'
    },
    {
      id: 2,
      icon: 'piechart',
      title: dict.solutions.reestruturação.title,
      description: dict.solutions.reestruturação.description,
      items: dict.solutions.reestruturação.items || [],
      image: '/images/solucoes/reestruturacao.jpg'
    },
    {
      id: 3,
      icon: 'strategy',
      title: dict.solutions.fusaoAquisicao.title,
      description: dict.solutions.fusaoAquisicao.description,
      items: dict.solutions.fusaoAquisicao.items || [],
      image: '/images/solucoes/fusao-aquisicao.jpg'
    },
    {
      id: 4,
      icon: 'linegraph',
      title: dict.solutions.realEstate.title,
      description: dict.solutions.realEstate.description,
      items: dict.solutions.realEstate.items || [],
      image: '/images/solucoes/real-estate.jpg'
    }
  ];

  return (
    <div className={styles.solucoesPage}>
      {/* Page Header Section - Substituir a Hero Section */}
      <PageHeaderSection 
        title={dict.hero.title}
        breadcrumbItems={[
          { label: translations.Navigation.home, href: '/' },
          { label: translations.Navigation.solutions, href: '/solucoes', active: true }
        ]}
      />

      {/* Seção de Introdução - COM ANIMAÇÃO */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div ref={introRef} className={styles.introContent}>
            <h2 className={styles.introTitle}>{dict.intro.title}</h2>
            <h3 
              className={styles.introSubtitle}
              dangerouslySetInnerHTML={{ __html: formatMarkdownText(dict.intro.subtitle) }}
            />
            <p 
              className={styles.introDescription}
              dangerouslySetInnerHTML={{ __html: formatMarkdownText(dict.intro.description) }}
            />
          </div>
        </div>
      </section>

      {/* Lista de Soluções - COM ANIMAÇÃO */}
      <section className={styles.solutionsListSection}>
        <div className={styles.container}>
          <div ref={solutionsListRef}>
            <SolutionList solutions={solutionsData} />
          </div>
        </div>
      </section>

      {/* Seção Detalhada de Cada Solução */}
      <section className={styles.detailedSolutions}>
        <div className={styles.container}>
          {solutionsData.map((solution, index) => (
            <DetailedSolution
              key={solution.id}
              solution={solution}
              index={index + 1}
              reverse={index % 2 !== 0}
              image={solution.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}