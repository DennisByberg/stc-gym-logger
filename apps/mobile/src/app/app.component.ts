import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonIcon, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBack, chevronForward } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonIcon, IonRouterOutlet, RouterLink],
})
export class AppComponent {
  readonly isMenuOpen = signal(false);

  constructor() {
    addIcons({ chevronBack, chevronForward });
  }

  openMenu(): void {
    this.isMenuOpen.set(true);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
