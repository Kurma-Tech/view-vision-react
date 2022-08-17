import React from 'react';
import { useStyles } from '../styles/layout';

export function MainContainer(props: React.PropsWithChildren<{}>) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.container}>{props.children}</div>
            </main>
        </React.Fragment>
    );
}
