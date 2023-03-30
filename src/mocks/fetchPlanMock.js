export const fetchPlanMock = {
  data: {
    success: 1,
    status: "Plans fetched",
    date: "", //pass the same date
    tickets: [
      {
        category: "Adults",
        price: 1000,
        GST: "NA",
        id: 1,
        img: "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654610735/Booking_System/adult_inzyf4.png",
        desc: "Adults should have age limit between 24 and 55. Adults should produce a copy of govt document to know Indian residents.",
      },
      {
        category: "Students",
        price: 300,
        GST: "NA",
        id: 2,
        img: "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654610736/Booking_System/student_xqd4ux.webp",
        desc: "Students should have age limit of between 5 and 24. Students should produce a copy of ID card which your institution has provided.",
      },
      {
        category: "Senior Sitizens",
        price: 500,
        GST: "NA",
        id: 3,
        img: "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654610735/Booking_System/senior_bu276c.png",
        desc: "Senior citizens should have age limit of above 55. They should provide the relevent document which has age proof."
      },
      {
        category: "Kids",
        price: 100,
        GST: "NA",
        id: 4,
        img: "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654610735/Booking_System/kids_wmcho0.webp",
        desc: "Kids should have age limit of less than 5. Kids won't have access to all rides." 
      },
      {
        category: "Foriegners",
        price: 2000,
        GST: "NA",
        id: 4,
        img: "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654613868/Booking_System/foriegner_yyosmg.webp",
        desc: "Foriegners should produce the copy of passport." 
      }
    ],
    meals: [
      {
        category: "Breakfast",
        price: 100.99,
        GST: "NA",
        id: 1,
        img: "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654786896/Booking_System/breakfast_eupcqn.webp"
      },
      {
        category: "Lunch",
        price: 212.34,
        GST: "NA",
        id: 2,
        img: "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654786896/Booking_System/lunch_kike9o.jpg"
      },
      {
        category: "Snacks",
        price: 50.13,
        GST: "NA",
        id: 3,
        img: "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654786896/Booking_System/snacks_aq8m3g.jpg"
      },
      {
        category: "Dinner",
        price: 150,
        GST: "NA",
        id: 4,
        img: "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654786897/Booking_System/dinner_hqnphm.jpg"
      },
      {
        category: "Breakfast Lunch combo",
        price: 250.87,
        GST: "NA",
        id: 5,
        img: "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654786897/Booking_System/breakfastLunchCombo_ebgdgz.webp"
      },
      {
        category: "All Day Combo",
        price: 400,
        GST: "NA",
        id: 6,
        img: "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654786896/Booking_System/bfLnchSnkDinr_ozuuqu.jpg"
      },
    ],
  },
};
