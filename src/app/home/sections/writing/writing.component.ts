import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RevealDirective } from '../../../shared/reveal.directive';
import { WritingEntry } from '../../../config/portfolio.types';

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.css',
})
export class WritingComponent {
  @Input() entries: WritingEntry[] = [];
}
