
// 'use client';

// import { useState, useRef } from 'react';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { pt, en } from '@/lib/translations';
// import PageHeaderSection from '@/components/sections/PageHeaderSection/PageHeaderSection';
// import { FaPhone } from 'react-icons/fa';
// import styles from './ContatoPage.module.css';

// export default function ContatoPage() {
//   const { language } = useLanguage();
//   const translations = language === 'pt' ? pt : en;
//   const dict = translations.ContactPage || {};
//   const formRef = useRef<HTMLFormElement>(null);

//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
//   const [statusMessage, setStatusMessage] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('loading');
//     setStatusMessage('');

//     if (!formRef.current) return;

//     try {
//       const form = formRef.current;
      
//       // Método TRADICIONAL do Netlify Forms
//       const response = await fetch('/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         body: new URLSearchParams(new FormData(form) as any).toString(),
//       });

//       if (response.ok) {
//         setStatus('success');
//         setStatusMessage(dict.form?.successMessage || 'Mensagem enviada com sucesso!');
//         form.reset();
        
//         setTimeout(() => {
//           setStatus('idle');
//           setStatusMessage('');
//         }, 5000);
//       } else {
//         setStatus('error');
//         setStatusMessage(dict.form?.errorMessage || 'Erro ao enviar. Tente novamente.');
//       }
//     } catch {
//       setStatus('error');
//       setStatusMessage(dict.form?.errorMessage || 'Erro ao enviar. Tente novamente.');
//     }
//   };

//   return (
//     <div className={styles.contatoPage}>
//       <PageHeaderSection 
//         title={dict.hero?.title || 'Contato'}
//         breadcrumbItems={[
//           { label: translations.Navigation.home, href: '/' },
//           { label: translations.Navigation.contact, href: '/contato', active: true }
//         ]}
//       />

//       <section className={styles.contactSection}>
//         <div className={styles.container}>
//           <div className={styles.contactContent}>
//             <div className={styles.mapContainer}>
//               <div className={styles.mapWrapper}>
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14625.102985209553!2d-46.6806807!3d-23.5944417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeef30c38f1bb6e71!2sGolden%20Capital%20Partners!5e0!3m2!1sen!2sbr!4v1673547845618!5m2!1sen!2sbr"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Localização Golden Capital Partners"
//                 />
//               </div>
//             </div>

//             <div className={styles.rightContent}>
//               <div className={styles.introContainer}>
//                 <h2 className={styles.introTitle}>
//                   {dict.intro?.title || 'Entre em contato'}
//                 </h2>
//                 <h3 className={styles.introSubtitle}>
//                   {dict.intro?.address || 'Av. Brigadeiro Faria Lima, 4300'}
//                 </h3>
//                 <p 
//                   className={styles.introAddress}
//                   dangerouslySetInnerHTML={{
//                     __html: dict.intro?.addressDetails || 'Edifício Offices | 3º andar - 316<br />São Paulo/SP - CEP 04538-132'
//                   }}
//                 />
                
//                 <div className={styles.phoneContainer}>
//                   <FaPhone className={styles.phoneIcon} />
//                   <span className={styles.phoneNumber}>
//                     {dict.intro?.phone || '+55 (11) 3842-8522'}
//                   </span>
//                 </div>
//               </div>

//               <div className={styles.formContainer}>
//                 <div className={styles.formHeader}>
//                   <h3 className={styles.formTitle}>
//                     {dict.form?.title || 'Entre em contato com a Golden Capital Partners'}
//                   </h3>
//                   <p className={styles.formDescription}>
//                     {dict.form?.description || 'Preencha o formulário a seguir com as suas informações. Em breve retornaremos seu contato.'}
//                   </p>
//                 </div>

//                 {/* FORMULÁRIO SIMPLIFICADO */}
//                 <form 
//                   ref={formRef}
//                   className={styles.contactForm}
//                   name="contato"
//                   method="POST"
//                   data-netlify="true"
//                   data-netlify-honeypot="bot-field"
//                   onSubmit={handleSubmit}
//                 >
//                   {/* CAMPO HIDDEN OBRIGATÓRIO */}
//                   <input type="hidden" name="form-name" value="contato" />
                  
//                   {/* HONEYPOT - MANTENHA ESCONDIDO */}
//                   <div style={{ display: 'none' }}>
//                     <label>
//                       Não preencha este campo: <input name="bot-field" />
//                     </label>
//                   </div>

//                   {/* Campos do formulário */}
//                   <div className={styles.formRow}>
//                     <div className={`${styles.formGroup} ${styles.half}`}>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         className={styles.formInput}
//                         placeholder={dict.form?.namePlaceholder || 'Nome'}
//                         required
//                       />
//                     </div>
//                     <div className={`${styles.formGroup} ${styles.half}`}>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className={styles.formInput}
//                         placeholder={dict.form?.emailPlaceholder || 'E-mail'}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className={styles.formRow}>
//                     <div className={`${styles.formGroup} ${styles.half}`}>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         className={styles.formInput}
//                         placeholder={dict.form?.phonePlaceholder || 'Telefone'}
//                       />
//                     </div>
//                     <div className={`${styles.formGroup} ${styles.half}`}>
//                       <input
//                         type="text"
//                         id="company"
//                         name="company"
//                         className={styles.formInput}
//                         placeholder={dict.form?.companyPlaceholder || 'Empresa'}
//                       />
//                     </div>
//                   </div>

