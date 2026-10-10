import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '../../config/site';
import { whatsappUrl } from '../../lib/whatsapp';
import styles from './UI.module.css';
export function WhatsAppButton(){const [hidden,setHidden]=useState(false);useEffect(()=>{const el=document.getElementById('localizacao');if(!el)return;const observer=new IntersectionObserver(([entry])=>setHidden(entry.isIntersecting));observer.observe(el);return()=>observer.disconnect();},[]);return hidden?null:<a href={whatsappUrl(site.messages.availability)} target="_blank" rel="noopener noreferrer" className={styles.float} aria-label="Consultar disponibilidade pelo WhatsApp"><MessageCircle size={25}/></a>;}
