import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export const translations = {
  ro: {
    // Nav
    home: 'Acasă', description: 'Descriere', destinations: 'Destinații',
    spaces: 'Spații', location: 'Locație', contact: 'Contact', book: 'Rezervă',
    // Home
    tagline: 'Natură, liniște și confort la poalele Ceahlăului',
    reviews: 'Ce spun oaspeții noștri',
    // Rezervare
    checkAvailability: 'Verifică Disponibilitatea',
    sendUs: 'Trimite-ne datele și te contactăm noi',
    checkin: 'Check-in', checkout: 'Check-out',
    nights: 'noapte', nightsPlural: 'nopți',
    yourName: 'Numele tău', phone: 'Număr de telefon', email: 'Adresa de email',
    submit: 'Verifică Disponibilitatea', sending: 'Se trimite...',
    ownerContact: 'Proprietarul te va contacta în cel mai scurt timp',
    errorMsg: 'A apărut o eroare. Verifică conexiunea și încearcă din nou.',
    // Confirmation
    confirmed: 'Cerere trimisă!',
    confirmedSub: 'Te vom contacta în cel mai scurt timp.',
    yourStay: 'Sejurul tău',
    whatsappFollow: 'Contactează pe WhatsApp',
    anotherBooking: 'Altă cerere',
    back: 'Înapoi',
  },
  en: {
    // Nav
    home: 'Home', description: 'About', destinations: 'Destinations',
    spaces: 'Spaces', location: 'Location', contact: 'Contact', book: 'Book',
    // Home
    tagline: 'Nature, tranquility and comfort at the foot of Ceahlău',
    reviews: 'What our guests say',
    // Rezervare
    checkAvailability: 'Check Availability',
    sendUs: 'Send us your dates and we\'ll get back to you',
    checkin: 'Check-in', checkout: 'Check-out',
    nights: 'night', nightsPlural: 'nights',
    yourName: 'Your name', phone: 'Phone number', email: 'Email address',
    submit: 'Check Availability', sending: 'Sending...',
    ownerContact: 'The owner will contact you as soon as possible',
    errorMsg: 'An error occurred. Check your connection and try again.',
    // Confirmation
    confirmed: 'Request sent!',
    confirmedSub: 'We\'ll contact you as soon as possible.',
    yourStay: 'Your stay',
    whatsappFollow: 'Contact on WhatsApp',
    anotherBooking: 'Another request',
    back: 'Back',
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
