# Casa Viva

Landing page em React 19, TypeScript strict, Vite, CSS Modules e Lucide. Navegação responsiva, revelação por IntersectionObserver, consulta sem armazenamento de dados e WhatsApp com mensagens contextualizadas.

## Executar

```bash
npm install
npm run dev
```

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Fotografias e identidade

**A versão atual usa composições tipográficas e espaços reservados identificados.** Não apresenta fotografias de terceiros como sendo da Casa Viva. As seis fotografias oficiais e a imagem principal não foram fornecidas. Configure `src/data/gallery.ts` com arquivos WebP autorizados em `public/images/`. A lightbox se habilita automaticamente para fotos cadastradas. Substitua a composição do Hero por uma fotografia oficial com `fetchPriority="high"`, dimensões explícitas e texto alternativo; faça o mesmo para os espaços reservados de Eventos e Sobre. Não publique até substituir as imagens e verificar a autorização de uso.

O arquivo `references/entrada-referencia.webp` é uma referência pública da entrada encontrada em https://portaldocasamento.com.br/fornecedores/perfil/casa-viva-espaco-para-eventos-e6de5d04. **Não está exibido no site e não é incluído no build**; a licença não foi confirmada. A logo fornecida pelo usuário está aplicada no header e rodapé; o favicon tipográfico é provisório.

## Produção

Configure `VITE_SITE_URL` em `.env.local` com o domínio real. Hospede `dist/` com HTTPS. O canonical e `og:url` são definidos apenas se há domínio configurado. Antes de divulgar, adicione `og:image` com uma fotografia autorizada e URL absoluta, e valide o compartilhamento nas redes sociais. Para SEO sem depender de execução de JavaScript, materialize canonical e JSON-LD no HTML no pipeline de hospedagem ou adote prerenderização.

As fontes Inter e Cormorant Garamond são servidas localmente em WOFF2 via Fontsource com `font-display: swap`, sem requisições externas para fontes.

Configure no provedor os headers (CSP de produção; o Vite dev usa regras diferentes):

```text
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src https://maps.google.com https://www.google.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'none'; upgrade-insecure-requests
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Habilite HSTS somente após verificar HTTPS em todos os subdomínios. O mapa carrega automaticamente junto do site. O formulário abre o WhatsApp por ação do visitante e não confirma reservas, capacidade ou disponibilidade. Não há analytics, backend ou persistência de dados pessoais.
