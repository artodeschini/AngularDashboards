import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 69],
    ['Março', 23],
    ['Abril', 24],
    ['Maio', 80],
    ['Junho', 28]
  ]

  constructor() { }

  // aqui pode ser utilizado para chamar alguma api que retorne valores não precisa ser constantes como neste exemplo o Observele vai garantir a entrega dos dados
  obterDados(): Observable<any> {
    return new Observable(observable => {
      // ele esta sempre na escuta para retornar aos interessados inscritos
      observable.next(this.dados);
      observable.complete();
    });
  }
}
