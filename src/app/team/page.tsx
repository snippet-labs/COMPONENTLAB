// Modules
import React from 'react';
import { TEAM_PAGINATION_LINKS } from '@/constants/Team/TeamPaginationLinks';
import { useFeatureFlag } from '@/hooks/useFeatureFlag';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';
import ChatBubble from '@/components/Ui/Chat/ChatBubble';
import Footer from '@/components/Ui/Footer/Footer';
import Pagination from '@/components/Ui/Pagination/Pagination';
import ProgressPanel from '@/components/Ui/ProgressPanel/ProgressPanel';
import UnderDevelopment from '@/components/Ui/UnderDevelopment/UnderDevelopment';
import { TEAM_PAGE_PROGRESS_ITEMS } from './Team.progress';

const TeamPage: React.FC = () => {
  const isEnabled = useFeatureFlag('TEAM_PAGE');

  if (!isEnabled)
    return (
      <div data-testid="underdevelopment-page">
        <UnderDevelopment />
      </div>
    );

  return (
    <div className="min-h-screen" data-testid="team-page">
      <ProgressPanel tableOfContents={TEAM_PAGE_PROGRESS_ITEMS} position="right" />
      <div data-testid="team-header">
        <h1 className="ml-1 text-sm font-medium" data-testid="team-header-title">
          COMPONENTLAB/
        </h1>
        <h2
          id="team"
          className="font-bold text-4xl md:text-5xl lg:text-6xl"
          data-testid="team-subtitle"
        >
          Read our team conversation
        </h2>
      </div>
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="conversation" className="mt-20" data-testid="chat-section">
          <ChatBubble
            image={'/suvajit.png'}
            senderName="Suvajit"
            message="Hi, You guys free ?"
            time="3:32 PM"
            isStart={true}
            data-testid="chatbubble"
          />
          <ChatBubble
            image={'/hemangshu.png'}
            senderName="Hemangshu"
            message="Yup, what's up ?"
            time="3:33 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/subhajit.png'}
            senderName="Subhajit"
            message="Yess"
            time="3:33 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/suvajit.png'}
            senderName="Suvajit"
            message="I was thinking of something fun, you know, let's create something!"
            time="3:35 PM"
            isStart={true}
          />
          <ChatBubble
            image={'/subhajit.png'}
            senderName="Subhajit"
            message="Interesting ! I am in!"
            time="3:36 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/subhajit.png'}
            senderName="Subhajit"
            message="What you have anything in mind ?"
            time="3:37 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/hemangshu.png'}
            senderName="Hemangshu"
            message="That's awesome!"
            time="3:38 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/suvajit.png'}
            senderName="Suvajit"
            message="A component library ?"
            time="3:39 PM"
            isStart={true}
          />
          <ChatBubble
            image={'/subhajit.png'}
            senderName="Subhajit"
            message="Sounds fascinating, our own library ??"
            time="3:40 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/subhajit.png'}
            senderName="Subhajit"
            message="You in Hemangshu ?"
            time="3:40 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/hemangshu.png'}
            senderName="Hemanghsu"
            message="Always Subhajit, although I was thinking what makes us different ? There are a lot of great component libraries out there !!!"
            time="3:40 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/suvajit.png'}
            senderName="Suvajit"
            message="I'd be lying if I say this hadn't crossed my mind !"
            time="3:42 PM"
            isStart={true}
          />
          <ChatBubble
            image={'/subhajit.png'}
            senderName="Subhajit"
            message="Something new ?"
            time="3:43 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/hemangshu.png'}
            senderName="Hemanghsu"
            message="Ummmmmmm .... "
            time="3:43 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/hemangshu.png'}
            senderName="Hemanghsu"
            message="Let's put the main focus in providing accessible components out of the box !"
            time="3:44 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/hemangshu.png'}
            senderName="Hemanghsu"
            message="What you think guys ?"
            time="3:44 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/suvajit.png'}
            senderName="Suvajit"
            message="I believe that's a great idea man !"
            time="3:45 PM"
            isStart={true}
          />
          <ChatBubble
            image={'/suvajit.png'}
            senderName="Suvajit"
            message="Look if it works out, great ! If not, we will have a good project for our resume ! Isn't it ?"
            time="3:45 PM"
            isStart={true}
          />
          <ChatBubble
            image={'/subhajit.png'}
            senderName="Subhajit"
            message="Absolutely !"
            time="3:46 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/hemangshu.png'}
            senderName="Hemanghsu"
            message="Let's give this a go !"
            time="3:47 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/subhajit.png'}
            senderName="Subhajit"
            message="What stack are we picking ??"
            time="3:46 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/suvajit.png'}
            senderName="Suvajit"
            message="NextJs for great SEO, tailwindCSS for styling, Ummmm ... ViTest for unit testing and GitActions for complete CI/CD testing and build automation !"
            time="3:47 PM"
            isStart={true}
          />
          <ChatBubble
            image={'/suvajit.png'}
            senderName="Suvajit"
            message="Good ?"
            time="3:49 PM"
            isStart={true}
          />
          <ChatBubble
            image={'/hemangshu.png'}
            senderName="Hemanghsu"
            message="It is going to be funnnnnn ! "
            time="3:50 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/subhajit.png'}
            senderName="Subhajit"
            message="Totally !"
            time="3:50 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/suvajit.png'}
            senderName="Suvajit"
            message="We will have clean component design, just simple and elegant !"
            time="3:52 PM"
            isStart={true}
          />
          <ChatBubble
            image={'/suvajit.png'}
            senderName="Suvajit"
            message="Just copy and drop the code in the codebase kind of approach !"
            time="3:52 PM"
            isStart={true}
          />
          <ChatBubble
            image={'/hemangshu.png'}
            senderName="Hemanghsu"
            message="We will mainly focus on providing accessible components with minimal styling"
            time="3:53 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/subhajit.png'}
            senderName="Subhajit"
            message="Since we are using tailwindCSS, people can tweak it to whatever matches their taste !!"
            time="3:54 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/hemangshu.png'}
            senderName="Hemanghsu"
            message="Correct !"
            time="3:55 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/suvajit.png'}
            senderName="Suvajit"
            message="Definitely ! So .... ?"
            time="3:56 PM"
            isStart={true}
          />
          <ChatBubble
            image={'/hemangshu.png'}
            senderName="Hemanghsu"
            message="Let's do this "
            time="3:57 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/subhajit.png'}
            senderName="Subhajit"
            message="I am ready for this !"
            time="3:58 PM"
            isStart={false}
          />
          <ChatBubble
            image={'/suvajit.png'}
            senderName="Suvajit"
            message="LET'S DO THIS GUYS !"
            time="4:00 PM"
            isStart={true}
          />
        </div>
      </ErrorBoundary>
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div data-testid="pagination-section">
          <Pagination
            paginationTitle="Explore our accessible components"
            cards={TEAM_PAGINATION_LINKS}
            previousRoute="/"
            previousRouteTitle="Home"
            nextRoute="/installation"
            nextRouteTitle="Installation"
            isExternalLink={false}
          />
        </div>
      </ErrorBoundary>
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div data-testid="footer-section">
          <Footer />
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default TeamPage;
