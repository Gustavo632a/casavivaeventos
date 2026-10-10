import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './Lightbox.module.css';
export function ImageLightbox({images,index,onClose,onChange}:{images:{src:string;alt:string;label:string}[];index:number;onClose:()=>void;onChange:(index:number)=>void}){
 const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{const previous=document.activeElement as HTMLElement;dialog.current?.showModal();const overflow=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=overflow;previous?.focus();};},[]);
 const change=(delta:number)=>onChange((index+delta+images.length)%images.length);
 return <dialog ref={dialog} className={styles.dialog} aria-label="Galeria de fotografias da Casa Viva" onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose();}} onKeyDown={e=>{if(e.key==='ArrowLeft'){e.preventDefault();change(-1);}if(e.key==='ArrowRight'){e.preventDefault();change(1);}}}><button autoFocus className={styles.close} onClick={onClose} aria-label="Fechar galeria"><X/></button><img src={images[index].src} alt={images[index].alt}/><div className={styles.controls}><button onClick={()=>change(-1)} aria-label="Fotografia anterior"><ChevronLeft/></button><p aria-live="polite">{images[index].label} · {index+1} / {images.length}</p><button onClick={()=>change(1)} aria-label="Próxima fotografia"><ChevronRight/></button></div></dialog>;
}
