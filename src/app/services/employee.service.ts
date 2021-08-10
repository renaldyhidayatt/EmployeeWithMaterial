import { Injectable } from '@angular/core';
import { Employee } from '../models/Employe.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  listEmployee: Employee[] = [
    {
      fullName: 'Lucas Martinez',
      mail: 'lmartinez@gmail.com',
      phone: 3512335522,
      gender: 'Masculino',
      adMissionDate: new Date(),
      civilStatus: 'Soltero',
    },
    {
      fullName: 'Rodrigo Aliaga',
      mail: 'raliaga@gmail.com',
      civilStatus: 'Soltero',
      adMissionDate: new Date('2019-05-25'),
      gender: 'Masculino',
      phone: 3512334422,
    },
    {
      fullName: 'Maria Funes',
      mail: 'mfunes@gmail.com',
      civilStatus: 'Casado',
      adMissionDate: new Date('2020-04-27'),
      gender: 'Femenino',
      phone: 3512553322,
    },
    {
      fullName: 'Lucrecia Juarez',
      mail: 'maria@gmail.com',
      civilStatus: 'Soltero',
      adMissionDate: new Date('2020-07-25'),
      gender: 'Femenino',
      phone: 3514665533,
    },
    {
      fullName: 'Federico Gonzalez',
      mail: 'fgonzalez@gmail.com',
      civilStatus: 'Soltero',
      adMissionDate: new Date('2020-01-31'),
      gender: 'Femenino',
      phone: 1156688332,
    },
    {
      fullName: 'Estefania Schutz',
      mail: 'eschutz@gmail.com',
      civilStatus: 'Soltero',
      adMissionDate: new Date('2020-01-31'),
      gender: 'Femenino',
      phone: 1156678679,
    },
    {
      fullName: 'Maria Belen Arzu',
      mail: 'mbarzu@gmail.com',
      civilStatus: 'Soltero',
      adMissionDate: new Date('2020-01-31'),
      gender: 'Femenino',
      phone: 3512576589,
    },
  ];
  constructor() {}

  getEmployees() {
    return this.listEmployee.slice();
  }

  deleteEmployee(index: number) {
    return this.listEmployee.splice(index, 1);
  }

  addEmployee(employee: Employee) {
    this.listEmployee.unshift(employee);
  }

  getEmployee(index: number) {
    return this.listEmployee[index];
  }

  editEmployee(employee: Employee, id: number) {
    this.listEmployee[id].fullName = employee.fullName;
    this.listEmployee[id].mail = employee.mail;
    this.listEmployee[id].adMissionDate = employee.adMissionDate;
    this.listEmployee[id].phone = employee.phone;
    this.listEmployee[id].gender = employee.gender;
    this.listEmployee[id].civilStatus = employee.civilStatus;
  }
}
