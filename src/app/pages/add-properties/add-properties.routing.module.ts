import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertiesComponent } from './add-properties.component';

const routes: Routes = [
  {
    path: '',
    component: AddPropertiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPropertiesRoutingModule {}
