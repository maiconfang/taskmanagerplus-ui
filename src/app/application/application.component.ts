import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/storage/storage.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  userLogged = this.storage.getLocalStorage('login');

  constructor(
    private storage: StorageService,
  ) { }

  ngOnInit() {
  }

}
