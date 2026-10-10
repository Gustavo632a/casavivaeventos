import { Leaf, MapPin, Sparkles } from 'lucide-react';
import { Photo } from '../ui/Photo';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { site } from '../../config/site';
import { whatsappUrl } from '../../lib/whatsapp';
import styles from './Sections.module.css';
export function About(){return <section id="sobre" className={styles.about}><div className={`container ${styles.aboutGrid}`}><Reveal className={styles.aboutVisual}><Photo label="Um lugar para estar junto" alt=""/><span className={styles.aboutSeal}>ENCONTROS QUE<br/><em>ficam na memória.</em></span></Reveal><Reveal className={styles.aboutCopy}><span className="eyebrow">02 / A ESSÊNCIA CASA VIVA</span><h2>Mais do que um espaço. Um lugar para <em>viver histórias.</em></h2><div className={styles.fineLine}/><p>A Casa Viva oferece um ambiente para celebrar encontros, compartilhar alegrias e transformar ocasiões especiais em boas lembranças.</p><p>Cada evento tem sua própria identidade, e o espaço faz parte dessa experiência.</p><ul className={styles.attributes}><li><Leaf size={17}/>Ambientes acolhedores.</li><li><Sparkles size={17}/>Espaços para celebrações.</li><li><MapPin size={17}/>Localização em Recife.</li></ul><Button href={whatsappUrl(site.messages.availability)} external>Conhecer disponibilidade</Button></Reveal></div></section>;}
