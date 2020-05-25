import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

  beMember(e) { }
  userClicked(e) { }
  test() { }

  logout(e) {
    e.preventDefault();
    const observer = new Observable(subscriber => {
      localStorage.removeItem('jwt');
      subscriber.next('logout');
    });
    observer.subscribe(x => {
      if (x === 'logout') {
        location.reload();
      }
    });
  }

}
