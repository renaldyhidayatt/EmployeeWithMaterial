import { Component, OnInit } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/Employe.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css'],
})
export class AddEditEmployeeComponent implements OnInit {
  listStatus: any[] = ['Single', 'Married', 'Divorced'];
  idEmploye: any;
  action = 'Created';

  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      adMission: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      civilStatus: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
    const idParam = 'id';
    this.idEmploye = this.aRoute.snapshot.params[idParam];
  }

  ngOnInit(): void {
    if (this.idEmploye !== undefined) {
      this.action = 'Edit';
      this.esEdit();
    }
  }

  saveEmployee() {
    const empleado: Employee = {
      fullName: this.myForm.get('fullName').value,
      mail: this.myForm.get('email').value,
      adMissionDate: this.myForm.get('adMission').value,
      phone: this.myForm.get('phone').value,
      civilStatus: this.myForm.get('civilStatus').value,
      gender: this.myForm.get('gender').value,
    };

    if (this.idEmploye !== undefined) {
      this.editEmployee(empleado);
    } else {
      this.addEmployee(empleado);
    }
  }

  addEmployee(employee: Employee) {
    this.employeeService.addEmployee(employee);
    this.snackBar.open('The employee was registered successfully!', '', {
      duration: 3000,
    });
    this.route.navigate(['/']);
  }

  editEmployee(employe: Employee) {
    this.employeeService.editEmployee(employe, this.idEmploye);
    this.snackBar.open('The employee was successfully updated!', '', {
      duration: 3000,
    });
    this.route.navigate(['/']);
  }

  esEdit() {
    const empleado: Employee = this.employeeService.getEmployee(this.idEmploye);
    console.log(empleado);
    this.myForm.patchValue({
      fullName: empleado.fullName,
      email: empleado.mail,
      adMission: empleado.adMissionDate,
      phone: empleado.phone,
      civilStatus: empleado.civilStatus,
      gender: empleado.gender,
    });
  }
}
