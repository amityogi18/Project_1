import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'c2c-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input()
  public message: string = 'This is a default footer message. You can provide your own.';

  constructor() { }

  ngOnInit() {
  }

}
