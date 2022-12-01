import Hero from '../Hero/Hero';
import React, {useContext} from 'react';
import {Container} from '../Container/Container';
import {DataContext} from '../../Apple';
import {Card} from '../Card/Card';
import classes from './Certs.module.scss';
import clsx from 'clsx';
import {Button} from '../Button/Button';

export const Certs = () => {
    const module = useContext(DataContext).certificates;

    return (
        <Hero id={'certificates'}>
            <h2 className={'headline'}>{module.name}</h2>
            <Container>
                <div className={'row'}>
                    {module.certs.map((cert, index) =>
                        <div key={index} className={clsx('col-12 col-md-4 p-3', classes.content)}>
                            <Card className={classes.Cert}>
                                <div>
                                    <p>{cert.name}</p>
                                    <div>
                                        <Button target={'_blank'} href={cert.url}>Details</Button>
                                    </div>
                                </div>
                                <div style={{backgroundImage: `url('${cert.img}')`}} className={classes.image}/>
                            </Card>
                        </div>
                    )}
                </div>
            </Container>
        </Hero>
    )
};
