import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleProject';
  // tweet = {
  //   likesCount: 10,
  //   isLiked: true,
  // }

  //List Courses used for ngIf and hidden property
  // courses = [1,2,3,4]

  //Switchcase Binding
  // viewMode = 'map';

  //ngFor example
  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
  ];

  // ngFor and change detection example
  onAdd(){
    this.courses.push({ id: 4, name: 'course4'})
  }

  onRemove(course: any){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  onChange(course: any){
   course.name = 'UPDATED';
  }

}
