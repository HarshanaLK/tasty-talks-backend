import FlashAlerts from '@/Components/elements/alerts/FlashAlerts';
import Footer from '@/Components/home/Footer';
import Header from '@/Components/shared/Header';
import Sidebar from '@/Components/shared/Sidebar/Sidebar';
import { usePage } from '@inertiajs/react';
import { ReactNode, useState } from 'react';

const AdminLayout = ({
    children,
    title,
    bRoutes,
}: {
    children: ReactNode;
    title: string;
    bRoutes: any;
}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pageProps = usePage().props;

    console.log(pageProps);

    return (
        <div className={" min-h-[100vh] h-full scroll-smooth bg-slate-100 "}>
            <Header
                bRoutes={bRoutes}
                user={pageProps.auth.user}
                header={title}
            />
            <div className="relative h-full pb-10 lg:pt-[70px]">
                <Sidebar user={pageProps.auth.user} />
                <div className="flex flex-1 flex-col lg:pl-[260px] h-full min-h-[100vh]">
                    <main className="container mx-auto flex-1 bg-slate-100 p-8 sm:py-8 lg:p-8">
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
            <FlashAlerts flash={pageProps.flash} />
        </div>
    );
};

export default AdminLayout;
