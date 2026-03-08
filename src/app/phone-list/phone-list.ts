import { Component, inject, signal, output } from '@angular/core';
import { PhoneService } from '../services/phone-service';
import { type PhonesApiResponse } from '../models/phoneModel';
import { toSignal } from '@angular/core/rxjs-interop';
import { KeyValuePipe } from '@angular/common';
import { HoverPopup } from '../directives/hover-popup';

@Component({
  selector: 'app-phone-list',
  imports: [KeyValuePipe, HoverPopup],
  templateUrl: './phone-list.html',
  styleUrl: './phone-list.css',
})
export class PhoneList {
  private readonly phoneService = inject(PhoneService);
  listItemSelect = output<string>();

  allPhones = toSignal(this.phoneService.getAllPhones(), { initialValue: [] as PhonesApiResponse });
  selectedPhone = signal<string|null>(null);

  onListItemClick(id:string) {
    console.log(id);
    this.selectedPhone.set(id);
    this.listItemSelect.emit(id);
  }

}
