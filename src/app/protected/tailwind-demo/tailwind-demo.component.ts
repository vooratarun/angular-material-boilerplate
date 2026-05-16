import { Component } from '@angular/core';

interface StatCard {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
}

interface Notification {
  id: number;
  text: string;
  time: string;
  read: boolean;
}

@Component({
  selector: 'app-tailwind-demo',
  standalone: true,
  templateUrl: './tailwind-demo.component.html'
})
export class TailwindDemoComponent {
  stats: StatCard[] = [
    { label: 'Total Users', value: '24,521', change: '+12%', positive: true, icon: '👥' },
    { label: 'Revenue', value: '$84,230', change: '+8.2%', positive: true, icon: '💰' },
    { label: 'Active Sessions', value: '1,382', change: '-3.1%', positive: false, icon: '📡' },
    { label: 'Bounce Rate', value: '28.4%', change: '-5%', positive: true, icon: '📉' }
  ];

  notifications: Notification[] = [
    { id: 1, text: 'New user registered: john@example.com', time: '2 min ago', read: false },
    { id: 2, text: 'Server CPU usage exceeded 80%', time: '15 min ago', read: false },
    { id: 3, text: 'Monthly report is ready to download', time: '1 hr ago', read: true },
    { id: 4, text: 'Database backup completed successfully', time: '3 hr ago', read: true }
  ];

  skills = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 78 },
    { name: 'Node.js', level: 70 }
  ];

  markAllRead(): void {
    this.notifications = this.notifications.map(n => ({ ...n, read: true }));
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }
}

