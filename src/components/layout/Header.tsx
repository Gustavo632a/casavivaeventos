import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation, site } from '../../config/site';
import { whatsappUrl } from '../../lib/whatsapp';
import { Button } from '../ui/Button';
import styles from './Layout.module.css';
export function Header(){
 const [scrolled,setScrolled]=useState(false);const [open,setOpen]=useState(false);const toggle=useRef<HTMLButtonElement>(null);const header=useRef<HTMLElement>(null);
 useEffect(()=>{const scroll=()=>setScrolled(window.scrollY>30);scroll();window.addEventListener('scroll',scroll,{passive:true});return()=>window.removeEventListener('scroll',scroll);},[]);
 useEffect(()=>{if(!open)return;const close=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);toggle.current?.focus();}};const outside=(event:PointerEvent)=>{if(!header.current?.contains(event.target as Node))setOpen(false);};document.addEventListener('keydown',close);document.addEventListener('pointerdown',outside);return()=>{document.removeEventListener('keydown',close);document.removeEventListener('pointerdown',outside);};},[open]);
 return <header ref={header} className={`${styles.header} ${scrolled||open?styles.scrolled:''}`}><a href="#inicio" aria-label="Casa Viva — início" className={styles.brand}><span className={styles.logo}><img src="/images/logo-casa-viva.png" alt="" width="234" height="245"/></span><span className={styles.brandName}>Casa Viva<span>ESPAÇO PARA EVENTOS</span></span></a><button ref={toggle} className={styles.toggle} aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="main-menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav id="main-menu" aria-label="Navegação principal" className={`${styles.nav} ${open?styles.open:''}`}>{navigation.map(link=><a key={link.href} href={link.href} onClick={()=>setOpen(false)}>{link.label}</a>)}<Button href={whatsappUrl(site.messages.budget)} external>Solicitar orçamento</Button></nav></header>;
}
