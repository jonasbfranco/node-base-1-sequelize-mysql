### quando baixar o projeto do git executar o comando
- pnpm install
- renomear o arquivo env.example para .env e inserir os dados nas variáveis de ambiente

### instalar sequelize
- pnpm install --save sequelize

### se for usar outro ORM e precisar desinstalar o sequelize,e xecute o comando
- pnpm uninstall --save sequelize

### instalar sequelize cli
- pnpm install --save-dev sequelize-cli

  
#### iniciar o sequelize cli
- npx sequelize-cli init

### instalar o driver do banco que sera usado
- pnpm install --save mysql2

### outros drivers de bancodedados
#### One of the following:
- pnpm install --save pg pg-hstore # Postgres
- pnpm install --save mysql2
- pnpm install --save mariadb
- pnpm install --save sqlite3
- pnpm install --save tedious # Microsoft SQL Server
- pnpm install --save oracledb # Oracle Database


### criar o banco de dados
- npx sequelize db:create

### criar as migrations (tabelas do banco de dados)
- npx sequelize migration:create --name=create-tasks

### criar as tabelas a partir da migration
- npx sequelize db:migrate