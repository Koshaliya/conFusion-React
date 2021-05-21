


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);


class CommentForm extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);
  
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleSubmit(values) {
        this.toggleModal();
        alert("Rating: "+values.rating+ " Author: " + values.author
            + " Comment: " + values.comment);

    }
    render() {
        return(
            <div>
               <Button outline onClick={this.toggleModal}>
                   <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
               <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
               <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
               <ModalBody>
               <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
               <Row className="form-group">
                                <Label md={12} htmlFor="rating">Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                       <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                       <FormGroup>
                           <Label md={12} htmlFor="comment">Comment</Label>
                           <Col md={12}>
                           <Control.textarea model='.comment' className="form-control"  id="comment" name="comment" 
                            rows='6'/>
                            </Col>
                       </FormGroup>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                   </LocalForm>
               </ModalBody>
           </Modal>
           </div>

                    
 
    )}
}

export default CommentForm