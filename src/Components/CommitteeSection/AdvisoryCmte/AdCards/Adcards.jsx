import "./AdCards.css"

const advisory=[
    {
        h1:"Prof(Dr.) Valentina Emilia Balas , Aurel Vlaicu University of Arad, Romania"
    },
    {
        h1:"Prof(Dr.) Vincenzo Piuri , University of Milan, Italy"
    },
    {
        h1:"Prof(Dr.) Marius Balas , Aurel Vlaicu University of Arad, Romania"
    },
    {
        h1:"Prof(Dr.) Mohamed Salim Bouhlel , Sfax University, Tunisia"
    },
    {
        h1:"Prof(Dr.) Aboul Ella Hassanien , Cairo University, Egypt"
    },
    {
        h1:"Prof(Dr.) Cenap Ozel , King Abdulaziz University, Saudi Arabia"
    },
    {
        h1:"Prof(Dr.) Ashiq Anjum , University of Derby, Bristol, UK"
    },
    {
        h1:"Prof(Dr.) Mischa Dohler , King’s College London, UK"
    },
    {
        h1:"Prof(Dr.) Sanjeevikumar Padmanaban , University of Johannesburg, South Africa"
    },
    {
        h1:"Prof(Dr.) Siddhartha Bhattacharyya , Principal, RCC Institute of Information Technology, Kolkata, India"
    },
    {
        h1:"Prof(Dr.) David Camacho , Associate Prof, Universidad Autonoma de Madrid,Spain"
    },
    {
        h1:"Dr. Abu Yousuf , Asst.Prof University Malaysia Pahang Gambang, Malaysia"
    },
    {
        h1:"Prof(Dr.) Salah-ddine Krit , University Ibn Zohr – Agadir, Morocco"
    },
    {
        h1:"Dr. Sanjay Kumar Biswash , Research Scientist INFOCOMM Lab, Russia"
    },
    {
        h1:"Prof(Dr.) Maryna Yena S , Senior Lecturer Medical University of Kiev, Ukraine"
    },
    {
        h1:"Prof(Dr.) Giorgos Karagiannidis , Aristotle University of Thessaloniki, Greece"
    },
    {
        h1:"Prof(Dr.) Tanuja SRIVASTAVA , Dept of Mathematics, IIT Roorkee"
    },
    {
        h1:"Dr. D Jude Hemanth , Associate Professor, Karunya University, Coimbatore"
    },
    {
        h1:"Prof(Dr.) Tiziana Catarci , Sapienza University, Rome, Italy"
    },
    {
        h1:"Prof(Dr.) Salvatore Gaglio , University Degli Studi di Palermo, Italy"
    },
    {
        h1:"Prof(Dr.) Bozidar Klicek , University of Zagreb, Croatia"
    },
    {
        h1:"Dr. Marcin Paprzycki , Associate Professor, Polish Academy of Science, Poland"
    },
    {
        h1:"Prof(Dr.) A.K. Singh , NIT Kurukshetra, India"
    },
    {
        h1:"Prof(Dr.) Anil Kumar Ahlawat , KIET Group of Institutes, India"
    },
    {
        h1:"Prof(Dr.) Chang-Shing Lee , National University of Tainan, Taiwan"
    },
    {
        h1:"Dr. Paolo Bellavista , Associate Prof, Alma Mater Studiorum–Università di Bologna"
    },
    {
        h1:"Prof(Dr.) Sanjay Misra , Covenant University, Nigeria"
    },
    {
        h1:"Prof(Dr.) Benatiallah Ali , Associate Professor Adrar University, Algeria"
    },
    {
        h1:"Prof(Dr.) Suresh Chandra Satapathy , PVPSIT, Vijayawada, India"
    },
    {
        h1:"Prof(Dr.) Marylene Saldon-Eder , Mindanao University of Science and Technology"
    },
    {
        h1:"Prof(Dr.) Özlem ONAY , Anadolu University, Eskisehir TURKEY"
    },
    {
        h1:"Miss Rubelyn W. Coronel , Datu Abing St., Calinan, Davao City"
    },
    {
        h1:"Prof(Dr.) Kei Eguchi , Dept. of Information Electronics, Fukuoka Institute of Technology"
    },
    {
        h1:"Prof(Dr.) Zoltan Horvath , Professor, Kasetsart University"
    },
    {
        h1:"Dr. AKM Matiul Alam , Vancouver British Columbia, Canada"
    },
    {
        h1:"Prof(Dr.) Joong Hoon Jay Kim , Korea University"
    },
    {
        h1:"Prof(Dr.) Sheng-Lung Peng , National Dong Swa Uinversity, Taiwan"
    },
    {
        h1:"Dr. Daniela Lopez De Luise , CI2S Lab, Argentina"
    },
    {
        h1:"Dr. Dac-Nhuong Le , Haiphong University, Vietnam"
    },
    {
        h1:"Dr. Dusanka Boskovic , University of Sarajevo, Sarajevo"
    },
    {
        h1:"Dr. Periklis Chat Zimisios , Alexander TEI of Thessaloniki, Greece"
    },
    {
        h1:"Dr. Atta Ur Rehman Khan , KSU and CIIT"
    },
    {
        h1:"Dr. Nhu Gia Nguyen , Duy Tan University, Vietnam"
    },
    {
        h1:"Prof(Dr.) Huynh Thanh Binh , Hanoi University of Science & Technology, Vietnam"
    },
    {
        h1:"Dr. Ahmed Faheem Zobaa , Brunel University, London"
    },
    {
        h1:"Prof(Dr.) Ladjel Bellatreche , Poitiers University"
    },
    {
        h1:"Prof(Dr.) Victor C.M. Leung , The University of British Columbia, Canada"
    },
    {
        h1:"Prof(Dr.) Huseyin Irmak , Cankiri Karatekin University, Turkey"
    },
    {
        h1:"Dr. Alex Norta , Associate Professor, Tallinn University of Technology, Estonia"
    },
    {
        h1:"Prof(Dr.) Amit Prakash Singh , GGSIPU, Delhi, India"
    },
    {
        h1:"Prof(Dr.) Abhishek Swaroop , Bhagwan Parshuram Institute of Technology, Delhi"
    },
    {
        h1:"Belfin Robinson, Postdoctoral Fellow, School of Medicine, BRIC, University of North Carolina, Chapel Hill , NC, USA"
    },
    
    
]


function AdCards() {
    return ( 
       <>
        <div className="adCards">
           {
              advisory.map((a,i)=>{
                return(
                    <div className="adCard" key={i}>
                        <h1>{a.h1}</h1>
                    </div>
                )
              })
           }
        </div>
       </>
        
    )
}

export default AdCards;