# Frontend-challenge para estágio (GetMoreBrasil)
* [Link para o enunciado do Frontend-challenge](https://github.com/rafaelpelle/frontend-challenge/blob/master/Desafio.md)

<br><br>

## Breve descrição da solução desenvolvida
* O projeto foi desenvolvido utilizando HTML, JavaScript e o framework Boostrap.
* O script js/getStoresInfo.js é responsável por obter os dados das lojas.
* O script js/cardScript.js é responsável pela criação de bootstrap cards.
  Cada loja é apresentada em um bootstrap card.
* O script js/modalScript.js é responsável por preencher o elemento Modal com as
  informações de uma loja selecionada, e então, exibir o Modal.
* O script js/sortByScript.js é responsável por ordenar um array de lojas.
* Para executar o projeto, basta abrir o arquivo index.html em um navegador
* Usuários de Google Chrome podem receber a mensagem "No 'Access-Control-Allow-Origin'
  header is present on the requested resource. Origin 'null' is therefore not allowed access.")
* Para resolver este problema a extensão "CORS" foi instalada no Google Chrome.

<br><br>

## CHANGE LOG

* 15/04/2018:
  * Primeira versão funcional
  * Esta versão não permite ordenar e filtrar lojas.
  
<br>

* 16/04/2018:
  * Ordenação de lojas foi implementada (ordenar por ID, nome, takeback e rating da loja).
  
<br>

* 30/04/2018:
  * Fix "Sem ponto de início definido";
  * Fix "Misturar o uso de camelCase e snake_case";
  * Fix "README.txt invés de README.md";
  * Fix "Uso de "&nbsp" no HTML ao invés de usar CSS para definir estilo";
  * Fix "Quando não se consegue fazer GET ele simplesmente diz que 0 lojas foram encontradas";
  * Ordenação por "Rating" foi removida;
