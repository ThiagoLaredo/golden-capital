// src/app/equipe/page.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
import { teamMembers } from '@/lib/team-data';
import PageHeaderSection from '@/components/sections/PageHeaderSection/PageHeaderSection'; // Importar o componente
import TeamCard from '@/components/sections/TeamCard/TeamCard';
import { useFadeIn } from '@/hooks/useFadeIn';
import { formatMarkdownText } from '@/utils/FormattedText/formatText';
import styles from './EquipePage.module.css';

export default function EquipePage() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const dict = translations.TeamPage;

  // Referências para animação (remover titleRef)
  const introRef = useFadeIn({ delay: 0.3, y: 30 });
  const gridRef = useFadeIn({ delay: 0.5, y: 30 });

  // Função para obter o membro na língua correta
  const getTranslatedMember = (member: typeof teamMembers[0]) => {
    return {
      id: member.id,
      name: member.name[language],
      role: member.role[language],
      photo: member.photo,
      companies: member.companies,
      shortBio: member.shortBio[language],
      fullBio: member.fullBio[language],
      linkedin: member.linkedin,
      email: member.email
    };
  };

  return (
    <div className={styles.equipePage}>
      {/* Page Header Section - Substituir a Hero Section */}
      <PageHeaderSection 
        title={dict.hero.title}
        breadcrumbItems={[
          { label: translations.Navigation.home, href: '/' },
          { label: translations.Navigation.team, href: '/equipe', active: true }
        ]}
      />

      {/* Introdução Section */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div ref={introRef} className={styles.introContent}>
            <h2 className={styles.introTitle}>{dict.intro.title}</h2>
           <h3 
  className={styles.introSubtitle}
  dangerouslySetInnerHTML={{ __html: formatMarkdownText(dict.intro.subtitle) }}
/>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className={styles.equipeGrid}>
        <div className={styles.container}>
          <div ref={gridRef} className={styles.grid}>
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                member={getTranslatedMember(member)}
                translations={dict.teamCard}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}