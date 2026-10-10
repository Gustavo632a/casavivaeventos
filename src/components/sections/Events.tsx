import { ArrowUpRight } from 'lucide-react';
import { events } from '../../data/events';
import { whatsappUrl } from '../../lib/whatsapp';
import { Photo } from '../ui/Photo';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './Sections.module.css';
export function Events(){return <section id="eventos" className="section container"><Reveal><SectionHeading eyebrow="01 / CADA OCASIÃO, UMA HISTÓRIA" title="Um cenário para momentos que importam." description="Conheça algumas das celebrações que podem encontrar seu lugar na Casa Viva."/></Reveal><div className={styles.eventsGrid}>{events.map((event,index)=><Reveal key={event.title} className={`${styles.event} ${index<2?styles.featuredEvent:styles.smallEvent}`}>{index<2&&<div className={styles.eventPhoto}><Photo alt="" label={index===0?'Celebrar o amor':'Comemorar a vida'}/></div>}<div className={styles.eventCopy}><span className={styles.number}>{event.number}</span><h3>{event.title}</h3><p>{event.description}</p><a href={whatsappUrl(`Olá! Conheci a Casa Viva pelo site e gostaria de consultar valores e disponibilidade para ${event.inquiry}.`)} target="_blank" rel="noopener noreferrer" className={styles.textLink}>Consultar evento <ArrowUpRight size={16}/></a></div></Reveal>)}</div></section>;}
