import { Component, OnInit, Input } from '@angular/core';
import { AssetService } from '../asset.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  @Input() showOrHideMenu;

  menus: Array<any> = [];

  constructor(
    private assetService: AssetService,
    private authService: AuthService) { }

  ngOnInit() {
    this.assetService.getSidePanelLinks()
    .subscribe((response: any) => {
      this.menus = response.sideMenuLinks;
    }, () => {
      console.log('Error data not found');
    });
  }

  logout() {
    this.authService.logout();
  }
}
