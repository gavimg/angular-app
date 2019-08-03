import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  hide = true;
  loading = false;
  registerError = false;
  form: FormGroup;
  private authStatusSub: Subscription;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl(null, { validators: [Validators.required] }),
      password: new FormControl(null, { validators: [Validators.required] }),
    });
    this.authStatusSub = this.authService.getAuthStatusLister()
    .subscribe(authStatus => {
      this.loading = false;
    });
  }

  onSubmit() {
    if(this.form.invalid) {
      return;
    }
    this.loading = true;
    this.authService.createUser(this.form.value.email, this.form.value.password);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
