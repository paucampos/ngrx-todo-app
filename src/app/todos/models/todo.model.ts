export class Todo {
  public id: number | undefined;
  public texto: string | undefined;
  public completado: boolean | undefined;

  constructor(texto: string) {
    this.texto = texto;

    this.id = new Date().getTime();
    this.completado = false;
  }
}
