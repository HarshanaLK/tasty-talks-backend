const Footer = () => {
     const date = new Date();
    return (
        <>
            <footer className="py-4">
                <div className="container mx-auto text-center">
                    <div className="flex flex-wrap justify-center space-x-2 text-center text-sm text-gray-800">
                        <div>
                            &copy;{date.getFullYear()}, HS Car Sale, All Rights
                            Reserved
                        </div>
                        <span className="mx-1">-</span>
                        <div>
                            Developed And Maintained By{' '}
                            <a
                                target="_blank"
                                href="https://axcertro.com?ref=ucms"
                                className="font-[800] uppercase underline"
                            >
                                Axcertro
                            </a>{' '}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;
