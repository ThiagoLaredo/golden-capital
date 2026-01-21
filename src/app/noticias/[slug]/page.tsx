// src/app/noticias/[slug]/page.tsx
import { Metadata } from 'next';
import NoticiaPageClient from './NoticiaPageClient';
import { getNewsBySlug } from '@/lib/news-data';

interface NoticiaPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: NoticiaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const news = getNewsBySlug(slug);
  
  if (!news) {
    return {
      title: 'Notícia não encontrada',
    };
  }
  
  return {
    title: `${news.title} | Golden Capital Partners`,
    description: news.excerpt,
  };
}

export default async function NoticiaPage({ params }: NoticiaPageProps) {
  const { slug } = await params;
  return <NoticiaPageClient slug={slug} />;
}