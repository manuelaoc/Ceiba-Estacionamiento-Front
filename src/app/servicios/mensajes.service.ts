import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  messagesSuccess: string[] = [];
  messagesError: string[] = [];

  constructor() { }

  addSuccess(message: string) {
    this.messagesSuccess.push(message);
  }

  addError(message: string) {
    this.messagesError.push(message);
  }

  clear() {
    this.messagesSuccess = [];
    this.messagesError = [];
  }
}
