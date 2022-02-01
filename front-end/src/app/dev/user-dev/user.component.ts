import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "./user";

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
    ngOnInit(): void {
        this.user = {

            name:"HelloDev",
            password: '82313273'
        }        
        
    }

    constructor(private router: Router){

    }
    user: User = new User();

    login(){
        if(this.user.name=="Malloc$Dev/" && this.user.password=="devnbs$6731"){
                this.router.navigate(['$/dev$'])
        }else{
            this.router.navigate(['/sdd'])
        
        }
    }



    

}