import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './header.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    HeaderComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class LibraryHeader {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibraryHeader,
      providers: [SampleService]
    };
  }
}
