const { useRef } = React
import { utilService } from "../services/util.service.js"

export function About() {
    const titleRef = useRef()

    return <section className="about-container">
            <article className="about-content">
                <h2 ref={titleRef}>Our Story: The Heartbeat of Miss Books</h2>
                
                <section className="story-section">
                    <h3>The Beginning of a "Simple Story"</h3>
                    <p>
                        It began with a single shelf and a stubborn belief: that in an era of rapid digital noise 
                        and instant scrolling, the physical book remains our most vital anchor. <strong>Miss Books </strong>  
                        wasn't founded to be a retail space; it was founded to be a conversation.
                    </p>
                    <p>
                        Nested in the sun-drenched, winding alleys of Neve Tzedek, our storefront was once a 
                        dusty carpenter's workshop. We kept the original exposed stone and the soaring ceilings, 
                        filling the cracks with the only thing better than mortar—stories. What started as a 
                        personal collection of Hebrew poetry and international art journals has grown into a 
                        sanctuary for the curious, the creative, and the quiet.
                    </p>
                </section>

                <section className="curation-section">
                    <h3>A Curation, Not Just a Collection</h3>
                    <p>
                        In the age of algorithms, we believe in the power of the <strong>human touch</strong>. 
                        At Miss Books, you won’t find "Best Seller" walls dictated by data. Instead, you’ll find 
                        shelves curated by mood, by history, and by heart.
                    </p>
                    
                    <div className="features-grid">
                        <div className="feature">
                            <h4>The Local Voice</h4>
                            <p>
                                We take immense pride in being a platform for the next generation of Israeli writers. 
                                From the gritty prose of South Tel Aviv to the lyrical escapism of the Galilee, 
                                we prioritize local indie presses that the big chains often overlook.
                            </p>
                        </div>

                        <div className="feature">
                            <h4>The Global Dialogue</h4>
                            <p>
                                Our "International Nook" brings the world to Tel Aviv. We hand-pick titles from 
                                small publishers in Berlin, New York, and Paris—books that feel like objects 
                                of art in your hands.
                            </p>
                        </div>

                        <div className="feature">
                            <h4>The Visual Language</h4>
                            <p>
                                We believe a book’s cover is its soul’s window. Our extensive collection of 
                                graphic novels, photography monographs, and architecture books serves as a 
                                constant source of inspiration for the local artist community.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="philosophy-section">
                    <h3>Slow Reading in a Fast World</h3>
                    <p>
                        We invite you to leave the frantic pace of the street at our doorstep. Pull up a 
                        vintage velvet chair, order a glass of local wine or a dark espresso, and stay as 
                        long as you like. We don’t mind if you read the first chapter before you buy it—in 
                        fact, we encourage it.
                    </p>
                    <p>
                        We are the dreamers, the researchers, the parents looking for a bedtime story, and 
                        the travelers looking for a map to the Israeli soul. 
                        <strong> Welcome to Miss Books.</strong>
                    </p>
                </section>
            </article>
        </section>
}