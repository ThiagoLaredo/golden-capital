'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './CaseCard.module.css';

interface CaseCardProps {
  caseItem: {
    id: string;
    category: 'selected' | 'portfolio';
    logo: string;
    name: string;           // Agora é string simples
    value?: string;         // Agora é string simples  
    serviceType: string;    // Agora é string simples
    description?: {         // Mantemos tradução apenas aqui
      pt: string;
      en: string;
    };
    year?: string;
  };
  language: 'pt' | 'en';
}

export default function CaseCard({ caseItem, language }: CaseCardProps) {
  const isSelected = caseItem.category === 'selected';
  const [imageError, setImageError] = useState(false);
  
  // Prioridade fixa para primeiros cases
  const priorityIds = ['sistac', 'credz', 'weclix', 'allon', 'morena'];
  const isPriority = priorityIds.includes(caseItem.id);

  return (
    <div className={`${styles.caseCard} ${isSelected ? styles.selected : styles.portfolio}`}>
      {/* Logo */}
      <div className={styles.cardLogo}>
        <Image
          src={caseItem.logo}
          alt={`${caseItem.name} - ${caseItem.serviceType}`}
          width={480}
          height={240}
          className={styles.logoImage}
          quality={85}
          priority={isPriority}
          loading={isPriority ? 'eager' : 'lazy'}
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 240px"
          onError={() => setImageError(true)}
        />
      </div>

      {/* Conteúdo */}
      <div className={styles.cardContent}>

        {/* Nome */}
        <h3 className={styles.cardName}>{caseItem.name}</h3>

        {/* Valor em destaque */}
        {caseItem.value && (
          <div className={styles.cardValue}>
            <span className={styles.valueAmount}>{caseItem.value}</span>
          </div>
        )}

        {/* Tipo de serviço */}
        <div className={styles.cardServiceType}>
          {caseItem.serviceType}
        </div>

        {/* Descrição (apenas selecionadas) - agora usa language */}
        {isSelected && caseItem.description && (
          <div className={styles.cardDescription}>
            {caseItem.description[language]}
          </div>
        )}

        {/* Ano (apenas selecionadas) */}
        {isSelected && caseItem.year && (
          <div className={styles.cardYear}>
            <span className={styles.yearBadge}>{caseItem.year}</span>
          </div>
        )}
      </div>

    </div>
  );
}