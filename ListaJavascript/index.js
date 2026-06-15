const CalcularArea=(Altura,Largura)=>{
    const area=Altura*Largura
    console.log(area)
}
CalcularArea(2,3)

const CalcularIdade=()=>{
    const Idade=prompt("Digite Ano Atual")
    const IdadeCalcular=prompt("Digite Ano Nascido")
    const erro=Idade-IdadeCalcular
    console.log(erro)
}
CalcularIdade()

const CalcularImc=()=>{
    const Altura=prompt("Digite sua Altura")
    const Peso=prompt("Digite seu peso")
    const Resultado=Peso/(Altura*Altura)
    console.log(Resultado)
}
CalcularImc()