import { ArrowUpRight, MessageCircle } from 'lucide-react';

import { site } from '../../config/site';
import { mapEmbed, mapsUrl } from '../../lib/maps';
import { whatsappUrl } from '../../lib/whatsapp';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { EventInquiry } from '../forms/EventInquiry';
import styles from './Sections.module.css';
export function ContactLocation(){return <section id="localizacao" className={styles.contact}><div className="container"><Reveal className={styles.contactGrid}><div><span className="eyebrow">04 / PERTO DE VOCÊ</span><h2>Venha conhecer seu próximo cenário de <em>celebração.</em></h2><address className={styles.address}><strong>Casa Viva — Espaço para Eventos</strong><span>{site.address}<br/>{site.neighborhood}<br/>CEP {site.postalCode}</span></address><div className={styles.contactLinks}><a href={whatsappUrl(site.messages.budget)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/>{site.phone}<ArrowUpRight size={15}/></a><a href={site.facebook} target="_blank" rel="noopener noreferrer">facebook.com/eventos.casaviva<ArrowUpRight size={15}/></a></div><div className={styles.contactActions}><Button href={whatsappUrl(site.messages.budget)} external>Solicitar orçamento</Button><Button href={whatsappUrl(site.messages.visit)} variant="outline" external>Agendar uma visita</Button></div></div><div className={styles.mapPanel}><iframe title="Localização da Casa Viva em Parnamirim, Recife" src={mapEmbed} loading="eager" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.mapRoute}>Traçar rota <ArrowUpRight size={17}/></a></div></Reveal><Reveal><EventInquiry/></Reveal></div></section>;}
