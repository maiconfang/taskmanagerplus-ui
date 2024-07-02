import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../shared/storage/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private storage: StorageService
  ) {

    const browserLang = this.storage.getLocalStorage('current_lang');
    translate.use(browserLang.match(/PT-BR|EN/) ? browserLang : 'EN');

  }

  ngOnInit() {
  }

  

}
