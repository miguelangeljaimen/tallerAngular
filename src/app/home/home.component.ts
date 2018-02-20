import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	  logros : ILogro[];

  constructor() { }

  ngOnInit() {
  	this.logros = this.getLogros();
  }

  getLogros() : ILogro[]{
  	return[
  	{	id:1,
  		title:"comence un curso",
  		description:"comence un curso de angular para web progresivas"},
	{	id:2,
  		title:"comence otro curso",
  		description:"comence un curso de Ionic"},
	{	id:1,
  		title:"esperando un curso",
  		description:"Esperando un curso para web progresivas 2018"},

  		];
  }

}


  interface ILogro{
  		id:number;
  		title:String;
  		description ?:String;

  }
