#!/bin/bash
#comentario 


### estrutura de repetiçao ###
#WORDS="shell script usando estrutura repetição for terminal"
#  for WORD in $WORDS
#    do
#      echo $WORD
#    done


###

FILES=skills2.txt

  for FILE in $FILES
    do
      if [ -f "$FILE" ]
        then
          echo "$FILE é um arquivo comum"
      elif [ -d "$FILE" ]
        then
          echo "$FILE é um diretório"
      else
          echo "$FILE é alguma outra coisa"
      fi
      ls -l $FILE
    done