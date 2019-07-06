import { Component, OnInit, Input } from '@angular/core';
import { ImgServiceService } from 'src/app/_Shared/img-service.service';

@Component({
  selector: 'app-img-item',
  templateUrl: './img-item.component.html',
  styleUrls: ['./img-item.component.css']
})
export class ImgItemComponent implements OnInit {
 @Input() gallery_arr:any;
  arr: any;

  constructor(
    
   private imgService:ImgServiceService) { 

   }

  ngOnInit() {
    
    this.gallery_arr.push(...this.imgService.getItems());
  }
  Upvote(index){
      this.gallery_arr[index]['score']++;
      this.imgService.setItems(this.gallery_arr);
   
  }
  downVote(index){

  this.gallery_arr[index]['score']--;
  this.imgService.setItems(this.gallery_arr);

 
}
      deleteImage(index){
         this.gallery_arr.splice(index,1);
         this.imgService.setItems(this.gallery_arr);
   }
}
