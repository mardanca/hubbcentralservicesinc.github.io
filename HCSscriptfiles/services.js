import { Links } from "./fygaro.links.js";
// import { setItem } from "./membership.js";
// let onlineService = undefined;

// console.log(Links)

const services = [
  {
    id: "ML",
    name: "Micro Loans",
    priceString: "BBD $50.00",
    photo: "Photos/ML.jpg",
    amount: true,
  },
  {
    id: "RDL",
    name: "Renewal of Driver's License",
    priceString: "Price varies",
    photo: "Photos/RDL.jpg",
    amount: false,
  },
  {
    id: "UVA",
    name: "US Visa Application",
    priceString: "BBD $400.00",
    photo: "Photos/UVA.jpg",
    amount: true,
  },
  {
    id: "CETA",
    name: "Canadian ETA",
    priceString: "BBD $40.00",
    photo: "Photos/CETA.jpg",
    amount: true,
    link: Links.ceta_link,
  },
  {
    id: "UBP",
    name: "Utility Bill Payments",
    priceString: "Price varies",
    photo: "Photos/UBP.jpg",
    amount: false,
  },
  {
    id: "CV",
    name: "CV / Resume Writing",
    priceString: "BBD $50.00",
    photo: "Photos/CV.jpg",
    amount: true,
  },
  {
    id: "TN",
    name: "Tamis Numbers",
    priceString: "BBD $50.00",
    photo: "Photos/TN.jpg",
    amount: true,
  },
  {
    id: "LT",
    name: "Land Tax",
    priceString: "BBD $20.00",
    photo: "Photos/LT.jpg",
    amount: true,
  },
  {
    id: "IT",
    name: "Income Tax",
    priceString: "BBD $50.00",
    photo: "Photos/IT.jpg",
    amount: true,
  },
  {
    id: "PCOC",
    name: "Police Certificate of Character",
    priceString: "BBD $50.00",
    photo: "Photos/PCOC.jpg",
    amount: true,
  },
  {
    id: "PIT",
    name: "Prison Inmate Top-Ups",
    priceString: "Price varies",
    photo: "Photos/usvisa.jpg",
    amount: false,
  },
  {
    id: "EALI",
    name: "Employment Agency Local & International",
    priceString: "Price varies",
    photo: "Photos/usvisa.jpg",
    amount: false,
  },
  {
    id: "IL",
    name: "Invitation Letters",
    priceString: "Price varies",
    photo: "Photos/usvisa.jpg",
    amount: false,
  },
  {
    id: "DP",
    name: "Document Preparations",
    priceString: "Price varies",
    photo: "Photos/usvisa.jpg",
    amount: false,
  },
];

const servicesBtns = document.querySelectorAll(".serviceBtn");

const serviceHeadingTitleContainer = document.querySelector(
  ".serviceHeadingtitle-container"
);
const serviceHeadingTitle = document.querySelector(".serviceHeadingtitle");
const serviceHeadingPrice = document.querySelector(".servicesPrice");

const servicesContainer = document.querySelector(".services-container");

const appointmentContainer = document.querySelector(".appointment-container");

const slideShowAppointmentBtn = document.querySelector(
  ".servicesAppointmentButton"
);

const subject = document.getElementById("_subject");
// const onlinePaymentMethod = document.querySelector(".online");

// const backToPay = document.querySelector(".goBack");

const headPayNow = document.getElementById("inHeadingAppointmentButton");

const selectOptions = document.getElementById("servicesList");

headPayNow.addEventListener('click',()=>{
  switch(headPayNow.parentElement.parentElement.childNodes[3].childNodes[1].innerHTML){
     case 'Micro Loans': localStorage.setItem('onlineService', 'ML');
     break;

     case 'US Visa Application': localStorage.setItem('onlineService', 'UVA');
     break;
     case 'Renewal of Driver\'s License': localStorage.setItem('onlineService', 'RDL');
     break;
  }
})
// const selectOptions = document.querySelectorAll('.selectOptions');
// console.log(selectOptions)

// selectOptions.forEach(opt => {
//   opt.addEventListener('change', () =>{

//     console.log(opt)
//     // setCheckout();
//     // subject.value = 'Appointment to pay ' + e.currentTarget.innerHTML

//     // console.log(e.currentTarget.innerHTML)
//   })
// })

