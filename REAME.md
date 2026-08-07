# Exercício - Sistema de Pizzaria

## Requisitos

- Node.js
- MySQL

## Instalação

1. Abra o terminal na pasta `back`.

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `.env`:

```env
DATABASE_URL="mysql://root:@localhost:3306/pizzaria"
```

4. Gere o Prisma Client:

```bash
npx prisma generate
```

5. Crie as tabelas do banco:

```bash
npx prisma migrate dev
```

## Executando o projeto

Na pasta `back`, execute:

```bash
node server.js
```

Após iniciar o servidor, abra o arquivo `front/index.html` no navegador.

## Testando

### Listar pizzas

- Abra o sistema.
- Verifique se as pizzas cadastradas aparecem na tela.

### Cadastrar pizza

- Preencha os campos:
  - Sabor
  - Preço
  - Foto
- Clique em **Cadastrar**.
- Verifique se a pizza foi adicionada à lista.

### Excluir pizza

- Clique no botão **Excluir** da pizza desejada.
- Verifique se a pizza foi removida da lista e do banco de dados.