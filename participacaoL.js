let funcionario = Number(prompt("Você é um funcionário? \n1 - 1 SIM   n2 - NÃO"));

if(funcionario === 1){

    let anos = Number(prompt("Quantos anos de empresa você tem?"))
    let PL = []
    if(anos < 10){
        PL = 2500;

    }else if (anos>=10 && anos<=20){
        PL = 10000;

     }else if (anos>20 && anos<=30){
            PL = 15000;
     }else 
                PL = 20000;
    


    document.getElementById("colab").value = "FAZ PARTE DA EQUIPE";
    document.getElementById("tempo").value = anos;
    document.getElementById("PLR").value = PL;

    }

else

    alert("QUE PENA, VOCÊ NÃO FAZ PARTE DA EQUIPE")
