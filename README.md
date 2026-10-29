# Portfolio

Projeto com React, JavaScript, Vite e Tailwind CSS.

## Desenvolvimento

```sh
npm.cmd install
npm.cmd run dev
```

Abra o endereço local exibido pelo Vite. Edite `src/App.jsx` para alterar a tela e use as classes do Tailwind diretamente no JSX.

## Verificação e produção

```sh
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

A compilação de produção fica em `dist/`.

## Projetos

A seção fica em `src/Sections/Projects/Projects.jsx`, depois de Skills. Altere o array `projects` para trocar imagens, nomes e links (`href`). As imagens desktop e mobile podem ser alteradas separadamente. O segundo painel usa `#14192C`.

O scroll suave usa Lenis em `src/components/ui/smooth-scroll.tsx`; a sobreposição usa `position: sticky` no CSS da seção. Cada painel ocupa uma tela, permitindo que o próximo suba sobre o anterior.

Os estilos globais ficam em `src/index.css` e `src/App.css`, e os estilos de cada seção ficam ao lado do componente. Tailwind já está configurado. O Vite aceita JSX e TSX; TypeScript e os tipos de React estão incluídos para componentes novos.

O projeto ainda não foi inicializado pelo shadcn CLI. A pasta `src/components/ui` guarda componentes reutilizáveis, seguindo a convenção do shadcn para facilitar futuras integrações. Se desejar adicionar o restante da estrutura shadcn, execute `npx shadcn@latest init` e selecione o CSS global `src/index.css` e o diretório `src/components/ui`.

No PowerShell, use `npm.cmd` caso a política de execução bloqueie `npm.ps1`.


