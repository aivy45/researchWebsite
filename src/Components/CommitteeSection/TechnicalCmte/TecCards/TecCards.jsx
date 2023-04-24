import "./TecCards.css"


const tecMembers=[
    {
        h1:"Prof (Dr.) Vincenzo Piuri : University of Milan Italy.",
        
    },
    {
        h1:"Prof (Dr.) Valentina Emilia Balas : Aurel Vlaicu University of Arad Romania.",
    },
    {
        
        h1:"Prof (Dr.) Marius Balas : Aurel Vlaicu University of Arad Romania.",
        
    },
    {
        h1:"Prof (Dr.) Mohamed Salim Bouhlel : Sfax University Tunisia.",
       
    },
    {
        h1:"Prof (Dr.) Aboul Ella Hassanien : Cairo University Egypt.",
        
    },
    {
        h1:"Prof (Dr.) Cenap Ozel : King Abdulaziz University Saudi Arabia.",
        
    },
    {
        h1:"Prof (Dr.) Ashiq Anjum : University of Derby Bristol UK.",
        
    },
    {
        h1:"Prof (Dr.) Mischa Dohler : King’s College London UK.",
        
    },
    {
        h1:"Prof (Dr.) Sanjeevikumar Padmanaban : University of Johannesburg South Africa.",
        
    },
    {
        h1:"Prof (Dr.) David Camacho : Associate Prof Universidad Autonoma de Madrid Spain",
        
    },
    {
        h1:"Dr. Abu Yousuf : Asst.Prof University Malaysia Pahang Gambang Malaysia.",
        
    },
    {
        h1:"Prof (Dr.) Salah-ddine Krit : University Ibn Zohr – Agadir Morocco.",
        
    },
    {
        h1:"Dr. Sanjay Kumar Biswash : Research Scientist INFOCOMM Lab Russia.",
        
    },
    {
        h1:"Prof (Dr.) Maryna Yena S : Senior Lecturer Medical University of Kiev Ukraine.",
        
    },
    {
        h1:"Prof (Dr.) Giorgos Karagiannidis : Aristotle University of Thessaloniki Greece.",
        
    },
    {
        h1:"Prof (Dr.) Tiziana Catarci : Sapienza University Rome Italy.",
        
    },
    {
        h1:"Prof (Dr.) Salvatore Gaglio : University Degli Studi di Palermo Italy.",
        
    },
    {
        h1:"Dr. Marcin Paprzycki : Associate Professor Polish Academy of Science Poland.",
        
    },
    {
        h1:"Prof (Dr.) Chang-Shing Lee : National University of Tainan Taiwan.",
        
    },
    {
        h1:"Prof (Dr.) Sanjay Misra : Covenant University Nigeria.",
        
    },
    {
        h1:"Prof (Dr.) Benatiallah ali : Associate Professor Adrar University Algeria.",
        
    },
    {
        h1:"Prof (Dr.) Marylene Saldon-Eder : Mindanao University of Science and Technology.",
        
    },
    {
        h1:"Prof (Dr.) Özlem ONAY : Anadolu University Eskisehir TURKEY.",
        
    },
    {
        h1:"Miss Rubelyn W. Coronel : Datu Abing St. Calinan Davao City.",
        
    },
    {
        h1:"Prof (Dr.) Kei Eguchi : Dept. of Information Electronics Fukuoka Institute of Technology.",
        
    },
    {
        h1:"Prof (Dr.) Zoltan Horvath : Professor Kasetsart University.",
        
    },
    {
        h1:"Dr. AKM Matiul Alam : Vancouver British Columbia Canada.",
        
    },
    {
        h1:"Prof (Dr.) Joong Hoon Jay Kim : Korea University.",
        
    },
    {
        h1:"Prof (Dr.) Sheng-Lung Peng : National Dong Swa Uinversity Taiwan.",
        
    },
    {
        h1:"Dr. Daniela Lopez De Luise : CI2S Lab Argentina.",
        
    },
    {
        h1:"Dr. Dac-Nhuong Le : Haiphong University Vietnam.",
        
    },
    {
        h1:"Dr. Dusanka Boskovic : University of Sarajevo Sarajevo.",
        
    },
    {
        h1:"Dr. Periklis Chat Zimisios : Alexander TEI of Thessaloniki Greece.",
        
    },
    {
        h1:"Dr. Atta Ur Rehman Khan : KSU and CIIT.",
        
    },
    {
        h1:"Dr. Nhu Gia Nguyen : Duy Tan University Vietnam.",
        
    },
    {
        h1:"Prof (Dr.) Huynh Thanh Binh : Hanoi University of Science & Technology Vietnam.",
        
    },
    {
        h1:"Dr. Ahmed Faheem Zobaa : Brunel University London.",
        
    },
    {
        h1:"Dr. Olema Vincent : Uganda.",
        
    },
    {
        h1:"Dr. Kirti Tyagi : Inha University Tashkent.",
        
    },
    {
        h1:"Prof (Dr.) Ladjel Bellatreche : Poitiers University France.",
        
    },
    {
        h1:"Prof (Dr.) Victor C.M. Leung : The University of British Columbia Canada.",
        
    },
    {
        h1:"Prof (Dr.) Huseyin Irmak : Cankiri Karatekin University Turkey.",
        
    },
    {
        h1:"Dr. Alex Norta : Associate Professor Tallinn University of Technology Estonia.",
        
    },
    {
        h1:"Prof Christos Douligeris : University of Piraeus Greece.",
        
    },
    {
        h1:"Dr. Brett Edward Trusko : President & CEO(IAOIP) and Assistant Professor Texas A&M University Texas.",
        
    },
    {
        h1:"Dr. Vikas Chaudhary : Madda Walabu University Ethiopia.",
        
    },
    {
        h1:"Dr. Hamid R Arabnia : University of Georgia USA.",
        
    },
    {
        h1:"rof (Dr.) Akshaye Dhawan : Ursinus College Pennsylvania USA.",
        
    },
    {
        h1:"Dr. Nguyen Ha Huy CUong : Lecturer Quang Nam University Tam Ky City Vietnam.",
        
    },
    {
        h1:"Dr. Aleksandar Mastilovic : University of Novi Sad Serbia.",
        
    },
    // upto 50  
    {
        h1:"Dr. Mohamed Mostafa Fouad : Arab Academy for Science and Technology Egypt."
    },
    {
        h1:"Prof(Dr.) Maryna Yena S : Senior Lecturer Medical University of Kiev Ukraine."
    },
    {
        h1:"Prof(Dr.) Benatiallah ali : Associate Professor Engineering Department Adrar University ,Algeria."
    },
    {
        h1:"Andr Pranolo : Universitas Ahmed Dahlan Indonesia."
    },
    {
        h1:"Dr. Simranjeet Kaur : Post Doctor Researcher Copenhagen Diabetes Research Center Herlev Hospital Herlev Denmark."
    },
    {
        h1:"Dr. Jitendra Narayan : PostDoc Research Scientist University of Namur (UNamur) Department of Biology (URBE) Laboratory of Evolutionary Genetics and Ecology (LEGE) 61 Rue de Bruxelles B-5000 Namur-Belgium."
    },
    {
        h1:"Mr. Ashutosh Kaushik : Software Engineer Synopsys California USA."
    },
    {
        h1:"Mr. Amarjeet Raghav : Software Engineer TCS Washington DC USA."
    },
    {
        h1:"Mr. Ankur Verma : Software Engineer Thyssenkrupp Tallent UK"
    },
    {
        h1:"Mr. Rajesh Kumar : Software Engineer TCS USA."
    },
    {
        h1:"Prof(Dr.) Tanuja SRIVASTAVA : Department of Mathematics Indian Institute of Technology Roorkee."
    },
    {
        h1:"Prof(Dr.) Suresh Chandra Satapathy : PVPSIT Vijayawada India."
    },
    {
        h1:"Prof(Dr.) Ravish Saggar : Director Banarsidas Chandiwal Institute of Information Technology ,Delhi."
    },
    {
        h1:"Prof(Dr.) R.K. Datta Director : MERIT."
    },
    {
        h1:"Prof(Dr.) Parmanand : Dean Galgotias University UP India."
    },
    {
        h1:"Dr. D Jude Hemant : Associate Professor Karunya University Coimbatore."
    },
    {
        h1:"Dr. Pradeep Kumar Mallick : Professor Dept. of CSE VBIT Hyderabad."
    },
    {
        h1:"Dr. Mahesh Bundele : Poornima University India."
    },
    {
        h1:"Dr. Rajesh Kumar : CSE Dept Thapar University Punjab India"
    },
    {
        h1:"Dr. Uday Shankar : Deen Dayal Uppadhayay UP India"
    },
    {
        h1:"Dr. Dhurender : IT Dept Netaji Subhash Institute of Technology Delhi"
    },
    {
        h1:"Prof(Dr.) Rajesh Tyagi : SRM University India"
    },
    {
        h1:"Dr. Kapil Sharma : Professor Delhi Technological University Delhi India"
    },
    {
        h1:"Dr. Manish Madan : Chairman AIRDO Delhi India"
    },
    {
        h1:"Dr. Amar Mohapatra : Associate Professor IGDTUW Delhi India"
    },
    {
        h1:"Prof(Dr.) Amit Prakash Singh : GGSIPU Delhi India"
    },
    {
        h1:"Dr. PS Rana : Associate Professor Thapar University Punjab India"
    },
    {
        h1:"Dr. Vishal Kumar : BTKIT Dwarahat India"
    },
    {
        h1:"Dr. Amit Joshi : Assistant Professor SITG Gujarat India"
    },
    {
        h1:"Prof(Dr.) Himani Bansal : JIIT Noida India"
    },
    {
        h1:"Dr. Anirban Basu : President CSI India Council Bangalore India"
    },
    {
        h1:"Dr. Vikram Bali : Head of Department-CSE Panipat Institute of Engineering & Technology Panipat ,India"
    },
    {
        h1:"Dr. Brojo Kishore Mishra : Associate Professor CV Raman College of Engineering Bhubaneshwar"
    },
    {
        h1:"Dr D.V. Ashoka : Professor JSS Academy of Technical Education Bangalore India"
    },
    {
        h1:"Dr. Thippeswamy G : Professor & HOD Computer Science BMS Institute of Technology Bangalore"
    },
    {
        h1:"Dr. Vinod Kumar Verma : Sant Longowal Institute of Engineering & Technology (Deemed University) ,Punjab India"
    },
    {
        h1:"Prof D. P. Mishra : Prof. In-Charge T & P Cell Asso. Prof. Bhilai Institute of Technology ,Bhilai House Durg CG"
    },
    {
        h1:"Dr. Debabrata Samanta : Associate professor Dayananda Sagar College of Arts Science and ,Commerce Bangalore India"
    },
    {
        h1:"Prof. Meenu Vijarania : Assistant Professor Department of Computer Science Amity University ,Haryana"
    },
    {
        h1:"Dr. Manjesh : Associate Professor Bangalore University Bangalore"
    },
    {
        h1:"Dr. V.PUSHPARAJESH : Kongu Engineering College India"
    },
    {
        h1:"Prof(Dr.) R.Shivakumar : Sona College of Technology Salem India"
    },
    {
        h1:"Prof.(Dr.) K.P.Yadav : Director KCC Institute of Technology & Management Greater Noida"
    },
    {
        h1:"Dr. T.R. Sumithira : K.S.R. College of Engineering Tiruchengode"
    },
    {
        h1:"Dr. S.ALBERT ALEXANDER : Kongu Engineering College Perundurai Tamilnadu India"
    },
    {
        h1:"Dr. Ganesh Venkatesan : Managing Director Elsevier Chennai India"
    },
    {
        h1:"Dr. Deepti Mehrotra : Amity University Noida India"
    },
    {
        h1:"Prof(Dr.) Himanshu Agarwal : Punjabi University Patiala India"
    },
    {
        h1:"Prof(Dr.) Sujata Pandey : Amity University Noida India"
    },
    {
        h1:"Prof(Dr.) Anil Kumar Ahlawat : KIET Group of Institutes India"
    },
    // upto 100 
    {
        h1:"Dr. Hanumat G Sastry : Associate Professor UPES Dehradun India"
    },
    {
        h1:"Mr. Jayraj Ugarkar : Head Internet of Things Infosys Bangalore India"
    },
    {
        h1:"Dr. Babita Pandey : Associate Professor School of Computer Application Lovely Professional ,University"
    },
    {
        h1:"Dr. Samarjeet Borah : Associate Professor Sikkim Manipal Institute of Technology India"
    },
    {
        h1:"Prof(Dr.) Siddhartha Bhattacharyya : Principal RCC Institute of Information Technology Kolkata ,India"
    },
    {
        h1:"Dr. Uzzal Sharma : Asst. Professor Department of Computer Science & EngineeringAssam Don Bosco ,University"
    },
    {
        h1:"Dr. NANDINI PRASAD : K S Associate Professor Department of Computerscience & Engineering Dr. ,AIT Bangalore"
    },
    {
        h1:"Dr. K. David : Assistant Professor PG & Research Department of Computer Science Government Arts ,College Udumalpet"
    },
    {
        h1:"Prof(Dr.) S. Pushpa : St.Peter's University Avadi Chennai"
    },
    {
        h1:"Prof(Dr.) Shailendra Mishra : ECE Department Bharat Institute of Technology and Engineering ,Hyderabad"
    },
    {
        h1:"Prof(Dr.) P V Rao : Rajarajeswari College of Engineering India"
    },
    {
        h1:"Dr. Preetisudha Meher : GITAM University Hyderabad India"
    },
    {
        h1:"Prof. Abdul Wahid : Maulana Azad National Urdu University Hyderabad."
    },
    {
        h1:"Dr. P.Maruthupandi : Government College of Technology Coimbatore"
    },
    {
        h1:"Prof(Dr.) A.Mahabub Basha : K.S.R. College of Engineering Tiruchengode Tamilnadu India"
    },
    {
        h1:"Prof(Dr.) C.NAGARAJAN Muthayammal : College of Engineering Rasipuram Namakkal India"
    },
    {
        h1:"Dr. Telagarapu.Prabhakar : GMR Institute of Technology (GMRIT) Rajam Srikakulam District A.P"
    },
    {
        h1:"Dr. Gurpreet Singh : Giani Zail Singh Campus College of Engineering & Technology Maharaja ,Ranjit Singh Punjab Technical University Bathinda India."
    },
    {
        h1:"Dr. Anil Verma : Thapar University Patiala India"
    },
    {
        h1:"Prof(Dr.) A.K. Singh : NIT Kurukshetra India"
    },
    {
        h1:"Prof(Dr.) Subhra Saggar : Director GNIM India"
    },
    {
        h1:"Prof(Dr.) Mangey Ram Swami : Graphic Era University Dehradun India"
    },
    {
        h1:"Dr. Swagatam Das : Associate Professor Indian Statistical Institute Kolkata India"
    },
    {
        h1:"Prof(Dr.) Abhishek Swaroop : Bhagwan Parshuram Institute of Technology Delhi"
    },
    {
        h1:"Dr. Hemraj Saini : Associate Professor Jaypee University of Information Technology Waknaghat ,India"
    },
    // upto 125 
    {
        h1:"Prof(Dr.) Prasanta Jana : Indian Institute of Technology Dhanbad India"
    },
    {
        h1:"Dr. Sandeep Chaurasia : Associate Professor Manipal University Jaipur India"
    },
    {
        h1:"Dr. Manish Saini : Assistant Professor DCRUST Haryana India"
    },
    {
        h1:"Dr. Vrijendra Singh : Associate Professor Indian Institute of Information Technology Allahabad ,India"
    },
    {
        h1:"Dr. Arun Kumar : Verma Assistant Professor MNIT Jaipur India"
    },
    {
        h1:"Dr. Manoj Kumar : Panda Associate Professor G. B. Pant Engineering College Garhwal India"
    },
    {
        h1:"Dr. Seema Verma : Associate Professor Banasthali Vidyapith Rajasthan India"
    },
    {
        h1:"Dr. Om Prakash Sangwan : Associate Professor Guru Jambheshwer University of Science & ,Technology Hissar India"
    },
    {
        h1:"Dr. Vishal Goyal : Associate Professor GLA University Mathura India"
    },
    {
        h1:"Dr. G.Suseendarn : Assistant Professor Vels University Chennai India"
    },
    {
        h1:"Prof(Dr.) Atul Gonsai : Saurashtra University Rajkot"
    },
    {
        h1:"Prof(Dr.) Shashikant Patil : Shirpur"
    },
    {
        h1:"Prof. (Dr.) Neeraj Kumar : Professor Thapar University Punjab"
    },
    {
        h1:"Dr. Udayan Ghosh : Associate Professor GGSIPU Delhi"
    },
    {
        h1:"Dr. Venkatadri : Marriboyina Associate Professor UPES Dehradun"
    },
    {
        h1:"Dr. Rama Kishore : Associate Professor GGSIPU Delhi"
    },
    {
        h1:"Dr. Achal Kaushik : Bhagwan Parshuram Institute of Technology Delhi"
    },
    {
        h1:"Dr. Ruchika Malhotra : Associate Professor DTU Delhi India"
    },
    {
        h1:"Dr. Mahesh : Associate Professor JUIT Noida"
    },
    {
        h1:"Dr. Akshi Kumar : Associate Professor NSUT Delhi India"
    },
    {
        h1:"Dr. Rashmi Agarwal : MRUI Haryana India"
    },
    {
        h1:"Dr. Awdesh Singh : Professor Galgotia university UP India"
    },
    {
        h1:"Dr. Mohanjeet Singh : Punjab India"
    },
    {
        h1:"Dr. Shikha Jain : Assistant Professor JUIT Noida India"
    },
    {
        h1:"Dr. Bharti Sharma : Associate Professor NIT Kurukshetra India"
    },
    {
        h1:"Dr. Parmit Kaur : Assistant Professor JUIT Noida India"
    },
    {
        h1:"Dr. Deepak Sharma : Assistant Professor Netaji Subhash Institute of Technology India"
    },
    {
        h1:"Dr. Arun Sharma : Associate Professor IGDTUW Delhi India"
    },
    {
        h1:"Dr. Abhishek Bhattacharya : Institute of Engineering and Management Kolkata India"
    },
    {
        h1:"Dr. Ashish Khanna : MAIT Delhi India"
    },
    {
        h1:"Dr. Deepak Gupta : MAIT Delhi India"
    },
    {
        h1:"Dr. Jyotsna Sinha : Director RCIT GGSIPU India"
    },
    {
        h1:"Dr. PS Bedi : Guru Tegh Bahadur Institute of Technology GGSIPU Delhi India"
    },
    {
        h1:"Dr. Mayur Bhoyar : Jagdamba College of Engg and Tech India"
    },
    {
        h1:"Dr. Anand Nayyar : Assistant Professor KCL Institute Punjab India"
    },
    {
        h1:"Dr. S.Nagaprasad : S.R.R.Govt.Arts & Science College Karimnagar Telangana"
    },
    {
        h1:"Dr. Jyoti Mishra : Assistant Professor Gyan Ganga Institute of Tech and Sciences"
    },
    {
        h1:"Ms. Preeti Nagrath : Bharati Vidyapeeth college of Engineering India."
    },
    {
        h1:"Ms. Rachna Jain : Bharati Vidyapeeth college of Engineering India."
    },
    {
        h1:"Ankur Saxena : Amity University Uttar Pradesh Noida U.P"
    },
    {
        h1:"Dr. Nidhee Chaudhary : Professor Amity University Uttar Pradesh Noida India."
    },
    {
        h1:"Dr. Puniti Mathur : Assistant Professor Amity University Uttar Pradesh Noida India."
    },
    {
        h1:"Dr. Shivani Chandra : Assistant Professor Amity University Uttar Pradesh Noida India."
    },
    {
        h1:"Dr. Jitender Kumar : Assistant Professor Amity University Uttar Pradesh Noida India"
    },
    {
        h1:"Dr. Mahesh Shankar : Dhar Assistant Professor Amity University Uttar Pradesh Noida India"
    },
    {
        h1:"Dr. Anupama Avasthi : Sharma Assistant Professor Amity University Uttar Pradesh Noida India"
    },
    {
        h1:"Mr. Neeraj Kaushik : Assistant Professor Amity University Uttar Pradesh Noida India."
    },
    {
        h1:"Dr. Ankur Chaurasia : Assistant Professor Amity University Uttar Pradesh Noida India."
    },
    {
        h1:"Dr. Neha Gupta : Faculty of Computer Applications Manav Rachna International University ,Faridabad India."
    },
    {
        h1:"Dr. Sumit Kumar : KIET Group of Institute AKTU U.P. India."
    },
    {
        h1:"Dr.Yugal Kumar : JP University Solan H.P India."
    },
    {
        h1:"Dr. Neeraj Rathore : India.neerajrathore37@gmail.com Assistant Prof. Deptt. of CSE Jaypee ,University of Engg. and Technology Guna M.P."
    },
    {
        h1:"Dr. Prateek Pandey : pandeyprat@yahoo.com Assistant Prof. Deptt. of CSE Jaypee University of ,Engg. and Technology Guna M.P."
    },
    {
        h1:"Dr. Inderveer Chana : Professor Thapar University Patiala Punjab."
    },
    {
        h1:"Dr. Anand Rai : Professor GL BajajGreater Noida UP"
    },
    {
        h1:"Dr. Akhilesh Tiwari : Associate Professor MITS Gwalior M.P."
    },
    {
        h1:"Dr. Ratnesh Litoria : Assistant Prof. Jaypee University of Engg. & Technology Guna M.P."
    },
    {
        h1:"Dr. Ajay Kumar : Assistant Prof. Jaypee University of Engg. & Technology Guna M.P."
    },
    {
        h1:"Dr. Nilesh Jain : Assistant Prof. Jaypee University of Engg. & Technology Guna M.P."
    },
    {
        h1:"Dr. Anirban Mitra : Associate Professor Department of Computer Science Engineering Gandhi ,Engineering College Bhubaneswar Odishan."
    },
    {
        h1:"Prof. C. S. Rai : USICT GGSIP University New Delhi."
    },
    {
        h1:"Deepika Kukreja : Assistant Professor NSIT New Delhi"
    },
    {
        h1:"Dr. Lalit Goyal : Assistant Professor Bhartiya Vidyapeeth’s College of Engineering New Delhi"
    },
    {
        h1:"Cosmena Mahapatra : Assistant Professor VIPS New Delhi."
    },
    {
        h1:"Dr. Sudeep Tanwar : Department of Computer Engineering Institute of Technology Nirma University ,Ahmedabad Gujarat India"
    },
    {
        h1:"Dr. Priyanka Sharma : Department of Computer Engineering Institute of Technology Nirma ,University Ahmedabad Gujarat India"
    },
    {
        h1:"Dr. Sudhanshu Tyagi : Department of Electronics and Communication Engineering Thapar University ,Patiala Punjab India"
    },
    {
        h1:"Dr. Pramod Kumar : The Tula's Institute The Engineering and Management Institute Dehradhun ,Uttrakhand India"
    },
    {
        h1:"Prof. T.Saikumar : Associate Professor ECE & IEEE CMRTC SBC Centre Head CSIP CMR Technical ,Campus Hyderabad India."
    },
    {
        h1:"Ishani Arora : Asst. Professor Northern India Engineering College Affiliated to Guru Gobind ,Singh Indraprastha University India."
    },
    {
        h1:"Dr. Kalpna Sagar : Deputy Dean KIET India."
    },
    {
        h1:"Mr. Naresh Sharma : Department of Computer Science & Engineering SRM UNIVERSITY Assistant ,Professor INDIA."
    },
    {
        h1:"Mr. Moolchand Sharma : Department of Computer Science & Engineering MAIT Assistant Professor ,INDIA."
    },
    {
        h1:"Dr. (Prof.) R. P. : Mahapatra SRM University INDIA."
    },
    {
        h1:"Dr. Manash Sarkar : SRM University INDIA."
    },
    // upto 200 
    {
        h1:"Dr. Jitendra Singh : SRM University INDIA."
    },
    {
        h1:"Dr (Prof.) Ajay Agarwal : KIET Ghaziabad U.P. INDIA"
    },
    {
        h1:"Dr. Preeti Dimri : GBPEC Pauri INDIA"
    },
    {
        h1:"Mr. Partha Sarathi Chakraborty : SRM University INDIA."
    },
    {
        h1:"Mr. Analp Pathak : SRM University INDIA."
    },
    {
        h1:"Mr. Manish Bharadwaj : SRM University INDIA."
    },
    {
        h1:"Balamurugan Shanmugam : Director-Research and Development Mindnotix Technologies India"
    },
    {
        h1:"Arunn Vignesh Ganesan : Research Associate Mindnotix Technologies India"
    },
    {
        h1:"Dr. Rachit Garg : Associate Professor & Deputy Secretary, School of Computer Science & Engineering, Lovely Professional University"
    },
    {
        h1:"Dr. Ahmed J. Obaid : Assistant Professor ,Faculty of Computer Science and Mathematics University of Kufa Iraq"
    },
    {
        h1:"Dr. Gaurav Agarwal: Assistant Professor, Department of Computer Science & Engineering, KIET Group of Institutions, Ghaziabad, India"
    },
    {
        h1:"Prof. (Dr.) Sachi Gupta: Professor & Head, Department of Information Technology, IMS Engineering college, Ghaziabad, India"
    },
    {
        h1:"Belfin Robinson : Postdoctoral Fellow, School of Medicine, BRIC, University of North Carolina"
    },


]


function TecCards() {
    return ( 
     
       <div className="tecCards">
        <div className="tecCard">
            {
                tecMembers.map((a,i)=>{
                    return(
                        <div className="tecPara" key={i}>
                        <h3>{a.h1}</h3>
                        </div>
                      
                    )
                })
            }
        </div>

       </div>
   
     );
}

export default TecCards;