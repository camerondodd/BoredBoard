import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {DirectoryComponent} from "./directory/directory.component";
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

const API_URL = "https://boredboard-2519a.firebaseio.com/";

@Injectable()
export class ApiService {

  constructor(
  		private http: Http
  	) {
  	 }

  	  testFetch(){
  	 	return this.http.get('https://boredboard-2519a.firebaseio.com/.json')
  	 	.map(res => res.json())
  	 		
  	 }

}
