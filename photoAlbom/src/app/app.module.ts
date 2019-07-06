import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoGaleryComponent } from './photo-galery/photo-galery.component';
import { GaleryFormComponent } from './photo-galery/galery-form/galery-form.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { ImgItemComponent } from './photo-galery/galery-form/img-item/img-item.component';
import {ImgServiceService} from './_Shared/img-service.service';
@NgModule({
  declarations: [
    AppComponent,
    PhotoGaleryComponent,
    GaleryFormComponent,
    ImgItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ImgServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
