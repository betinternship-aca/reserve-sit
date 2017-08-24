import { Component, Inject, OnInit } from '@angular/core';
import { ISit } from '../../defines/ISit';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-sit-dialog',
  templateUrl: './sit-dialog.component.html',
  styleUrls: ['./sit-dialog.component.scss']
})
export class SitDialogComponent implements OnInit {
  sit: ISit;

  constructor(
    @Inject(MD_DIALOG_DATA) data: ISit
  ) {
    this.sit = data;
  }

  ngOnInit() {
  }

}