import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authService: AuthService;
  display: string | undefined;
  constructor(private route: ActivatedRoute,
    private router: Router,authService: AuthService){
      this.authService = authService;
  }
  logout(){
    console.log("Inside App comp logout")
    console.log(this.authService)
    if(this.authService.logout()){
      Swal.fire("Done","Logged out successfully", 'success');
    }
    else{
      Swal.fire("Done","Logout Unsuccessfull", 'error');
    }
  }
isLoggedIn(){
  return localStorage.getItem('currentUser')!=null
}
openModal() {
  this.display = "block";
}
onCloseHandled() {
  this.display = "none";
}
  title = 'tweetapp-angular';
}
