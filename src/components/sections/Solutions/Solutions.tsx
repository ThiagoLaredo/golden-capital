'use client';
import { useLanguage } from '../../../contexts/LanguageContext';
import { pt, en } from '../../../lib/translations';
import { useFadeInStagger } from '../../../hooks/useFadeInStagger';
import styles from './Solutions.module.css';

// Importando ícones semelhantes do FontAwesome
import { 
  FaPuzzlePiece,      // Para fa-puzzle
  FaChartPie,         // Para fa-piechart  
  FaChessKnight,       // Para fa-strategy (aproximação)
  FaChartLine         // Para fa-linegraph
} from 'react-icons/fa';

export default function Solutions() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  
  // Ícones do FontAwesome
  const solutionIcons = [
    <FaPuzzlePiece key="puzzle" size="3em" />,
    <FaChartPie key="piechart" size="3em" />,
    <FaChessKnight key="strategy" size="3em" />,
    <FaChartLine key="linegraph" size="3em" />
  ];

  // Animação para o grid
  const gridRef = useFadeInStagger({
    delay: 0.2,
    stagger: 0.15,
    y: 30
  });

  return (
    <section className={styles.solutions}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            {translations.Home.solutions.title}
          </h2>
        </div>

        <div ref={gridRef} className={styles.solutionsGrid}>
          {translations.Home.solutions.items.map((solution, index) => (
            <div key={index} className={styles.solutionItem}>
              {/* Ícone do FontAwesome */}
              <div className={styles.solutionIcon}>
                {solutionIcons[index]}
              </div>
              
              <div className={styles.solutionContent}>
                <h3 className={styles.cardTitle}>
                  {solution.title}
                </h3>
                <p className={styles.cardDescription}>
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}