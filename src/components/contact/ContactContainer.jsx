import React from "react";


export default ()=>{

    return (
        <div className="bg-fixer">

        <section className="write">

            <div className="fix">
                <div className="form">
                    <h2>We Love To Hear From You</h2>
                    <p>If it's not too much trouble informed us regarding whether you have an inquiry, need to leave a remark, or might want additional data about Advotis</p>
                    
                    <form>
                        <div className="grid">
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Email"/>
                        </div>
                        <input type="text" placeholder="Subject"/>
                        <textarea placeholder="Message"></textarea>
                        <button className="btn-submit">SUBMIT</button>
                    </form>
                </div>
            </div>

            <div className="text">
                <div className="title">
                    <h2>Our Office Address</h2>
                    <div className="line"></div>
                </div>

                <div className="container">
                    <div className="card">
                        <h2>Main Restaurant:</h2>
                        <p>587, Dartmouthi Street, Boston, Massachusetts 0658, PO Box 16122 United States</p>
                    </div>
                    <div className="card">
                        <h2>Branch, Raurance Road:</h2>
                        <p>357, West Victoria, Darbaians, Collinsicious 0658, PO Box 16578 London</p>
                    </div>
                    <div className="card">
                        <h2>Have any querry:</h2>
                        <p>Call us on : (1800) 456 7890</p>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
    )
}