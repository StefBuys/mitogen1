import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { GuidePage } from '../guide/guide';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GuidePage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
