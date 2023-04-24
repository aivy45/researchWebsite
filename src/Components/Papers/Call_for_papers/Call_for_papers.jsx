
import ImpDate from '../../impDates/impDates';
import './Call_for_papers.css'
import Footer from '../../Footer/footer';
const Call_for_papers = () => {

    return (
        <>
            <div className='cfp'>
                <h2 className="bold">Call For Papers</h2>
                <br />
                <hr /> 
                <br />
                <div className="Call_con">
                    
                    <div className="call_desc">
                        <p>The scope of this conference is to provide a platform for researchers, engineers, academicians as well as industrial professionals from all over the world to present their research results and development activities in various topics of Engineering and Technology. It allows participants an opportunity to discuss the recent developments in the field of solidification computer science and management and review challenges faced by the community in the 21st century. The conference consists of invited</p>
                        <br />
                        <hr />
                        <br />
                        <p className='bold1'>ICICC 2023 will be an amalgamation of four different Tracks organized parallel to each other, as listed below:</p>
                        <p className='bold1'>Innovative Communication Networks and Security</p>

                        <ul>
                            <li>Wireless sensor networks</li>
                            <li>Mobile ad-hoc networks</li>
                            <li>Software defined networks</li>
                            <li>Information theory and coding</li>
                            <li>Cloud communications and networking</li>
                            <li>Wearable network and systems</li>
                            <li>Personal communication systems</li>
                            <li>Vehicular networks and applications</li>
                            <li>Wireless communications</li>
                            <li>Virtual and overlay networks</li>
                            <li>Future Internet Architecture</li>
                            <li>Satellite Communication</li>
                            <li>Next Generation Networking</li>
                            <li>Quantum Networking</li>
                            <li>QoS Provisioning and Architectures</li>
                            <li>Telecommunication Services and Applications</li>
                            <li>Optical Communication</li>
                            <li>Network Performance</li>
                            <li>Computer Security</li>
                            <li>Digital Signature</li>
                            <li>Information Security</li>
                            <li>Network Security</li>
                            <li>Cyber Security</li>
                            <li>MANET's</li>
                        </ul>

                        <p className='bold1'>Innovative Computing</p>

                        <ul>
                            <li>Computational Intelligence</li>
                            <li>Machine Learning</li>
                            <li>Artificial Intelligence</li>
                            <li>Signal Processing</li>
                            <li>Computer vision</li>
                            <li>Soft Computing</li>
                            <li>Decision Support and Decision making</li>
                            <li>Parallel computing</li>
                            <li>Distributed computing</li>
                            <li>Grid computing</li>
                            <li>Cloud computing</li>
                            <li>Mobile computing</li>
                            <li>Biomedical computing</li>
                            <li>Ubiquitous computing</li>
                            <li>Image processing</li>
                            <li>Information retrieval</li>
                            <li>Deep learning</li>
                            <li>Expert system</li>
                            <li>Internet computing</li>
                            <li>High performance computing</li>
                        </ul>

                        <p className='bold1'>Internet of Things</p>

                        <ul>
                            <li>Intelligent Systems for IoT</li>
                            <li>Environmental Monitoring</li>
                            <li>Machine to Machine/Device Communications</li>
                            <li>Network Design and Architecture</li>
                            <li>Wireless Systems and Applications</li>
                            <li>Infrastructure Management</li>
                            <li>IoT and Big Data</li>
                            <li>Home Automation</li>
                            <li>Security and Privacy</li>
                            <li>Social Implications of IoT</li><li>Technological focus for Smart Environments</li><li>Smart City Case Studies</li><li>Data Analysis and Visualization</li><li>Architecture for secure and interactive IoT</li><li>Sensor, Wireless Technologies and APIs</li><li>Emerging IoT</li>
                        </ul>

                        <p className='bold1'>Social Sciences for Computer Applications</p>
                        <p className='bold1'>The papers submitted to the conference will be peer reviewed and published as proceedings in Springer(Proposed)</p>
                        <br />
                        <hr />
                        <br />
                        <p>All papers will undergo a blind peer review process and all accepted papers will be published in the SHORT NAME conference e-proceedings with an e-ISBN number. The conference organizer encourages submissions of academic and research papers that consider the multidisciplinary/interdisciplinary themes covering the Management, Science and Social Studies, through one of the following sub-themes, although submissions of other topics for consideration are also welcome.</p>
                    </div>


                    <div className="imp_dates">
                        <ImpDate />
                    </div>
                </div>

            </div>

            <Footer/>
        </>




    )

}
export default Call_for_papers;