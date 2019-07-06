import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgServiceService {

  constructor() { }

    setItems(imgArr){
          let json = JSON.stringify(imgArr);
          localStorage.setItem('imgObject',json);
    }
    getItems(){

       let json = localStorage.getItem('imgObject');
          if(json){
            return  JSON.parse(json);

          }

    }
 }
