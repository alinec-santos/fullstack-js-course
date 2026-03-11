# Gerenciador de Tarefas (CLI)

## Descrição

Este projeto é um gerenciador de tarefas simples executado pelo terminal.  
Ele permite adicionar, listar, marcar como concluída e remover tarefas.

As tarefas são armazenadas em um arquivo JSON, permitindo que os dados permaneçam salvos mesmo após o programa ser encerrado.

O objetivo do projeto é praticar conceitos fundamentais de JavaScript aplicados em um ambiente de execução Node.js.

## Estrutura do Projeto

project2/

app.js  
Responsável por executar o sistema e interpretar os comandos digitados no terminal.

tasks.js  
Contém a lógica das tarefas (adicionar, listar, atualizar e remover).

storage.js  
Simula um banco de dados e gerencia a leitura e escrita no arquivo JSON.

tasks.json  
Arquivo onde as tarefas são armazenadas.

## Funcionalidades

- Adicionar tarefas
- Listar tarefas
- Marcar tarefa como concluída
- Remover tarefas
- Persistência de dados em arquivo JSON

## Tecnologias Utilizadas

JavaScript  
Node.js (ambiente de execução)  
Módulo File System (fs)

## Como Executar o Projeto

Abra o terminal na pasta do projeto e execute os comandos abaixo.

Listar tarefas:

node app.js list

Adicionar uma tarefa:

node app.js add "Nome da tarefa"

Marcar tarefa como concluída:

node app.js done "Nome da tarefa"

Remover uma tarefa:

node app.js remove "Nome da tarefa"

## Exemplo de Uso

node app.js add "Estudar JavaScript"

node app.js list

node app.js done "Estudar JavaScript"

node app.js remove "Estudar JavaScript"

## Objetivos de Aprendizado

Este projeto foi desenvolvido para praticar:

- Organização de código em múltiplos arquivos
- Uso de módulos em JavaScript
- Manipulação de arquivos com o módulo fs
- Uso de Promises e async/await
- Criação de aplicações de linha de comando
- Persistência de dados utilizando JSON