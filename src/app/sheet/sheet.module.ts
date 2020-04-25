import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AttributeFieldComponent} from './attribute-field/attribute-field.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    AttributeFieldComponent
  ],
  declarations: [
    AttributeFieldComponent
  ]
})
export class ViewModule {}
