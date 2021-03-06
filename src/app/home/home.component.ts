import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ApiService} from "../api.service";
import {Http} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ApiService]
})
export class HomeComponent implements OnInit {

	tests = [];

	@Input() favorite;
	@Output() onYell = new EventEmitter();

	fireYellEvent(event){
		this.onYell.emit(event);
	}

	alertMe(value){
		alert(value);
	};

 constructor(
  		private apiService: ApiService
  	) {
  	 }

  	 // testFetch(){
  	 // 	console.log('button pressed');
  	 // 	return this.http.get('https://boredboard-2519a.firebaseio.com/')
  	 // 	.map(res => res.json())
  	 // }

  ngOnInit() {
  	this.apiService.testFetch()
  	.subscribe(
  		(data)=> 
  			this.tests = data
  			// console.log(data)
  		);

  }

}
