import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {ImgServiceService} from '../../_Shared/img-service.service';
@Component({
  selector: 'app-galery-form',
  templateUrl: './galery-form.component.html',
  styleUrls: ['./galery-form.component.css']
})


export class GaleryFormComponent implements OnInit {

 private galeryForm:FormGroup
 public gallery_arr:Array<object> = [];
  constructor(
   private fb:FormBuilder,
   private imgservice:ImgServiceService

  ) { 
    this.galeryForm = this.fb.group({
      title:['',Validators.required],
      url:['',Validators.required]     
   


    });



  }

  ngOnInit() {
  }
    onSubmit(){
    if(this.galeryForm.invalid){
       console.log('Error');
    }
    let imgObject = {
      title:this.galeryForm.controls.title.value,
      url:this.galeryForm.controls.url.value,
      score:0
  };
  console.log(imgObject);
    this.gallery_arr.push(imgObject);
    this.imgservice.setItems(this.gallery_arr);
    this.galeryForm.reset();
  } 
}
