import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { UserbuyingComponent } from './userbuying/userbuying.component';
import { UserfruitsComponent } from './userfruits/userfruits.component';
import { UserjuiceComponent } from './userjuice/userjuice.component';
import { UsermilComponent } from './usermil/usermil.component';
import { UsercareComponent } from './usercare/usercare.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: 'userbuying', component: UserbuyingComponent,canActivate:[AuthGuard]
    },
    {
        path: 'userfruits', component: UserfruitsComponent,canActivate:[AuthGuard]
    },
    {
        path: 'userjuice', component: UserjuiceComponent,canActivate:[AuthGuard]
    },
    {
        path: 'usermil', component: UsermilComponent,canActivate:[AuthGuard]
    },
    {
        path:'usercare', component:UsercareComponent,canActivate:[AuthGuard]
    },
    {
        path:'userseasonal', component:UsercareComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    
];