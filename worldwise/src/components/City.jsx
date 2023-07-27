import { useNavigate, useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useEffect, useState } from "react";
// import { useCities } from "../contexts/CitiesContext";
import Spinner from "./Spinner";
import Button from "./Button";
const BASE_URL = 'http://localhost:9000';
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));



function City() {
  const navigate = useNavigate()
  const [currentCity, setCurrentCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();



  // TEMP DATA
  // const currentCity = {
  //   cityName: "Lisbon",
  //   emoji: "🇵🇹",
  //   date: "2027-10-31T15:59:59.138Z",
  //   notes: "My favorite city so far!",
  // };
  useEffect(() => {

    const getCity = async (id) => {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data)
        // console.log(data)
      } catch {
        alert("there was an error in fetching data by id")
      } finally {
        setIsLoading(false)
      }
    }
    getCity(id)
  }, [id]);

  if (isLoading) return <Spinner />

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <Button type="back" onClick={
          (e) => {
            e.preventDefault();
            navigate(-1)
          }
        }>
          &larr;Back
        </Button>
      </div>
    </div>
  );
}

export default City;
