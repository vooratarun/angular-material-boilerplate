import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDemoComponent } from './material-demo.component';

describe('MaterialDemoComponent', () => {
  let component: MaterialDemoComponent;
  let fixture: ComponentFixture<MaterialDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MaterialDemoComponent, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('contains demo list data', () => {
    expect(component.demoItems.length).toBeGreaterThan(0);
  });

  it('has default state for new controls', () => {
    expect(component.sliderValue).toBe(45);
    expect(component.progressValue).toBe(45);
    expect(component.selectedTheme).toBe('system');
    expect(component.notificationsEnabled).toBeTrue();
    expect(component.isLoading).toBeFalse();
  });

  it('has form and table demo defaults', () => {
    expect(component.userName).toBe('Alex');
    expect(component.favoriteFramework).toBe('Angular');
    expect(component.releaseDate).toBeTruthy();
    expect(component.autoPlay).toBeTrue();
    expect(component.displayedColumns).toEqual(['name', 'role', 'status']);
    expect(component.tableRows.length).toBe(3);
  });

  it('has chips and sidenav defaults', () => {
    expect(component.quickFilters.length).toBe(4);
    expect(component.demoSidenavOpened).toBeTrue();
  });
});
