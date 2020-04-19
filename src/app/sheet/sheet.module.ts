import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AttributeFieldComponent} from './attribute-field/attribute-field.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    AttributeFieldComponent
  ],
  declarations: [
    AttributeFieldComponent
  ]
})
export class ViewModule {}
