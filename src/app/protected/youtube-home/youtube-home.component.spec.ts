import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { YoutubeHomeComponent } from './youtube-home.component';

describe('YoutubeHomeComponent', () => {
  let component: YoutubeHomeComponent;
  let fixture: ComponentFixture<YoutubeHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [YoutubeHomeComponent, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('filters videos by selected category', () => {
    component.updateFilter('Programming');

    expect(component.filteredVideos.length).toBeGreaterThan(0);
    expect(component.filteredVideos.every(video => video.category === 'Programming')).toBeTrue();
  });
});

