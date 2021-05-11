import {Component, OnInit} from '@angular/core';
import {PushNotificationService} from './services/push-notification.service';
import {INotificationPayload} from './services/notificacion-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularNotificacionesFirebase';
  mesaggeReceived = '';
  messageBody = '';

  constructor(private notificacion: PushNotificationService) {
    notificacion.requestPermission().then(token => {
      console.log(token);
    });
  }

  ngOnInit(): void {
    this.notificacion.receiveMessage().subscribe(payload => {
      console.log(payload);
      this.mesaggeReceived = payload.notification.title;
      this.messageBody = payload.notification.body;
    });
  }
}
