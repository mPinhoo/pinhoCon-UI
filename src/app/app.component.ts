import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'consorxpress-ui';


  constructor(private languageService: LanguageService){
    this.languageService.loadLanguage();
  }

  
  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }
}
