import React from 'react';
import Hero from '../Hero/Hero';
import clsx from 'clsx';
import projects from '../../common/projects';
import {Container} from '../Container/Container';
import classes from './Projects.module.scss';

export const Projects = () => {
    const getContent = React.useCallback((project, index) => {
        const res = [
            (project.logo && <div className={'col-md-6 col-12 d-none d-md-flex'} style={{minHeight: '100%'}}>
                <div className={classes.image} style={{backgroundImage: `url(${project.logo})`}}/>
            </div>),
            (<div className={clsx({['col-md-6']: project.logo}, 'col-12', classes.text)}>
                <h3>{project.title}</h3>
                <p>{project.descr}</p>
                {project.url && <a target={'_blank'} href={project.url}>Learn more</a>}
            </div>)
        ];
        return (index % 2) ? res : [res[1], res[0]];
    }, []);

    return (
        <Hero id={'proj'}>
            <h2 className={'headline'}>Projects</h2>
            <Container>
                {projects.map((project, index) => (
                    <div className={"row"}>
                        <div key={index} data-scroll={true} className={clsx("col-12 col-12 p-3")}>
                            <div className={clsx(classes.project, 'row')}>
                                {getContent(project, index)}
                            </div>
                        </div>
                    </div>
                ))}
            </Container>
        </Hero>
    );
}
