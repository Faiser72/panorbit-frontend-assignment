import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient) { }

  private data: any = [];
  private userList: any = [];

  ngOnInit() {
    this.getData();
  }

  // this method is used to get the json data through api
  getData() {
    const url = 'https://panorbit.in/api/users.json'
    this.http.get(url).subscribe((res) => {
      this.data = res;
      this.userList = this.data.users;
    })
  }


  // this method is used to navigate from landing page to profile(sending index through queryparams)
  routeToProfile(index: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: { index: index }
    };
    this.router.navigate(["/default/profile"], navigationExtras);
  }
}

