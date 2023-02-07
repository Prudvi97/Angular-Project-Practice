import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  //Pipes Examples
  // pipes = {
  //   title: "The pipes examples",
  //   rating: 4.9745,
  //   students: 30123,
  //   price: 190.95,
  //   releaseDate: new Date(2016, 3, 1)
  // }


// title = "list of courses";
// imageUrl = "https://wallpapercave.com/wp/wp3427419.jpg";
// isActive = true;

email = "me@example.com"; //two way binding

// Event binding
// onSave($event: any){
// console.log("Button was clicked", $event);
// }

// event filtering
// onKeyUp() {
// console.log("Enter was pressed");
// }

// template variables
// onKeyUp(email: string) {
// console.log(email);
// }

//Two way Binding
// onKeyUp() {
//   console.log(this.email);
//   }

}
