import { Component, Injector, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: UntypedFormGroup;
  formBuilder: UntypedFormBuilder;

  @Input() label: any;

  constructor(
    private router: Router,
    private injector: Injector,
    private tokenStorageService: TokenStorageService
  ) {
    this.formBuilder = injector.get<UntypedFormBuilder>(UntypedFormBuilder)

   }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      user: [''],
      password: [''],
      rememberClient: [false]
    });
  }

  public auth() {
    let params = {
      user: this.formGroup.value.user,
      password: this.formGroup.value.password
    }
   
    if (params.user  === 'admin' && params.password === 'admin' ) {
      this.router.navigate(['/dashboard'])
    }
   ;
  }

}
