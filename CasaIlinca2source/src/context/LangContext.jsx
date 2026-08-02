import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export const translations = {
  ro: {
    // Nav
    home: 'Acasă', description: 'Descriere', destinations: 'Destinații',
    spaces: 'Spații', location: 'Locație', contact: 'Contact', book: 'Rezervă',
    back: 'Înapoi',

    // Home
    tagline: 'Natură, liniște și confort la poalele Ceahlăului',
    reviews: 'Ce spun oaspeții noștri',

    // Description
    descTitle: 'Despre Ilinca',
    descSubtitle: 'Povestea de la poalele Ceahlăului',
    descP1: 'Situată în inima Munților Ceahlău, în pitoreasca localitate Izvorul Muntelui, pensiunea noastră este punctul ideal de plecare pentru explorarea uneia dintre cele mai frumoase zone montane din România.',
    descP2: 'Aproape de Lacul Bicaz și de traseele spectaculoase ale Ceahlăului, oferim oaspeților noștri cazare confortabilă, liniște și priveliști deosebite.',
    descP3: 'Fie că îți dorești drumeții, plimbări în natură sau pur și simplu relaxare departe de agitație, aici vei găsi cadrul perfect pentru o vacanță reușită, în orice anotimp.',

    // Destinations
    destTitle: 'Atracții de poveste',
    destSubtitle: 'Descoperă Neamțul',

    // Spaces
    spacesTitle: 'Spații',
    spacesSubtitle: 'Explorează fiecare colț al casei',
    exteriorLabel: 'Outdoor', exteriorTitle: 'Exterior', exteriorDesc: 'Curtea, foișorul și zonele de relaxare.',
    interiorLabel: 'Indoor', interiorTitle: 'Interior', interiorDesc: 'Dormitoare, living și design rafinat.',

    // Exterior
    exteriorPageTitle: 'Exterior & Curte',
    exteriorPageSubtitle: 'Curtea, foișorul și spațiile din aer liber',

    // Interior selection
    interiorPageTitle: 'Interior',
    interiorPageSubtitle: 'Alege spațiul pe care vrei să-l explorezi',
    camereLabel: 'Dormitoare', camereTitle: 'Camere', camereDesc: '4 dormitoare intime cu design cald și primitor.',
    livingLabel: 'Zonă de zi', livingTitle: 'Living', livingDesc: 'Spațiu generos pentru socializare și bucătărie utilată.',
    baiLabel: 'Relaxare', baiTitle: 'Băi', baiDesc: 'Dotări moderne și finisaje de calitate superioară.',

    // Camere selection
    camerePageTitle: 'Alege Camera',
    camerePageSubtitle: '4 dormitoare — fiecare cu personalitatea sa',
    backToInterior: 'Înapoi la Interior',

    // Camera
    spec: 'Pat Matrimonial',
    backToCamere: 'Camere',

    // Living
    livingPageTitle: 'Living & Bucătărie',
    livingPageSubtitle: 'Spațiu generos pentru relaxare și socializare',

    // Bai
    baiPageTitle: 'Băi',
    baiPageSubtitle: 'Dotări moderne și finisaje de calitate',

    // Location
    locationTitle: 'Locație',
    locationSubtitle: 'Str. Izvorul Muntelui Nr. 48A, Izvoru Muntelui, Neamț',
    getDirections: 'Deschide în Google Maps',

    // Contact
    contactTitle: 'Contact',
    contactSubtitle: 'Suntem la un click distanță pentru orice întrebare.',
    contactBookings: 'Rezervări', contactQuick: 'Mesaj Rapid', contactNav: 'Navigație',
    callTitle: 'Sună-ne', callDesc: 'Contactează-ne telefonic pentru disponibilitate.',
    whatsappTitle: 'WhatsApp', whatsappDesc: 'Scrie-ne și îți răspundem rapid pe chat.',
    findUsTitle: 'Găsește-ne', findUsDesc: 'Str. Izvorul Muntelui, Nr. 48A, Neamț.',

    // Rezervare
    checkAvailability: 'Verifică Disponibilitatea',
    sendUs: 'Trimite-ne datele și te contactăm noi',
    checkin: 'Check-in', checkout: 'Check-out',
    nights: 'noapte', nightsPlural: 'nopți',
    yourName: 'Numele tău', phone: 'Număr de telefon', email: 'Adresa de email',
    submit: 'Verifică Disponibilitatea', sending: 'Se trimite...',
    ownerContact: 'Proprietarul te va contacta în cel mai scurt timp',
    errorMsg: 'A apărut o eroare. Verifică conexiunea și încearcă din nou.',
    confirmed: 'Cerere trimisă!',
    confirmedSub: 'Te vom contacta în cel mai scurt timp.',
    yourStay: 'Sejurul tău',
    whatsappFollow: 'Contactează pe WhatsApp',
    anotherBooking: 'Altă cerere',
  },
  en: {
    // Nav
    home: 'Home', description: 'About', destinations: 'Destinations',
    spaces: 'Spaces', location: 'Location', contact: 'Contact', book: 'Book',
    back: 'Back',

    // Home
    tagline: 'Nature, tranquility and comfort at the foot of Ceahlău',
    reviews: 'What our guests say',

    // Description
    descTitle: 'About Ilinca',
    descSubtitle: 'Our story at the foot of Ceahlău',
    descP1: 'Located in the heart of the Ceahlău Mountains, in the picturesque village of Izvorul Muntelui, our guesthouse is the ideal starting point for exploring one of the most beautiful mountain areas in Romania.',
    descP2: 'Close to Lake Bicaz and the spectacular trails of Ceahlău, we offer our guests comfortable accommodation, tranquility and stunning views.',
    descP3: 'Whether you want hiking, nature walks or simply relaxation away from the hustle, here you will find the perfect setting for a great holiday, in any season.',

    // Destinations
    destTitle: 'Legendary attractions',
    destSubtitle: 'Discover Neamț County',

    // Spaces
    spacesTitle: 'Spaces',
    spacesSubtitle: 'Explore every corner of the house',
    exteriorLabel: 'Outdoor', exteriorTitle: 'Exterior', exteriorDesc: 'The yard, gazebo and outdoor relaxation areas.',
    interiorLabel: 'Indoor', interiorTitle: 'Interior', interiorDesc: 'Bedrooms, living room and refined design.',

    // Exterior
    exteriorPageTitle: 'Exterior & Yard',
    exteriorPageSubtitle: 'The yard, gazebo and outdoor spaces',

    // Interior selection
    interiorPageTitle: 'Interior',
    interiorPageSubtitle: 'Choose the space you want to explore',
    camereLabel: 'Bedrooms', camereTitle: 'Rooms', camereDesc: '4 intimate bedrooms with warm, welcoming design.',
    livingLabel: 'Living area', livingTitle: 'Living Room', livingDesc: 'Generous space for socialising and a fully equipped kitchen.',
    baiLabel: 'Relaxation', baiTitle: 'Bathrooms', baiDesc: 'Modern fixtures and superior quality finishes.',

    // Camere selection
    camerePageTitle: 'Choose a Room',
    camerePageSubtitle: '4 bedrooms — each with its own personality',
    backToInterior: 'Back to Interior',

    // Camera
    spec: 'Double Bed',
    backToCamere: 'Rooms',

    // Living
    livingPageTitle: 'Living Room & Kitchen',
    livingPageSubtitle: 'Generous space for relaxation and socialising',

    // Bai
    baiPageTitle: 'Bathrooms',
    baiPageSubtitle: 'Modern fixtures and quality finishes',

    // Location
    locationTitle: 'Location',
    locationSubtitle: 'Str. Izvorul Muntelui Nr. 48A, Izvoru Muntelui, Neamț',
    getDirections: 'Open in Google Maps',

    // Contact
    contactTitle: 'Contact',
    contactSubtitle: 'We\'re just a click away for any question.',
    contactBookings: 'Bookings', contactQuick: 'Quick Message', contactNav: 'Navigation',
    callTitle: 'Call us', callDesc: 'Contact us by phone for availability.',
    whatsappTitle: 'WhatsApp', whatsappDesc: 'Message us and we\'ll reply quickly on chat.',
    findUsTitle: 'Find us', findUsDesc: 'Str. Izvorul Muntelui, Nr. 48A, Neamț.',

    // Rezervare
    checkAvailability: 'Check Availability',
    sendUs: 'Send us your dates and we\'ll get back to you',
    checkin: 'Check-in', checkout: 'Check-out',
    nights: 'night', nightsPlural: 'nights',
    yourName: 'Your name', phone: 'Phone number', email: 'Email address',
    submit: 'Check Availability', sending: 'Sending...',
    ownerContact: 'The owner will contact you as soon as possible',
    errorMsg: 'An error occurred. Check your connection and try again.',
    confirmed: 'Request sent!',
    confirmedSub: 'We\'ll contact you as soon as possible.',
    yourStay: 'Your stay',
    whatsappFollow: 'Contact on WhatsApp',
    anotherBooking: 'Another request',
  },
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ro')
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
