import './Scards.css'

function SCcards() {

    let patron=[
        {
            h1: "Dr. Poonam Verma",
            p: "(Principal, SSCBS, University of Delhi)"
        },
        {
            h1: "Prof. Pradip Kumar Jain",
            p: "(Director, National Institute of Technology Patna)",
        }
    ];

    let genChair=[
        { 
            h1:"Dr. Prabhat Kumar",
            p:"(Professor, CSE, National Institute of Technology Patna)"
        },
        {
            h1: "Prof. Oscar Castillo",
            p:"(Tijuana Institute of Technology, Mexico)"
        },
    ]

    let honaryChar=[
        {
            h1:"Prof. Janusz Kacprzyk",
            p: "(Head, Intelligent Systems Laboratory, System Research Institute, Polish Academy of Sciences, Warsaw, Poland)"
        },
        {
            h1:"Prof. Vaclav Snasel",
            p: "(Rector, VSB-Technical University of Ostrava, Czech Republic)"
        },
        
    ]


    let confChair=[
        {
          h1:"Prof. Aboul Ella Hassanien",
          p:"(Cairo University, Egypt)"
        },
        {
            h1:"Prof. Joel J P C Rodrigues",
            p:"National Institute of Telecommunications (Inatel), Brazil)"
        },
        {
            h1:"Prof. R. K. Agrawal",
            p:"(Jawaharlal Nehru University, Delhi)"
        },
          
    ]

    let techChair=[
        {
            h1:"Prof. Anil K Ahlawat",
            p:"(KIET Group of Institutes, Ghaziabad)"
        }, 
        {
            h1:"Prof. A. K. Singh",
            p:"(National Institute of Technology, Kurukshetra)"
        }
    ]

    let editorChair=[
        {
            h1:"Dr. Arun Sharma",
            p:"(Indira Gandhi Delhi Technical University for Womens, Delhi)"
        },
        {
            h1:"Prof. Abhishek Swaroop",
            p:"(Bhagwan Parshuram Institute of Technology, Delhi)"
        },
    ]


    let pubChair=[
        {
            h1:"Dr. Vicente García Díaz",
            p:"(University of Oviedo, Spain)"
        },
        {
            h1: "Dr. Deepak Gupta",
            p:"(Maharaja Agrasen Institute of Technology (GGSIPU), New Delhi)"
        }
    ]

    let coConvener =[
        {
            h1:"Moolchand Sharma",
            p:"(Maharaja Agrasen Institute of Technology (GGSIPU), New Delhi)"
        }
    ]

    let publicChair=[
        {
            h1: "Dr. Jafar A. Alzubi",
            p: "(Al-Balqa Applied University, Salt – Jordan)",
        },
        {
            h1: "Dr. Hamid Reza Boveiri",
            p: "(Sama College, IAU, Shoushtar Branch, Shoushtar, Iran)",
        },
        {
            h1: "Dr. M. Tanveer",
            p: "(Indian Institute of Technology, Indore)",
        },
        {
            h1: "Dr. Umesh Gupta",
            p: "(Bennett University, Greater Noida)",
        },

    ]


    let orgChair=[
        {
            h1:"Dr. Kumar Bijoy",
            p: "(SSCBS, University of Delhi)",
        },
        {
            h1:"Dr. Rishi Ranjan",
            p: "(SSCBS, University of Delhi)",
        },
        {
            h1:"Dr. Amrina Kausar",
            p: "(SSCBS, University of Delhi)",
        },
        {
            h1:"Dr. Abhishek Tandon",
            p: "(SSCBS, University of Delhi)",
        },

    ]

    let orgTeam=[
        {
            h1: "Dr. Gurjeet Kaur",
            p: "(SSCBS, University of Delhi)",
        },
        {
            h1: "Dr. Abhimanyu Verma",
            p: "(SSCBS, University of Delhi)",
        },
        {
            h1: "Dr. Onkar Singh",
            p: "(SSCBS, University of Delhi)",
        },
        {
            h1: "Dr. Mona Verma",
            p: "(SSCBS, University of Delhi)",
        },
        {
            h1: "Dr. Suresh Chavhan",
            p: "(Vellore Institute of Technology, Vellore)",
        }
    ]


    let orgSecretary=[
        {
            h1: "Dr. Ashish Khanna",
            p: "(Maharaja Agrasen Institute of Technology (GGSIPU), New Delhi)"
        },
        {
            h1: "Dr. Gulshan Shrivastava",
            p: "( Galgotias University, India.)"
        },
    ]

    let convener=[
        {
            h1:"Dr. Ajay Jaiswal", 
            p:"(SSCBS, University of Delhi, India)"
        },
        {
            h1:"Dr. Sameer Anand", 
            p:"(SSCBS, University of Delhi, India)"
        }
    ]

    return ( 
        <>
{/* patron and general chair  */}
<div className="PaGeCommon">
        {/* patron  */}
        <div className="patron">
            <h2>Patron(s):</h2>
            <div className="patronMain">
                {
                    patron.map(a=>{
                        return(
                         <>
                         <div className="patrondata">
                          <h1>{a.h1}</h1>
                          <p>{a.p}</p>
                          </div>
                         </>
                        )
                    })
                }
            </div>
        </div>


        {/* General Chai  */}
        <div className="patron">
            <h2>General Chair(s):</h2>
            <div className="patronMain">
                {
                    genChair.map(a=>{
                        return(
                         <>
                         <div className="patrondata">
                          <h1>{a.h1}</h1>
                          <p>{a.p}</p>
                          </div>
                         </>
                        )
                    })
                }
            </div>
        </div>
        </div>


        {/* Honorary Chair(s): and Conference chair  */}
        <div className="PaGeCommon">
        {/* Honary  */}
        <div className="patron">
            <h2>Honorary Chair(s):</h2>
            <div className="patronMain">
                {
                    honaryChar.map(a=>{
                        return(
                         <>
                         <div className="patrondata">
                          <h1>{a.h1}</h1>
                          <p>{a.p}</p>
                          </div>
                         </>
                        )
                    })
                }
            </div>
        </div>


        {/* Conference Chai  */}
        <div className="patron">
            <h2>Conference Chair(s):</h2>
            <div className="patronMain">
                {
                    confChair.map(a=>{
                        return(
                         <>
                         <div className="patrondata">
                          <h1>{a.h1}</h1>
                          <p>{a.p}</p>
                          </div>
                         </>
                        )
                    })
                }
            </div>
        </div>
        </div>


        {/* Technical Program Chair(s): and editorials chair  */}
        <div className="PaGeCommon">
        {/* Technical program  */}
        <div className="patron">
            <h2>Technical Program Chair(s):</h2>
            <div className="patronMain">
                {
                    techChair.map(a=>{
                        return(
                         <>
                         <div className="patrondata">
                          <h1>{a.h1}</h1>
                          <p>{a.p}</p>
                          </div>
                         </>
                        )
                    })
                }
            </div>
        </div>


        {/* Editorial Chair  */}
        <div className="patron">
            <h2>Editorial Chair(s):</h2>
            <div className="patronMain">
                {
                    editorChair.map(a=>{
                        return(
                         <>
                         <div className="patrondata">
                          <h1>{a.h1}</h1>
                          <p>{a.p}</p>
                          </div>
                         </>
                        )
                    })
                }
            </div>
        </div>
        </div>


        {/* Publication Chair(s): and Co-Convener(s): */}
        <div className="PaGeCommon">
        {/* Publication Chair(s):*/}
        <div className="patron">
            <h2>Publication Chair(s):</h2>
            <div className="patronMain">
                {
                    pubChair.map(a=>{
                        return(
                         <>
                         <div className="patrondata">
                          <h1>{a.h1}</h1>
                          <p>{a.p}</p>
                          </div>
                         </>
                        )
                    })
                }
            </div>
        </div>


        {/* Co-Convener(s):   */}
        <div className="patron">
            <h2>Co-Convener(s): </h2>
            <div className="patronMain">
                {
                    coConvener.map(a=>{
                        return(
                         <>
                         <div className="patrondata">
                          <h1>{a.h1}</h1>
                          <p>{a.p}</p>
                          </div>
                         </>
                        )
                    })
                }
            </div>
        </div>
        </div>



        {/* Publicity Chair(s): and Organizing Chair(s): */}
        <div className="PaGeCommon">
        {/* Publicity Chair(s):*/}
        <div className="patron">
            <h2>Publicity Chair(s):</h2>
            <div className="patronMain">
                {
                    publicChair.map(a=>{
                        return(
                         <>
                         <div className="patrondata">
                          <h1>{a.h1}</h1>
                          <p>{a.p}</p>
                          </div>
                         </>
                        )
                    })
                }
            </div>
        </div>


        {/* Organizing Chair(s):   */}
        <div className="patron">
            <h2>Organizing Chair(s): </h2>
            <div className="patronMain">
                {
                    orgChair.map(a=>{
                        return(
                         <>
                         <div className="patrondata">
                          <h1>{a.h1}</h1>
                          <p>{a.p}</p>
                          </div>
                         </>
                        )
                    })
                }
            </div>
        </div>
        </div>


        {/* Organizing Team: and Organising Secretary: */}
        <div className="PaGeCommon">
        {/* Organizing Team:*/}
        <div className="patron">
            <h2>Organizing Team:</h2>
            <div className="patronMain">
                {
                    orgTeam.map(a=>{
                        return(
                         <>
                         <div className="patrondata">
                          <h1>{a.h1}</h1>
                          <p>{a.p}</p>
                          </div>
                         </>
                        )
                    })
                }
            </div>
        </div>


        {/*  Organising Secretary:  */}
        <div className="patron">
            <h2>Organising Secretary: </h2>
            <div className="patronMain">
                {
                    orgSecretary.map(a=>{
                        return(
                         <>
                         <div className="patrondata">
                          <h1>{a.h1}</h1>
                          <p>{a.p}</p>
                          </div>
                         </>
                        )
                    })
                }
            </div>
        </div>
        </div>


        {/* Convener(s): */}
        <div className="patron">
            <h2>Convener(s): </h2>
            <div className="patronMain">
                {
                    convener.map(a=>{
                        return(
                         <>
                         <div className="patrondata">
                          <h1>{a.h1}</h1>
                          <p>{a.p}</p>
                          </div>
                         </>
                        )
                    })
                }
            </div>
        </div>



        </>
     );
}

export default SCcards;