import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRate } from './exchange-rate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CurrencyExchange';
  exchangeRates : ExchangeRate[];
  currencies : string[];
  sourceAmount : number;
  targetAmount : number;
  source : string = 'USD';
  target : string = 'USD';

  constructor(private exchangeRateService : ExchangeRateService){}

  async getExchangeRates(){
    this.exchangeRates = await this.exchangeRateService.getExchangeRates();
  }
  getCurrencies(){
    this.currencies = this.exchangeRateService.getCurrencies();
  }
  ngOnInit(){
    this.getCurrencies();
    this.getExchangeRates();
  }
  onSourceInput(){
    this.targetAmount = this.exchangeRateService.getTargetAmountBySource( this.source, this.target, this.sourceAmount);
  }

  onTargetInput(){
    this.sourceAmount = this.exchangeRateService.getSourceAmountByTarget( this.source, this.target, this.targetAmount);

  }
  onSourceOption(currency : string){
    this.targetAmount = this.exchangeRateService.getTargetAmountBySource( this.source, this.target, this.sourceAmount);
  }
  onTargetOption(currency : string){
    this.targetAmount = this.exchangeRateService.getTargetAmountBySource( this.source, this.target, this.sourceAmount);
  }
}
