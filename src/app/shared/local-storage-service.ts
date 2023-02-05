import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


saveData(data: any, key:string) {
    localStorage.setItem(key, JSON.stringify(data));
  }

getData(key:string) {
const data = localStorage.getItem(key);
return data ? JSON.parse(data) : null;
}
}
