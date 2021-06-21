import { Navbar, Nav, NavDropdown, Button, Form, FormControl, Card } from 'react-bootstrap'
import { Component } from 'react'
import React from 'react'


class JobCards extends React.Component {

    state = {
        query: "lord",
        queryError: "",
        selected:[],
        isLoading: false,
      };
    
      fectchData = async function () {
        this.setState({ isLoading: true });
        let endpoint = "https://remotive.io/api/remote-jobs";
        let query = this.state.query;
        let endpointQuery = "?search=" + query.replace(" ", "%20");
        try {
          let response = await fetch(endpoint + endpointQuery);
    
          if (response.ok) {
            console.log("Response is ok!!");
            let data = await response.json();
            console.log(data.jobs);
            if (data) {
              this.setState({ queryError: "" });
              this.setState({ selected: data.jobs });
              console.log(this.state.selected);
              this.setState({ isLoading: false });
            } else {
              this.setState({ queryError: data.Error });
              this.setState({ isLoading: false });
              console.log(this.state.queryError);
            }
          } else {
            alert("Cant fetch the data!");
          }
        } catch (error) {
          alert(error);
        }
    
      }
    
      componentDidMount = async function () {
        this.fectchData()
        
      };
    render() {
  
      return <>
  
  <div className="container-fluid">
                
                <h2>Harry Potter</h2>
                <div className=" row ">
                    {

                        this.state.selected.map(job => {

                            return (
                                <Card.Body key={job.id}>
                                <div onClick={() => {this.state.show ? this.setState({show: false}) : this.setState({show: true})
                                this.setState({imdbID: job.id})
                                }} className="col-md-2" style={{display: "inline"}}>
                                <span class="text-truncate">{job.title}</span>
                                
                                <p></p>
                                
                            </div>
                            </Card.Body>)

                        })
                    }
                </div>

            </div>
      </>
  
  
  
  
    }
  }
  
  export default JobCards