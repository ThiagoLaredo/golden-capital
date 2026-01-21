// src/app/noticias/layout.tsx
import './layout.module.css';

export const metadata = {
  title: 'Notícias | Golden Capital Partners',
  description: 'Acompanhe as últimas notícias e comunicados da Golden Capital Partners.',
};

export default function NoticiasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // Apenas retorna os children, sem wrapper extra
}