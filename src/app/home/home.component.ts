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
  username = "zust8017"
  tweetId: number = 0;
  tweetItems = [{
    tweetId: 1,
    tweet: "This is a tweet done for testing by sinjon Tweet1",
    date: Date.now(),
    username: "sinjon"
  },
  {
    tweetId: 2,
    tweet: "This is a tweet done for testing by sinjon Tweet2",
    date: Date.now(),
    username: "Laha"
  },
  {
    tweetId: 3,
    tweet: "This is a tweet done for testing by sinjon Tweet3",
    date: Date.now(),
    username: "sneshes"
  }]
  constructor() {
   }
  
  display = "none";
  ngOnInit(): void {
    
  }

  openModal(tweetId:number) {
    this.tweetId = tweetId-1
    console.log(tweetId)
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
