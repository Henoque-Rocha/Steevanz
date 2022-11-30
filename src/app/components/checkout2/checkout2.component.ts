import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from 'src/app/Cadastro';

@Component({
  selector: 'app-checkout2',
  templateUrl: './checkout2.component.html',
  styleUrls: ['./checkout2.component.scss']
})
export class Checkout2Component implements OnInit {


  CadastroForm! : FormGroup;

constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.CadastroForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      VATnumber: new FormControl('', Validators.required),
      select: new FormControl('', Validators.required),
    })
  }

  get name() { return this.CadastroForm.get('name')!; }
  get lastname() { return this.CadastroForm.get('lastname')!; }
  get email() { return this.CadastroForm.get('email')!; }
  get phone() { return this.CadastroForm.get('phone')!; }
  get location() { return this.CadastroForm.get('location')!; }
  get address() { return this.CadastroForm.get('address')!; }
  get postalCode() { return this.CadastroForm.get('postalCode')!; }
  get VATnumber() { return this.CadastroForm.get('VATnumber')!; }
  get select() { return this.CadastroForm.get('select')!; }

  Submit() {

    if(this.CadastroForm.invalid) {
      return;
    }
  }

}