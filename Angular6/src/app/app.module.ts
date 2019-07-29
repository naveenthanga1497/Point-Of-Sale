// built-in imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components import statement
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { AuthGuard } from './auth/auth.guard';
import {AuthInterceptor} from './auth/auth.interceptor';
import { UserbuyingComponent } from './userbuying/userbuying.component';
import { UserfruitsComponent } from './userfruits/userfruits.component';
import { UserseasonalComponent } from './userseasonal/userseasonal.component';
import { UsermilComponent } from './usermil/usermil.component';
import { UserjuiceComponent } from './userjuice/userjuice.component';
import { UsercareComponent } from './usercare/usercare.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    UserbuyingComponent,
    UserfruitsComponent,
    UserseasonalComponent,
    UsermilComponent,
    UserjuiceComponent,
    UsercareComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    RouterModule.forRoot([
      {path:'userbuying', component:UserbuyingComponent},
      {path:'userfruits', component:UserfruitsComponent},
      {path:'userseasonal',component:UserseasonalComponent},
      {path:'usermil', component:UsermilComponent},
      {path:'userjuice',component:UserjuiceComponent},
      {path:'usercare', component:UsercareComponent},
    ])
  ],
   providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
   bootstrap: [AppComponent]
})
export class AppModule { }