selectOptions.addEventListener('change', () => {
    console.log(selectOptions.value);
    if( selectOptions.value === 'Micro Loans'){
      localStorage.setItem('onlineService','ML' )
    };
    if( selectOptions.value === 'Renewal of Driver\'s License'){
      localStorage.setItem('onlineService','RDL' )
    };
    if( selectOptions.value === 'US Visa Application'){
      localStorage.setItem('onlineService','UVA' )
    };
    if( selectOptions.value === 'Canadian ETA'){
      localStorage.setItem('onlineService','CETA' )
    };
    if( selectOptions.value === 'Utility Bill Payments'){
      localStorage.setItem('onlineService','UBP' )
    };
    if( selectOptions.value === 'CV / Rusume Writing'){
      localStorage.setItem('onlineService','CV' )
    };
    if( selectOptions.value === 'Tamis Numbers'){
      localStorage.setItem('onlineService','TN' )
    };
    if( selectOptions.value === 'Police Certificate of Character'){
      localStorage.setItem('onlineService','PCOC' )
    };
    if( selectOptions.value === 'Prison Inmate Top-Ups'){
      localStorage.setItem('onlineService','PIT' )
    };
    if( selectOptions.value === 'Employment Agency Local & International'){
      localStorage.setItem('onlineService','EALI' )
    };
    if( selectOptions.value === 'Document Preparations'){
      localStorage.setItem('onlineService','DP' )
    };
    if( selectOptions.value === 'Invitation Letters'){
      localStorage.setItem('onlineService','IL' )
    };
    if( selectOptions.value === 'Land Tax'){
      localStorage.setItem('onlineService','LT' )
    };
    if( selectOptions.value === 'Income Tax'){
      localStorage.setItem('onlineService','IT' )
    };
    
    
    console.log(localStorage.onlineService)
  setCheckout();
  subject.value = "Appointment to pay " + selectOptions.value;
  // localStorage.setItem('onlineService',selectOptions.dataset.option);
  console.log(selectOptions.dataset.option)
});

// selectOptions.forEach((opt) =>{
//   // console.log(opt)
//   opt.addEventListener('click', () =>{
//     console.log(opt)
//   })
  
// })

const setCheckout = () => {
  window.localStorage.setItem("checkout", true);
  appointmentContainer.classList.remove("no-show");

};

slideShowAppointmentBtn.addEventListener("click", () => {
  setCheckout();
  subject.value =
    "Appointment to pay " +
    slideShowAppointmentBtn.parentElement.parentElement.childNodes[3]
      .childNodes[1].innerHTML;
});

let index = 0;

setInterval(() => {
  if (index == 2) {
    index = 0;
  } else {
    index++;
  }
  serviceHeadingTitleContainer.style.backgroundImage = `url(${services[index].photo})`;
  serviceHeadingTitle.innerHTML = `${services[index].name}`;
  serviceHeadingPrice.innerHTML = `${services[index].priceString}`;
}, 3000);

servicesBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("serviceHeading-left")) {
      index--;
    } else if (btn.classList.contains("serviceHeading-right")) {
      index++;
    }

    if (index < 0) {
      index = 2;
    } else if (index > 2) {
      index = 0;
    }

    serviceHeadingTitleContainer.style.backgroundImage = `url(${services[index].photo})`;
    serviceHeadingTitle.innerHTML = `${services[index].name}`;
    serviceHeadingPrice.innerHTML = `${services[index].priceString}`;
  });
});

const bookAppointment = document.querySelector(".book-appointment");

window.addEventListener("DOMContentLoaded", () => {
  services.forEach((e) => {
    servicesContainer.innerHTML += ` <div class="service" id="${e.id}">
    <div class="servicesTitle-container">
        <h1 class="servicesTitle">${e.name}</h1>
    </div>
    <div class="servicesPrice-container">
        <h2 class="servicesPrice">${e.priceString}</h2>
    </div>
    <div class="servicesAppointmentButton-container">
        <button class="servicesAppointmentButton book">
            pay now
        </button>
    </div>`;

    const item = document.getElementById(`${e.id}`);

    item.style.backgroundImage = `url(Photos/${e.id}.jpg`;

    item.style.backgroundSize = "cover";
  });

  const bookBtn = document.querySelectorAll(".book");

  bookBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      setCheckout();
      subject.value =
        "Appointment to pay " +
        btn.parentNode.parentNode.childNodes[1].childNodes[1].innerHTML;

      // console.log(btn.parentElement.parentElement.id)

      localStorage.setItem('onlineService', btn.parentElement.parentElement.id)

      // console.log  (localStorage)
      // let

      // let selected = btn.parentElement.parentElement.childNodes[3].childNodes[1].innerHTML;

      // console.log(location)
    });
  });

  serviceHeadingTitleContainer.style.backgroundImage = `url(${services[0].photo})`;
  serviceHeadingTitle.innerHTML = `${services[0].name}`;
  serviceHeadingPrice.innerHTML = `${services[0].priceString}`;
});
