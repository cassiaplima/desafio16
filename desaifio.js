// Desafio

let velocidade = prompt('qual e a velocidade do carro')

if (velocidade > 80 ){
    let multa = (velocidade-80)*5
    alert(`atenção! a sua velocidade esta acima de 80km/h. a sua multa e de ${multa}`)
}else{
    alert('muito bem! voce esta dentro do limite de velocidade')
}