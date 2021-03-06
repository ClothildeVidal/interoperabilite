import { Patient } from './Patient';
import { Injectable } from '@angular/core';
// import { Patient } from './patient'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`PatientService: ${message}`);
}

private patientUrl = 'https://fhir.eole-consulting.io/api/patient';

/** GET hero by id. Will 404 if id not found */
getPatient(id: string): Promise<Patient> {
  const url = `${this.patientUrl}/${id}`;
  return this.http.get<Patient>(url).toPromise()
}


/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

}
