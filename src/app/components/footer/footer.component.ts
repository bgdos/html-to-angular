import { Component, OnInit } from '@angular/core';
import {InfoService} from '../../services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: []
})
export class FooterComponent {
  constructor ( public _is:InfoService){  }
}
