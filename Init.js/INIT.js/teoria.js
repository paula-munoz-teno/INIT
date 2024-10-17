//T1.7 GIT

//INDICE

//1.GIT
  //1.1 Conceptualización
  //1.2 Funciones del GIT
  //1.3 Puesta en práctica
     //1.3.1 Instalación
  //1.4 Entorno de GIT
  //1.5 Configuración
//2 Comandos
//3 Ramas


//1.GIT

//1.1 Conceptualizacion
//GIT: software que permite controlar 
//las versiones de un proyecto. Se trabaja 
//por ramas que luego se unifican
//***Analogía a Google Drive 

//ramas: copia del proyeto sobre la que 
//cada desarollador trabaja de manera indep al equipo


//1.2 Funciones del GIT
//Permite ser un google drive de la programación:
//Almacenamiento de propio trabajo y trabajar de forma común
//El trabajo no se solapa, ya que hay ramas que posteriormente se unifican
//Esto se puede hacer por las siguientes carcaterísticas
//  • Fuerte apoyo al desarrollo no lineal (ie en paralelo)
//  • Gestión distribuida (colaboración)
//  • Eficiencia en proyectos grandes.
//  • Acceso a todos los cambios realizados a lo largo de la historia.
//  • Velocidad de acceso(está optimizado para que todo sea rápido)


//1.3 Puesta en práctica
//1.3.1 Instalación
// Para instalar GIT debemos seguir los siguientes pasos en nuestro equipo:

// 1. Ir a la página de descargas de GITHUB: https://gitforwindows.org/
// 2. Este archivo que se descarga es un .exe que tenéis que ejecutar.
// 3. Una vez instalado tendréis la versión de línea de comandos y la interfaz gráfica de
// usuario estándar (pero se recomienda usar la interfaz de Visual Studio)
// 4. Abrid “Git Bash” para empezar a trabajar con GIT.
//CLI: interfaz de línea de comandos. Son los comandos que se escriben por el terminal 



//1.4 Entorno de GIT
//GIT BASH: entorno de consola para trabajar con GIT
//Se puede usar Git Bath, visual o el propio terminal del ordenador
//Consola como visualStudio, pero en colores (podemos usar lo que queramos) 

//GitHub: herramienta de git que está en la nube y es 
//donde vamos a subir nuestros documentos 
//Hay que darse de alta con los mismos datos que en git para que 
//estén coordinados y poder enlazar el git local con el remoto
//Existen muchas herramientas en la nuve parecidas a github. Puede variar
//en función de la empresa. Ej: git lab, beat pocket
//Cada una tendrá sus rpopias funcionalidades independientes

//1.5 Configuración de GIT
//Tras instalar GIT hay que emplezar a usar su CLI
//cLI: Interfaz de línea de comandos
//Vamos a utilizar varios
// Comando de configuración
// - Git confing
// Comandos básicos para crear repositorios
// - Git init
// - Git clone 
//Comandos básicos
// - Git satus
//

//Git config: herramienta que GIT trae por defecto
//permite que cada usuario pueda controlar versiones (GIT)
//A nivel aplicado hay que configurar nuestraidentidad 
//para saber quien hizo cada cambio

//Como:
// git config --global user.name "Paula Muñoz"
// git config --global user.email paulamunoztenoX@gmail.com

//Si lo queremos cambiar: 
// $ git config --list
//así sale toda nuestra información y podemos ver nuestro email y 
//nombre de usuario

//Toda la info de confi: 
// $ git config --FileList

//Ayuda con git:
// $ git help config 



//2. Comandos básicos

//Podemos tebner tantso repositorios como documentos

//GIT INIT.- Crear proyecto
//Permite crear un nuevo repositorio
//Repositorio: contenedor de docs
//Se pueden tener tantos repositorios como proyectos tengamos 
//EJ: repositorio para proyecto 1 y para proyecto2

//Hay dos formas de crear los repositorios 
//F1 - desde 0 --> poniendo git init en la carpeta donde 
//queramos que docs estén unidos a un repo 
//F2 - con git hub

    //Se ejecuta en el directorio del proyecto
    //Su ejecución crea un repositorio que tiene ramas 
