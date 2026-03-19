import { Component, signal, inject, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { DictionaryService } from '../services/dictionary-service';
import { Subscription, debounceTime, switchMap, of } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dictionary-component',
  imports: [FormsModule, JsonPipe],
  templateUrl: './dictionary-component.html',
  styleUrl: './dictionary-component.css',
})
export class DictionaryComponent implements OnDestroy {
  private readonly dictionaryService = inject(DictionaryService);
  private subscription: Subscription;

  typedText = signal<string>('');
  result = signal<any>(null);

  private search$ = toObservable(this.typedText);

  constructor() {
    this.subscription = this.search$
      .pipe(
        debounceTime(500),
        switchMap((word) =>
          word ? this.dictionaryService.getDefination(word) : of(null)
        )
      )
      .subscribe((res) => this.result.set(res));
  }

  onInputChange(e: Event) {
    const input = e.target as HTMLInputElement | null;
    const value = input?.value ?? '';
    this.typedText.set(value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
