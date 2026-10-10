import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './UI.module.css';
export function Button({href,children,variant='primary',external=false}:{href:string;children:ReactNode;variant?:'primary'|'outline'|'light';external?:boolean}){return <a className={`${styles.button} ${styles[variant]}`} href={href} {...(external?{target:'_blank',rel:'noopener noreferrer'}:{})}>{children}<ArrowUpRight size={17} aria-hidden="true"/></a>;}
