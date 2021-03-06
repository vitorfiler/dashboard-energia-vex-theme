import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpCenterRoutingModule } from './help-center-routing.module';
import { HelpCenterComponent } from './help-center.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatRippleModule } from '@angular/material/core';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [HelpCenterComponent],
  imports: [
  CommonModule,
    HelpCenterRoutingModule,
    PageLayoutModule,
    FlexLayoutModule,
    MatButtonModule,
    IconModule,
    MatRippleModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    FormsModule,
    MatAutocompleteModule,
    NgxMaskModule.forRoot(),
  ]
})
export class HelpCenterModule {
}
