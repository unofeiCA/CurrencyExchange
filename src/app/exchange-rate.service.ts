import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRate } from './exchange-rate';

const CURRENCIES : string[] = ['USD', 'CAD', 'CNY', 'EUR', 'GBP', 'CHF', 'AUD', 'HKD', 'RUB'];
const URL : string = 'http://apilayer.net/api/live?access_key=ba58bb60863ed6a169618b614bece399&source=USD&format=1&currencies=';


@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  exchangeRates : ExchangeRate[];

  constructor(private http : HttpClient) { }

  getCurrencies(){
    return CURRENCIES;
  }

  getRateBetweenSourceAndTarget(source : string, target : string){
    var rateBetweenSourceAndUSD, rateBetweenTargetAndUSD;
    for (let er of this.exchangeRates){
      if(er.target == source){
        rateBetweenSourceAndUSD = er.rate;
      }
      if(er.target == target){
        rateBetweenTargetAndUSD = er.rate;
      }
    }

    return rateBetweenSourceAndUSD / rateBetweenTargetAndUSD;
  }

  getTargetAmountBySource(source : string, target : string, amount : number){
    var rateBetweenSourceAndTarget = this.getRateBetweenSourceAndTarget(source, target);
    return amount / rateBetweenSourceAndTarget;
  }

  getSourceAmountByTarget(source : string, target : string, amount : number){
    var rateBetweenSourceAndTarget = this.getRateBetweenSourceAndTarget(source, target);
    return amount * rateBetweenSourceAndTarget;
  }

  async getExchangeRates(){
    var u = URL;
    for(var i = 0; i < CURRENCIES.length; i ++){
      u += CURRENCIES[i];
      if(i != (CURRENCIES.length - 1)){
        u += ',';
      }
    }
    
    await this.http.get(u).subscribe((data) => {
      console.log('json get');
      if(data['success'] == true){
        this.exchangeRates = [];
        var quotes = data['quotes'];
        var source = data['source'];

        for(let key in quotes){
          //find the source and target
          var s = source;
          var t = key.substr(key.indexOf(source) + source.length, key.length - source.length);
          
          var er = new ExchangeRate;
          er.source = s;
          er.target = t;
          er.rate = quotes[key];
          this.exchangeRates.push(er);
        }
      }
    });

    return this.exchangeRates;
  }
}
