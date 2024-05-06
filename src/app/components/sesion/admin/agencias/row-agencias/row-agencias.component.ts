import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: '[agencia]',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './row-agencias.component.html',
  styleUrl: './row-agencias.component.css'
})
export class RowAgenciasComponent {
  @Input() agencia!: any;
}
