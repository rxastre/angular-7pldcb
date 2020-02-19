import { Component, OnInit, Output, Input } from '@angular/core';
import { AaaaService } from './aaaa.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  
  @Output()
  private pessoas: Pessoa[] = null;

  constructor(private aaaa: AaaaService){}

  ngOnInit(){
    this.aaaa.listar<Pessoa[]>().subscribe((x) => this.pessoas = x)
  }
}

export class Pessoa {
  constructor(public id: number, public nome: string){

  }
}
