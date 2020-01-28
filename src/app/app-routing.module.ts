import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { CourseDeatilComponent } from './course/course-deatil/course-deatil.component';



const routes: Routes = [
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'user/edit', component: UserComponent
  },
  {
    path: 'course', component: CourseComponent
  },
  {
    path: 'courseAdd', component: CourseAddComponent
  },
  {
    path: 'courseEdit', component: CourseEditComponent
  },
  {
    path: 'courseDetail', component: CourseDeatilComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'signin', component: SigninComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
