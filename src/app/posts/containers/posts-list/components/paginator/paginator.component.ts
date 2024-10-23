import {Component, EventEmitter, input, Output} from '@angular/core';
import {Paginate} from '../../../../models';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  totalCount = input<number>(0);
  limit = input<number>(8);
  currentPage: number = 1;

  @Output() onPageSelect: EventEmitter<Paginate> = new EventEmitter<Paginate>();

  get totalPages(): number[] {
    const totalPages = Math.ceil(this.totalCount() / this.limit());
    return Array(totalPages).fill(0).map((_, i) => i + 1);
  }

  selectPage(page: number) {
    this.currentPage = page;
    this.onPageSelect.emit({limit: this.limit(), page});
  }
}
