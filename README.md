<h1 align="center">
      <a href="#" alt="Delicatesse hi-tech da Dona Maria"> 🍞 Delicatesse hi-tech da Dona Maria💻</a>
</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="">Documentação</a> •
 <a href="#-como-usar-a-API">Como usar a API</a> •
 <a href="#-teste-das-rotas">Funcionalidades</a> •  
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-agradecimentos">Agradecimentos</a> • 
 <a href="#-autores">Autores</a> • 
 <a href="#-licença">Licença</a>
</p>

<h4 align="center">
	🚧   Concluido 🚀 🚧
</h4>

## Sobre o Projeto 

<h3 align="center">
  Dando um "help" a Dona Maria, organizar os funcionarios e os produtos de forma que só os gerentes adicionem os produtos.
</h3>




## Como usar a API ❓

### Pré-requisitos ❗️

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[MongoDB](https://www.mongodb.com), [Node.js](https://nodejs.org/en/) e pode ser utilizado o [Postman](https://www.postman.com) para testar as rotas.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/ItaloDavidb/API_EMPLOYEE.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd apiDonaMaria

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000/api/v1> 
```
### 📝 Teste de rotas

### REQUEST - (POST)
> Para cadastrar funcionarios.

> POST - `http://localhost:3000/api/v1/employee`
```json
{
     "name": "Maria da Silva",
     "cpf": "12312312312",
     "office": "gerente",
     "birthday": "21/04/2021"

}
```

<p align="center">
<img width="900" src ="">
</p>

### REQUEST - (GET)

> Para listar funcionarios.

> GET - `http://localhost:3000/api/v1/emplyee`

```json
   //Exemplo de query params
{

    "name": "silva",
    "office": "gerente"

}

```

<p align="center">
<img width="900" src ="">
</p>


### REQUEST - (PUT)

> Para atualizar um funcionario.

> PUT - `http://localhost:3000/api/v1/employee/:employee_id`

```json
{
     "name": "Dona Maria",
     "situation": "deactivate"
}
```
> Situation só pode ser deactivate ou activate

<p align="center">
<img width="900" src ="">
</p>

### REQUEST - (DELETE)

> Para deletar um funcionario .

> DELETE - ` http://localhost:3000/api/v1/employee/:employee_id`

<p align="center">
<img width="900" src ="">
</p>

### REQUEST - (POST) 
> Para cadastrar um produto.

> Use: POST - ` http://localhost:3000/api/v1/product`

<p align="center">
<img width="900" src ="">
</p><br>

>Apenas Gerente ativo pode cadastrar um novo Produto

### REQUEST - (GET) 
> Para listar os produtos.

> Use: GET - ` http://localhost:3000/api/v1/product`

<p align="center">
<img width="900" src ="">
</p>



### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [mongoose](https://mongoosejs.com)
- [Node.js](https://nodejs.org/en/)
- [Postman](https://pt-br.reactjs.org/)
- [Swagger](https://swagger.io)
- [MongoDb](https://www.mongodb.com)

# 🦸Agradecimentos
 Obrigado por incentivar, por cada conselho ,"puxão de orelha" e por estar sempre por perto dando apoio e tirando todas nossas dúvidas!!

<table>
    <tr>
        <td><a href="" >Felipe Silva</td>
        <td><a href="" >Bruna Santos</td>
        <td><a href="" >Thais Nicodemus</td>
    </tr>
    <tr>
        <td><a href="" >Diego Bueno</td>
        <td><a href="" >Gabriel Missio</td>
        <td><a href="" >Giovanni Hoffmann</td>
    </tr>
</table>

# 👨‍💻Autores

  Desenvolvedores e suas respectivas funções no Projeto:
  
 
 Função | Devs 
--------|-----
P.O | [Felipe Silva]()
Scrum Master|[Matheus Moraes](https://www.linkedin.com/in/matheus-moraes-ba9020209/)
Deployer|[Rafael Tomás](https://www.linkedin.com/in/rafael-tomas-30b9671a9/)
QA|[Pedro Menezes]()
Code review|[Adson Souza](https://www.linkedin.com/in/adson-sousa-de-oliveira-5311a3207/)
Code review|[Italo Alves](https://www.linkedin.com/in/italo-alves-01457a1a6/)

```
Todos os Devs, com excessão do P.O, atuaram no desenvolvimento da  API.
```


# 📝Licença

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório.