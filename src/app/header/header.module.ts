import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
//import { FooterModule } from '../footer/footer.module';

@NgModule({
	imports: [
		CommonModule,
        BrowserModule,
    	FormsModule,
    	HttpModule,
		RouterModule
	],
	declarations: [
		HeaderComponent
	],
	exports: [
		HeaderComponent
	]

})
export class HeaderModule { }
