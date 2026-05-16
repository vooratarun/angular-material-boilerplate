import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

interface ShowItem {
  id: number;
  title: string;
  genre: string;
  year: number;
  maturity: string;
  poster: string;
}

@Component({
  selector: 'app-netflix-home',
  standalone: true,
  templateUrl: './netflix-home.component.html',
  styleUrl: './netflix-home.component.scss',
  imports: [NgStyle, MatButtonModule, MatCardModule, MatChipsModule, MatIconModule]
})
export class NetflixHomeComponent {
  categories = ['All', 'Action', 'Sci-Fi', 'Drama', 'Thriller', 'Comedy'];

  selectedCategory = 'All';

  featured = {
    title: 'Shadow Protocol',
    description: 'An undercover analyst races across continents to stop a rogue AI from taking down global infrastructure.',
    year: 2026,
    maturity: 'U/A 16+',
    length: '2h 08m'
  };

  shows: ShowItem[] = [
    { id: 1, title: 'Crimson Edge', genre: 'Action', year: 2025, maturity: 'U/A 16+', poster: 'linear-gradient(120deg, #b71c1c, #311b92)' },
    { id: 2, title: 'Orbit Nine', genre: 'Sci-Fi', year: 2026, maturity: 'U/A 13+', poster: 'linear-gradient(120deg, #1a237e, #0d47a1)' },
    { id: 3, title: 'Late Summer', genre: 'Drama', year: 2024, maturity: 'U/A 13+', poster: 'linear-gradient(120deg, #6d4c41, #8d6e63)' },
    { id: 4, title: 'Night Signal', genre: 'Thriller', year: 2026, maturity: 'A', poster: 'linear-gradient(120deg, #263238, #212121)' },
    { id: 5, title: 'Mic Check', genre: 'Comedy', year: 2025, maturity: 'U/A 13+', poster: 'linear-gradient(120deg, #ef6c00, #f9a825)' },
    { id: 6, title: 'After Zero', genre: 'Sci-Fi', year: 2026, maturity: 'U/A 16+', poster: 'linear-gradient(120deg, #004d40, #00695c)' },
    { id: 7, title: 'Break Point', genre: 'Action', year: 2023, maturity: 'U/A 16+', poster: 'linear-gradient(120deg, #3e2723, #bf360c)' },
    { id: 8, title: 'Rainline', genre: 'Drama', year: 2022, maturity: 'U/A 13+', poster: 'linear-gradient(120deg, #455a64, #607d8b)' }
  ];

  get visibleShows(): ShowItem[] {
    if (this.selectedCategory === 'All') {
      return this.shows;
    }

    return this.shows.filter(show => show.genre === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}

