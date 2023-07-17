import React from "react";
import Review from "./review";

function Reviews(){
    return <main>
        <section className="container">
            <div className="title">
                <h2>our reviews</h2>
                <div className="underline"></div>
            </div>
            <Review></Review>
        </section>
    </main>
}

export default Reviews;