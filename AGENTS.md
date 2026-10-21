# 1 AGENTS.md

Repositorio construido para servir de base para projetos: as pastas com `AGEBTS.md` e `.cursor/` existem para ser alterados com base nas specs.

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

## configuração de ambiente

1. Ler a spec em `specs/`.
2. Ler a definiçao dos `AGENTS.md`.
3. editar o minimo dos `AGENT.md` conforme sua funcionalidade descrita e demanda do projeto
3. Implementar, comparar, refatorar, medir coverage.
4. Parar quando o agente representar sua funcionalidade.

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

## Comclusão

apos concluir a criaçao dos AGENTES, altere aste arquivo com base nas definiçoes seguintes...

```markdown
# AGENTS.md

## Projeto
O que é, para quem, e o que está fora do escopo.

## Mapa
- `api/` — ver `api/AGENTS.md`
- `web/` — ver `web/AGENTS.md`

## Regras de negócio
Invariantes e vocabulário do domínio.

## Verificar
- Testes: `…`
- Lint: `…`
- Coverage: `…`
Pronto = testes passando e coverage no limite do projeto.

## Convenções
Commits, PRs, tamanho de arquivo, o que pedir confirmação antes de fazer.
```