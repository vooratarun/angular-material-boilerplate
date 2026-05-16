import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EcommerceTailwindComponent } from './ecommerce-tailwind.component';

describe('EcommerceTailwindComponent', () => {
  let component: EcommerceTailwindComponent;
  let fixture: ComponentFixture<EcommerceTailwindComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EcommerceTailwindComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filters products by selected category', () => {
    component.selectCategory('Headphones');

    expect(component.visibleProducts.length).toBe(1);
    expect(component.visibleProducts[0].category).toBe('Headphones');
  });

  it('adds items to cart and updates cart count', () => {
    component.addToCart(2);

    expect(component.cartCount).toBe(2);
    expect(component.products.find(product => product.id === 2)?.addedToCart).toBeTrue();
  });
});

