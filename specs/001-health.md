# 001 — Health check

Representativo. Existe para o fluxo orquestrado ter uma spec para ler.

## Objetivo

Expor um health check que responde que o serviço está no ar.

## Escopo

- Função `health` em `backend/src/health.ts`.
- Teste em `tests/health.test.ts`.

## Fora de escopo

- Rota HTTP, autenticação, interface.

## Critério de pronto

- O teste espera `{ status: "ok" }` e passa.
