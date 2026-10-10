import { useState } from 'react';
import { Expand } from 'lucide-react';
import { gallery } from '../../data/gallery';
import { Photo } from '../ui/Photo';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageLightbox } from '../ui/ImageLightbox';
import { Button } from '../ui/Button';
import { whatsappUrl } from '../../lib/whatsapp';
import styles from './Sections.module.css';
export function VenueGallery(){const [index,setIndex]=useState<number|null>(null);const photos=gallery.filter((photo):photo is typeof photo & {src:string}=>!!photo.src);return <section id="espaco" className="section container"><Reveal><SectionHeading eyebrow="03 / NOSSO ESPAÇO" title="Imagine seu evento acontecendo aqui." description="Descubra os ambientes e possibilidades da Casa Viva."/></Reveal><div className={styles.gallery}>{gallery.map(photo=><div key={photo.id} className={styles.galleryItem}>{photo.src?<button className={styles.galleryButton} onClick={()=>setIndex(photos.findIndex(item=>item.id===photo.id))} aria-label={`Ampliar: ${photo.label}`}><Photo {...photo}/><span className={styles.expand}><Expand size={19}/></span></button>:<Photo {...photo}/>}<span className={styles.galleryLabel}>{String(photo.id).padStart(2,'0')} / {photo.label}</span></div>)}</div><p className={styles.galleryNote}>Estamos preparando a seleção de fotografias oficiais. Conheça os ambientes em uma visita à Casa Viva.</p><Reveal className={styles.galleryCTA}><h3>Gostou do espaço?<br/><em>Consulte uma data para seu evento.</em></h3><Button href={whatsappUrl('Olá! Conheci a Casa Viva pelo site e gostaria de consultar uma data para meu evento.')} external>Consultar minha data</Button></Reveal>{index!==null&&<ImageLightbox images={photos} index={index} onChange={setIndex} onClose={()=>setIndex(null)}/>}</section>;}
