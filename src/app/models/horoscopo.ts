export class Horoscopo {
    titulo: string;
    horoscopo: string;
    nombre: string;
    fechaSigno: string;
    amor: string;
    salud: string;
    dinero: string;
    Horoscopo(titulo?: string, horoscopo?: string, nombre?: string, fechaSigno?: string, amor?: string, salud?: string, dinero?: string) {
        this.titulo = titulo;
        this.horoscopo = horoscopo;
        this.nombre = nombre;
        this.fechaSigno = fechaSigno;
        this.amor = amor;
        this.salud = salud;
        this.dinero = dinero;

    }
}
