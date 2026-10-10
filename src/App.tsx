import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Events } from './components/sections/Events';
import { About } from './components/sections/About';
import { VenueGallery } from './components/sections/VenueGallery';
import { ContactLocation } from './components/sections/ContactLocation';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { site } from './config/site';
export default function App(){useEffect(()=>{
 const schema=document.createElement('script');schema.type='application/ld+json';schema.textContent=JSON.stringify({'@context':'https://schema.org','@type':'EventVenue',name:'Casa Viva — Espaço para Eventos',telephone:'+55-81-99907-3191',address:{'@type':'PostalAddress',streetAddress:site.address,addressLocality:'Recife',addressRegion:'PE',postalCode:site.postalCode,addressCountry:'BR'},sameAs:[site.facebook],...(site.url?{url:site.url}:{})});document.head.append(schema);
 const tags:HTMLElement[]=[];if(site.url){const canonical=document.createElement('link');canonical.rel='canonical';canonical.href=site.url;document.head.append(canonical);tags.push(canonical);const og=document.createElement('meta');og.setAttribute('property','og:url');og.content=site.url;document.head.append(og);tags.push(og);}return()=>{schema.remove();tags.forEach(tag=>tag.remove());};
 },[]);return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header/><main id="conteudo" tabIndex={-1}><Hero/><Events/><About/><VenueGallery/><ContactLocation/></main><Footer/><WhatsAppButton/></>;}
