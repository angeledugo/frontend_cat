import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-breed-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule],
  templateUrl: './breed-list.component.html',
  styleUrl: './breed-list.component.scss'
})
export class BreedListComponent {
  breeds: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getBreeds().subscribe((data: any) => {
      this.breeds = data;
    });
  }
}
