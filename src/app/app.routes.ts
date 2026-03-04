import { Routes } from '@angular/router';
import { Home } from './home/home';
import { App } from './app';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { MyProfile } from './my-profile/my-profile';
import { Posts } from './posts/posts';

export const routes: Routes = [
  {path:'',component: Home},
  {path:'contact',component:Contact},
  {path:'about',component:About},
  {path:'user/:userName',component:MyProfile},
  {path:'posts',component:Posts},
  {path:"**",component:Home}
];
