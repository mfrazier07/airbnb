import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'airbnb-topnavbar',
    templateUrl: 'topnavbar.component.html',
    styleUrls: ['topnavbar.component.css']
})
export class TopNavBarComponent {
    private user!: Subscription;
    public isAuthenticated:boolean= false;

    public constructor(private authentication:AuthService){

    }

    ngOnInit(): void {
        this.user = this.authentication.user.subscribe(user => {
            this.isAuthenticated = !user ? false : true;
        })
    }
}