//                   <div className={styles.formGroup}>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={4}
//                       className={styles.formTextarea}
//                       placeholder={dict.form?.messagePlaceholder || 'Mensagem'}
//                       required
//                     />
//                   </div>

//                   {statusMessage && (
//                     <div className={`${styles.statusMessage} ${
//                       status === 'success' ? styles.success : styles.error
//                     }`}>
//                       {statusMessage}
//                     </div>
//                   )}

//                   <button 
//                     type="submit" 
//                     className={styles.submitButton}
//                     disabled={status === 'loading'}
//                   >
//                     {status === 'loading' 
//                       ? (dict.form?.sending || 'Enviando...') 
//                       : (dict.form?.submit || 'Enviar mensagem')
//                     }
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// src/app/contato/page.tsx - VERSÃO CORRIGIDA
'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { pt, en } from '@/lib/translations';
import PageHeaderSection from '@/components/sections/PageHeaderSection/PageHeaderSection';
import { FaPhone } from 'react-icons/fa';
import styles from './ContatoPage.module.css';

export default function ContatoPage() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const dict = translations.ContactPage || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

// src/app/contato/page.tsx
// APENAS substitua a função handleSubmit por ESTA:

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');
  setStatusMessage('Enviando mensagem...');

  try {
    // ENDPOINT FORMSPREE - JÁ PRONTO PARA USAR
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqobawv';
    
    console.log('📤 Enviando para Formspree:', FORMSPREE_ENDPOINT);
    console.log('📝 Dados:', formData);

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Campos para o email
        _subject: `📞 Novo contato - Golden Capital: ${formData.name}`,
        _replyto: formData.email,
        _cc: 'olatuthinking@gmail.com', // Você recebe cópia
        
        // Campos do formulário
        nome: formData.name,
        email: formData.email,
        telefone: formData.phone || 'Não informado',
        empresa: formData.company || 'Não informado',
        mensagem: formData.message,
        
        // Metadados
        origem: 'Site Golden Capital',
        data: new Date().toLocaleString('pt-BR'),
      }),
    });

    console.log('✅ Resposta Formspree - Status:', response.status);

    if (response.ok) {
      // SUCESSO TOTAL
      setStatus('success');
      setStatusMessage('✅ Mensagem enviada com sucesso! Em breve entraremos em contato.');
      
      // Reset do formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

      // Mensagem extra no console
      console.log('🎉 FORMULÁRIO ENVIADO COM SUCESSO!');
      console.log('📧 Verifique seu email: olatuthinking@gmail.com');
      console.log('📊 Painel Formspree: https://formspree.io/forms/mqkrnqwy/submissions');

    } else {
      // Erro do Formspree
      const errorData = await response.json();
      console.error('❌ Erro Formspree:', errorData);
      
      setStatus('error');
      setStatusMessage('❌ Erro ao enviar. Por favor, tente novamente.');
    }

  } catch (error) {
    // Erro de rede
    console.error('❌ Erro de rede:', error);
    
    setStatus('error');
    setStatusMessage('❌ Erro de conexão. Por favor, ligue para (11) 3842-8522');
  }
};

  return (
    <div className={styles.contatoPage}>
      <PageHeaderSection 
        title={dict.hero?.title || 'Contato'}
        breadcrumbItems={[
          { label: translations.Navigation.home, href: '/' },
          { label: translations.Navigation.contact, href: '/contato', active: true }
        ]}
      />

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
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

            <div className={styles.rightContent}>
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
                
                <div className={styles.phoneContainer}>
                  <FaPhone className={styles.phoneIcon} />
                  <span className={styles.phoneNumber}>
                    {dict.intro?.phone || '+55 (11) 3842-8522'}
                  </span>
                </div>
              </div>

              <div className={styles.formContainer}>
                <div className={styles.formHeader}>
                  <h3 className={styles.formTitle}>
                    {dict.form?.title || 'Entre em contato com a Golden Capital Partners'}
                  </h3>
                  <p className={styles.formDescription}>
                    {dict.form?.description || 'Preencha o formulário a seguir com as suas informações. Em breve retornaremos seu contato.'}
                  </p>
                </div>

                {/* FORMULÁRIO REACT CONTROLADO */}
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formRow}>
                    <div className={`${styles.formGroup} ${styles.half}`}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder={dict.form?.emailPlaceholder || 'E-mail'}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={`${styles.formGroup} ${styles.half}`}>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder={dict.form?.phonePlaceholder || 'Telefone'}
                      />
                    </div>
                    <div className={`${styles.formGroup} ${styles.half}`}>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder={dict.form?.companyPlaceholder || 'Empresa'}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={styles.formTextarea}
                      placeholder={dict.form?.messagePlaceholder || 'Mensagem'}
                      required
                    />
                  </div>

                  {statusMessage && (
                    <div className={`${styles.statusMessage} ${
                      status === 'success' ? styles.success : styles.error
                    }`}>
                      {statusMessage}
                    </div>
                  )}

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