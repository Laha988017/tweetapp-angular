import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clicked!: boolean;
  registerButtonText!: any;
  registerData: any;
  loading = false;
  error = false;

  constructor() { }
  items = [{
    tweet: "Tweet1",
  },
  {
    tweet: "Tweet2",
  },
  {
    tweet: "Tweet3",
  }]
  display = "none";
  ngOnInit(): void {
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  submit(f:any){
    this.clicked = true;
    console.log(f.value)
    this.registerButtonText="Registering ...";
    this.registerData = f.value
    // this.authenticationService.register(this.registerData)
    //   .pipe(first())
    //   .subscribe(
    //     res=>{
    //       this.clicked = false;
    //       this.registerButtonText="Register";
    //       if(res.status==200){
    //         Swal.fire("Done",res.message, 'success');
    //       }
    //       else{
    //         Swal.fire("Done",res.message, 'error');
    //       }
    //       console.log(res)
    //     },
    //     error=>{
    //       this.clicked = false;
    //       this.registerButtonText="Register";
    //       console.log(error)
    //       Swal.fire("Done",error, 'error');
    //     }
    //   )
    //window.location.reload();
  }

}
