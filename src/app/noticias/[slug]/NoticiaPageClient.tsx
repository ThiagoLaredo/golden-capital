// src/app/noticias/[slug]/NoticiaPageClient.tsx
'use client';

import { useState, useEffect } from 'react';
import PageHeaderSection from '@/components/sections/PageHeaderSection/PageHeaderSection';
import { formatText } from '@/utils/FormattedText/formatText';
import { getNewsBySlug } from '@/lib/news-data';
import styles from './page.module.css';
import Image from 'next/image';
import { Image as ImageIcon } from 'lucide-react';

interface NoticiaPageClientProps {
  slug: string;
}

export default function NoticiaPageClient({ slug }: NoticiaPageClientProps) {
  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    try {
      const newsItem = getNewsBySlug(slug);
      if (!newsItem) {
        setError('Notícia não encontrada');
      } else {
        setNews(newsItem);
      }
    } catch (err) {
      console.error('Erro ao carregar notícia:', err);
      setError('Erro ao carregar notícia');
    } finally {
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}>Carregando notícia...</div>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className={styles.notFound}>
        <h2>{error || 'Notícia não encontrada'}</h2>
        <p>A notícia que você está procurando não existe ou não pôde ser carregada.</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const formattedContent = formatText(news.content);

  return (
    <div className={styles.noticiaPage}>
      {/* Page Header Section */}
      <PageHeaderSection 
        title={news.title}
        breadcrumbItems={[
          { label: 'Início', href: '/' },
          { label: 'Notícias', href: '/noticias' },
          { label: news.title, href: `/noticias/${news.slug}`, active: true }
        ]}
      />

      {/* Conteúdo da Notícia */}
      <section className={styles.articleSection}>
        <div className={styles.container}>
          <article className={styles.article}>
            {/* Imagem com fallback */}
            {news.image && !imageError ? (
              <div className={styles.articleImage}>
                <Image
                  src={news.image}
                  alt={news.title}
                  width={1200}
                  height={600}
                  className={styles.image}
                  priority
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div className={styles.articleImageFallback}>
                <ImageIcon size={64} />
                <span>Imagem da notícia</span>
              </div>
            )}

            {/* Conteúdo formatado */}
            <div className={styles.articleContent}>
              {/* Título da notícia (repetido antes do conteúdo) */}
              <h1 className={styles.articleTitle}>{news.title}</h1>
              
              {/* Metadados (data e autor) */}
              <div className={styles.articleMeta}>
                <time dateTime={news.date} className={styles.articleDate}>
                  Publicado em {formatDate(news.date)}
                </time>
                {news.author && (
                  <span className={styles.articleAuthor}>Autor: {news.author}</span>
                )}
              </div>
              
              {/* Conteúdo da notícia */}
              <div className={styles.articleText}>
                <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}