import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  @Input() showOrHideMenu;

  menus: Array<any> = [
    {
      name: 'Users',
      path: '/users',
      icon: 'fa fa-users',
      childrens: []
    },
    {
      name: 'Messages',
      path: '/message',
      icon: 'fa fa-users',
      childrens: []
    },
    {
      name: 'Analytics',
      path: '/analytics',
      icon: 'fa fa-bar-chart',
      childrens: [
        {
          name: 'Tables',
          path: '/tables',
          icon: '',
        },
        {
          name: 'Charts',
          path: '/charts',
          icon: '',
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
