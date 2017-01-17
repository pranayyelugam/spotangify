import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

import { HeaderModule } from '../header/header.module';

@NgModule({
	imports: [
		CommonModule,

		AboutRoutingModule,
		HeaderModule,
       
	],
	declarations: [
		AboutComponent
	],
	exports: [
		AboutComponent	
	]
})
export class AboutModule { }
