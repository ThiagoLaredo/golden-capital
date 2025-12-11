'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
import { teamMembers } from '@/lib/team-data';
import TeamCard from '@/components/sections/TeamCard/TeamCard';
import styles from './EquipePage.module.css';

export default function EquipePage() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const dict = translations.TeamPage;

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
      <section className={styles.equipeHero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.mainTitle}>{dict.hero.title}</h1>
            <h2 className={styles.mainStatement}>{dict.hero.subtitle}</h2>
            <p className={styles.heroDescription}>{dict.hero.description}</p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className={styles.equipeGrid}>
        <div className={styles.container}>
          <div className={styles.grid}>
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