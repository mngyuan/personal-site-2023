import PageTransition from '@/components/PageTransition';
import SharedLayout from '@/components/SharedLayout';
import {forwardRef} from 'react';

const Home = (props, ref) => {
  return (
    <PageTransition ref={ref} className="h-full w-full">
      <SharedLayout>
        <div className="h-full"></div>
      </SharedLayout>
    </PageTransition>
  );
};

export default forwardRef(Home);
