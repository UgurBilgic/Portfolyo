import React from "react";
import "./App.css";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faLetterboxd,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "flowbite";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); 

    const formData = {
      user_name: form.current["user_name"].value.trim(),
      user_email: form.current["user_email"].value.trim(),
      subject: form.current["subject"].value.trim(),
      message: form.current["message"].value.trim(),
    };


    if (
      !formData.user_name ||
      !formData.user_email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Lütfen tüm alanları doldurunuz."); 
      return;
    }

    emailjs
      .sendForm(
        "service_2qgbkck",
        "template_lte3m9t",
        form.current,
        "H8-38dnDmAlxdAjnI" 
      )
      .then(
        () => {
          alert("Mesajınız başarıyla gönderildi!");
          form.current.reset();
        },
        (error) => {
          console.error("Mesaj gönderimi başarısız:", error.text); 
          alert("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
        }
      );
  };

  return (
    <div className="App scroll-smooth">
      <section className="" id="myself">
        <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 flex justify-center items-center text-center">
          <div className="w-full max-w-screen-xl flex flex-row items-center justify-center space-x-4 lg:space-x-12 p-4">
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 text-sm md:text-base lg:text-lg font-medium"
              aria-current="page"
            >
              Ben Kimim
            </a>
            <a
              href="#deneyim"
              className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 text-sm md:text-base lg:text-lg font-medium"
            >
              Deneyim
            </a>
            <a
              href="#projeler"
              className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 text-sm md:text-base lg:text-lg font-medium"
            >
              Projeler
            </a>
            <a
              href="#sertifikalar"
              className="text-gray-900 dark:text-white hidden md:block hover:text-blue-700 dark:hover:text-blue-500 text-sm md:text-base lg:text-lg font-medium"
            >
              Sertifikalar
            </a>
            <a
              href="#iletişim"
              className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 text-sm md:text-base lg:text-lg font-medium"
            >
              İletişim
            </a>
          </div>
        </nav>
        <div className="lg:pt-20 lg:grid lg:grid-cols-2 gap-4 ">
          <div className="lg:col-span-1 flex pt-20 lg:pt-0 justify-center items-center relative lg:pb-20  ">
            <div className="info-card flex flex-col gap-2 lg:fixed lg:pt-5 sm:mt-11 md:sticky limit">
              <a href="#">
                <strong className="font-sans text-4xl font-bold text-white">
                  Uğur Bilgiç
                </strong>
              </a>
              <span className="text-white text-xl">Computer Engineer</span>

              <img
                src="./Portfolyo-foto.jpeg"
                className="opacity-85 rounded-xl"
              ></img>
              <div className="social-media-icons-white gap-10 flex m-auto">
                <a
                  href="https://www.instagram.com/ugur_bilgic05/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
                <a
                  href="https://github.com/UgurBilgic?tab=repositories&q=&type=&language=&sort="
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
                <a
                  href="https://www.linkedin.com/in/uğur-bilgiç-9ba57b239/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-1 p-4">
            <p className="text-white mb-4">
              Teknoloji ve tasarım odaklı programlar üreten bir yazılım
              geliştiricisiyim. 2020 yılından bu yana Python, C++, C#,
              JavaScript ve React gibi araçlarla nesne tabalı programlar ve web
              uygulamaları geliştirmekteyim. Yazılım alanındaki eğitimim,
              algoritma ve veri yapıları konularında derinlemesine bilgi
              edinmemi sağlarken, sistem tasarımı ve optimizasyonu konusunda
              güçlü bir bakış açısı kazandırdı.
            </p>
            <p className="text-white mb-4">
              Projelerimde, kullanıcı deneyimini ön planda tutarak erişilebilir,
              duyarlı ve yüksek performanslı çözümler sunmayı hedefliyorum.
              Modern teknolojilerle ölçeklenebilir sistemler inşa etmek ve her
              projede estetik ile işlevselliği birleştirmek için çalışıyorum.
            </p>
            <p className="text-white mb-4">
              Yazılım mühendisliğine duyduğum ilgi, her projede kullanıcı odaklı
              çözümler üretmeyi ve sürdürülebilir, verimli yazılım sistemleri
              geliştirmeyi ön planda tutmamı sağlıyor. Teknolojik gelişmeleri
              yakından takip ederek, her yeni projede en ileri düzeydeki araçlar
              ve yöntemleri kullanmaya özen gösteriyor, kendimi sürekli olarak
              bu alanda güncel tutarak profesyonel becerilerimi geliştirmeye
              devam ediyorum.
            </p>
          </div>
        </div>
      </section>
      <section id="deneyim">
        <div className="experience mt-20">
          <div className="pt-4 lg:grid lg:grid-cols-2 gap-4 ">
            <div className="info flex flex-col gap-4"></div>
            <div className="info flex flex-col gap-4 experience-cards">
              <h1 className="flex text-white cursor-auto justify-center font-bold text-3xl title">
                DENEYİM - EĞİTİM
              </h1>
              <a
                href="#"
                className="flex flex-col items-center hover:bg-gray-500 cursor-auto	 hover:bg-opacity-25 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 p-2  "
              >
                <img
                  className="object-cover w-full tubitak rounded-2xl rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="./mersin-bb-logo.png"
                  alt=""
                ></img>
                <div className="flex flex-col justify-between p-4 leading-normal ">
                  <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    2022 Temmuz - 2022 Ağustos
                  </p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                    Mersin Büyükşehir Belediyesi Bilgi İşlem Dairesi Başkanlığı
                  </h5>
                  <p className="mb-3 font-normal text-gray-300">
                    Mersin Büyükşehir Belediyesi Bilgi İşlem Dairesi
                    Başkanlığında bir ay süresince stajyer olarak çalıştım. Bu
                    süreçte, web sitesi geliştirme ve yönetimi konusunda deneyim
                    kazandım. WordPress, içerik yönetim sistemi olarak
                    kullanıldı; kullanıcı dostu arayüzü sayesinde web sitesi
                    tasarımı ve içerik güncellemeleri gerçekleştirdim. Ayrıca,
                    XAMPP kullanarak yerel bir sunucu ortamı oluşturduk ve
                    geliştirme sırasında veritabanı yönetimi, PHP ve MySQL
                    işlemlerini test ettik. Bu deneyim, web tasarımı ve sunucu
                    yönetimi konularında pratik yapmamı sağladı.
                  </p>
                  <div className="flex ">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      PHP
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      MYSQL
                    </button>

                    <button
                      type="button"
                      className="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      WORDPRESS
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      HTML5
                    </button>
                  </div>
                </div>
              </a>
              <a className="flex flex-col items-center  cursor-auto	  hover:bg-gray-500 hover:bg-opacity-25 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 p-2  ">
                <img
                  className="tubitak object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg "
                  src="./mersin-uni-logo.png"
                  alt=""
                ></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    2024 - Halen
                  </p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-white">
                    Mersin Üniversitesi <br></br> Bilgisayar Mühendsiliği
                  </h5>
                  <p className="mb-3 font-normal  text-gray-300">
                    Mersin Üniversitesi'nde bilgisayar programcılığı alanında ön
                    lisans eğitimimi tamamladıktan sonra, Dikey Geçiş Sınavı
                    (DGS) ile eğitimimi lisans seviyesine taşıdım. Şu anda, daha
                    geniş bir bakış açısıyla yazılım mühendisliği ve ileri düzey
                    programlama konularında derinlemesine bilgi sahibi olmayı
                    hedefliyorum.
                  </p>
                  <div className="flex ">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      OOP
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      SQL
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      Machine Learning
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      AI
                    </button>
                  </div>
                </div>
              </a>
              <a className="flex flex-col items-center cursor-auto hover:bg-gray-500 hover:bg-opacity-25 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 p-2  ">
                <img
                  className="w-full tubitak object-contain rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="./mersin-uni-logo.png"
                  alt=""
                ></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <p className="mb-1 text-sm font-medium 	 text-gray-500 dark:text-gray-400">
                    2022 - 2024
                  </p>
                  <h5 className="mb-2 text-2xl 	 font-bold tracking-tight text-gray-900 dark:text-white text-white">
                    Mersin Üniversitesi <br></br> Bilgisayar Programcılığı
                  </h5>
                  <p className="mb-3 font-normal text-gray-300">
                    Mersin Üniversitesi'nde 2 yıl boyunca bilgisayar
                    programcılığı bölümünü okudum. Bu süre zarfında, yazılım
                    geliştirme, algoritmalar, veri yapıları ve programlama
                    dillerinin temellerini öğrenerek, programcılığın temel
                    ilkeleri üzerine sağlam bir bilgi birikimi edindim.
                    Eğitimim, yazılım dünyasında ilerlemek için gerekli olan
                    teknik becerileri kazanmamı sağladı.
                  </p>
                  <div className="flex  ">
                    <button
                      type="button"
                      className="text-white cursor-auto	 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      C#
                    </button>
                    <button
                      type="button"
                      className="text-white cursor-auto	 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      C++
                    </button>
                    <button
                      type="button"
                      className="text-white cursor-auto	 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      JavaScript
                    </button>
                    <button
                      type="button"
                      className="text-white cursor-auto	 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      PHP
                    </button>
                    <button
                      type="button"
                      className="text-white cursor-auto	 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      PYTHON
                    </button>
                  </div>
                </div>
              </a>
              <a
                className="text-white flex justify-center sm:justify-start hover:text-teal-300 font-medium text-slate-200 items-baseline"
                href="./cv.pdf"
                target="_blank"
              >
                <span> CV'yi Görüntüle</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="projeler">
        <div className="pt-20 lg:grid lg:grid-cols-2 gap-4 ">
          <div className="col-span-1 flex p-4 md:ml-15 justify-center items-center ">
            <div className=" flex flex-col gap-4 "></div>
          </div>

          <div className="col-span-1 mt-4  ">
            <h1 className="flex  justify-center align-middle text-white  font-bold text-3xl title">
              PROJELER
            </h1>
            <a className="flex flex-col items-center   hover:bg-gray-500 hover:bg-opacity-25 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 p-2  ">
              <img
                className="object-cover w-full project-image rounded-2xl rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="./Stok-Takip-gorsel.jpeg"
                alt=""
              ></img>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl font-semibold tracking-tight hover:text-teal-300 text-gray-900 dark:text-white text-white">
                  Eczane Stok Takip Sistemi
                </h5>
                <p className="mb-3 font-normal text-gray-300">
                  Eczane Stok Takip Sistemi, ilaç ve ürün stoklarını yönetmeyi
                  sağlar. Kullanıcılar, ürünlerin miktarlarını ve son kullanma
                  tarihlerini görüntüleyebilir. Sistem, stok seviyelerini takip
                  etmeye yardımcı olur.
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    HTML
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    CSS
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    JavaScript
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    MYSQL
                  </button>
                </div>
              </div>
            </a>
            <a className="flex flex-col items-center   hover:bg-gray-500 hover:bg-opacity-25 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 p-2  ">
              <img
                className="object-cover project-image rounded-2xl object-left w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="./btk-eylul-proje-gorsel.jpeg"
                alt=""
              ></img>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl  tracking-tight hover:text-teal-300 text-gray-900 dark:text-white text-white font-semibold">
                  Gayrimenkul Web Tasarımı
                </h5>
                <p className="mb-3 font-normal text-gray-300">
                  Emlakçılık sitesi, kullanıcıların satışa veya kiraya sunulan
                  gayrimenkulleri görüntülemelerini sağlar. Site, evlerin
                  fiyatları, konumları, büyüklükleri gibi bilgileri sunar ve
                  kullanıcıların arama yapmalarına olanak tanır. HTML, CSS, SCSS
                  ve JavaScript ile tasarlanmış bu site, modern bir kullanıcı
                  deneyimi sunar.
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    HTML
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    CSS
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    SCSS
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    JavaScript
                  </button>
                </div>
              </div>
            </a>
            <a
              className=" hover:text-teal-300 font-medium text-slate-200 items-baseline"
              href="https://github.com/UgurBilgic"
              target="_blank"
            >
              <span> Github'da Göster </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section id="sertifikalar" className="hidden md:block">
        <div className="pt-20 lg:grid lg:grid-cols-2 flex justify-center gap-4 ">
          <div className="col-span-1 flex p-4 ml-15 justify-center items-center  ">
            <div className=" flex flex-col gap-4 "></div>
          </div>

          <div className="col-span-1  flex flex-col justify-center mr-40 ">
            <h1 className="flex  justify-center align-middle  text-white font-bold text-3xl ml-20 title-certificate">
              SERTİFİKALAR
            </h1>
            <div>
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper rounded-lg p-2 "
              >
                <SwiperSlide>
                  <img
                    className="slider-image object-contain rounded-lg"
                    src="./Front-End_Web_Geliştirme_Atölyesi_Sertifika_page-0001.jpg"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image object-contain rounded-lg"
                    src="./Bilgi_Teknolojilerine_Giriş_Sertifika.jpg"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image object-contain rounded-lg"
                    src="./HTML5_ile_Web_Geliştirme_Sertifika.jpg"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image object-contain rounded-lg"
                    src="./Kotlin_ile_Android_Mobil_Uygulama_Geliştirme_Temelleri__Sertifika.jpg"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image object-contain rounded-lg"
                    src="./kotlin_ile_mobil_uygulama_gelistirme_sertifikasi.jpeg"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image object-contain rounded-lg"
                    src="./Kotlin_Programlama_Dili_Sertifika.jpg"
                  ></img>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-20 lg:grid lg:grid-cols-2 gap-4 ">
          <div className="col-span-1 flex p-4 ml-15 justify-center items-center  ">
            <div className=" flex flex-col gap-4 "></div>
          </div>

          <div className="col-span-1 flex justify-center md:mr-40 ">
            <section id="iletişim">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md contact-me">
                <h2 className="mb-4  tracking-tight font-bold text-3xl text-center text-gray-300 text-white ">
                  İletişim
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-300  sm:text-xl">
                  Bana ulaşmak için aşağıdaki bilgileri doldurun ve mesajınızı
                  gönderin.
                </p>

                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                  <div>
                    <label
                      htmlFor="user_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      İsim
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      placeholder="Elon Musk"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="user_email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      E-posta adresi
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="örnek@gmail.com"
                      id="user_email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Konu
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Konunuz"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-300"
                    >
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-gray-300 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Mesajınızı buraya yazınız..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-gray-700 hover:bg-gray-500"
                    >
                      Mesajı Gönder
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
