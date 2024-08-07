import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  onNewRide(): Observable<any> {
    return this.socket.fromEvent('newRide');
  }

  onConfirmedRideDriver(): Observable<any> {
    return this.socket.fromEvent('rideDriverConfirmed');
  }

  onAssignDriverToRide(): Observable<any> {
    return this.socket.fromEvent('driverAssigned');
  }

  disconnect() {
    this.socket.disconnect();
  }
}
