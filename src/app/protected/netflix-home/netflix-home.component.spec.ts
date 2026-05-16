import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NetflixHomeComponent } from './netflix-home.component';

describe('NetflixHomeComponent', () => {
  let component: NetflixHomeComponent;
  let fixture: ComponentFixture<NetflixHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NetflixHomeComponent, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetflixHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('filters by selected category', () => {
    component.selectCategory('Sci-Fi');

    expect(component.visibleShows.length).toBeGreaterThan(0);
    expect(component.visibleShows.every(show => show.genre === 'Sci-Fi')).toBeTrue();
  });
});

