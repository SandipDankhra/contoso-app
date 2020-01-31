import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { CourseDeatilComponent } from './course/course-deatil/course-deatil.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CourseComponent,
    SignupComponent,
    SigninComponent,
    UserEditComponent,
    CourseEditComponent,
    CourseAddComponent,
    CourseDeatilComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
   
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
