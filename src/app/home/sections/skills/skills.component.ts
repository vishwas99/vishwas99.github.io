import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RevealDirective } from '../../../shared/reveal.directive';
import { SkillGroup } from '../../../config/portfolio.types';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  @Input() groups: SkillGroup[] = [];
}
