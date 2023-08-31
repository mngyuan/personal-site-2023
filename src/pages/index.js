import SharedLayout from '@/components/SharedLayout';

export default function Home({pathname}) {
  return (
    <SharedLayout pathname={pathname}>
      <div className="h-full"></div>
    </SharedLayout>
  );
}
