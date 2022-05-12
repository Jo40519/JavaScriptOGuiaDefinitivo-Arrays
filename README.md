# JavaScriptOGuiaDefinitivo-Arrays
 Repositório criado com o foco em estudos em Arrays com JavaScript. Estudando através do livro JavaScript: O Guia Definitivo.


 Método push():
 Pode ser usado para adicionar um ou mais valores no final de um Array.
 E para excluir um item do Array pode usar também o operador delete. O delete não afeta o comprimento do Array.


 Método join()
 O método Array.join() converte todos os elementos de um array em strings e as concatena, retornando a string resultante. Pode-se especificar uma string opcional para separar os elementos na
string resultante. Se não for especificada qualquer string separadora, uma vírgula é usada.


Método reverse()
O método Array.reverse() inverte a ordem dos elementos de um array e retorna o array invertido.
Ele faz isso no local; em outras palavras, ele não cria um novo array com os elementos reorganizados,
mas em vez disso os reorganiza no array já existente.


Método sort()
Array.sort() classifica os elementos de um array no local e retorna o array classificado. Quando
sort() é chamado sem argumentos, ele classifica os elementos do array em ordem alfabética (convertendo-os temporariamente em strings para fazer a comparação, se necessário)

Para classificar um array em alguma ordem diferente da alfabética, deve-se passar uma função de
comparação como argumento para sort(). Essa função decide qual de seus dois argumentos deve
aparecer primeiro no array classificado. Se o primeiro argumento deve aparecer antes do segundo,
a função de comparação deve retornar um número menor do que zero. Se o primeiro argumento
deve aparecer após o segundo no array classificado, a função deve retornar um número maior do que
zero. E se os dois valores são equivalentes (isto é, se a ordem é irrelevante), a função de comparação
deve retornar 0.


Método concat()
O método Array.concat() cria e retorna um novo array contendo os elementos do array original em
que concat() foi chamado, seguido de cada um dos argumentos de concat(). Se qualquer um desses
argumentos é ele próprio um array, então são os elementos do array que são concatenados e não o
array em si. Note, entretanto, que concat() não concatena arrays de arrays recursivamente. concat()
não modifica o array em que é chamado.



Método slice()
O método Array.slice() retorna um pedaço (ou subarray) do array especificado. Seus dois argumentos especificam o início e o fim do trecho a ser retornado. O array retornado contém o elemento
especificado pelo primeiro argumento e todos os elementos subsequentes, até (mas não incluindo)
o elemento especificado pelo segundo argumento. Se apenas um argumento é especificado, o array
retornado contém todos os elementos desde a posição inicial até o fim do array. Se um ou outro
argumento é negativo, ele especifica um elemento relativo ao último elemento no array. Um argumento -1, por exemplo, especifica o último elemento no array e um argumento -3 especifica o
antepenúltimo elemento do array.


Método splice()
O método Array.splice() é um método de uso geral para inserir ou remover elementos de um array.
Ao contrário de slice() e concat(), splice() modifica o array em que é chamado. Note que splice()
e slice() têm nomes muito parecidos, mas efetuam operações significativamente diferentes.
splice() pode excluir elementos de um array, inserir novos elementos em um array ou efetuar as
duas operações ao mesmo tempo. Os elementos do array que vêm após o ponto de inserção ou
exclusão têm seus índices aumentados ou diminuídos, conforme o necessário, para que permaneçam contíguos ao restante do array. O primeiro argumento de splice() especifica a posição do
array em que a inserção e/ou exclusão deve começar. O segundo argumento especifica o número
de elementos que devem ser excluídos (removidos) do array. Se esse segundo argumento é omitido, todos os elementos do array, do elemento inicial até o fim do array, são removidos. splice()
retorna o array dos elementos excluídos ou um array vazio, se nenhum elemento foi excluído.

Os dois primeiros argumentos de splice() especificam quais elementos do array devem ser excluídos. Esses argumentos podem ser seguidos por qualquer número de argumentos adicionais, especificando os elementos a serem inseridos no array, começando na posição especificada pelo primeiro
argumento.
