import { ModuleWithProviders } from "@angular/core"; // Crear modulos
import { Routes, RouterModule } from "@angular/router"; // creacion de rutas


import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from "./components/detail/detail.component";
import { EditComponent} from "./components/edit/edit.component";

//************************ Rutas de las paginas web ****************************************
const  appRoutes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'sobre-mi', component: AboutComponent},
  {path: 'proyectos', component: ProjectsComponent},
  {path: 'crear-proyecto', component: CreateComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'proyecto/:id', component: DetailComponent},
  {path: 'editar-projecto/:id', component : EditComponent},
  {path: '***', component: ErrorComponent},
];
//**************************Exportar configuracion de las rutas ****************************************
export const appRoutingProviders: any[] = []; // exportar el servicio de rutas
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); // modulo que carga la configuracion de rutas
