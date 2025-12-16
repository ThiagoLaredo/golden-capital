'use client';

import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import styles from './Breadcrumb.module.css';

interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`${styles.breadcrumb} ${className}`} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        {items.map((item, index) => (
          <li key={item.href} className={styles.breadcrumbItem}>
            {index > 0 && (
              <span className={styles.separator}>
                <FaChevronRight size={12} />
              </span>
            )}
            
            {item.active ? (
              <span className={styles.activeItem} aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}