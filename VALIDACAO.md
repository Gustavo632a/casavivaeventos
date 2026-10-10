# Verificação da entrega

- Dependências instaladas; auditoria npm sem vulnerabilidades no momento da instalação.
- TypeScript strict: aprovado.
- ESLint: aprovado.
- Quatro testes de lógica: aprovados (campos opcionais, datas inválidas/passadas, convidados inválidos e mensagem codificada).
- Build de produção: aprovado.
- Servidor Vite: resposta HTTP 200 em `http://127.0.0.1:5173/`.

## Verificações ainda necessárias

O navegador integrado e o Chrome conectado estavam indisponíveis. Não foi realizada inspeção visual real em 320, 375, 430, 768, 1024, 1440 ou 1920 px. Os breakpoints foram implementados, mas a validação visual, ausência de overflow, testes manuais de teclado/menu/lightbox e auditoria WCAG devem ser concluídos em navegador antes da publicação.

As fotografias oficiais não foram fornecidas; as seis posições da galeria e as composições de Hero, Eventos e Sobre usam espaços reservados identificados. Lightbox implementada, ativada apenas quando fotografias forem cadastradas. Não foi confirmado domínio real, portanto canonical e og:url dependem de `VITE_SITE_URL`. Open Graph com fotografia depende de imagem autorizada.

Nenhuma reserva, disponibilidade, preço, capacidade ou serviço incluído é inventado. A consulta abre um atendimento no WhatsApp por ação do visitante.
