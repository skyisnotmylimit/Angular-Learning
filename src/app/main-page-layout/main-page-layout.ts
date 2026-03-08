import { Component,computed,signal} from '@angular/core';
import { PhoneList } from '../phone-list/phone-list';
import { PhoneView } from '../phone-view/phone-view';
import { type PhoneType } from '../models/phoneModel';

@Component({
  selector: 'app-main-page-layout',
  imports: [PhoneList,PhoneView],
  templateUrl: './main-page-layout.html',
  styleUrl: './main-page-layout.css',
})
export class MainPageLayout {
  selectedPhoneId = signal<string|null>(null);
  onSelectPhone(id:string) {
    this.selectedPhoneId.set(id);
  }
}
