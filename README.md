# Desafio frontend    

Você foi contratado para desenvolver um aplicativo mobile. O aplicativo terá duas páginas:  

- Mostrar lojas;
- Detalhes de uma loja;

## Página de mostrar uma lista de lojas  
Para essa página será fornecido uma que retorna uma lista de lojas, segue exemplo de um retorno: 
```json  
[
  {
    "name":"Ri Happy",
    "takeback":4.335500000000001,
    "rating":4.9,
    "url":"https://www.rihappy.com.br/",
    "image_blob":"data:image/png;base64,...",
    "category":[
      "Moda e Acessórios",
      "Brinquedos e Jogos"
    ]
  },
  {
    "name":"Havan",
    "takeback":3.575,
    "rating":4.8,
    "url":"https://www.havan.com.br/",
    "image_blob":"data:image/png;base64,...",
    "category":[
      "Alimentos e Bebidas",
      "Beleza e Saúde",
      "Celulares e Smartphones",
      "Eletrodomésticos",
      "Eletrônicos e Tecnologia",
      "Esporte e Lazer",
      "Livros CDs e DVDs",
      "Loja de Departamentos",
      "Moda e Acessórios",
      "Brinquedos e Jogos",
      "Móveis e Decoração"
    ]
  },
  {
    "name":"Netshoes",
    "takeback":6.003,
    "rating":4.5,
    "url":"https://www.netshoes.com.br/",
    "image_blob":"data:image/png;base64,...",
    "category":[
      "Esporte e Lazer",
      "Loja de Departamentos",
      "Moda e Acessórios"
    ]
  }
]
```
Disponível em http://challenge.getmore.com.br/stores

## Página de mostrar detalhes de uma loja 
Para essa página será fornecido uma rota para detalhes de uma rede específica
```json
{
  "id": "1",
  "name": "Ri Happy",
  "takeback": 4.335500000000001,
  "rating": 4.9,
  "url": "https://www.rihappy.com.br/",
  "image_blob": "data:image/png;base64,...",
  "category": [
    "Moda e Acessórios",
    "Brinquedos e Jogos"
  ]
}
```
Disponível em http://challenge.getmore.com.br/store/:id

## Requisitos
Os requisitos para essas páginas são:
- Dispor todos os dados (exceto o id) servidos pelo servidor (como os dados serão dispostos fica à seu critério, faz parte da avaliação);
- Tratar erros de rede;
- Criar um Readme com uma breve descrição do projeto e de como rodar;

## Requisitos adicionais
Esses requisitos não são obrigatórios:
- Permitir ao usuário a ordenar as lojas com qualquer um de seus atributos;
- Filtragem de atributos de loja;
- Responsivo para celulares e tablets;
- Caching de dados;

## Como começo?
Aqui vão as etapas:
- Faça um fork desse repositório;
- Crie uma Pull Request com seu código pronto;

## Tecnologias
Você poderá utilizar quaisquer tecnologias frontend para desenvolver, aqui vão algumas sugestões:

### Frameworks
- React;
- Angular;
- Vue;
- PWA
- Ember

### Frameworks UI
- Semantic UI;
- Bootstrap;
- Materialize;

## Requisitos para avaliação
- Uso do git (commits concisos, títulos auto-explicativos, etc);
- Boas práticas de programação (uso de padrões, nomes de identificadores, tamanho de funções, perfomance);
- Escolha de arquitetura (MVC, MVP, MVI, MVVC, VIPER, etc);
- Uso de bibliotecas para auxiliar o desenvolvimento;
- Uso de scripts (para execução do programa, otimização de imagens, etc);
