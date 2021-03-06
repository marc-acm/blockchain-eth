import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

class AddStudent extends Component {
   constructor (props) {
    super (props);

    const SchoolContract = window.web3.eth.contract ([
    {
        "constant": true,
        "inputs": [
            {
                "name": "_idnum",
                "type": "string"
            }
        ],
        "name": "viewStudent",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getSchool",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_address",
                "type": "address"
            },
            {
                "name": "_school_name",
                "type": "string"
            },
            {
                "name": "_school_loc",
                "type": "string"
            }
        ],
        "name": "setSchool",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_idno",
                "type": "string"
            },
            {
                "name": "_fname",
                "type": "string"
            },
            {
                "name": "_lname",
                "type": "string"
            },
            {
                "name": "_qual",
                "type": "string"
            },
            {
                "name": "_year",
                "type": "uint256"
            }
        ],
        "name": "setStudent",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_idnum",
                "type": "string"
            },
            {
                "name": "_fname",
                "type": "string"
            },
            {
                "name": "_lname",
                "type": "string"
            },
            {
                "name": "_qual",
                "type": "string"
            },
            {
                "name": "_year",
                "type": "uint256"
            },
            {
                "name": "_school",
                "type": "string"
            }
        ],
        "name": "updateStudent",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
]);

    this.state = {
      ContractInstance: SchoolContract.at ('0x2dbbe3c16b088e332cdbe5cc9a2f88503bcff582'),
      school_name: '',
      school_add: ''
    }
  }

  addStudent(idnum, fname, lname, qual, year){
    const{ setStudent } = this.state.ContractInstance;

    setStudent(idnum, fname, lname, qual, year, (err, result) => {
      if(err) console.error('Error', err);
      console.log(result);
    })

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Qualification Ledger</h1>
        </header>
        <p className="App-intro">
          Add New Student<br />
          <Link to='/' >Home</Link> | 
          <Link to='/add_school' > Add School</Link> | 
          <Link to='/add_student' > Add Student</Link>
        </p>
        <input type="text" ref="idnum" placeholder="ID Number"/>
        <input type="text" ref="fname" placeholder="First Name"/>
        <input type="text" ref="lname" placeholder="Last Name"/>
        <input type="text" ref="qual" placeholder="Qualification"/>
        <input type="text" ref="year" placeholder="Year Graduated"/>
        <button onClick = {() => this.addStudent(this.refs.idnum.value, this.refs.fname.value, this.refs.lname.value, this.refs.qual.value, this.refs.year.value)}> Add Student</button>
      </div>
    );
  }
}

export default AddStudent;
