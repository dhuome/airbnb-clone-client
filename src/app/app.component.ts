import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToastService } from './layout/services/toast/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isListingView = true;

  toastService = inject(ToastService);
  faIconLibrary = inject(FaIconLibrary);
  messageService = inject(MessageService);

  ngOnInit(): void {
    this.initFontAwesome();
    this.listenToastService();
  }

  // This is for initiate FontAwesome icons
  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

  private listenToastService() {
    this.toastService.sendSub.subscribe({
      next: (newMessage) => {
        if (newMessage && newMessage.summary !== this.toastService.initState) {
          this.messageService.add(newMessage);
        }
      },
    });
  }
}
