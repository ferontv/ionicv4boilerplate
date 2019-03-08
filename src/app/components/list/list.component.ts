import { Component, OnInit, Input } from '@angular/core';
import { isContentQueryHost } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() swapi;
  @Input() icon;
  constructor() { }

  ngOnInit() { }

}
