import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  readonly API_URL: string = "http://francescoborri.ddns.net:8000";
}
