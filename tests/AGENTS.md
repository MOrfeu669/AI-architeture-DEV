# Testes

Cole em `tests/AGENTS.md`, ou na pasta da suíte. Vale para escrever e rodar teste. O `AGENTS.md` da raiz continua valendo para o resto do repositório.

## Escopo

Suíte automatizada: unidade, integração e ponta a ponta.

O teste descreve o comportamento esperado. A implementação mora na pasta do código (`backend/`, `frontend/`).

## Mapa

- `<tests/unit>` — regra pura, sem I/O
- `<tests/integration>` — banco, fila ou HTTP interno
- `<tests/e2e>` — fluxo de ponta a ponta
- Nome do arquivo: `<espelha o módulo>` + `<sufixo>`

## O que cada teste cobre

- Um comportamento por caso. O nome diz a condição e o resultado.
- Unidade: entrada, saída e erro de domínio.
- Integração: persistência, transação e contrato HTTP.
- Ponta a ponta: o fluxo principal e um caminho de falha visível.
- Caso novo nasce junto com a mudança. Caso quebrado fica vermelho até o comportamento voltar.

## Como escrever

1. Nomear o comportamento antes de escrever a asserção.
2. Montar só o estado que o caso precisa. Dados compartilhados ficam em `<factory | fixture>`.
3. Integração usa `<banco de teste | container>`. Unidade usa dublê só na borda externa.
4. Asserção compara o resultado observável: retorno, estado persistido ou resposta HTTP.
5. Deixar o teste independente de ordem, relógio real e rede externa.

## Verificar

- Suíte inteira: `<comando>`
- Uma pasta: `<comando>`
- Um caso: `<comando -t nome>`
- Coverage: `<comando>` — mínimo `<n>%` em `<pastas incluídas>`

Pronto quando o caso novo passa, a suíte relacionada fica verde e o coverage permanece no mínimo.

## Antes de agir

Confirmar no chat antes de apagar caso, baixar o mínimo de coverage ou apontar teste para serviço externo real.

Credencial, dado pessoal e segredo de produção ficam fora de fixture e de snapshot.
