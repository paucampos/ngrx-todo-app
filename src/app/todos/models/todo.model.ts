export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {
    this.texto = texto || 'text';

    this.id = new Date().getTime();
    this.completado = false;
  }
}
