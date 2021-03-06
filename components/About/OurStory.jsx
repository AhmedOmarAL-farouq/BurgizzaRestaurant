import Link from 'next/link';
import styles from "../../styles/About.module.css";

const OurStory = () => {
    return (
        <section className={styles.our_story}>
            <div className={styles.left_section}>
                <img src="/our_story.jpg" alt="our_story"/>
            </div>
            <div className={styles.right_section}>
                <h2>our story</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage
                </p>
                <button type="button">
                    <Link href="/menu">
                        Our Menu
                    </Link>
                </button>
            </div>
        </section>
    );
}
 
export default OurStory;