import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() { 
    console.log(this.auth.isLoggedIn());
    $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  })
}

logout(){
  this.auth.logout()
}

}
