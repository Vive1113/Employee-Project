
package com.example.project.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.Employee.Employee;


public interface Repository extends JpaRepository<Employee, Integer>{
	List<Employee> findByEmployeeNameContaining(String employeeName);

}
