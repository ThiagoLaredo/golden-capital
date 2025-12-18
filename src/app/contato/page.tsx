'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb';
import { useFadeIn } from '@/hooks/useFadeIn';
import { formatText } from '@/utils/FormattedText/formatText'; // Importe a função
import { FaPhone } from 'react-icons/fa';
import styles from './ContatoPage.module.css';

export default function ContatoPage() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const dict = translations.ContactPage || {};

  // Referências para animação
  const titleRef = useFadeIn({ delay: 0.1, y: 20 });
  const introRef = useFadeIn({ delay: 0.3, y: 30 });
  const contentRef = useFadeIn({ delay: 0.5, y: 30 });

  return (
    <div className={styles.contatoPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <h1 ref={titleRef} className={styles.pageTitle}>
                {dict.hero?.title || 'Contato'}
              </h1>
            </div>
            <div className={styles.heroRight}>
              <Breadcrumb 
                items={[
                  { label: translations.Navigation.home, href: '/' },
                  { label: translations.Navigation.contact, href: '/contato', active: true }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mapa + Form Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div ref={contentRef} className={styles.contactContent}>
            {/* Mapa */}
            <div className={styles.mapContainer}>
              <div className={styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.581175232894!2d-46.68355722468203!3d-23.587448861342297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5744e0ebff5b%3A0x769bf4a32f914782!2sAv.%20Brigadeiro%20Faria%20Lima%2C%204300%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004538-132!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Golden Capital Partners"
                />
              </div>
            </div>

            {/* Conteúdo Direito - Intro + Form */}
            <div className={styles.rightContent}>
              {/* Introdução */}
              <div ref={introRef} className={styles.introContainer}>
                <h2 className={styles.introTitle}>
                  {dict.intro?.title || 'Entre em contato'}
                </h2>
                <h3 className={styles.introSubtitle}>
                  {formatText(dict.intro?.address || '**Av. Brigadeiro Faria Lima, 4300**')}
                </h3>
                <p className={styles.introAddress}>
                  {dict.intro?.addressDetails || 'Edifício Offices | 3º andar - 316<br />São Paulo/SP - CEP 04538-132'}
                </p>
                
                {/* Lista de telefone com ícone */}
                <div className={styles.phoneContainer}>
                  <FaPhone className={styles.phoneIcon} />
                  <span className={styles.phoneNumber}>
                    {dict.intro?.phone || '+55 (11) 3842-8522'}
                  </span>
                </div>
              </div>

              {/* Formulário */}
              <div className={styles.formContainer}>
                <div className={styles.formHeader}>
                  <h3 className={styles.formTitle}>
                    {dict.form?.title || 'Entre em contato com a Golden Capital Partners'}
                  </h3>
                  <p className={styles.formDescription}>
                    {dict.form?.description || 'Preencha o formulário a seguir com as suas informações. Em breve retornaremos seu contato.'}
                  </p>
                </div>

                <form className={styles.contactForm}>
                  {/* Primeira linha: Nome e Email */}
                  <div className={styles.formRow}>
                    <div className={`${styles.formGroup} ${styles.half}`}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={styles.formInput}
                        placeholder={dict.form?.namePlaceholder || 'Nome'}
                        required
                      />
                    </div>
                    <div className={`${styles.formGroup} ${styles.half}`}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={styles.formInput}
                        placeholder={dict.form?.emailPlaceholder || 'E-mail'}
                        required
                      />
                    </div>
                  </div>

                  {/* Segunda linha: Telefone e Empresa */}
                  <div className={styles.formRow}>
                    <div className={`${styles.formGroup} ${styles.half}`}>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={styles.formInput}
                        placeholder={dict.form?.phonePlaceholder || 'Telefone'}
                      />
                    </div>
                    <div className={`${styles.formGroup} ${styles.half}`}>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className={styles.formInput}
                        placeholder={dict.form?.companyPlaceholder || 'Empresa'}
                      />
                    </div>
                  </div>

                  {/* Assunto - linha completa */}
                  <div className={styles.formGroup}>
                    {/* <select id="subject" name="subject" className={styles.formSelect} required>
                      <option value="" disabled selected>
                        {dict.form?.subjectPlaceholder || 'Assunto'}
                      </option>
                      <option value="estruturacao">{dict.solutions?.estruturação?.title || 'Estruturação de Capitais'}</option>
                      <option value="reestruturacao">{dict.solutions?.reestruturação?.title || 'Reestruturação Financeira'}</option>
                      <option value="fusao">{dict.solutions?.fusaoAquisicao?.title || 'Fusões & Aquisições'}</option>
                      <option value="realestate">{dict.solutions?.realEstate?.title || 'Real Estate'}</option>
                      <option value="outro">{dict.form?.other || 'Outro'}</option>
                    </select> */}
                  </div>

                  {/* Mensagem - linha completa */}
                  <div className={styles.formGroup}>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={styles.formTextarea}
                      placeholder={dict.form?.messagePlaceholder || 'Mensagem'}
                      required
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    {dict.form?.submit || 'Enviar mensagem'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}