import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/project/project.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ToolsComponent } from './pages/tools/tools.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'tools', component: ToolsComponent },
];
