import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Propertie } from 'src/app/shared/interfaces/propertie.interface';
import { PropertieService } from 'src/app/shared/services/properties.service';

@Component({
  selector: 'app-add-properties',
  templateUrl: './add-properties.component.html',
  styleUrls: ['./add-properties.component.scss']
})
export class AddPropertiesComponent implements OnInit {

  public id: any;

  formGroup!: UntypedFormGroup;
  formBuilder: UntypedFormBuilder;

  constructor(
    private route: ActivatedRoute,
    private injector: Injector,
    private propertiesService: PropertieService

  ) {
    this.formBuilder = injector.get<UntypedFormBuilder>(UntypedFormBuilder)

    this.formGroup = this.formBuilder.group({
      Street: [''],
      Neighborhood: [''],
      SalePrice: [''],
      RentPrice: [''],
      Number: [''],
      Status:['']
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.getSelectedPropertie()
    } else {
      this.formGroup.patchValue({
        Street: '',
        Neighborhood: '',
        SalePrice: '',
        RentPrice: '',
        Number: '',
        Status: ''
      })
    }
  }

  savePropertie() {
    if (this.id) {
      this.editPropertie()
    } else {
      this.createPropertie();
    }
  }

  editPropertie() {
    const item: Propertie = {
      logradouro: this.formGroup.value.Street,
      bairro: this.formGroup.value.Neighborhood,
      valorVenda: this.formGroup.value.SalePrice,
      precoAluguel: this.formGroup.value.RentPrice,
      numero: this.formGroup.value.Number,
      status: this.formGroup.value.Status
    };
    this.propertiesService.editCurrency(this.id, item).subscribe(resp => {
      if (resp) {
        window.history.back();
      }
    })
  }
  createPropertie() {
    const item: Propertie = {
      logradouro: this.formGroup.value.Street,
      bairro: this.formGroup.value.Neighborhood,
      valorVenda: this.formGroup.value.SalePrice,
      precoAluguel: this.formGroup.value.RentPrice,
      numero: this.formGroup.value.Number,
      status: 'Disponível'
    };

    this.propertiesService.create(item).subscribe(resp => {
      if (resp) {
        window.history.back();
      }
    })
  }

  getSelectedPropertie() {
    this.propertiesService.readById(this.id).subscribe(resp => {
      if (resp) {
        this.formGroup.patchValue({
          Street: resp.logradouro,
          Neighborhood: resp.bairro,
          SalePrice: resp.valorVenda,
          RentPrice: resp.precoAluguel,
          Number: resp.numero,
          Status: resp.status
        })
      }
    })
  }

}
