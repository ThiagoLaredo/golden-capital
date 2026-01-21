// src/app/diferenciais/page.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
import PageHeaderSection from '@/components/sections/PageHeaderSection/PageHeaderSection'; // Importar o componente
import { useFadeIn } from '@/hooks/useFadeIn';
import { formatMarkdownText } from '@/utils/FormattedText/formatText';
import { 
  FaUserTie, 
  FaBullseye, 
  FaGraduationCap, 
  FaGlobeAmericas,
  FaHandshake
} from 'react-icons/fa';
import styles from './DiferenciaisPage.module.css';

export default function DiferenciaisPage() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const dict = translations.DifferentialsPage;

  // Referências para animação (remover titleRef)
  const introRef = useFadeIn({ delay: 0.3, y: 30 });
  const gridRef = useFadeIn({ delay: 0.5, y: 30 });

  const differentialsData = [
    {
      id: 'acesso',
      icon: <FaUserTie />,
      color: 'var(--secondary-color)',
      title: dict.differentials.acesso.title,
      subtitle: dict.differentials.acesso.subtitle,
      description: dict.differentials.acesso.description
    },
    {
      id: 'abordagem',
      icon: <FaBullseye />,
      color: 'var(--secondary-color)',
      title: dict.differentials.abordagem.title,
      subtitle: dict.differentials.abordagem.subtitle,
      description: dict.differentials.abordagem.description
    },
    {
      id: 'conhecimento',
      icon: <FaGraduationCap />,
      color: 'var(--secondary-color)',
      title: dict.differentials.conhecimento.title,
      subtitle: dict.differentials.conhecimento.subtitle,
      description: dict.differentials.conhecimento.description
    },
    {
      id: 'expertise',
      icon: <FaGlobeAmericas />,
      color: 'var(--secondary-color)',
      title: dict.differentials.expertise.title,
      subtitle: dict.differentials.expertise.subtitle,
      description: dict.differentials.expertise.description
    },
    {
      id: 'comprometimento',
      icon: <FaHandshake />,
      color: 'var(--secondary-color)',
      title: dict.differentials.comprometimento.title,
      subtitle: dict.differentials.comprometimento.subtitle,
      description: dict.differentials.comprometimento.description
    }
  ];

  return (
    <div className={styles.diferenciaisPage}>
      {/* Page Header Section - Substituir a Hero Section */}
      <PageHeaderSection 
        title={dict.hero.title}
        breadcrumbItems={[
          { label: translations.Navigation.home, href: '/' },
          { label: translations.Navigation.differentials, href: '/diferenciais', active: true }
        ]}
      />

      {/* Introdução Section - Adicionada para seguir o padrão */}
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

      {/* Differentials Grid */}
      <section className={styles.diferenciaisGrid}>
        <div className={styles.container}>
          <div ref={gridRef} className={styles.grid}>
            {differentialsData.map((differential) => (
            <div key={differential.id} className={styles.differentialCard}>
              <div className={styles.cardIcon} style={{ color: differential.color }}>
                {differential.icon}
              </div>
              
              <div className={styles.textContent}>
                <h3 className={styles.cardTitle}>{differential.title}</h3>
                
                {differential.subtitle && (
                  <p className={styles.cardSubtitle}>{differential.subtitle}</p>
                )}
                
                <p className={styles.cardDescription}>{differential.description}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}