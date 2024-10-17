```bash
# executar o projeto local (visualizar storybook com hot reload)
# na raiz do projeto
$ npm run dev

# buildar o projeto
# na raiz do projeto
$ npm run build

# rodar lint
# no package desejado
$ npm run lint

# Deployar storybook
# Atualizar a branch main

# Atualizar o pacote npm fluxo com CI/CD
$ npm run changeset # Verificar os pacotes que foram alterados e que devem ser publicados isso irá gerar um arquivo de summary em `.changeset` você pode escolher se a alteração é major, minor...
$ npm run version-packages
# Agora basta atualizar a main com essas alterações ou rodar
$ npm run release # obs: lembrar de estar logado com a conta do npm
```