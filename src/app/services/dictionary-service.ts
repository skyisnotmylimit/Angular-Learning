import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private readonly httpClient = inject(HttpClient);

  getDefination(word:string) {
    return this.httpClient.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  }

}
