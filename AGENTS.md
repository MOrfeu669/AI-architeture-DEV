# AGENTS.md

Repositório representativo do ambiente descrito em `.seeds`. Não há produto aqui: as pastas existem para o agente saber onde cada peça mora.

## Onde trabalhar

| Pasta | Conteúdo |
| --- | --- |
| `.cursor/rules` | Regras por área. Só o guardrail é sempre ativo. |
| `.cursor/skills` | Skills do projeto. Mínimas. |
| `.cursor/agents` | Subagentes com ponto de parada. |
| `.cursor/mcp.json` | Context7, GitHub e Codebase Memory. |
| `specs` | Specs SDD, uma por funcionalidade. |
| `backend` | API. |
| `frontend` | Interface. |
| `tests` | Testes do fluxo. |

Índice do código (`.codebase.mcp`) é gerado pela CLI, não versionado. Pergunta estrutural ("como funciona X?") passa pelo índice antes de varrer arquivo.

## Fluxo de uma tarefa

1. Ler a spec em `specs/`.
2. Ler o `AGENTS.md` da pasta em que o arquivo será criado.
3. Implementar, testar, refatorar, medir coverage.
4. Parar quando o critério da spec passar.

## Modelo

| Uso | Modelo |
| --- | --- |
| Segurança de fluxo e produto | Fable |
| Quebrar spec e raciocínio | Opus |
| Código do dia | Sonnet |
| Ler doc ou código, spec já fechada | Haiku |

Mais effort só quando a spec pede raciocínio. Tarefa cotidiana fica no modelo do dia.

## Subagentes

Review e release notes são agentes, não skills: o critério muda com a funcionalidade. Cada um declara onde para. Worktree é um diretório Git isolado por agente; o merge volta para a branch da tarefa.
