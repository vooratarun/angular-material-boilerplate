import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: string;
  image: string;
  accent: string;
  description: string;
  favorite: boolean;
  addedToCart: boolean;
}

interface Feature {
  title: string;
  text: string;
  icon: string;
}

@Component({
  selector: 'app-ecommerce-tailwind',
  standalone: true,
  templateUrl: './ecommerce-tailwind.component.html'
})
export class EcommerceTailwindComponent {
  readonly categories = ['All', 'Headphones', 'Watches', 'Speakers', 'Accessories'];

  selectedCategory = 'All';

  products: Product[] = [
    {
      id: 1,
      name: 'Nova Pro Headphones',
      category: 'Headphones',
      price: 199,
      originalPrice: 249,
      rating: 4.9,
      reviews: 184,
      badge: 'Best Seller',
      image: '🎧',
      accent: 'from-fuchsia-500 via-purple-500 to-indigo-500',
      description: 'Wireless ANC headphones with studio-grade sound and 40-hour battery life.',
      favorite: true,
      addedToCart: true
    },
    {
      id: 2,
      name: 'Luma Smart Watch',
      category: 'Watches',
      price: 279,
      originalPrice: 329,
      rating: 4.8,
      reviews: 96,
      badge: 'New',
      image: '⌚',
      accent: 'from-sky-500 via-cyan-500 to-teal-500',
      description: 'Fitness, sleep, and heart-rate tracking with an always-on AMOLED display.',
      favorite: false,
      addedToCart: false
    },
    {
      id: 3,
      name: 'Pulse Mini Speaker',
      category: 'Speakers',
      price: 129,
      originalPrice: 159,
      rating: 4.7,
      reviews: 73,
      badge: 'Hot Deal',
      image: '🔊',
      accent: 'from-amber-400 via-orange-500 to-rose-500',
      description: 'Portable premium speaker with deep bass, water resistance, and voice control.',
      favorite: false,
      addedToCart: false
    },
    {
      id: 4,
      name: 'Magnetic Power Bank',
      category: 'Accessories',
      price: 89,
      originalPrice: 109,
      rating: 4.6,
      reviews: 52,
      badge: 'Limited',
      image: '🔋',
      accent: 'from-emerald-500 via-green-500 to-lime-500',
      description: 'Snap-on fast charger with compact design and airline-friendly capacity.',
      favorite: true,
      addedToCart: false
    }
  ];

  readonly features: Feature[] = [
    {
      title: 'Free express shipping',
      text: 'Fast delivery on every order above $99 across major cities.',
      icon: '🚚'
    },
    {
      title: '30-day returns',
      text: 'Try it at home and return it easily if it is not the right fit.',
      icon: '↩️'
    },
    {
      title: 'Secure checkout',
      text: 'Encrypted payments with all major cards and digital wallets.',
      icon: '🔒'
    }
  ];

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  toggleFavorite(productId: number): void {
    this.products = this.products.map(product =>
      product.id === productId ? { ...product, favorite: !product.favorite } : product
    );
  }

  addToCart(productId: number): void {
    this.products = this.products.map(product =>
      product.id === productId ? { ...product, addedToCart: true } : product
    );
  }

  get visibleProducts(): Product[] {
    if (this.selectedCategory === 'All') {
      return this.products;
    }

    return this.products.filter(product => product.category === this.selectedCategory);
  }

  get cartCount(): number {
    return this.products.filter(product => product.addedToCart).length;
  }

  get favoriteCount(): number {
    return this.products.filter(product => product.favorite).length;
  }
}

