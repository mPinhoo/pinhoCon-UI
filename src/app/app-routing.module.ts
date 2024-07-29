import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'login',
        title: 'titles.login',
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'dashboard',
        title: 'titles.dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'all-properties',
        title: 'titles.properties',
        loadChildren: () =>
          import('./pages/properties/properties.module').then((m) => m.PropertiesModule),
      },
      {
        path: 'add-properties',
        title: 'titles.properties',
        loadChildren: () =>
          import('./pages/add-properties/add-properties.module').then((m) => m.AddPropertiesModule),
      },
      {
        path: 'edit-properties/:id',
        title: 'titles.properties.edit',
        loadChildren: () =>
          import('./pages/add-properties/add-properties.module').then((m) => m.AddPropertiesModule),
      },
      {
        path: 'all-agents',
        title: 'titles.agents',
        loadChildren: () =>
          import('./pages/agent/agent.module').then((m) => m.AgentModule),
      },
      {
        path: 'add-agent',
        title: 'titles.agent',
        loadChildren: () =>
          import('./pages/add-agent/add-agent.module').then((m) => m.AddAgentModule),
      },
      {
        path: 'edit-agent/:id',
        title: 'titles.agent.edit',
        loadChildren: () =>
          import('./pages/add-agent/add-agent.module').then((m) => m.AddAgentModule),
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useFactory: (title: Title, translate: TranslateService) => {
        return
      },
      deps: [Title, TranslateService],
    },

  ]
})
export class AppRoutingModule { }
