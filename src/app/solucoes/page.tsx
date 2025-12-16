'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb';
import SolutionList from '@/components/sections/SolutionList/SolutionList';
import DetailedSolution from '@/components/sections/DetailedSolution/DetailedSolution';
import { formatText } from '@/utils/FormattedText/formatText'; // Importe a função utilitária
import styles from './SolucoesPage.module.css';

export default function SolucoesPage() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const dict = translations.SolutionsPage;

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
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <h1 className={styles.pageTitle}>{dict.hero.title}</h1>
            </div>
            <div className={styles.heroRight}>
              <Breadcrumb 
                items={[
                  { label: translations.Navigation.home, href: '/' },
                  { label: translations.Navigation.solutions, href: '/solucoes', active: true }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Introdução - AGORA COM TRADUÇÃO */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <h2 className={styles.introTitle}>{dict.intro.title}</h2>
            <h3 className={styles.introSubtitle}>
              {/* Use a função formatText aqui */}
              {formatText(dict.intro.subtitle)}
            </h3>
            <p className={styles.introDescription}>
              {/* Use a função formatText aqui também */}
              {formatText(dict.intro.description)}
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Soluções */}
      <section className={styles.solutionsListSection}>
        <div className={styles.container}>
          <SolutionList solutions={solutionsData} />
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