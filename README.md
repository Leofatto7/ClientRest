# Come installare Visual Studio
Seguire la seguente [guida](https://docs.microsoft.com/it-it/visualstudio/install/install-visual-studio?view=vs-2019) molto semplice e comprensibile.

# Come installare Angular

## Installare NodeJS
Scaricare l'[installer di Node.js](https://nodejs.org/en/download/) (versione LTS) per Windows.
Per controllare la versione, aprire il prompt dei comandi (cmd) e scrivere il seguente comando: 
```sh
npm -v
```

## Installare TypeScript
Tramite prompt dei comandi, scrivere:
```
npm install -g typescript
```

## Installare la CLI di Angular
Sempre tramite prompt dei comandi, scrivere:
```
npm install -g @angular/cli
```

# Comandi per creare e eseguire un progetto

## Creare un progetto
Selezionare la cartella che si desidera utilizzare per la creazione del progetto, tramite il prompt dei comandi.
Dopo aver selezionato la suddetta cartella, eseguire il comando:
```
ng new nome-progetto
```

## Eseguire il progetto
Selezionare il percorso della cartella del progetto tramite il prompt dei comandi ed eseguire il comando: 
```
ng serve
```
Una volta completata l'operazione lasciando aperto il prompt, il vostro progetto sarà disponibile all'indirizzo: http://localhost:4200.

# Passi da seguire una volta importato un progetto nel proprio computer

## Aprire il progetto su Visual Studio
Spostarci nella cartella del progetto tramite prompt e scrivere il comando:
```
code .
```
Questo aprirà il progetto organizzato in cartelle all'interno del suddetto ambiente di sviluppo.

## Installare le dipendenze del progetto
Sempre tramite prompt, ci sposteremo di nuovo nella cartella del progetto e eseguiremo il comando:
```
npm install
```

## In caso di un errore sconosciuto	
Aprire la powershell di windows come amministratore ed eseguire il seguente comando: 
```
Set-ExecutionPolicy -ExecutionPolicy unrestricted -Scope CurrentUser
```
Fatto ciò il progetto alla sua esecuzione non dovrebbe avere più errori.