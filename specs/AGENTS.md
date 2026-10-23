# Specs

Cole em `specs/AGENTS.md`. Vale para esta pasta. O `AGENTS.md` da raiz continua valendo para o resto do repositório.

Aqui a metodologia é SDD (Spec-Driven Development), na fase **Spec**. O agente escreve e fecha a especificação. Plano, tarefas e código vêm depois, em outro passo.

## Escopo

Uma pasta por funcionalidade:

```text
specs/<funcionalidade>/
  spec.md
  checklists/requirements.md
```

`spec.md` é a fonte do que o usuário precisa e por quê. Stakeholder não técnico consegue ler o arquivo inteiro.

## Mapa da spec

Seções obrigatórias de `spec.md`:

1. **Contexto** — problema, quem usa, resultado esperado.
2. **Cenários** — histórias independentes, em ordem de valor.
3. **Casos de borda** — limite, vazio, falha visível, concorrência.
4. **Requisitos funcionais** — `FR-001`, `FR-002`, … com MUST.
5. **Entidades** — substantivos do domínio e o que o usuário reconhece neles.
6. **Critérios de sucesso** — `SC-001`, … métrica observável, sem tecnologia.
7. **Escopo e premissas** — o que entra, o que fica para outra spec, o que se assume.

## Como escrever

1. Partir do pedido do usuário. Onde faltar decisão, marcar `[NEEDS CLARIFICATION: pergunta objetiva]` e seguir. A spec só fecha quando esses marcadores saem, com resposta explícita.
2. Cada história leva prioridade `P1`, `P2`, `P3`. `P1` sozinha já entrega um fluxo útil.
3. Cada história declara o teste independente: ação única e valor que ela entrega.
4. Aceite em **Given / When / Then**. Um comportamento por cenário.
5. Requisito testável e sem ambiguidade. Um `FR` corresponde a pelo menos um cenário.
6. Critério de sucesso mede resultado de negócio: tempo, taxa, estado observável. Stack, endpoint, tabela e estrutura de código ficam fora da spec e entram na fase de plano.
7. Caso de borda vira cenário ou requisito. Premissa não vira requisito escondido.
8. Manter `spec.md` até ~200 linhas. Acima de ~300, dividir em outra funcionalidade.

### História

```markdown
### História 1 — <título> (Prioridade: P1)

<jornada em linguagem simples>

**Por que esta prioridade**: <valor>
**Teste independente**: <ação> entrega <valor> sem as outras histórias.

**Cenários de aceite**:

1. **Given** <estado>, **When** <ação>, **Then** <resultado observável>
```

### Requisito e sucesso

```markdown
- **FR-001**: O sistema MUST <capacidade verificável>
- **SC-001**: <métrica> atinge <limite> em <condição>
```

## Verificar

Gerar `checklists/requirements.md` e marcar item por item:

- Seções obrigatórias preenchidas
- Foco em valor de negócio, legível por quem não implementa
- Cenários cobrem o fluxo principal e os casos de borda
- Cada `FR` tem aceite; cada `SC` é mensurável
- Escopo, dependências e premissas explícitos
- Nenhum `[NEEDS CLARIFICATION]` restante
- Nenhum detalhe de stack, API ou estrutura de código

Pronto quando o checklist fecha e a pessoa no chat confirma a spec. A fase seguinte é o plano, fora deste arquivo.

## Antes de agir

Confirmar no chat antes de marcar a spec como pronta com marcador aberto, ou antes de alterar escopo de uma spec já confirmada.
