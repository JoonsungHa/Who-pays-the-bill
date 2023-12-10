import { Button, Form, Alert } from "react-bootstrap";
import { useContext, useRef} from "react";

import { MyContext } from "../context";

const Stage1 = () => {


    const textInput = useRef();
    const context = useContext(MyContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        context.addPlayer(value);

        textInput.current.value = '';

    }

    console.log(context)



    return (
        <>
            <Form onSubmit = {handleSubmit}className="mt-4">
                <Form.Group>
                    <Form.Control
                        type= "text"
                        placeholder="Add player name"
                        name= "player"
                        ref = {textInput}
                    />

                </Form.Group>
                <button className="miami" variant="primary" type='submit'>
                    Add player
                </button>

                { context.players && context.players.length > 0 ?
                <>
                <hr/>
                </>
                :null

                }


                
            </Form>

        </>
    )
}

export default Stage1;
