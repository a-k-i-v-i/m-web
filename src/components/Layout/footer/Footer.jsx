import React from "react";
import { useTranslation } from "react-i18next";
import vector from '../../image/footer/Vector.png';
import li from '../../image/footer/l.png'
import i from '../../image/footer/i.png'
import telegram from '../../image/footer/t.png'
import y from '../../image/footer/y.png'




const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="footer">
      <div className="footer">
        <div className="container">
          <div className="footer--map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1531.7694208884725!2d74.58179279998673!3d42.867501536106275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec825790b32f5%3A0x7545c2a8e37ec365!2zMTA5LzMg0YPQuy4g0KLRg9GA0YPRgdCx0LXQutC-0LLQsCwg0JHQuNGI0LrQtdC6IDcyMDAwMQ!5e0!3m2!1sru!2skg!4v1676851025529!5m2!1sru!2skg"
              width="500"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="footer--f--block">
            
            <div className="footer--f--block--ref">
            <img src={vector} alt="" />
              <p className="footer--f--block--ref--r">Курсы</p>
              <p className="footer--f--block--ref--a">Frontend</p>
              <p className="footer--f--block--ref--a">UI/UX design</p>
              <p className="footer--f--block--ref--a">Backend</p>
            </div>
          </div>
          <div className="footer--s--block">
            <p className="footer--s--block--p">О нас</p>
            <p className="footer--s--block--p">Клуб</p>
            <p className="footer--s--block--p">FAQ</p>
          </div>
          <div className="footer--t--block">
              <div className="footer--t--block--link">
                  <img src={li} alt="" />
                  <img src={i} alt="" />
                  <img src={telegram} alt="" />
                  <img src={y} alt="" />
              </div>
              <div className="footer--t--block--adress">
                <p className="footer--t--block--adress--p">+996 700 232 400</p>
                <p className="footer--t--block--adress--p">motionweb312@gmail.com</p>
                <p className="footer--t--block--adress--p">г. Бишкек ул. Турусбекова 109/3</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
