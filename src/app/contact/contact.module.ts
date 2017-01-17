import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from '../header/header.component';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { HeaderModule } from '../header/header.module';
@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContactRoutingModule,
    HeaderModule
  ],
  exports: [
		ContactComponent	
	]
})
export class ContactModule { }
