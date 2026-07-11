import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Achievements } from './features/achievements/achievements';
import { Events } from './features/events/events';
import { Gallery } from './features/gallery/gallery';
import { Partnerships } from './features/partnerships/partnerships';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre', component: About },
  { path: 'conquistas', component: Achievements },
  { path: 'portfolio', component: Events },
  { path: 'galeria', component: Gallery },
  { path: 'parcerias', component: Partnerships },
  { path: 'contato', component: Contact },
  { path: '**', redirectTo: '' }
];

