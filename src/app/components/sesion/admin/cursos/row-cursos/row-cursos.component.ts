import { Component, Input } from '@angular/core';
import { Curso } from '../../../../../interfaces/curso';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: '[curso]',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './row-cursos.component.html',
  styleUrl: './row-cursos.component.css'
})
export class RowCursosComponent {
  @Input() curso!: any;  
}
