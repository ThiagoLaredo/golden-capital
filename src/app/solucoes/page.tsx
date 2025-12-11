'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
import { 
  FaChartLine, 
  FaSyncAlt, 
  FaHandshake, 
  FaBuilding,
  FaChevronRight
} from 'react-icons/fa';
import Image from 'next/image';
import StatsSection from '@/components/sections/Stats/StatsSection';
import styles from './SolucoesPage.module.css';

export default function SolucoesPage() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const dict = translations.SolutionsPage;
  
  const [activeSolution, setActiveSolution] = useState<string>('estruturação');
  const detalhesRef = useRef<HTMLDivElement>(null);

  const solutionsData = [
    {
      id: 'estruturação',
      icon: <FaChartLine />,
      color: 'var(--secondary-color)',
      image: '/images/solucoes/estruturacao.jpg',
      ...dict.solutions.estruturação
    },
    {
      id: 'reestruturação',
      icon: <FaSyncAlt />,
      color: 'var(--secondary-color)',
      image: '/images/solucoes/reestruturacao.jpg',
      ...dict.solutions.reestruturação
    },
    {
      id: 'fusaoAquisicao',
      icon: <FaHandshake />,
      color: 'var(--secondary-color)',
      image: '/images/solucoes/fusao-aquisicao.jpg',
      ...dict.solutions.fusaoAquisicao
    },
    {
      id: 'realEstate',
      icon: <FaBuilding />,
      color: 'var(--secondary-color)',
      image: '/images/solucoes/real-estate.jpg',
      ...dict.solutions.realEstate
    }
  ];

  const selectedSolution = solutionsData.find(s => s.id === activeSolution);

  const handleCardClick = (solutionId: string) => {
    setActiveSolution(solutionId);
    if (detalhesRef.current) {
      detalhesRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <div className={styles.solucoesPage}>
      {/* Hero Section */}
      <section className={styles.solucoesHero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.mainTitle}>{dict.hero.title}</h1>
            <h2 className={styles.mainStatement}>{dict.hero.subtitle}</h2>
            <p className={styles.heroDescription}>{dict.hero.description}</p>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className={styles.solucoesNavegacao}>
        <div className={styles.container}>
          <div className={styles.navCards}>
            {solutionsData.map((solution) => (
              <button
                key={solution.id}
                className={`${styles.navCard} ${activeSolution === solution.id ? styles.active : ''}`}
                onClick={() => handleCardClick(solution.id)}
                style={{ '--card-color': solution.color } as React.CSSProperties}
              >
                <div className={styles.navCardIcon}>{solution.icon}</div>
                <h3 className={styles.cardTitle}>{solution.title}</h3>
                <p className={styles.cardDescription}>{solution.description}</p>
                <div className={styles.navCardIndicator}>
                  <FaChevronRight />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Details - Card Único */}
      <section ref={detalhesRef} className={styles.solucaoDetalhes}>
        <div className={styles.container}>
          <div className={styles.detalhesUnicoCard}>
            {/* Left Column: Icon, Title and List */}
            <div className={styles.detalhesConteudo}>
              <div className={styles.listaHeader}>
                {/* <div className={styles.listaIcon} style={{ color: selectedSolution?.color }}>
                  {selectedSolution?.icon}
                </div> */}
                <h3 className={styles.solutionTitle}>{selectedSolution?.title}</h3>
              </div>
              
              <ul className={styles.servicosLista}>
                {selectedSolution?.items.map((item: string, index: number) => (
                  <li key={index}>
                    <FaChevronRight className={styles.itemIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className={styles.ctaButton}>
                {dict.details.ctaButton}
                <FaChevronRight />
              </button>
            </div>

            {/* Right Column: Image with filter */}
            <div className={styles.detalhesImagem}>
              <div className={styles.imageContainer}>
                {selectedSolution?.image ? (
                  <div className={styles.realImageWrapper}>
                    <div className={styles.imageFilter}></div>
                    <Image
                      src={selectedSolution.image}
                      alt={selectedSolution.title}
                      width={600}
                      height={500}
                      className={styles.realImage}
                      priority={activeSolution === 'estruturação'}
                    />
                  </div>
                ) : (
                  <div 
                    className={styles.imagePlaceholder}
                    style={{ 
                      background: `linear-gradient(135deg, ${selectedSolution?.color}10 0%, ${selectedSolution?.color}20 100%)`,
                      border: `1px solid ${selectedSolution?.color}20`
                    }}
                  >
                    <div className={styles.imageContent}>
                      <div className={styles.imageIcon} style={{ color: selectedSolution?.color }}>
                        {selectedSolution?.icon}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={dict.stats} />
    </div>
  );
}