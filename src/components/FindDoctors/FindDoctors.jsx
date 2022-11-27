import React, { useState } from "react";
import styles from "./FindDoctors.module.css";
import SearchBar from "../SearchBar/Searchbar";
import cart from "./shopping-cart-simple.png";
import record from "./notebook.png";
import article from "./book-open.png";

export default function FindDoctors() {
  const [position, setPosition] = useState(0);
  const [position1, setPosition1] = useState(0);

  let arr = [
    {
      img: "https://www.practostatic.com/fit/e5df380532ad97807c4b2e414a458cc292b1a53e",

      title: "6 Weight Loss Tips to Follow",
      spanDoctors: "Dr. Yogesh Kumar, Alternative Medicine",
      likeSpan: "309 Likes● 36501Views",
    },
    {
      img: "https://www.practostatic.com/fit/1da3446c1aca11295e4ea403b52fe8bc80b4c7c1",

      title: "6 Weight Loss Tips to Follow",
      spanDoctors: "Dr. Yogesh Kumar, Alternative Medicine",
      likeSpan: "309 Likes● 36501Views",
    },
    {
      img: "https://www.practostatic.com/fit/6147081e5f5d09a285ee9904bfdd26bf96998d47",

      title: "6 Weight Loss Tips to Follow",
      spanDoctors: "Dr. Yogesh Kumar, Alternative Medicine",
      likeSpan: "309 Likes● 36501Views",
    },
    {
      img: "https://www.practostatic.com/fit/1248187c88fa20fb11116f02779b39d48c3c9b3d",

      title: "6 Weight Loss Tips to Follow",
      spanDoctors: "Dr. Yogesh Kumar, Alternative Medicine",
      likeSpan: "309 Likes● 36501Views",
    },
    {
      img: "https://www.practostatic.com/fit/eb77fb7edc101645ee455f878299f68f8a3766c4",

      title: "6 Weight Loss Tips to Follow",
      spanDoctors: "Dr. Yogesh Kumar, Alternative Medicine",
      likeSpan: "309 Likes● 36501Views",
    },
  ];

  const commentArr1 = [
    {
      starIcon: "ion-ios7-star",
      summary:
        " Very helpful. Far easier than doing same things oncomputer. Allows quick and easy search with speedybooking. Even maintains history of doctors visited.",
      personIcon: "ion-ios7-person-outline",
      name: "Amit Sharma",
    },
    {
      starIcon: "ion-ios7-star",
      summary:
        "Boon for patients.God bless who made this app.I would not recover so soon if this app would not be there. Feedback- Practo has doctor for common disease or complications.It should focus on those complications which is uncommon because it is hard to find suitable doctor in some cases like Varicocele,Esinophill count increase",
      personIcon: "ion-ios7-person-outline",
      name: "Anoop Kumar",
    },
    {
      starIcon: "ion-ios7-star",
      summary:
        "Very good app. Well thought out about booking/rescheduling/cancelling an appointment. Also Doctor's feedbac k mechanism is good and describes all the basics in good way.",
      personIcon: "ion-ios7-person-outline",
      name: "Avinash Kumar",
    },
    {
      starIcon: "ion-ios7-star",
      summary:
        "Very easy to use, user interface is amazing. The option Where I can book a cab truly showed how much this app-makers cares about the patient's health👍",
      personIcon: "ion-ios7-person-outline",
      name: "Anjani Sirivella",
    },
  ];
  const handleNext1 = () => {
    if (position1 >= 0 && position1 < 4) {
      setPosition1(position1 + 1);
    }
  };

  const handleNext = () => {
    if (position >= 0 && position < 3) {
      setPosition(position + 1);
    }
  };
  const handlePrev1 = () => {
    if (position1 >= 1) {
      setPosition1(position1 - 1);
    }
  };
  const handlePrev = () => {
    if (position >= 1) {
      setPosition(position - 1);
    }
  };

  return (
    <>
      <div className={styles.headerDiv}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <h1>Your home for health</h1> 
          </div>
          <div className={styles.headerSmallTitle}>
            <h3>Find and Book</h3>
          </div>
          <div className={styles.headerSearchBar}>
            <div>
              <SearchBar />
              <div className={styles.headerPopularSearchDiv}>
                <div className={styles.headerPopularSearch}>
                  <span>Popular searches:</span>
                  <span href="/">Dermatologist</span>
                  <span href="/">Pediatrician</span>
                  <span href="/">Gynecologist/Obstetrician</span>
                  <span href="/">Other</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerIconDiv}>
        <div>
          <div className={styles.headerIcon}>
            <div> 
            
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8478 7.07227H17.6956V8.23798H18.8478V15.2323H17.4598C17.1636 15.7855 16.6147 16.1831 15.9674 16.2711V16.5338L15.5646 16.2894H9.14501C9.29266 16.3591 9.45724 16.398 9.63065 16.398H13.5036L17.1196 18.5936V16.398H18.8478C19.4832 16.398 19.9999 15.8752 19.9999 15.2323V8.23798C19.9999 7.59509 19.4832 7.07227 18.8478 7.07227ZM8.47852 15.2336V8.23673C8.47852 8.23715 8.47852 8.23757 8.47852 8.23798V15.2323C8.47852 15.2327 8.47852 15.2331 8.47852 15.2336Z" fill="white"/>
            <path d="M16.8256 4H4.53618C3.68898 4 3 4.68898 3 5.53618V14.7533C3 15.6005 3.68898 16.2894 4.53618 16.2894H6.84045V19.1828L11.6618 16.2894H16.8256C17.6728 16.2894 18.3618 15.6005 18.3618 14.7533V5.53618C18.3618 4.68898 17.6728 4 16.8256 4ZM16.8256 14.7533H11.2362L8.37663 16.4684V14.7533H4.53618V5.53618H16.8256V14.7533Z" fill="white"/>
            <path d="M6.84033 7.84033H14.5213V9.37651H6.84033V7.84033ZM6.84033 10.9127H12.217V12.4489H6.84033V10.9127Z" fill="white"/>
            </svg>
            

              <div>Consult with a doctor</div>
            </div>
            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 7H18.8767L17.0989 15H8.5C7.11929 15 6 13.8807 6 12.5V7Z" stroke="white"/>
            <path d="M4 4H6V7.5" stroke="white"/>
            <path d="M9 19.5C9.82843 19.5 10.5 18.8284 10.5 18C10.5 17.1716 9.82843 16.5 9 16.5C8.17157 16.5 7.5 17.1716 7.5 18C7.5 18.8284 8.17157 19.5 9 19.5Z" fill="white"/>
            <path d="M15 19.5C15.8284 19.5 16.5 18.8284 16.5 18C16.5 17.1716 15.8284 16.5 15 16.5C14.1716 16.5 13.5 17.1716 13.5 18C13.5 18.8284 14.1716 19.5 15 19.5Z" fill="white"/>
            </svg>
            

              <div>Order Medicines</div>
            </div>
            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 4.5H7C6.17157 4.5 5.5 5.17157 5.5 6V18C5.5 18.8284 6.17157 19.5 7 19.5H18C18.8284 19.5 19.5 18.8284 19.5 18V6C19.5 5.17157 18.8284 4.5 18 4.5Z" stroke="white"/>
            <path d="M8.5 5V19" stroke="white"/>
            <path d="M13.5 9V14" stroke="white"/>
            <path d="M16 11.5H11" stroke="white"/>
            <path d="M16 16.5H11" stroke="white"/>
            </svg>
            

              <div>View medical records</div>
            </div>
            <div style={{ marginTop: "1px" }}>
              <div style={{ display: "flex" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11.5V6H14V11.5L19 19H5L10 11.5Z" stroke="white"/>
              <path d="M7.5 6H16.5" stroke="white"/>
              <path d="M7.5 15.5002C8 14.8335 9.49998 13.9754 11.5 14.7754C14 15.7754 14.5 16.7754 16.5 15.7754" stroke="white" stroke-width="0.75"/>
              </svg>
              

                <span className={styles.new_badge}
                >
                  New
                </span>
              </div>
              <div>Book test</div>
            </div>
            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 18V6C8.6 6 11.5 7.33333 12.5 8V19C9.3 17.4 6.16667 17.6667 5 18Z" stroke="white" stroke-width="0.75"/>
            <path d="M20 18V6C16.4 6 13.5 7.33333 12.5 8V19C15.7 17.4 18.8333 17.6667 20 18Z" stroke="white" stroke-width="0.75"/>
            <path d="M7.5 9.5H10.5" stroke="white"/>
            <path d="M14.5 9.5H17.5" stroke="white"/>
            <path d="M7.5 12.5H10.5" stroke="white"/>
            <path d="M14.5 12.5H17.5" stroke="white"/>
            <path d="M7.5 15.5H10.5" stroke="white"/>
            <path d="M14.5 15.5H17.5" stroke="white"/>
            </svg>
            

              <div>Read articles</div>
            </div>
            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 7.5H6C5.17157 7.5 4.5 8.17157 4.5 9V17C4.5 17.8284 5.17157 18.5 6 18.5H19C19.8284 18.5 20.5 17.8284 20.5 17V9C20.5 8.17157 19.8284 7.5 19 7.5Z" stroke="white"/>
            <path d="M4.5 11.5C6.83333 12.3333 13.3 13.5 20.5 11.5" stroke="white" stroke-width="0.75"/>
            <path d="M15 5.5H10C9.72386 5.5 9.5 5.72386 9.5 6V7C9.5 7.27614 9.72386 7.5 10 7.5H15C15.2761 7.5 15.5 7.27614 15.5 7V6C15.5 5.72386 15.2761 5.5 15 5.5Z" stroke="white"/>
            <path d="M13.5 11H11.5C11.2239 11 11 11.2239 11 11.5C11 11.7761 11.2239 12 11.5 12H13.5C13.7761 12 14 11.7761 14 11.5C14 11.2239 13.7761 11 13.5 11Z" fill="white"/>
            </svg>
              <div>For healthcare providers</div>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
}
