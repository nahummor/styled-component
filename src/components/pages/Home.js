import React from 'react';
import { PageLayout, Card, Row } from '../common';

const Home = () => {
   return (
      <PageLayout>
         <h1>Home</h1>
         <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            temporibus a saepe impedit quos nam odio nobis sed, illum tempore
            atque provident quas, veniam consectetur ducimus eveniet vel
            obcaecati. Magni?
         </p>

         <Row>
            <Card
               title={'כותרת ראשית'}
               subTitle={'כותרת משנית'}
               width={'15rem'}
               elevation={1}>
               <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aperiam beatae veniam nam ullam perspiciatis eos ut dolorum
                  deserunt corporis, non perferendis dignissimos rem.
                  Dignissimos nisi nam temporibus? A, aperiam nobis.
               </p>
            </Card>

            <Card
               title={'כותרת ראשית'}
               subTitle={'כותרת משנית'}
               width={'20rem'}
               elevation={2}>
               <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aperiam beatae veniam nam ullam perspiciatis eos ut dolorum
                  deserunt corporis, non perferendis dignissimos rem.
                  Dignissimos nisi nam temporibus? A, aperiam nobis.
               </p>
            </Card>
            <Card
               title={'כותרת ראשית'}
               subTitle={'כותרת משנית'}
               width={'25rem'}
               elevation={3}>
               <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aperiam beatae veniam nam ullam perspiciatis eos ut dolorum
                  deserunt corporis, non perferendis dignissimos rem.
                  Dignissimos nisi nam temporibus? A, aperiam nobis.
               </p>
            </Card>
         </Row>
      </PageLayout>
   );
};

export default Home;
