import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function AnnulerRendezVous() {
  const { id } = useParams();
  const [statut, setStatut] = useState('attente'); 

  const confirmerAnnulation = async () => {
    setStatut('chargement');
    try {
      // L'adresse dynamique qui lit ton fichier .env !
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setStatut('succes');
      } else {
        setStatut('erreur');
      }
    } catch (error) {
      console.error("Erreur d'annulation:", error);
      setStatut('erreur');
    }
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#F9F8F6', borderRadius: '15px', maxWidth: '500px', boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)' }}>
        
        {statut === 'attente' && (
          <>
            <h2 style={{ color: '#4a3728', marginBottom: '15px', fontSize: '2rem' }}>Annuler votre rendez-vous ?</h2>
            <p style={{ marginBottom: '30px', color: '#666', lineHeight: '1.6' }}>Êtes-vous certain de vouloir annuler cette rencontre ? Cette action libérera la place et est irréversible.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <button 
                onClick={confirmerAnnulation} 
                style={{ backgroundColor: '#cc0000', color: 'white', padding: '15px', border: 'none', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: 'background-color 0.3s' }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#a30000'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#cc0000'}
              >
                Oui, annuler le rendez-vous
              </button>
              <Link to="/" style={{ color: '#4a3728', textDecoration: 'underline', fontWeight: '600' }}>
                Non, retourner à l'accueil
              </Link>
            </div>
          </>
        )}

        {statut === 'chargement' && (
          <h2 style={{ color: '#C9B59C' }}>Annulation en cours...</h2>
        )}

        {statut === 'succes' && (
          <>
            <h2 style={{ color: '#4CAF50', marginBottom: '20px', fontSize: '2rem' }}>Rendez-vous annulé</h2>
            <p style={{ marginBottom: '30px', color: '#666', lineHeight: '1.6' }}>Votre rendez-vous a bien été annulé. L'atelier a été prévenu et la plage horaire a été libérée.</p>
            <Link to="/" style={{ backgroundColor: '#4a3728', color: 'white', padding: '12px 30px', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold', display: 'inline-block' }}>Retour à l'accueil</Link>
          </>
        )}

        {statut === 'erreur' && (
          <>
            <h2 style={{ color: '#cc0000', marginBottom: '20px', fontSize: '2rem' }}>Erreur</h2>
            <p style={{ marginBottom: '30px', color: '#666', lineHeight: '1.6' }}>Impossible d'annuler le rendez-vous. Il a peut-être déjà été annulé ou ce lien est expiré.</p>
            <Link to="/contact" style={{ backgroundColor: '#4a3728', color: 'white', padding: '12px 30px', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold', display: 'inline-block' }}>Nous contacter</Link>
          </>
        )}

      </div>
    </div>
  );
}

export default AnnulerRendezVous;