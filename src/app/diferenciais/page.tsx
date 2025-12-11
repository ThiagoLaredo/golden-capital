'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
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
      {/* Hero Section */}
      <section className={styles.diferenciaisHero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.mainTitle}>{dict.hero.title}</h1>
            <p className={styles.heroDescription}>{dict.hero.description}</p>
          </div>
        </div>
      </section>

      {/* Differentials Grid */}
      <section className={styles.diferenciaisGrid}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {differentialsData.map((differential) => (
              <div 
                key={differential.id} 
                className={styles.differentialCard}
              >
                <div className={styles.cardIcon} style={{ color: differential.color }}>
                  {differential.icon}
                </div>
                
                <h3 className={styles.cardTitle}>{differential.title}</h3>
                
                {differential.subtitle && (
                  <p className={styles.cardSubtitle}>{differential.subtitle}</p>
                )}
                
                <p className={styles.cardDescription}>{differential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}