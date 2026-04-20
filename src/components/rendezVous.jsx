import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useTranslation } from 'react-i18next';
import 'react-calendar/dist/Calendar.css';
import './rendezVous.css'; 

const ALL_TIMES = [
  "12:00", "12:30", "13:00", "13:30", "14:00", 
  "14:30", "15:00", "15:30", "16:00", "16:30"
];

function RendezVous() {
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
  const [status, setStatus] = useState('');

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
        const response = await fetch(`http://localhost:8080/api/appointments/booked-times?date=${dateString}`);
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
      setStatus(t('meeting.selectTime'));
      return;
    }

    setStatus(t('meeting.statusWait'));

    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const day = String(selectedDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}T${selectedTime}:00`;

    try {
      const response = await fetch('http://localhost:8080/api/appointments/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          appointmentDate: formattedDate
        })
      });

      if (response.ok) {
        setStatus(t('meeting.statusSuccess'));
        setFormData({ clientName: '', clientEmail: '', serviceType: 'Couture sur mesure' });
        const newAvailableTimes = availableTimes.filter(t => t !== selectedTime);
        setAvailableTimes(newAvailableTimes);
        setSelectedTime(newAvailableTimes.length > 0 ? newAvailableTimes[0] : '');
      } else {
        setStatus('Erreur lors de la réservation.');
      }
    } catch  {
      setStatus('Erreur de connexion au serveur.');
    }
  };

  return (
    <div className="booking-page">
      <h1>{t('meeting.title')}</h1>
      {/* Le sous-titre qui va maintenant chercher le nouveau texte très pro */}
      <p className="subtitle">{t('meeting.subtitle')}</p>

      <div className="booking-container">
        <div className="calendar-section">
          <Calendar 
            onChange={setSelectedDate} 
            value={selectedDate}
            minDate={new Date()} 
            tileDisabled={disableNonFridays}
            locale={currentLocale} 
          />
          <p className="selected-date-text" style={{ marginTop: '15px' }}>
            {t('meeting.dateLabel')} <strong>{selectedDate.toLocaleDateString(currentLocale)}</strong>
          </p>
        </div>

        <form className="booking-form" onSubmit={handleBooking}>
          <label>{t('meeting.timeLabel')}</label>
          {availableTimes.length > 0 ? (
            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
              {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
            </select>
          ) : (
            <p style={{ color: '#d32f2f', fontWeight: 'bold' }}>{t('meeting.fullDay')}</p>
          )}

          <label>{t('meeting.name')}</label>
          <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} required />

          <label>{t('meeting.email')}</label>
          <input type="email" name="clientEmail" value={formData.clientEmail} onChange={handleChange} required />

          <label>{t('meeting.service')}</label>
          <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
            <option value="Couture sur mesure">{t('services.custom')}</option>
            <option value="Retouches">{t('services.alterations')}</option>
            <option value="Consultation Design">{t('services.consultation')}</option>
          </select>

          <button type="submit" className="confirm-btn" style={{ marginTop: '15px' }} disabled={availableTimes.length === 0}>
            {t('meeting.confirm')}
          </button>

          {status && (
            <p className="status-msg" style={{ 
              marginTop: '15px', fontWeight: 'bold', textAlign: 'center',
              color: status.includes('Félicitations') || status.includes('Congratulations') ? '#000000' : '#d32f2f' 
            }}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default RendezVous;