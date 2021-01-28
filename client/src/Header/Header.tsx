import React from 'react';
import {createStyles, makeStyles, styled, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Button} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const StyledAppBar = styled(AppBar)({
    justifyContent: "flex-end"
})


export default function Header() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
            <StyledAppBar position="static">
                <Toolbar>
                    <Button>Accueil</Button>
                    <Button>Mon CV</Button>
                    <Button>Réalisations</Button>
                    <Button>Contact</Button>
                    <Button variant="contained">Recrutez-moi</Button>
                </Toolbar>

            </StyledAppBar>
    );
}