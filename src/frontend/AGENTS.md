# Frontend

Cole em `frontend/AGENTS.md`. Vale para esta pasta. O `AGENTS.md` da raiz continua valendo para o resto do repositório.

## Escopo

Interface, estado de tela e acesso à API neste cliente.

Contrato consumido: `<cliente HTTP | tipos gerados | OpenAPI>`.

## Mapa

- `<src/pages>` — rotas e telas
- `<src/components>` — componentes reutilizáveis
- `<src/state>` — estado de cliente
- `<src/api>` — chamadas ao backend, sem regra de negócio
- `<testes>` — suíte desta pasta; detalhe em `tests/AGENTS.md`

## Regras de interface

- `<fluxo principal>` termina em `<estado visível de sucesso>`.
- Erro de API aparece como `<mensagem | estado vazio | retry>`.
- Texto, rótulo e foco seguem `<guia de acessibilidade>`.
- Vocabulário de tela usa os mesmos termos do domínio: `<termo>` = `<definição>`.

## Como implementar

1. Ler a tela e o contrato da API antes de criar componente.
2. Estado de servidor fica na camada de dados. Estado de UI fica no componente que o usa.
3. Componente recebe dados já prontos para renderizar. Formatação e cópia ficam fora da chamada HTTP.
4. Cada tela cobre carregando, vazio, erro e sucesso.
5. Interação nova tem nome acessível e foco previsível depois da ação.
6. Manter cada arquivo até ~200 linhas. Acima de ~300, extrair o bloco de UI ou o hook.

## Verificar

- Suíte desta pasta: `<comando>`
- Um caso: `<comando -t nome>`
- Lint e tipos: `<comando>`
- App no navegador: `<comando>` — percorrer o fluxo alterado até o estado final

Pronto quando o fluxo alterado tem teste, a suíte desta pasta passa e a tela mostra carregando, vazio, erro e sucesso.

## Antes de agir

Confirmar no chat antes de mudar rota pública, texto legal ou contrato com a API.

Segredos e chaves ficam em variável de ambiente, fora do código e do diff.
