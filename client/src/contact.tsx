import {TextField} from "@material-ui/core";

function ContactForm()
{
    return(<form>
        <TextField label="Nom"/>
        <TextField label="Prénom"/>
        <TextField label="Email"/>
        <TextField label="Téléphone"/>
        <TextField label="Message" multiline rows={10}/>
    </form>);
}

export default ContactForm