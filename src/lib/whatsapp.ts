export function whatsappUrl(message: string) { return `https://wa.me/5581999073191?text=${encodeURIComponent(message)}`; }
export function localDate(now = new Date()) { return new Intl.DateTimeFormat('en-CA', {timeZone:'America/Recife',year:'numeric',month:'2-digit',day:'2-digit'}).format(now); }
export function validateInquiry(date: string, guests: string, today = localDate()) {
  if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date)) || new Date(`${date}T12:00:00Z`).toISOString().slice(0,10) !== date || date < today)) return 'Informe uma data válida a partir de hoje.';
  if (guests && (!/^\d+$/.test(guests) || !Number.isSafeInteger(Number(guests)) || Number(guests) < 1)) return 'Informe uma quantidade inteira de convidados maior que zero.';
  return '';
}
export function inquiryMessage(type: string, date: string, guests: string) {
  const formatted = date ? date.split('-').reverse().join('/') : '';
  return `Olá! Gostaria de consultar a Casa Viva para ${type}${formatted ? ` no dia ${formatted}` : ''}${guests ? `, com aproximadamente ${Number(guests)} convidados` : ''}. Gostaria de saber sobre valores e disponibilidade.`;
}
