import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent  implements OnInit{
  employeeName = '';
  email = '';
  contactNo ='';

  id: number = 0;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      if(this.employee.employeeName === '' || this.employee.email === '' || this.employee.contactNo === '' || this.employee.city === '' || this.employee.gender === '' || this.employee.dateOfBirth === '' || this.employee.position === ''){
        var status = confirm("Please fill all the fields");
      }
      else{
        var status = confirm("Your details are updated successfully!");
        this.goToEmployeeList();
    }
  }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  }

