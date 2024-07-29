import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";

import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Propertie } from "../interfaces/propertie.interface";

@Injectable({
  providedIn: "root",
})
export class PropertieService {
  baseUrl = "http://localhost:3001/Propriedades";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(properties: Propertie): Observable<Propertie> {
    return this.http.post<Propertie>(this.baseUrl, properties).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Propertie[]> {
    return this.http.get<Propertie[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Propertie> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Propertie>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(id: any, properties: Propertie): Observable<Propertie> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.put<Propertie>(url, properties).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

    public editCurrency(id:any , item: Propertie): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, item,).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
    }

  delete(id: number): Observable<Propertie> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Propertie>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

    deleteCurrency(id: any): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`).pipe();
    }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
