export const site = {
  name: 'Casa Viva', phone: '(81) 99907-3191', whatsapp: '5581999073191',
  address: 'Rua Major Joaquim Cavalcante, 87', neighborhood: 'Parnamirim — Recife/PE', postalCode: '52060-581',
  facebook: 'https://www.facebook.com/eventos.casaviva/',
  url: import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || '',
  messages: {
    availability: 'Olá! Conheci a Casa Viva pelo site e gostaria de consultar a disponibilidade do espaço para um evento.',
    budget: 'Olá! Gostaria de consultar valores e disponibilidade da Casa Viva para um evento.',
    visit: 'Olá! Conheci a Casa Viva pelo site e gostaria de agendar uma visita para conhecer o espaço.',
  },
};
export const navigation = [{href:'#inicio',label:'Início'},{href:'#eventos',label:'Eventos'},{href:'#sobre',label:'Sobre'},{href:'#espaco',label:'Espaço'},{href:'#localizacao',label:'Localização'}];
