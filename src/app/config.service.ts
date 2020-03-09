import { Injectable } from '@angular/core';
import {configuration} from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config = configuration;  
 
  constructor() { }

  getConfig():any{
    return this.config;
  }
}
