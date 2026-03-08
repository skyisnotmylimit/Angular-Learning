import { HoverPopup } from './../directives/hover-popup';
import { Component, inject, input, signal } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { PhoneService } from '../services/phone-service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { of, switchMap } from 'rxjs';
import { type PhoneType } from '../models/phoneModel';
import { AdminControl } from '../directives/admin-control';


@Component({
  selector: 'app-phone-view',
  imports: [KeyValuePipe, AdminControl, HoverPopup],
  templateUrl: './phone-view.html',
  styleUrl: './phone-view.css',
})
export class PhoneView {
  private readonly phoneService = inject(PhoneService);
  readonly selectedPhoneId = input<string | null>(null);
  readonly isAdmin = signal<boolean>(false);

  readonly selectedPhone = toSignal<PhoneType | null>(
    toObservable(this.selectedPhoneId).pipe(
      switchMap((id) => {
        if (!id) {
          return of(null);
        }

        return this.phoneService.getPhoneById(id);
      })
    ),
    { initialValue: null }
  );

  onCheckboxChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.isAdmin.set(inputElement.checked);
  }
}
