import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-demo-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Material Dialog</h2>
    <mat-dialog-content>
      This is a dialog example using Angular Material.
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button type="button" (click)="close()">Close</button>
    </mat-dialog-actions>
  `
})
export class DemoDialogComponent {
  constructor(private readonly dialogRef: MatDialogRef<DemoDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-material-demo',
  standalone: true,
  templateUrl: './material-demo.component.html',
  styleUrl: './material-demo.component.scss',
  imports: [
    DatePipe,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule
  ]
})
export class MaterialDemoComponent {
  demoItems = [
    'Toolbar example',
    'Snackbar action',
    'Dialog interaction',
    'Material list and grid',
    'FAB and buttons'
  ];

  sliderValue = 45;
  selectedTheme = 'system';
  notificationsEnabled = true;
  isLoading = false;

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly dialog: MatDialog
  ) {}

  openSnackBar(): void {
    this.snackBar.open('Saved successfully', 'Undo', {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  openDialog(): void {
    this.dialog.open(DemoDialogComponent, {
      width: '360px'
    });
  }

  updateSlider(value: number): void {
    this.sliderValue = value;
  }

  toggleLoading(): void {
    this.isLoading = !this.isLoading;
  }

  get progressValue(): number {
    return this.sliderValue;
  }

  favoriteFramework = 'Angular';
  userName = 'Alex';
  releaseDate = new Date();
  autoPlay = true;
  demoSidenavOpened = true;

  quickFilters = ['Popular', 'Trending', 'New', 'Recommended'];

  displayedColumns: string[] = ['name', 'role', 'status'];
  tableRows = [
    { name: 'Olivia', role: 'Admin', status: 'Active' },
    { name: 'Noah', role: 'Editor', status: 'Pending' },
    { name: 'Emma', role: 'Viewer', status: 'Active' }
  ];
}
