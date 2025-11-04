# Coin-Flip-Tower-Web

# Benvingut/da aquesta es una guía de com ha s'ha de seguir el fluxe de feina d'aquest repositori

#1· Primerament clonar el repositori
git clone (URL DEL REPOSITORI)

#2· La branca MAIN es sagrada, per tant es toca a lo darrer i sempre es el producte final, per tant s'haura de fer una nova branca anomenada DEV que serà una copia de MAIN.

git checkout -b (NOM DE LA BRANCA)

#3· partir d'aquesta branca DEV es important que es crei una branca per cada tasca que es farà, així com un commit, es a dir:

Exemple Tasca: Crear capçalera Web  ------   Nom de la Branca: Capçalera -------   Commit: Capçalera feta 

#4· Cal dir que en respecte als commits han de ser descriptius, amb un titol on s'anomeni la tasca, i una descripció del que s'ha fet i en cas de problemes explicar quins han sigut i com s'han resolt. Exemple:

git commit "Capçalera Feta"

S'ha fet una capçalera de la web aplicant-hi "X", hem afegit "X"
S'han tengut problemes amb "X" i ho hem solucionat fent "X".

Commit: Capçalera feta. -------- Descripció: S'ha fet la capçalera de la web aplicant-hi "X", hem afegit "X", i s'han tengut problemes amb "X" i ho hem solucionat fent "X". 

#5· En cas de que una tasca NO ESTIGUI ACABADA però s'hagi de fer un COMMIT per poder fer un PUSH i seguir a casa, al COMMIT s'ha de redactar.

git commit Capçalera (INACABADA)
Exemple Commit: Capçalera (INACABADA)

#6· Recordau fer un PUSH una vegada fet el commit.
git push

#7· I per poder seguir fent feina desde casa per exemple, heu de fer un PULL.

git pull

#8· Una vegada feta una tasca a una branca hi haurà una persona encarregada de fer un merge a la branca DEV, per aplicar-hi els canvis i provar que tot funcioni, exemple:

(PER ENTRAR A DINS LA BRANCA DEV)
git checkout dev

(DUR ELS CANVIS DE LA BRANCA CAPÇALERA A LA BRANCA DEV)
git merge capçalera
