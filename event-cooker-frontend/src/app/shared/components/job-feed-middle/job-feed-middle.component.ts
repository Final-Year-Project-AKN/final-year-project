import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-feed-middle',
  templateUrl: './job-feed-middle.component.html',
  styleUrls: ['./job-feed-middle.component.scss']
})
export class JobFeedMiddleComponent implements OnInit {

  @Input() posts: Array<any>;
  display = "none";

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
}
