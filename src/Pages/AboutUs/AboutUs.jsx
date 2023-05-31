import React from "react";
import { Link } from "react-router-dom";
import To from "../../Assets/Navbar/link";
import Insta from "../../Layer/Footer/assets/instagram";
import Tg from "../../Layer/Footer/assets/telegram";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="urls d-flex align-items-center">
          <Link to="/">Главная</Link> <To />{" "}
          <Link to="/about">О нас</Link>
        </div>
        <h2>О нас</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt harum qui molestias eos ea laborum sed officia fugiat, impedit praesentium, nobis quae! Magni odio ea quisquam neque ratione ut autem, possimus laborum consectetur vel similique molestias eos tempore eligendi doloribus sint et perferendis, inventore praesentium impedit aut accusamus exercitationem, eum dignissimos? Excepturi aspernatur, voluptas blanditiis deserunt hic dolores beatae iure saepe ratione temporibus architecto tempore deleniti, itaque sed minus officia sapiente, totam consequuntur! Laboriosam, quaerat numquam! Atque laudantium ipsa architecto veritatis similique porro harum libero? Error magni porro dolore pariatur, nulla, fuga nobis quibusdam reiciendis dicta illo atque molestiae voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ea iure accusamus, odio neque porro laudantium consectetur facilis. Aut necessitatibus iste similique aliquam sequi ullam nesciunt earum molestias sit mollitia libero distinctio esse officia, commodi deleniti sunt numquam ab quas animi vitae doloremque at assumenda consequuntur cum. Voluptatum vero asperiores earum id ipsam voluptates corrupti nobis perspiciatis. Commodi natus recusandae cum officiis voluptates molestias temporibus obcaecati, adipisci reiciendis odit eaque consectetur incidunt, facere laboriosam doloribus veniam! Officiis quidem quisquam commodi perspiciatis quo alias facere numquam ratione voluptatum modi harum tempore aperiam, necessitatibus, molestiae soluta, eos repellendus asperiores minima ipsam! Corrupti, tempore, numquam adipisci nam iure iste dignissimos vel labore atque rerum modi deserunt. Quos inventore officia architecto veritatis tempore, consectetur laboriosam sequi voluptatem tempora reiciendis, atque nesciunt dolores, necessitatibus quas rerum porro molestias consequatur ab pariatur aperiam ut cupiditate! Dolore a doloremque veniam exercitationem molestias sunt nesciunt ad, ut</p>
          </div>
        </div>
  );
};

export default AboutUs;
