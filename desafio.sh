#!/bin/bash


#echo "Shell Script é demais!"
#read -p "Shell Script com variáveis é demais" VARIAVEL

#echo " digite o valor"
#read HOSTNAME
#echo "Este script está rodando no computador: $HOSTNAME"



# verificar se existe 

#read -p "Digite um caminho: " PATH
#if [ -d "$PATH" ]
#    then
#        echo "É um diretório"
#elif [ -f "$PATH" ]
#    then
#        echo "É um arquivo"

#else
#    echo "É qualquer coisa"
#fi




# setar o valor 

#FILE=$2 
#if [ -f "$FILE" ] 
#then echo "$FILE é um arquivo comum" 

elif [ -d "$FILE" ] 
then 
echo "$FILE é um diretório"
 

else 
echo "$FILE é alguma outra coisa" 
fi 

#ls -l $FILE


#if [ -e "$Skill"]
#then    echo "O caminho" seu pai "está habilitado"
#else
#    echo "Esse caminho não existe"
#    fi
#if [ -w "$Skill"]
#then
#    echo "Você tem permissão para editar $Skill"
#else
#    echo "Você NÃO foi autorizada a editar esse arquivo"
#    fi



#    FILE =`ls -l $Skill | wc -l`

#       if [ -f "$FILE" ] 
 #    then echo "$FILE é um arquivo comum" 
 #    elif [ -d "$FILE" ] then echo "$FILE é um diretório" else echo "$FILE é alguma outra coisa" fi ls -l $FILE