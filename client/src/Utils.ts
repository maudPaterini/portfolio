import { ComponentType } from "react";
import { styled } from "@material-ui/core";
import { StyledComponentProps } from "@material-ui/styles/withStyles/withStyles";

/*export function styledNested<
    P extends StyledComponentProps,
    C extends Array<keyof Required<P>["classes"]>
    >(Component: ComponentType<P>, ...classes: C) {
    return styled((props: P) => (
        <Component
            {...props}
    classes={classes.reduce((acc, key) => ({ ...acc, [key]: key }), {})}
    />
));
}*/

export default {}

