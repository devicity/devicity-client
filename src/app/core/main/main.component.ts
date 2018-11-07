import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const fab = document.getElementById('fab');
    const row = document.getElementById('row');
    const sidebar = document.getElementById('sidebar');
    fab.addEventListener('click', (event) => {
      fab.classList.toggle('active');
      row.classList.toggle('leftify');
      sidebar.classList.toggle('active');
    });
  }

}
