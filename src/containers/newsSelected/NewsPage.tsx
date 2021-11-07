import React, { useEffect } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import useWindow from 'hooks/useWindow';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './NewsPage.module.css'; 



const graybox = <div style = {{width: '100%', height: '20rem', backgroundColor: 'mediumseagreen'}} />

const NewsPage:React.FC = () => {
    
    const { isMobile } = useWindow();
    const navigate = useNavigate();
    const { newsPage } = useParams();

    useEffect(() => {
        if (!newsPage) return

        if (isMobile) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: 850,
                behavior: 'smooth'
            });
        }
    }, [newsPage, isMobile]);


    return <Card className={classes.base}>
        {isMobile && <Button
            onClick={() => navigate('/')}
            variant="contained"
            style={{ position: 'fixed', bottom: '0', right: '0', margin: '1rem' }}
        >
            Back
            </Button>
        }
        <CardContent>
            <Typography variant = "h3">
                news title
            </Typography>
            {graybox}
            <Typography variant="subtitle1">
                Aute in nulla sit dolor aute enim velit. Nostrud irure duis sit velit duis. Duis commodo qui cupidatat consectetur ad aliquip culpa. Aute nulla irure duis in amet consectetur irure aute consectetur ullamco reprehenderit velit. Aliquip voluptate aliqua veniam anim do ex occaecat ullamco laborum labore irure dolor id exercitation. Est proident in eiusmod officia.

Exercitation in ullamco in ullamco eu sunt et excepteur. Aliquip laboris do irure ullamco tempor aute reprehenderit culpa ea. Eiusmod aliquip qui quis aliqua sunt aliquip nostrud ullamco velit labore et. Officia irure eiusmod elit id fugiat tempor quis proident aute in id nisi est. Sunt labore qui voluptate consequat.

Non labore eiusmod ad minim eu ipsum proident in velit tempor. In esse deserunt non nostrud nostrud adipisicing consectetur eiusmod non. Consequat do aliquip deserunt officia. Nostrud eiusmod non ullamco ex sit adipisicing in pariatur eiusmod dolor incididunt magna et exercitation. Ullamco officia cupidatat ea ad reprehenderit ipsum incididunt in ea incididunt incididunt dolor minim. In ipsum voluptate mollit laborum voluptate ad tempor nostrud consequat aliqua ex mollit amet ea.

Duis eiusmod sunt minim anim enim eiusmod nostrud duis ex id nostrud consectetur eu. Ad ad et et aliquip irure proident ex. Enim aute quis ex sit consequat incididunt amet adipisicing sunt dolor aliqua incididunt consectetur exercitation. Sit id in aliquip dolor aliquip non excepteur. Nulla laboris voluptate ex qui qui nulla eu incididunt reprehenderit esse. Exercitation sint eu duis laboris irure voluptate reprehenderit consequat voluptate eiusmod aliqua officia. Do tempor occaecat exercitation Lorem.

Irure velit sit anim est et dolor. Cupidatat ipsum velit Lorem adipisicing sit velit deserunt. Ea exercitation ea occaecat tempor consequat sint eiusmod.

Duis veniam excepteur ea minim incididunt elit nisi proident labore sit quis aliqua consectetur. Enim duis laborum et enim. Incididunt officia cillum fugiat aliquip aute fugiat laboris in aliquip sint. Cupidatat cillum aliquip mollit non laboris mollit excepteur veniam. Incididunt nostrud qui do reprehenderit proident occaecat aliquip elit cillum ad duis anim Lorem. Ad officia sit reprehenderit dolor cupidatat incididunt anim proident voluptate sint fugiat. Velit velit culpa elit adipisicing consectetur incididunt.

Eu aliquip tempor aliquip et laboris non fugiat. Sit consequat eiusmod id enim. Cillum ex amet sint et incididunt.

Magna nostrud est occaecat esse. Minim do dolor ut officia eiusmod qui excepteur aliqua aliquip dolore anim tempor fugiat. Occaecat excepteur aliqua sint et excepteur ea magna elit id tempor Lorem. Nisi anim aliqua occaecat reprehenderit minim culpa eiusmod ipsum anim ullamco.

Nisi culpa est magna sunt ipsum deserunt duis ad ullamco elit sunt cillum. Pariatur esse deserunt non nulla ad velit exercitation esse. Aute tempor elit sint sunt magna deserunt Lorem culpa. Nisi nostrud ut deserunt nostrud laborum deserunt eiusmod in commodo pariatur. Minim fugiat id qui laborum adipisicing duis eu dolore non nostrud enim irure irure officia. Adipisicing do deserunt aute anim.

Aliquip ea Lorem ipsum velit Lorem. Eiusmod reprehenderit aliqua ad veniam occaecat tempor ipsum. Id nulla id exercitation labore reprehenderit labore deserunt Lorem minim cillum voluptate Lorem id consequat.
            </Typography>
        </CardContent>
    </Card>
}
export default NewsPage;