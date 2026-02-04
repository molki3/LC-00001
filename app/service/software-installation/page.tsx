import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { CONTACT_INFORMATION } from '@/static/static';

export const metadata: Metadata = {
    title: "Software Installation - " + CONTACT_INFORMATION[0].value,
    description: "Professional software installation services for your devices.",
};

export default function SoftwareInstallationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-indigo-800 py-20 text-white">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    {/* <div className="mb-8">
                        <Button asChild variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-none">
                            <a href="/">
                                ← Back to Home
                            </a>
                        </Button>
                    </div> */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Software Installation</h1>
                    <p className="text-xl opacity-90 max-w-2xl">
                        {/* Professional installation and configuration services for all your software needs. */}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-background text-foreground">
                <div className="mx-auto max-w-4xl px-4 sm:px-6">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Steps to Software Installation</h2>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-card p-6 rounded-xl border shadow-sm">
                                <h3 className="text-xl font-semibold mb-3">1 - Install RustDesk</h3>
                                <p className="text-muted-foreground">
                                    RustDesk is a free software that allows you to control your computer from a remote location.
                                    <br />
                                    <a href="https://github.com/rustdesk/rustdesk/releases/download/1.4.5/rustdesk-1.4.5-x86_64.exe" className="" target="_blank" rel="noopener noreferrer"><span className="text-green-600 hover:underline">Click here to download RustDesk (Windows)</span></a>
                                </p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border shadow-sm">
                                <h3 className="text-xl font-semibold mb-3">2 - Open RustDesk</h3>
                                <p className="text-muted-foreground">
                                Look for something like:
                                    <div className='text-black text-'>
                                        ID
                                        <br />
                                        ### ### ###
                                        <br />
                                        One-time password
                                        <br />
                                        ********
                                    </div>
                                </p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border shadow-sm">
                                <h3 className="text-xl font-semibold mb-3">3 - Install the Software</h3>
                                <p className="text-muted-foreground">
                                    Install all the software you need for your work<a href="https://drive.google.com/drive/folders/1fzvIyWjkndAqAjjQ9e6gNBqdtqW5GE-2?usp=sharing" className="" target="_blank" rel="noopener noreferrer">.</a>
                                </p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border shadow-sm">
                                <h3 className="text-xl font-semibold mb-3">4 - Installation Process</h3>
                                <p className="text-muted-foreground">
                                    Accept the access request and wait for the installation to complete.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-muted-foreground">
                                <span className="font-bold text-red-600">NOTE:</span> Also you will need <span className="font-bold">WinRAR</span> to extract the files. If you don't have it, you can download it from <a href="https://www.win-rar.com/postdownload.html?&L=0" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"><span className="hover:underline text-green-600">Clicking here</span></a> (Windows).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-muted/50">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need Help Installing Software?</h2>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-center">
                        <Button asChild size="lg" className="text-lg px-8">
                            <a href="https://rustdesk.com/" target="_blank" rel="noopener noreferrer">RustDesk</a>
                        </Button>
                        <Button asChild size="lg" className="text-lg px-8">
                            <a href="https://www.win-rar.com/postdownload.html?&L=0" target="_blank" rel="noopener noreferrer">WinRAR</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
