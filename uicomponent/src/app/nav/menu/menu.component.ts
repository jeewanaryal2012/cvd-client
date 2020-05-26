import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvImage } from '../../util/env';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() user: any;
  imageDomain: string = (new EnvImage()).getImageDomain();
  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
    console.log(this.imageDomain);
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
