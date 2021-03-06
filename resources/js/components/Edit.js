import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Edit extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            name : '',
            tel : '',
                }
                this.handleNameInputChange = this.handleNameInputChange.bind(this);
                this.handleTelInputChange = this.handleTelInputChange.bind(this);
                this.handleFormSubmit = this.handleFormSubmit.bind(this);

            }
    handleNameInputChange(event){
        this.setState({
            name : event.target.value
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/api/contact/${id}/edit`).then(response =>
            {
                this.setState({
                    name : response.data.name,
                    tel : response.data.tel
                })
            }).catch(err => console.log(err));
    }

    handleTelInputChange(event){
        this.setState({
            tel : event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        const id = this.props.match.params.id;
        axios.put(`/api/contact/${id}/update`,{
            name : this.state.name,
            tel : this.state.tel
        }).then(response => {
            this.setState({
                name: '',
                tel : ''

            })
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

render(){
      
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Edit Component</div>

                        <div className="card-body">

                        <form onSubmit={this.handleFormSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" 
    onChange={this.handleNameInputChange}
    value={this.state.name}
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text" 
        onChange={this.handleTelInputChange}
        value={this.state.tel}
    className="form-control" id="exampleInputPassword1" placeholder="phone" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
   
}
}

export default Edit;
