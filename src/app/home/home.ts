import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router:Router){}
  formData = {
    search: '',
  };

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const profileName = this.formData.search;
    console.log('Searching profile:', profileName);
    this.router.navigate(['/user', profileName]);
    form.resetForm({ search: '' });
  }
}
