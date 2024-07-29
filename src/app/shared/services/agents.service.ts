import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";

import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Agent } from "../interfaces/agent.interface";

@Injectable({
  providedIn: "root",
})
export class AgentService {
  baseUrl = "http://localhost:3001/Agents";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(agents: Agent): Observable<Agent> {
    return this.http.post<Agent>(this.baseUrl, agents).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Agent> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Agent>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(id: any, agents: Agent): Observable<Agent> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.put<Agent>(url, agents).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

    public editCurrency(id:any , item: Agent): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, item,).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
    }

  delete(id: number): Observable<Agent> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Agent>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

    deleteAgent(id: any): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`).pipe();
    }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
