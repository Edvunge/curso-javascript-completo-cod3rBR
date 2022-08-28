/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/
function juroSimples(capitalInicial, taxaJuros, tempoAplicado){
    let resultJurosSimpl = capitalInicial * taxaJuros * tempoAplicado;
    return resultJurosSimpl
}
console.log(juroSimples(44.3 , 33.2 , 66.4))

function jurosCopmpostos(capitalInicial, taxaJuros, tempoAplicado){
    let montante = capitalInicial * Math.pow(1 + taxaJuros, tempoAplicado) 
    return montante
}
console.log(jurosCopmpostos(12.3, 21, 34))