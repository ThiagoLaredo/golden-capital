'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
import { teamMembers } from '@/lib/team-data';
import TeamCard from '@/components/sections/TeamCard/TeamCard';
import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb';
import { useFadeIn } from '@/hooks/useFadeIn';
import { formatText } from '@/utils/FormattedText/formatText'; // Importe a função
import styles from './EquipePage.module.css';

export default function EquipePage() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const dict = translations.TeamPage;

  // Referências para animação
  const titleRef = useFadeIn({ delay: 0.1, y: 20 });
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
      {/* Hero Section */}
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
                  { label: translations.Navigation.team, href: '/equipe', active: true }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introdução Section */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div ref={introRef} className={styles.introContent}>
            <h2 className={styles.introTitle}>{dict.intro.title}</h2>
            <h3 className={styles.introSubtitle}>
              {/* Use a função formatText aqui */}
              {formatText(dict.intro.subtitle)}
            </h3>
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