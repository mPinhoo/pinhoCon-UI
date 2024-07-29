import { Component, EventEmitter, Injector, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export interface ClientList {
  name: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  formGroup!: UntypedFormGroup;
  formBuilder: UntypedFormBuilder;

  public checkboxValue: boolean = false;

  public myFormControl: FormControl = new FormControl();

  public clientList: ClientList[] = [{ name: 'google.com.br' }, { name: 'nexer.com.br' }, { name: 'geoprojetos.com.br' }];

  public filteredClientList: Observable<ClientList[]> | undefined;

  @Input() content: string = '';
  @Input() header: string = '';
  @Input() btnExport: boolean = false;
  @Input() exportInvoicing: boolean = false;
  @Input() importCSV: boolean = false;

  @Output() export = new EventEmitter();

  @ViewChild('fileInput') fileInput: any;

  constructor(
    private injector: Injector,
  ) {
    this.formBuilder = injector.get<UntypedFormBuilder>(UntypedFormBuilder);

    this.formGroup = this.formBuilder.group({
      datePicker: ['']
    })
  }

  ngOnInit() {
  }

  public processCsv(file: File) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const csvData = e.target.result;

    };

    reader.readAsText(file);
  }

  exportClients() {
    this.export.emit()
  }

  public itemSelected(item: ClientList) {
  }

  public onFileSelected() {
    const selectedFiles: FileList = this.fileInput.nativeElement.files;

    if (selectedFiles.length > 0) {
      this.processCsv(selectedFiles[0]);
    }
  }



}
