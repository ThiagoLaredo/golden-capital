// src/components/sections/PageHeaderSection/PageHeaderSection.tsx
'use client';

import { useSimpleFadeIn } from '@/hooks/useSimpleFadeIn'; // Hook modificado
import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb';
import styles from './PageHeaderSection.module.css';

interface PageHeaderSectionProps {
  title: string;
  breadcrumbItems?: Array<{ label: string; href: string; active?: boolean }>;
  showBreadcrumb?: boolean;
  titleRef?: React.RefObject<HTMLHeadingElement>;
}

export default function PageHeaderSection({ 
  title, 
  breadcrumbItems, 
  showBreadcrumb = true,
  titleRef: externalRef
}: PageHeaderSectionProps) {
  // Usar o novo hook sem ScrollTrigger
  const internalRef = useSimpleFadeIn({ delay: 0.1, y: 20 });
  const titleRef = externalRef || internalRef;

  return (
    <section className={styles.pageHeader}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.headerLeft}>
            <h1 ref={titleRef} className={styles.pageTitle}>{title}</h1>
          </div>
          {showBreadcrumb && breadcrumbItems && breadcrumbItems.length > 0 && (
            <div className={styles.headerRight}>
              <Breadcrumb items={breadcrumbItems} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}