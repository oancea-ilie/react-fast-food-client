import React from "react";
import About1 from "../../assets/img/about-img-1.jpg"
import About2 from "../../assets/img/about-img-2.jpg"

const TextImg = () => {
    
    return (
        
        <section className="text-img">
            <div className="text">
                <h1>Some Words About Us & Our Fast Food</h1>
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution</p>
            </div>
            <div className="images">
                <img className="img1" src={About1} alt="about-img-1"/>
                <img className="img2" src={About2} alt="about-img-2"/>
            </div>
        </section>
    )
}
export default TextImg