//Estar en l acarpeta adecuada. Si no, mete tod
//al gacer el git ini)

//GIT CLONE - Unirnos a proyecto que ya tiene repositorio
    //hace una copia de todo el proyecto existente en el equipo que ejecuta el
    //Se hace desde git hub, se crea un repositorio, se copia enlace
    //Se pone: 
    // $git clone //URL del proyecto a clonar en nuestro equipo
    //Se ejecuta
    //Nos sale el nombre de reame de git hub

    //CONSIDERACIONES
    //1 #Título
    //2 ## Subtítulo etc 
    //puedo escribir
    //puedo poner listas:
    //*Primer elemento
    //*Segundo elemento

    //Puedo poner código
    //```js
    //código
    //```


    

//GIT STATUS
    //para saber el estado de los archivos locales y de proyecto
    //nos dice qué se ha modificado y donde (stage o local)


    //En lugar de master se pone --><meo

//GIT ADD
    //Permite compartir proyectos de local a stage

   //  Añadir: Marcar ficheros modificados para subirlo 
//al repositorio. PASAN A FASE STAGE (Docuumentos marcados
//para ser subidos al repositorio)
//Tenemos dos: local(equipo) y remoto (git hub)

    //$git add. archivo que queremos añadir o git add.
    //Si queremos añadir más: nombre separados por espacios o 
    //comando para añadir de golpe: git add. 
    
    //Los proyectos pueden estar en local o en local y stage
       //Stage/remoto: cambios preparados para incorporarse al proyecto
          //se ve en verde
       //Local: cambios no preparados para "
          //rojo



        // git add nombre fichero
        // giit ass indexedDB.js

        //   Pasan a stage 

//Siempre dos repositorios por proyectos 
//cuando use add usar status para ver dode se ha quedado)

//GIT COMMIT
    //Permite confirmar los cambios en stage para el proyecto
    //Permite comunicar los cambios que se han realizado en el proyecto
    //Partes:
       //$ git commit
       //-m "Mensaje descriptivo" para poner un mensaje descrip de los cambios //(SIEMPRE AASOCIADO)
       //mensaje entre comillas
       

    //Que los que están en stage suban sus actualizaciones al repositorio
    //Si hacemos un commit sin mensaje, sale editor de texto chungo. 
    //Para salir de ahí: 
    //pulsar scape y poner :q!

 //GIT PUSH
    //Permite incorporar los cambios confirmados
    //Una vez se incorporan están disponibles para todos
    // $Git push

    //Hay que estar conectados a internet, ya que lo sube a la nube 
    //origen main = repositorio remoto

//Si está por delante, todavía no ha llegado. Las versiones son dist
//en local se ha actualizado pero en remoto no



//GIT PULL
    //Permite descargar las actualizaciones del proyecto global 
    //a nuestro equipo local
    //Inverso a agit push
    //Cambios denl remoto los bajo al locall

    //Cuando: cuando otros compañeros suban su código y yo necesito sus cambios


//GIT REST 
    //Permite desahacer cambios: sacar archivos que estén en estado de commit
    //Se invoca de 3 formas dif.
       // --soft: todos los ficheros de los commits que se eliminan pasan al área de staging. (stay a work)
       // --mixed: todos los ficheros de los commits que se eliminan se quedan en el working area. (de stays a word o wpeeeeen)
       // --hard: todos los ficheros de los commits que se eliminan, se eliminan definitivamente (el fichero se quedan como si )
       //no se hubieran modif, sequeda en la 1 dlel cal,bi)
    
    //Permite que un fichero de staged vuelva a working
       // git reset HEAD/path/to/file


       //Siempre se puede ir a trás cuando no has llegado al remoto


//
       //PASOS PARA SUBIR FICHERO A LA NUBE (GITHUB):
//Crear fichero: git clone o init + status
//Posteriormente: 

//0. GIT STATUS

//1. GIT ADD: paso el doc de zona de trabajo a stage (marco los archi
//vos que quiero subir)Fase stage

//2. GIT STATUS:ver estado 
// Nos debe decir que los cambios están preparados para ser comitados

//3. Git COMMIT: Comitar los cambios: subir los cambios de stage al repo local 

