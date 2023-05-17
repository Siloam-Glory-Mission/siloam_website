import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  selectmenu: number=0;
  

  ngOnInit(){
    this.selectmenu=0

  }

  gotoment(x:number){
    this.selectmenu=x
  }

}
