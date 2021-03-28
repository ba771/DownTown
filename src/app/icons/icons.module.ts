import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { allIcons } from 'ng-bootstrap-icons/icons';
import { Icons } from 'ng-bootstrap-icons/bootstrap-icons/icons.provider';



@NgModule({
  declarations: [],
  imports: [
    BootstrapIconsModule.pick(allIcons)

  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class IconsModule { 

}
