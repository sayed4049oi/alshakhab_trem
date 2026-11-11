const trip = { id: 'trip-1', slug: 'istanbul', title: 'رحلة إسطنبول', destination: 'إسطنبول، تركيا', duration: '7 أيام', price: 1200, currency: 'دولار', summary: 'تجربة سفر متوازنة بين الثقافة والطبيعة والراحة.', heroImage: '/al-sheikh-trip-logo.jpg', itinerary: [], includes: [], hotel: '' }
const scholarship = { id: 'scholarship-1', slug: 'global-study', title: 'منحة الدراسة العالمية', country: 'متاح دوليًا', degree: 'بكالوريوس وماجستير', funding: 'تمويل جزئي', deadline: '2027-06-30', summary: 'فرصة تعليمية مرنة للطلاب الطموحين.', heroImage: '/al-sheikh-trip-logo.jpg', requirements: [], coverage: [] }

export async function getTrips() { return [trip] }
export async function getFeaturedTrips() { return [trip] }
export async function getTrip(slug: string) { return slug === trip.slug ? trip : undefined }
export async function getScholarships() { return [scholarship] }
export async function getFeaturedScholarships() { return [scholarship] }
export async function getScholarship(slug: string) { return slug === scholarship.slug ? scholarship : undefined }
export async function getFAQs() { return [] }
export async function getSiteSettings() { return { phone: '', whatsapp: '', address: '', title: '', description: '', language: 'ar', statistics: { trips: 120, students: 85, countries: 24 } } }