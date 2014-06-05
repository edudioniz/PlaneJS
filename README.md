# PlaneJS

Proyecto final de la asignatura **Procesadores de Leguajes**

# Colaboradores

El proyecto consta de dos colaboradores listados a continuación.

* Eduardo Jesús Díaz Dioniz
* Francisco José Alderete Gonzalez

# Enlaces

Se especifican todos los enlaces necesarios.

* Despliegue en Web: [Web](http://www.dionizdev.com/)
* Repositorio del proyecto: [Repositorio](https://github.com/PL-Team/PLPROYECT/)

# Ejemplo de programa:
//PRGRAMA
program vuelo0123{
    //VAR GLOBALES
    line trayectoMaritimo;
    trayectoMaritimo = (3,2),(8,9);
    //BLOQUE 1
    route TFM {
        point giro;
        giro = 3,3;
        line trayectoTF1;
        trayectoTF1 = (4,3),giro;
        line trayectoTF2;
        trayectoTF2 = giro,(6,4);              
        line trayectoMTOA;
        trayectoMTOA = (5,4),(5,3);
        set  trayectoTF1+trayectoTF2+trayectoMaritimo+trayectoMTOA;        
    };
    //BLOQUE 2
    route BDC {
        line trayectoT1;
        trayectoT1 = (4,3),(6,4);
        line trayectoMTOA;
        trayectoMTOA = (5,4),(5,3);        
        set trayectoT1+trayectoMaritimo+ trayectoMTOA;
    };
}


Ejemplo de interpretación

TFM
	4,3
	3,3
	6,4
	3,2
	8,9
	5,4
	5,3
END
BDC
	4,3
	6,4
	3,2
	8,9
	5,4
	5,3
END
