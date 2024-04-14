---
type: page
title: Demo
date: 2024-04-01
---

# Demo

```ansi
[0m [0;32m✓[0m [0;2msrc/[0mindex[0;2m.test.ts (1)[0m
  [0;2m Test Files [0m [0;1;32m1 passed[0;98m (1)[0m
  [0;2m      Tests [0m [0;1;32m1 passed[0;98m (1)[0m
  [0;2m   Start at [0m 23:32:41
  [0;2m   Duration [0m 11ms
  [42;1;39;0m PASS [0;32m Waiting for file changes...[0m
         [0;2mpress [0;1mh[0;2m to show help, press [0;1mq[0;2m to quit
```


## Mermaid

https://nextra.site/docs/guide/advanced/mermaid

```mermaid
graph TD;
subgraph AA [Consumers]
A[Mobile app];
B[Web app];
C[Node.js client];
end
subgraph BB [Services]
E[REST API];
F[GraphQL API];
G[SOAP API];
H[MTOP API];
end
Z[GraphQL API];
A --> Z;
B --> Z;
C --> Z;
Z --> E;
Z --> F;
Z --> G;
Z --> H;
```

## LaTex

https://nextra.site/docs/guide/advanced/latex

The **Pythagorean equation**: $a=\sqrt{b^2 + c^2}$.
