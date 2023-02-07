// animation.ts

import { trigger, transition, style, animate } from '@angular/animations';

export const slideInOutAnimation =
  trigger('slideInOutAnimation', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.5s ease-in', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({ transform: 'translateX(100%)' }))
    ])
  ]);
