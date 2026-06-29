let Idade=Number(prompt("Digite sua idade"))
if (Idade>=18){
    console.log("Voce pode Dirigir")

} else { 
    console.log("não pode dirigir")

}

let Pergunta=prompt("Digite V ou M ou N")
if(Pergunta="M"){
    console.log("Bom Dia")
} else if (Pergunta="V"){
    console.log("Boa tarde")

} else{(Pergunta="N")
    console.log("Boa noite")

}

let Perguntas=prompt(" Digite V ou M ou N")
switch(Perguntas){
   case "V":
        console.log("Boa tarde")
    break
case "M":
    console.log("Bom dia")
    break
case "N":
    console.log("Boa noite")
    break
}