import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-breed-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatGridListModule],
  templateUrl: './breed-detail.component.html',
  styleUrl: './breed-detail.component.scss'
})
export class BreedDetailComponent {
  @Input() breedId: string = '';
  breed: any = {};
  images: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const breedId = this.route.snapshot.paramMap.get('id');
    if (breedId) {
      this.apiService.getBreedById(breedId).subscribe((data: any) => {
        this.breed = data;
      });
      this.apiService.getImagesByBreedId(breedId).subscribe((data: any) => {
        this.images = data;
      });
    }
  }
}
