// 

// src/app/contato/page.tsx
'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
import PageHeaderSection from '@/components/sections/PageHeaderSection/PageHeaderSection';
import { FaPhone } from 'react-icons/fa';
import styles from './ContatoPage.module.css';

export default function ContatoPage() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const dict = translations.ContactPage || {};
  const formRef = useRef<HTMLFormElement>(null);

  // Estado do envio
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Manipulador de envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    if (!formRef.current) return;

    try {
      // Criar FormData a partir do formulário
      const formData = new FormData(formRef.current);
      
      // Adicionar form-name se não estiver presente
      if (!formData.get('form-name')) {
        formData.append('form-name', 'contato-golden-capital');
      }

      // NOVO: Envio para o endpoint do Netlify Forms Runtime
      const response = await fetch('/.netlify/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        // Sucesso
        setStatus('success');
        setStatusMessage(dict.form?.successMessage || 'Mensagem enviada com sucesso! Em breve entraremos em contato.');

        // Reset do formulário
        formRef.current.reset();

        // Limpar mensagem após 5 segundos
        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        const text = await response.text();
        console.error('Erro na resposta:', text);
        setStatus('error');
        setStatusMessage(dict.form?.errorMessage || 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
      setStatusMessage(dict.form?.errorMessage || 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
    }
  };

  return (
    <div className={styles.contatoPage}>
      {/* Page Header Section */}
      <PageHeaderSection 
        title={dict.hero?.title || 'Contato'}
        breadcrumbItems={[
          { label: translations.Navigation.home, href: '/' },
          { label: translations.Navigation.contact, href: '/contato', active: true }
        ]}
      />

      {/* Mapa + Form Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            {/* Mapa */}
            <div className={styles.mapContainer}>
              <div className={styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14625.102985209553!2d-46.6806807!3d-23.5944417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeef30c38f1bb6e71!2sGolden%20Capital%20Partners!5e0!3m2!1sen!2sbr!4v1673547845618!5m2!1sen!2sbr"
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
              <div className={styles.introContainer}>
                <h2 className={styles.introTitle}>
                  {dict.intro?.title || 'Entre em contato'}
                </h2>
                <h3 className={styles.introSubtitle}>
                  {dict.intro?.address || 'Av. Brigadeiro Faria Lima, 4300'}
                </h3>
                <p 
                  className={styles.introAddress}
                  dangerouslySetInnerHTML={{
                    __html: dict.intro?.addressDetails || 'Edifício Offices | 3º andar - 316<br />São Paulo/SP - CEP 04538-132'
                  }}
                />
                
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

                {/* Formulário NOVO FORMATO */}
                <form 
                  ref={formRef}
                  className={styles.contactForm}
                  name="contato-golden-capital"
                  method="POST"
                  // REMOVA data-netlify="true" - não é mais necessário
                  // Mantenha apenas o honeypot
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {/* Campo oculto para Netlify Forms Runtime */}
                  <input type="hidden" name="form-name" value="contato-golden-capital" />
                  
                  {/* Honeypot field - mantenha escondido */}
                  <div style={{ display: 'none' }}>
                    <label>
                      Não preencha este campo: <input name="bot-field" />
                    </label>
                  </div>

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

                  {/* Mensagem de status */}
                  {statusMessage && (
                    <div className={`${styles.statusMessage} ${
                      status === 'success' ? styles.success : styles.error
                    }`}>
                      {statusMessage}
                    </div>
                  )}

                  {/* Botão de envio */}
                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' 
                      ? (dict.form?.sending || 'Enviando...') 
                      : (dict.form?.submit || 'Enviar mensagem')
                    }
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