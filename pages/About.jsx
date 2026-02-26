const { useRef } = React
import { utilService } from "../services/util.service.js"

export function About() {
    const titleRef = useRef()

    return <section className="about-container">
        <article className="about-content">
            <h2>Our Story:</h2>
            <h2> The Heartbeat of Miss <span className="orange">Books</span></h2>

            <section className="story-section">
                <h4>The Beginning of a "Simple Story"</h4>
                <p>
                    It began with a single shelf and a stubborn belief: that in an era of rapid digital noise
                    and instant scrolling, the physical book remains our most vital anchor. <strong>Miss <span className="orange">Books</span> </strong>
                    wasn't founded to be a retail space; it was founded to be a conversation.
                </p>
                <p>
                    Nested in the sun-drenched, winding alleys of kibbutz Zikim, our storefront was once a
                    dusty carpenter's workshop. We kept the original exposed stone and the soaring ceilings,
                    filling the cracks with the only thing better than mortar—stories. What started as a
                    personal collection of Hebrew poetry and international art journals has grown into a
                    sanctuary for the curious, the creative, and the quiet.
                </p>
            </section>

            <section className="philosophy-section">
                <h4>Slow Reading in a Fast World</h4>
                <p>
                    We invite you to leave the frantic pace of the street at our doorstep. Pull up a
                    vintage velvet chair, order a glass of local wine or a dark espresso, and stay as
                    long as you like. We don’t mind if you read the first chapter before you buy it—in
                    fact, we encourage it.
                </p>
                <p>
                    We are the dreamers, the researchers, the parents looking for a bedtime story, and
                    the travelers looking for a map to the Israeli soul.
                    <strong> Welcome to Miss <span className="orange">Books</span>.</strong>
                </p>
            </section>
        </article>
    </section>
}