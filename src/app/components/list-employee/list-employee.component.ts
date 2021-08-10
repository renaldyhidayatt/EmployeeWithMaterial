import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/Employe.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmMessageComponent } from '../shared/confirm-message/confirm-message.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  displayedColumns: string[] = [
    'fullName',
    'mail',
    'civilStatus',
    'adMission',
    'gender',
    'phone',
    'action',
  ];
  dataSource = new MatTableDataSource();
  listEmployee: Employee[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadEmployee();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadEmployee() {
    this.listEmployee = this.employeeService.getEmployees();
    this.dataSource = new MatTableDataSource(this.listEmployee);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  removeEmployee(index: number) {
    const dialogRef = this.dialog.open(ConfirmMessageComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete the Employee?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'accept') {
        this.employeeService.deleteEmployee(index);
        this.loadEmployee();
        this.snackBar.open('The employee was successfully eliminated!', '', {
          duration: 3000,
        });
      }
    });
  }
}
