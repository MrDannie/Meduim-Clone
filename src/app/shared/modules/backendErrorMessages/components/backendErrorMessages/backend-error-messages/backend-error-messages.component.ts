import { Component, Input, OnInit } from '@angular/core';
import { IBackendErrors } from 'src/app/auth/types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-message',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
  constructor() { }
  @Input('backendErrors') backendErrorsProps: IBackendErrors;

  errorMessages: string[]

  ngOnInit(): void {
     this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
       const messages = this.backendErrorsProps[name].join(' ')
       return `${name} ${messages}`
     })
     console.log('here is error message', this.errorMessages)
  }

}
