import { Component, EventEmitter, Injectable, Injector, Input, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PageEvent, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { Subject } from 'rxjs';


@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {

changes = new Subject<void>();

  itemsPerPageLabel: string = "Itens por página";
  nextPageLabel: string = 'Proxima Pagina';
  previousPageLabel: string = 'Pagina Anterior';
  firstPageLabel: string = 'Primeira Pagina';
  lastPageLabel: string = 'Ultima Pagina'

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${page + 1} of ${amountPages}`;
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
})
export class TableComponent {

  isLoadingResults = true
  formGroup!: UntypedFormGroup;
  formBuilder: UntypedFormBuilder;

  @Input() dataSource: any[] = [''];
  @Input() displayedColumns: any[] | undefined;

  @Input() pageSize: number = 0;
  @Input() totalItems: number = 0;

  @Input() btnEdit: boolean = false;
  @Input() btnDelet: boolean = false;
  @Input() btnStatus: boolean = false;
  @Input() inpEdit: boolean = false;
  @Input() btnEye: boolean = false;
  @Input() pageLength: number = 0

  @Output() sendClick = new EventEmitter()
  @Output() edit = new EventEmitter();
  @Output() nextPageEye = new EventEmitter();
  @Output() clientDetails = new EventEmitter();
  @Output() pageChanged = new EventEmitter();

  constructor(
    private injector: Injector,
  ) {
    this.formBuilder = injector.get<UntypedFormBuilder>(UntypedFormBuilder)

   }
 
   ngOnInit() {
    this.formGroup = this.formBuilder.group({
      inpEdit: [''],
    });

  }

  dataEdit(item?: any){
    this.edit.emit(item);
  }

  nextPage() {
    this.nextPageEye.emit()
  };

  onClick(item: any){
    this.sendClick.emit(item);
  }

  onPageChange(event: PageEvent) {
    this.pageChanged.emit(event);
  }

  



}

