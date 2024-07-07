import { Routes } from '@angular/router';
import { BreedListComponent } from './breed-list/breed-list.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';
import { BreedSearchComponent } from './breed-search/breed-search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/breeds', pathMatch: 'full' },
    { path: 'breeds', component: BreedListComponent },
    { path: 'breeds/:id', component: BreedDetailComponent },
    { path: 'search', component: BreedSearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] }
];
