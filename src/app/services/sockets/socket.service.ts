// socket.service.ts
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  onNewRideRequest(): Observable<any> {
    return this.socket.fromEvent('newRideRequest');
  }

  onNewRide(): Observable<any> {
    return this.socket.fromEvent('newRide');
  }

  disconnect() {
    this.socket.disconnect();
  }
}