import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className='flex flex-col items-start justify-start pt-20 md:pt-24 px-3 md:px-12 lg:px-16 xl:px-20 pb-16'>
            <div className='max-w-4xl'>
                {/* Header Section */}
                <div className='flex flex-col items-start text-left mb-8'>
                    <h1 className='font-playfair text-3xl md:text-4xl text-gray-800'>Privacy Policy</h1>
                    <p className='text-xs md:text-sm text-gray-500/90 mt-1.5'>
                        Your privacy is important to us. This policy explains how NextTrip collects, uses, and protects your personal information.
                    </p>
                    <div className='flex items-center gap-1 text-gray-500 mt-2 text-xs'>
                        <span>Last updated: January 2025</span>
                    </div>
                </div>

                {/* Policy Sections */}
                <div className='space-y-8'>
                    {/* Information We Collect */}
                    <section className='border-b border-gray-300 pb-6'>
                        <h2 className='font-playfair text-2xl text-gray-800 mb-3'>Information We Collect</h2>
                        <div className='space-y-4'>
                            <div className='bg-[#f5f5ff]/70 rounded-lg p-4'>
                                <h3 className='font-medium text-gray-800 text-sm mb-2'>Personal Information</h3>
                                <p className='text-xs text-gray-600'>
                                    We collect information you provide directly, such as your name, email address, phone number, and payment details when you book accommodations through our platform.
                                </p>
                            </div>
                            <div className='bg-[#f5f5ff]/70 rounded-lg p-4'>
                                <h3 className='font-medium text-gray-800 text-sm mb-2'>Usage Information</h3>
                                <p className='text-xs text-gray-600'>
                                    We automatically collect information about how you use our website, including your IP address, browser type, pages visited, and booking preferences.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section className='border-b border-gray-300 pb-6'>
                        <h2 className='font-playfair text-2xl text-gray-800 mb-3'>How We Use Your Information</h2>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='flex items-start gap-3'>
                                <div className='w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0'></div>
                                <div>
                                    <h3 className='font-medium text-gray-800 text-sm'>Service Provision</h3>
                                    <p className='text-xs text-gray-600 mt-1'>To process bookings, manage reservations, and provide customer support.</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0'></div>
                                <div>
                                    <h3 className='font-medium text-gray-800 text-sm'>Communication</h3>
                                    <p className='text-xs text-gray-600 mt-1'>To send booking confirmations, updates, and promotional offers you've opted into.</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0'></div>
                                <div>
                                    <h3 className='font-medium text-gray-800 text-sm'>Improvement</h3>
                                    <p className='text-xs text-gray-600 mt-1'>To analyze usage patterns and improve our platform's functionality and user experience.</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0'></div>
                                <div>
                                    <h3 className='font-medium text-gray-800 text-sm'>Security</h3>
                                    <p className='text-xs text-gray-600 mt-1'>To protect against fraud, unauthorized access, and ensure platform security.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Information Sharing */}
                    <section className='border-b border-gray-300 pb-6'>
                        <h2 className='font-playfair text-2xl text-gray-800 mb-3'>Information Sharing</h2>
                        <p className='text-xs text-gray-600 mb-4'>
                            We may share your information in the following circumstances:
                        </p>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-3 px-3 py-2 rounded-lg bg-[#f5f5ff]/70'>
                                <span className='text-xs font-medium text-gray-700'>Hotel Partners:</span>
                                <span className='text-xs text-gray-600'>To facilitate your bookings and reservations</span>
                            </div>
                            <div className='flex items-center gap-3 px-3 py-2 rounded-lg bg-[#f5f5ff]/70'>
                                <span className='text-xs font-medium text-gray-700'>Service Providers:</span>
                                <span className='text-xs text-gray-600'>With trusted third parties who assist in our operations</span>
                            </div>
                            <div className='flex items-center gap-3 px-3 py-2 rounded-lg bg-[#f5f5ff]/70'>
                                <span className='text-xs font-medium text-gray-700'>Legal Requirements:</span>
                                <span className='text-xs text-gray-600'>When required by law or to protect our rights</span>
                            </div>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section className='border-b border-gray-300 pb-6'>
                        <h2 className='font-playfair text-2xl text-gray-800 mb-3'>Data Security</h2>
                        <p className='text-xs text-gray-600 mb-3'>
                            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                        <div className='bg-[#f5f5ff]/70 rounded-lg p-4'>
                            <p className='text-xs text-gray-600'>
                                Our security measures include encryption of sensitive data, secure servers, regular security audits, and restricted access to personal information on a need-to-know basis.
                            </p>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section className='border-b border-gray-300 pb-6'>
                        <h2 className='font-playfair text-2xl text-gray-800 mb-3'>Your Rights</h2>
                        <p className='text-xs text-gray-600 mb-4'>
                            You have the following rights regarding your personal information:
                        </p>
                        <div className='grid md:grid-cols-2 gap-3'>
                            <div className='text-xs text-gray-600'>• Access and review your personal data</div>
                            <div className='text-xs text-gray-600'>• Request correction of inaccurate information</div>
                            <div className='text-xs text-gray-600'>• Request deletion of your personal data</div>
                            <div className='text-xs text-gray-600'>• Opt-out of marketing communications</div>
                            <div className='text-xs text-gray-600'>• Data portability where applicable</div>
                            <div className='text-xs text-gray-600'>• Lodge complaints with supervisory authorities</div>
                        </div>
                    </section>

                    {/* Cookies and Tracking */}
                    <section className='border-b border-gray-300 pb-6'>
                        <h2 className='font-playfair text-2xl text-gray-800 mb-3'>Cookies and Tracking</h2>
                        <p className='text-xs text-gray-600 mb-3'>
                            We use cookies and similar technologies to enhance your browsing experience, analyze site usage, and assist in our marketing efforts.
                        </p>
                        <div className='flex flex-wrap gap-2'>
                            <span className='px-3 py-1 bg-[#f5f5ff]/70 rounded-lg text-xs text-gray-600'>Essential Cookies</span>
                            <span className='px-3 py-1 bg-[#f5f5ff]/70 rounded-lg text-xs text-gray-600'>Analytics Cookies</span>
                            <span className='px-3 py-1 bg-[#f5f5ff]/70 rounded-lg text-xs text-gray-600'>Marketing Cookies</span>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className='font-playfair text-2xl text-gray-800 mb-3'>Contact Us</h2>
                        <p className='text-xs text-gray-600 mb-4'>
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className='bg-[#f5f5ff]/70 rounded-lg p-4 space-y-2'>
                            <div className='flex items-center gap-2 text-xs text-gray-600'>
                                <span className='font-medium'>Email:</span>
                                <span>privacy@nexttrip.com</span>
                            </div>
                            <div className='flex items-center gap-2 text-xs text-gray-600'>
                                <span className='font-medium'>Phone:</span>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className='flex items-center gap-2 text-xs text-gray-600'>
                                <span className='font-medium'>Address:</span>
                                <span>123 Travel Street, Suite 100, City, State 12345</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer Note */}
                <div className='mt-12 pt-6 border-t border-gray-300'>
                    <p className='text-xs text-gray-500 text-center'>
                        This Privacy Policy is effective as of January 2025 and may be updated from time to time. We will notify you of any material changes.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy