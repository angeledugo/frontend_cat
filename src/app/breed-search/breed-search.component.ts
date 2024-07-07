import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-breed-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,   
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,],
  templateUrl: './breed-search.component.html',
  styleUrl: './breed-search.component.scss'
})
export class BreedSearchComponent {
  query: string = '';
  breeds: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  search(): void {
    if (this.query) {
      this.apiService.searchBreeds(this.query).subscribe((data: any) => {
        this.breeds = data;
      });
    }
  }
}
