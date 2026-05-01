import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RevealDirective } from '../../../shared/reveal.directive';
import { Project } from '../../../config/portfolio.types';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @Input() sectionId!: string;
  @Input() label!: string;
  @Input() title!: string;
  @Input() blurb?: string;
  @Input() items: Project[] = [];
  @Input() emptyMessage = 'Nothing to show here yet.';
}
