# Gerenciador de Vídeos

Este é um gerenciador de vídeos desenvolvido como parte de um projeto de estudo. O projeto utiliza um banco de dados PostgreSQL para armazenar os dados dos vídeos. Antes de executar o projeto, certifique-se de configurar suas variáveis de ambiente para se conectar ao banco de dados. Siga as instruções abaixo para configurar suas variáveis de ambiente:

1. Crie um arquivo chamado `.env` na raiz do projeto.
2. Adicione as seguintes variáveis de ambiente ao arquivo `.env`, substituindo os valores de exemplo pelos valores de sua configuração do PostgreSQL:
   
   ```plaintext
   PGHOST=seu_host
   PGDATABASE=seu_banco_de_dados
   PGUSER=seu_usuario
   PGPASSWORD=sua_senha
   ENDPOINT_ID=seu_endpoint_id
   ```

Certifique-se de que o PostgreSQL esteja instalado e em execução em sua máquina antes de prosseguir.

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

### `npm start`

Inicia o aplicativo em produção.

### `npm run dev`

Inicia o aplicativo em modo de desenvolvimento. O aplicativo será recarregado automaticamente sempre que houver alterações nos arquivos do projeto.

### `npm run initDatabase`

Configura as tabelas necessárias no banco de dados PostgreSQL para que o projeto funcione corretamente.

## Estrutura do Vídeo

Cada vídeo possui os seguintes campos:

- **Título:** O título do vídeo.
- **Descrição:** Uma breve descrição do conteúdo do vídeo.
- **Duração:** A duração do vídeo em segundos.
- **ID:** Um identificador único atribuído automaticamente pelo banco de dados.

## Rotas Disponíveis

O projeto disponibiliza as seguintes rotas para gerenciamento de vídeos:

- **GET `/videos`:** Lista todos os vídeos.
- **POST `/videos`:** Cria um novo vídeo.
- **PUT `/videos/:id`:** Atualiza os dados de um vídeo existente.
- **DELETE `/videos/:id`:** Exclui um vídeo existente.

> Os dados devem ser enviados no formato JSON. Um exemplo de JSON válido para rotas de criação e update está abaixo.

```json
  {
    "title": "Exemplo de Vídeo",
    "description": "Este é um exemplo de descrição para um vídeo.",
    "duration": 120
  }
  ```