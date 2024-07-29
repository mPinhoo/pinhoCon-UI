import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  selectedLanguage: string = '';
  supportLanguages = ['en-us', 'es-es', 'pt-br'];

  constructor(public translateService: TranslateService,) {
  }

  async loadLanguage() {

    this.translateService.currentLang = '';

    this.translateService.addLangs(this.supportLanguages);
    const currentLanguage = localStorage.getItem('language');

    if (!currentLanguage || !this.supportLanguages.includes(currentLanguage)) {
      this.translateService.setDefaultLang('pt-br');
      this.selectedLanguage = 'pt-br';
      localStorage.setItem('language', 'pt-br');

      let browserlang: any = await this.translateService.getBrowserCultureLang();
      browserlang = browserlang.toLocaleLowerCase()
      if (this.supportLanguages.includes(browserlang)) {
        this.translateService.use(browserlang);
      
        this.selectedLanguage = browserlang;
        localStorage.setItem('language', browserlang);
      }
    } else {
      this.translateService.use(currentLanguage);
  
      this.selectedLanguage = this.translateService.currentLang;
    }
  }

  useLang(lang: string) {
    this.translateService.use(lang);
 
    this.selectedLanguage = lang;
    localStorage.setItem('language', lang);
  }
}
