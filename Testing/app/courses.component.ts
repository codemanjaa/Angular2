import {Component} from 'angular2/core'
import {AuthorsComponent} from './authors.component'
import {CourseService} from './course.service'

@Component({
    selector: 'courses',
    template: `
    <h2>My Courses </h2>
    
    <ul>
    <li *ngFor="#course of courses">
    {{ course }}
    
    </li>
    </ul>
    
    
    `,
    providers: [CourseService]

})
export class CoursesComponent {

title:  'The title of the course';
//courses =["Java", "XML", "angular2"];
courses;

constructor(courseService: CourseService){
    this.courses = courseService.getCourses();

}


}
