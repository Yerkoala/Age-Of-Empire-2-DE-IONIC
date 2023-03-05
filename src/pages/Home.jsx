import { IonPage, IonContent } from '@ionic/react';
import ListaUnidad from '../components/ListaUnidad';
import './Home.css';
import { useState, useEffect } from "react";
import { db } from "../firebase"
import { collection, onSnapshot, query } from "firebase/firestore";

const Home = () => {
    //Obtener datos de Firebase
    const [datos, setDatos] = useState([])
    const obtenerDatos = async () => {
        const q = query(collection(db, "unidades"));
        onSnapshot(q, (querySnapshot) => {
            const nom = [];
            querySnapshot.forEach((doc) => {
                nom.push({ ...doc.data(), id: doc.id });
                //console.log(doc.data().nombre)
            });
            setDatos(nom);
        });
    }
    useEffect(() => {
        obtenerDatos();
    }, [])

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="fondo">
                    <h2>Unidades Unicas <br/> Age Of Empires 2 DE</h2>
                    
                    {datos.map(e =>
                        <div key={e.id}>
                            <ListaUnidad
                                nombre={e.nombre}
                                civilizacion={e.civilizacion}
                                unidadCompleta={e}
                            />
                        </div>
                    )}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
