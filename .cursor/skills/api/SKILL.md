---
name: api
description: Cria ou altera endpoint HTTP com contrato, erro e teste. Use quando o pedido for rota, endpoint, API ou handler no back-end.
---

# API

1. Confirme método, caminho, entrada, saída e erro na spec.
2. Se a implementação usar Lever, consulte a doc atual no Context7 antes de escrever a chamada.
3. Coloque o handler em `backend/api/`.
4. Cubra o contrato com teste em `tests/`.
5. Pare quando o teste do contrato passar.

## Contrato

```ts
type Endpoint = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  response: unknown;
  error: { code: string; message: string };
};
```
