import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Agencia } from '../../../../../interfaces/agencia';

@Component({
  selector: '[agencia]',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './row-agencias.component.html',
  styleUrl: './row-agencias.component.css',
})
export class RowAgenciasComponent {
  @Input() agencia!: any;
  Row!: Agencia;

  @Output() itemSelect = new EventEmitter<Agencia>();

  changeEstatus(row: Agencia) {
    this.itemSelect.emit(row);
  }
}
