import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface VideoItem {
  id: number;
  title: string;
  channel: string;
  views: string;
  uploaded: string;
  duration: string;
  category: string;
  thumbnail: string;
}

@Component({
  selector: 'app-youtube-home',
  standalone: true,
  templateUrl: './youtube-home.component.html',
  styleUrl: './youtube-home.component.scss',
  imports: [NgStyle, MatButtonToggleModule, MatCardModule, MatIconModule]
})
export class YoutubeHomeComponent {
  filters = ['All', 'Music', 'Gaming', 'News', 'Programming', 'Podcasts', 'Live'];

  selectedFilter = 'All';

  videos: VideoItem[] = [
    {
      id: 1,
      title: 'Angular Material Dashboard Tutorial 2026',
      channel: 'Code Studio',
      views: '54K views',
      uploaded: '2 days ago',
      duration: '12:45',
      category: 'Programming',
      thumbnail: 'linear-gradient(120deg, #673ab7, #3f51b5)'
    },
    {
      id: 2,
      title: 'Lo-fi Mix for Deep Focus',
      channel: 'Beat Room',
      views: '1.2M views',
      uploaded: '1 week ago',
      duration: '45:08',
      category: 'Music',
      thumbnail: 'linear-gradient(120deg, #ff7043, #ef5350)'
    },
    {
      id: 3,
      title: 'Top 10 Open World Games This Year',
      channel: 'GameQuest',
      views: '380K views',
      uploaded: '3 days ago',
      duration: '9:20',
      category: 'Gaming',
      thumbnail: 'linear-gradient(120deg, #26a69a, #00897b)'
    },
    {
      id: 4,
      title: 'Tech Headlines in 5 Minutes',
      channel: 'Daily Bytes',
      views: '88K views',
      uploaded: '8 hours ago',
      duration: '5:01',
      category: 'News',
      thumbnail: 'linear-gradient(120deg, #42a5f5, #1e88e5)'
    },
    {
      id: 5,
      title: 'Building a REST API with Node and TypeScript',
      channel: 'Dev Simplified',
      views: '210K views',
      uploaded: '5 days ago',
      duration: '18:12',
      category: 'Programming',
      thumbnail: 'linear-gradient(120deg, #8d6e63, #6d4c41)'
    },
    {
      id: 6,
      title: 'Live Coding: Build a Todo App from Scratch',
      channel: 'Frontend Live',
      views: '29K views',
      uploaded: 'Live now',
      duration: 'LIVE',
      category: 'Live',
      thumbnail: 'linear-gradient(120deg, #ab47bc, #8e24aa)'
    },
    {
      id: 7,
      title: 'How Indie Musicians Grow Their Audience',
      channel: 'Creator Talks',
      views: '72K views',
      uploaded: '4 days ago',
      duration: '14:33',
      category: 'Podcasts',
      thumbnail: 'linear-gradient(120deg, #ffa726, #fb8c00)'
    },
    {
      id: 8,
      title: 'Speedrun Highlights and Esports Recap',
      channel: 'Arena Central',
      views: '153K views',
      uploaded: '6 days ago',
      duration: '11:16',
      category: 'Gaming',
      thumbnail: 'linear-gradient(120deg, #5c6bc0, #3949ab)'
    }
  ];

  get filteredVideos(): VideoItem[] {
    if (this.selectedFilter === 'All') {
      return this.videos;
    }

    return this.videos.filter(video => video.category === this.selectedFilter);
  }

  updateFilter(filter: string): void {
    this.selectedFilter = filter;
  }
}

