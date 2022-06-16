
import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export class ListEmployeeComponents extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         employees: []
      }

      
    }

    addEmployee(){
        window.location.href='/add-employee'
    }

    componentDidMount(){
        EmployeeService.getEmployee().then((res) => {
            this.setState({
                employees : res.data
            });
        });
    }

  render() {
    return (
      <div className='container'>
        <h2 className='text-center'>Employees List</h2>
        <div className='row'>
            <button className= "btn btn-primary " onClick={() => this.addEmployee()}>Add Employee</button>
        </div>
        <div className="row"></div>
            <table className = "table table-striped table-bordered" >
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id </th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                    this.state.employees.map(
                        employee => 
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
      </div>
    )
  }
}

export default ListEmployeeComponents