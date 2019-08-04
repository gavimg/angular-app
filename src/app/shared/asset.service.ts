import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient) { }

  getSidePanelLinks() {
    return this.http.get('assets/side_panel_links.json');
  }
}
