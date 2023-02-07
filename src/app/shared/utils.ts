import { HttpClient } from "@angular/common/http";

export class OlamsMakeRequest<T> {
    private _model: T | undefined;
    http: HttpClient
    APPLICATION_BASE_URL = 'http://127.0.0.1:8000/api/application/'
    EDUCATION_BASE_URL = 'http://127.0.0.1:8000/api/education-info/'


    constructor() { }

    public post(value: T, body: any, isapplication: boolean, headers: any, sufix_url: any) {
        this._model = value;
        if (isapplication) {

            let response = this.http.post<T>(`${this.APPLICATION_BASE_URL}${sufix_url}`, body, { headers });
            return response;
        }
        else {
            let response = this.http.post<T>(`${this.EDUCATION_BASE_URL}${sufix_url}`, body, { headers });

            return response;

        }
    }

    public get(): T | undefined {
        return this._model;
    }

    // public put(): string {
    //   return `${this.name}: ${this._model}`;
    // }
}

let value = new OlamsMakeRequest<number>();
// value.post();
console.log(value.toString()); // myNumber: 10