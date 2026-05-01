import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useTranslation } from 'react-i18next';
import { Clock, User, Mail, Briefcase, CalendarDays, CheckCircle, MessageSquare, Palette, FileText } from './icons';
import 'react-calendar/dist/calendar.css';
import './rendezVous.css'; 

const ALL_TIMES = [
  "12:00", "12:30", "13:00", "13:30", "14:00", 
  "14:30", "15:00", "15:30", "16:00", "16:30"
];

function RendezVous() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  const { t, i18n } = useTranslation();

  
  const currentLocale = i18n.language.startsWith('fr') ? 'fr-FR' : 'en-US';

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableTimes, setAvailableTimes] = useState(ALL_TIMES);
  const [selectedTime, setSelectedTime] = useState('');
  
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    serviceType: 'Couture sur mesure' 
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const disableNonFridays = ({ date }) => {
    return date.getDay() !== 5; 
  };

  useEffect(() => {
    const fetchBookedTimes = async () => {
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate.getDate()).padStart(2, '0');
      const dateString = `${year}-${month}-${day}`;

      try {
        // PREMIÈRE MODIFICATION ICI (Pour récupérer les heures)
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments/booked-times?date=${dateString}`);
        if (response.ok) {
          const bookedTimes = await response.json();
          const freeTimes = ALL_TIMES.filter(time => !bookedTimes.includes(time));
          setAvailableTimes(freeTimes);
          if (freeTimes.length > 0) setSelectedTime(freeTimes[0]);
          else setSelectedTime('');
        }
      } catch (error) {
        console.error("Erreur de chargement", error);
      }
    };
    fetchBookedTimes();
  }, [selectedDate]);

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!selectedTime) {
      setStatus({ type: 'error', message: t('meeting.selectTime') });
      return;
    }

    setStatus({ type: 'loading', message: t('meeting.statusWait') });

    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const day = String(selectedDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}T${selectedTime}:00`;

    try {
      // DEUXIÈME MODIFICATION ICI (Pour envoyer la réservation)
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          appointmentDate: formattedDate
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: t('meeting.statusSuccess') });
        setFormData({ clientName: '', clientEmail: '', serviceType: 'Couture sur mesure' });
        const newAvailableTimes = availableTimes.filter(t => t !== selectedTime);
        setAvailableTimes(newAvailableTimes);
        setSelectedTime(newAvailableTimes.length > 0 ? newAvailableTimes[0] : '');
      } else {
        setStatus({ type: 'error', message: 'Erreur lors de la réservation.' });
      }
    } catch  {
      setStatus({ type: 'error', message: 'Erreur de connexion au serveur.' });
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-header animate-fade-in">
        <h1>{t('meeting.title')}</h1>
        <div className="section-divider"></div>
        <p className="subtitle">{t('meeting.subtitle')}</p>
      </div>

      <div className="booking-content">
        <div className="booking-container">
          <div className="calendar-section animate-slide-in-left">
            <h3><CalendarDays size={22} /> {t('meeting.dateLabel').replace(':', '')}</h3>
            <Calendar 
              onChange={setSelectedDate} 
              value={selectedDate}
              minDate={new Date()} 
              tileDisabled={disableNonFridays}
              locale={currentLocale} 
            />
            <p className="selected-date-text">
              <strong>{selectedDate.toLocaleDateString(currentLocale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
            </p>
          </div>

          <form className="booking-form animate-slide-in-right" onSubmit={handleBooking}>
            <div className="form-group">
              <label><Clock size={18} /> {t('meeting.timeLabel')}</label>
              {availableTimes.length > 0 ? (
                <div className="time-slots">
                  {availableTimes.map(time => (
                    <button
                      type="button"
                      key={time}
                      className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="full-day-message">{t('meeting.fullDay')}</p>
              )}
            </div>

            <div className="form-group">
              <label><User size={18} /> {t('meeting.name')}</label>
              <input 
                type="text" 
                name="clientName" 
                value={formData.clientName} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label><Mail size={18} /> {t('meeting.email')}</label>
              <input 
                type="email" 
                name="clientEmail" 
                value={formData.clientEmail} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
            <label><span className="icon-wrapper"><i className="fas fa-briefcase"></i></span> {t('meeting.service')}</label>
            <select 
              name="serviceType" /* CORRECTION ICI */
              value={formData.serviceType} /* CORRECTION ICI */
              onChange={handleChange} 
              required
            >
              <option value="Couture sur mesure">{t('services.custom')}</option>
              <option value="La presse (pressing)">{t('services.presse')}</option>
              <option value="Emballage">{t('services.emballage')}</option>
              <option value="Tous (couture, presse, emballage)">{t('services.tous')}</option>
              <option value="Autre">{t('services.autre')}</option>
            </select>
          </div>

            <button type="submit" className="confirm-btn" disabled={availableTimes.length === 0}>
              <CheckCircle size={18} />
              {t('meeting.confirm')}
            </button>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>

        <div className="why-book-section animate-fade-in-up">
          <h3>{t('meeting.whyBook')}</h3>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-icon">
                <MessageSquare size={24} />
              </div>
              <p>{t('meeting.reason1')}</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <Palette size={24} />
              </div>
              <p>{t('meeting.reason2')}</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <FileText size={24} />
              </div>
              <p>{t('meeting.reason3')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RendezVous;