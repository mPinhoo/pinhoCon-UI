import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './components/button/button.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule
  ],
  declarations: [
    ButtonComponent,
    InputTextComponent,
    InputPasswordComponent,
    CheckboxComponent,
    TableComponent,
    CardComponent,
    SideMenuComponent,
    HeaderComponent,
    MainPageComponent,
    ModalComponent,
    AutoCompleteComponent,
    DatepickerComponent
  ],

  exports: [
    ButtonComponent,
    MaterialModule,
    InputTextComponent,
    InputPasswordComponent,
    CheckboxComponent,
    TableComponent,
    CardComponent,
    SideMenuComponent,
    HeaderComponent,
    MainPageComponent,
    ModalComponent,
    AutoCompleteComponent,
    DatepickerComponent,
  ],
  providers: [],
})
export class SharedModule { }
