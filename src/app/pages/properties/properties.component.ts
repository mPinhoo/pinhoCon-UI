import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Propertie } from 'src/app/shared/interfaces/propertie.interface';
import { PropertieService } from 'src/app/shared/services/properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  public columns: string[] = ['Street', 'Neighborhood', 'Sale Price', 'Rent Price', 'pageInputCSV.table.status', 'general.actions']
  resultData: any
  data: any[] = [];

  constructor(
    private properties: PropertieService,
    private router: Router,) {
  }

  ngOnInit() {

    this.getPropertie()

  }

  getPropertie() {
    this.properties.read().subscribe(allLogs => {
      this.resultData = allLogs
      if (allLogs) {
        this.resultData = allLogs.map((logs: Propertie) => {

            let stringNum = logs.valorVenda;
            let numero = parseFloat(stringNum);

            let stringNum2 = logs.precoAluguel;
            let numero2 = parseFloat(stringNum2);

          return {
            'id': logs.id,
            'Street': logs.logradouro + ' - N°: ' + logs.numero,
            'Neighborhood': logs.bairro,
            'Sale Price': numero.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' }),
            'Rent Price': numero2.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' }),
            'pageInputCSV.table.status': logs.status,
            'general.actions': ''
          }
        })
      }
    })
  }

  editPropertie(item: any) {
    console.log(item.id)
    this.router.navigate(['/edit-properties/', item.id]);
  }

  public deletePropertie(item: any) {
    this.properties.deleteCurrency(item.id).subscribe();
    this.data = this.data.filter((currency: Propertie) => item.id !== currency.id)
    window.location.reload()

  }

}
