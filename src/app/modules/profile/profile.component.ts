import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  index: number;
  private data: any = [];
  public userList: any = [];
  profile: any;

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {

    // recieving index through queryParams
    this.route.queryParams.subscribe((data) => {
      this.index = data.index;
      const url = 'https://panorbit.in/api/users.json'
      this.http.get(url).subscribe((res) => {
        this.data = res;
        this.userList = this.data.users;
        this.profile = this.userList[this.index];
      })
    });
  }
}
