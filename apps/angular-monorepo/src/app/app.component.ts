import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SelectionBridgeComponent } from './components/selection-bridge/selection-bridge.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SelectionBridgeComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-monorepo';
}
