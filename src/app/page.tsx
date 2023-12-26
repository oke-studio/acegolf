import * as React from 'react';
import Landing from './landing/landing.component';
import ComingSoonPage from './comingsoon/comingSoonPage.component';

export default function Home() {
  return (
    <main>
      {/* <Landing /> */}
      <ComingSoonPage />
      <div id="sr-subscription-root" data-button-id="5" data-color="#090b3a">JOIN THE MAILING LIST</div>
      <script>SEVENROOMS_VENUE_ID = "acegolf"</script>
      <script src="https://www.sevenrooms.com/widget/embed.js"></script>
      <script src="https://use.fortawesome.com/cb6d04c8.js"></script>
    </main>
  );
}
