import { Leaf } from 'lucide-react';
import styles from './UI.module.css';
export function Photo({src,alt,label,className=''}:{src?:string|null;alt:string;label:string;className?:string}){return <div className={`${styles.photo} ${className}`}>{src?<img src={src} alt={alt} loading="lazy" decoding="async" width="1200" height="900"/>:<div className={styles.placeholder}><Leaf size={32} strokeWidth={1} aria-hidden="true"/><span>{label}</span><small>Fotografia oficial em breve</small></div>}</div>;}
