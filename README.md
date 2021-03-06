<div align="center" id="top"> 
  <img src="./github/logo.svg" alt="Adote um pet logo" style="background-color: #fff;padding: 10px" />
</div>

# Projeto Adote um Pet

## TreinaWeb: ["Workshop Multi-stack 03"](https://www.treinaweb.com.br/painel/multi-stack)

<p align="center">
  <img alt="Imagem da home" src="public/home.png" width=400>
  <img alt="Imagem do relatório de adoção" src="public/report.png" width=400>
  <img alt="Imagem do cadastro" src="public/cadastro2.png" width=400>
  <img alt="Imagem com janela de adoção" src="public/adotar.png" width=400>
</p>

## 🎯 Sobre

O **Adote um Pet** é uma aplicação para ajudar ONGs de adoção de animais.
Com o **Adote um Pet** você faz uma adoção virtual e ajuda a instituição financeiramente a arcar com os custos mensais do cuidado com os animais.

### 🚀 Tecnologias
- Front-end: **/pets**
  - React + Next.js
  - Material UI
  - Styled Components

- Back-end: **/adote-um-pet**
  - Python com Django

- Mobile: Em breve com React-Native.


## 🏁 Começando

1 - Primeiro clone o repositório e entre na pasta do projeto.

```bash
# Clone este repositório
$ git clone https://github.com/navegantes/pet-adoption.git
# Entre na pasta /pet-adoption
$ cd pet-adoption
```

2 - Iniciando o back-end da aplicação.

```bash
# Entre na pasta "adote-um-pet"
$ cd adote-um-pet
# Crie um ambiente virtual
$ python -m venv .venv
# Ative o ambiente
$ .venv/Script/Activate
# Instale as dependências
$ pip install -r requirements.txt
# Faça as migrações.
$ python manage.py migrate
# Inicie o servidor
$ python manage.py runserver
```

3 - Iniciando o front-end da aplicação.

```bash
# Entre na pasta "pets"
$ cd pets
# Instale as dependências
$ npm install
# Inicie a aplicação
$ npm run dev
```


## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/navegantes.png" width="100px;" alt="Foto do perfil de Navegantes no GitHub"/><br>
        <sub>
          <b>Navegantes</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://github.com/treinaweb.png" width="100px;" alt="Foto do perfil da TreinaWeb no GitHub"/><br>
        <sub>
          <b>TreinaWeb</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


Feito com ❤️ por <a href="https://github.com/navegantes" target="_blank">Raphael Navegantes</a>

&#xa0;

<a href="#top">Voltar para o topo</a>
