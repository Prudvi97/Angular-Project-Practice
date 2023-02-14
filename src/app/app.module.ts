import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesComponentHtmlComponent } from './courses.component.html/courses.component.html.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesComponentHtmlComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    HomeComponent,
    NotFoundComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', 
      component: HomeComponent 
    },
      { path: 'archive/:year/:month', 
      component: ArchiveComponent 
    },
      { path: '**', 
      component: NotFoundComponent
    },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