//4. Git Status
//Your branch is ahead (Tu versión del local es más
//nueva que la de la nube) y se debe a un commit
//Me debe devolver nothing to commit 

//5. Git push
//Los cambios del local al remoto (Hay que tener internet) 
//Al hacerlo, si refresco git hub se actualiza 



//PASO PARA SUBIR FICHERO A LA NUBE (INIT): 

//0. GIT STATUS

//1. GIT ADD: paso el doc de zona de trabajo a stage (marco los archi
//vos que quiero subir)Fase stage

//2. GIT STATUS:ver estado 
// Nos debe decir que los cambios están preparados para ser comitados

//3. Git COMMIT: Comitar los cambios: subir los cambios de stage al repo local 

//4. Git Status
//Your branch is ahead (Tu versión del local es más
//nueva que la de la nube) y se debe a un commit
//Me debe devolver nothing to commit 

//5. Git push
//Los cambios del local al remoto (Hay que tener internet) 
//Al hacerlo, si refresco git hub se actualiza 



//3. Ramas
//Rama: copia del proyecto en un momento concreto
//normalmente  se gabkde la rama main
;//Pemrite evitar conflictos y que varuis trab trabj a a vez
//Cpnflicto: se habla con el des pre y el y se tiene que volver a unir
//Del desarrollador que se encuentra conflicto, hace la union es la responsabilidd

//3.1 Comandos 

//GIT BRANCH
      //Nos dice en qué ramas estamos (con un *y abajo en visual) y lista el resto de ramas disponibles
      //Git branch + nombre de la rama: crear nueva rama (la empresa dice el nombre, si no,(nombre de la funcionalidad))  
//Si metemos comando y no nos da mensaje es que va bien

//GIT CHECKOUT Cambiarnos de rama:
      //Git checkout + nombrerama: Cambiar de rama 
    //Cuando te cambias de rama, todo lo que hagas se guarda en esa rama

//GIT MERGE
      //Git merge + nombre d erama que queremos unir a la ppalM
      //Permite Incorporar cambios de rama local a rama master;
      //git merch/

   //Si el fichero origen de rama 1 es igual (del  que parto), es el mismo que readname sin modificar no hay conflicto
   //origen del fichero y el fichero cuando está en main


   //Cuando el merge es automático, no hay conflicto, no hay conflicto, paso a push


//.GITIGNORE
      //Archivo que está a nivel de directorio con un 
      //listado de los archivos que NO queremos que GIT haga seguimiento
      //ie que NO van a ser incluidos
      //Aplicación: guías o cosas que no hace falta que vea todo el mundo 
      //se ponene los ficherso qeu no uqeremos que se inckuyan cuando haga un add.+

//Cosas a ignorar: node_modules, packjackeson

// ///Siemrpes qie hacemos un pusshsobvr la rama no sale la la vez, hay que cambiarloe nen local
//    Mensajito que hay que o
      //Pasos 
//ini o //clone (RECOMIENDA CLONE)
//status
//add
//status
//commit + M
//status
//push
//status


//Git have 
//repositorio
//crear nuevo rep.
//NO AÑADIR FICH README

//Ahí te da comandos para enlazar 




//Pasos para empezar a trabajar el día de hoy y siempre
//1. Instalar el git
//2. darnos de alta en git hub 
//3. enlazar usuario y correo enganchados g(got commit)
//4. add
//5. statsu
//6. commit -m
//7. status
//8. push

//Siempre que se oueda con l
//cuando: cuando dejas de emplearlo 



// pull para traernos los cambios del resto
//status
//Unir ramas
//branch
//status
//pull
//merge
//Hay conflicto cuando la main no es igual al inicio de la 2 



//CONFLICTOS

//G: cambio actual (lo que hay ahora en la main)
// P1 -->Aceptar el current
// P2 --> incominccgng
//p3 --> both
//p4 --> compare changes  se comparan 


//Queremos que estén los dos en la main

//A veces el codigo del segundo incluye el tuyo entonces incoming


//Cuando el código es correcto tras errores 
//merge
//satatus
//add
//status
//comit -m
//status
//push


//Sin conflictos
//merge
//status
//push


