# Backend

Cole em `backend/AGENTS.md`. Vale para esta pasta. O `AGENTS.md` da raiz continua valendo para o resto do repositório.

## Escopo

API, domínio, persistência e integrações deste serviço.

Contrato público: `<OpenAPI | rotas | eventos>`.

## Mapa

- `<src/domain>` — regras de negócio
- `<src/http>` — rotas, autenticação e validação de entrada
- `<src/infra>` — banco e clientes externos
- `<testes>` — suíte desta pasta; detalhe em `tests/AGENTS.md`

## Regras de negócio

- `<invariante 1>`
- `<invariante 2>`
- Vocabulário: `<termo do domínio>` = `<definição>`

## Como implementar

1. Ler o contrato e o caso de uso antes de criar arquivo.
2. Colocar a regra no domínio. A rota traduz HTTP e chama o caso de uso.
3. Validar na borda. O domínio recebe dados já válidos.
4. Escrita persiste em `<transação>` e devolve o recurso já consistente.
5. Entrada inválida responde `<400 + formato de erro>`. Falha de autorização responde `<401 | 403>`.
6. Falha de integração vira erro de aplicação, com a causa original preservada.
7. Manter cada arquivo até ~200 linhas. Acima de ~300, dividir por caso de uso.

## Verificar

- Suíte desta pasta: `<comando>`
- Um caso: `<comando -t nome>`
- Lint e tipos: `<comando>`
- Coverage: `<comando>` — mínimo `<n>%`

Pronto quando o caso de uso tem teste, a suíte desta pasta passa e o coverage permanece no mínimo.

## Antes de agir

Confirmar no chat antes de mudar schema, migration ou contrato público.

Segredos, credenciais e dados reais ficam fora do código e do diff.
