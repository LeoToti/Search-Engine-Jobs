import { Navbar, Nav, NavDropdown, Button, Form, FormControl, Card } from 'react-bootstrap'
import { Component } from 'react'
import React from 'react'


class JobCards extends React.Component {

    state = {
        query: "lord",
        queryError: "",
        selected:{},
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
            console.log(data);
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
  
  
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </>
  
  
  
  
    }
  }
  
  export default JobCards