import { NgModule } from '@angular/core';

import { AutoSizeDirective } from './auto-size.directive';

@NgModule({
  declarations: [
    AutoSizeDirective,
  ],
  exports: [
    AutoSizeDirective,
  ]
})
export class AutoSizeModule {
}
