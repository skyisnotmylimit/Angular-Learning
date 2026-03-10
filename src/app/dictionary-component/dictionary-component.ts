import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DictionaryService } from '../services/dictionary-service';

@Component({
  selector: 'app-dictionary-component',
  imports: [FormsModule],
  templateUrl: './dictionary-component.html',
  styleUrl: './dictionary-component.css',
})
export class DictionaryComponent {
  private readonly dictionaryService = inject(DictionaryService);
  typedText = signal<string>('');
  dictionaryObservable$ = this.dictionaryService.getDefination(this.typedText());

  onInputChange(e: Event) {
    const input = e.target as HTMLInputElement | null;
    this.typedText.set(input?.value ?? '');
  }
}
