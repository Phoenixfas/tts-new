'use client'
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

export default function NavbarBackup() {
  const [activeTab, setActiveTab] = useState(1);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const mobileRef: any = useRef(null)
  const [mobile, setMobile] = useState(false)

  const toggleMobile = () => {
    setMobile(!mobile)
  }

  useEffect(() => {
    if (mobile) {
        mobileRef.current.style.transform = 'translateX(0%)'
    } else {
        mobileRef.current.style.transform = 'translateX(100%)'
    }

    const tabs = document.querySelectorAll('#navbar-animmenu li');

    function handleTabClick(e: any) {
      tabs.forEach((tab, index) => {
        if (tab === e.currentTarget) {
          const newActiveTab = index + 1;
          setActiveTab(newActiveTab);
          localStorage.setItem('activeTab', newActiveTab.toString());
        }
      });
    }

    const activeTabElement: any = document.querySelector('.hori-selector');

    function updateActiveTabPosition() {
      if(activeTab === 0) {
        if (activeTabElement) {
          activeTabElement.style.left = '0px';
          activeTabElement.style.width = '0px';
        }
      }
      else {
        const activeTabElementWidth = (tabs[activeTab - 1] as HTMLElement).offsetWidth;
        const activeTabElementLeft = (tabs[activeTab - 1] as HTMLElement).offsetLeft;

        if (activeTabElement) {
          activeTabElement.style.left = activeTabElementLeft + 'px';
          activeTabElement.style.width = activeTabElementWidth + 'px';
        }
      }
    }

    tabs.forEach((tab) => {
      tab.addEventListener('click', handleTabClick);
    });

    updateActiveTabPosition();

    window.addEventListener('resize', updateActiveTabPosition);

    const p = pathname;
    if(p){
        switch (p.split('/')[1]) {
            case '':
              setActiveTab(0);
              break;
            case 'exhibit':
              setActiveTab(1);
              break;
            case 'attend':
              setActiveTab(2);
              break;
            case 'travel':
              setActiveTab(3);
              break;
            case 'learn':
              setActiveTab(4);
              break;
            case 'blogs':
              setActiveTab(5);
              break;
            case 'press':
              setActiveTab(5);
              break;
            default:
              setActiveTab(0);
              break;
        }
    }


    const onScroll = (event: any) => {
      if (window.scrollY > 70){
        setToggle(true)
      }else 
        setToggle(false)
    };
      
    window.addEventListener('scroll', onScroll);
    return () => {
      tabs.forEach((tab) => {
        tab.removeEventListener('click', handleTabClick);
      });
      window.removeEventListener('resize', updateActiveTabPosition);
/////////////////////////////
      window.removeEventListener('scroll', onScroll);

    };


  }, [activeTab, router, mobile, pathname]);

  return (
    <>
      <div className={`nav ${toggle && 'toggled'}`}>
        <div className="nav__left">
          <Link href={"/"} className="nav__logo">
            <Image src="/logo.svg" alt="logo" width={500} height={500} quality={100} unoptimized />
          </Link>
        </div>
        <div className="nav__right">
          <div id="navbar-animmenu">
            <ul className="show-dropdown main-navbar">
              <div className="hori-selector">
                <div className="left"></div>
                <div className="right"></div>
              </div>
              <li className={activeTab === 1 ? 'active' : ''}>
                <Link href="/exhibit">
                  <i className="far fa-address-book italic"></i>Exhibit
                </Link>
                <div className="dropdown">
                  <Link href={"/exhibit"} className="dropdown__item">Why Exhibit?</Link>
                  <Link href={"/exhibit/book-a-stand"} className="dropdown__item">Book a Stand</Link>
                  <Link href={"/exhibit/become-sponsor"} className="dropdown__item">Become a Sponsor</Link>
                  <Link href={"/exhibit/exhibition-profile"} className="dropdown__item">Exhibition Profile</Link>
                </div>
              </li>
              <li className={activeTab === 2 ? 'active' : ''}>
                <Link href="/attend/agenda">
                  <i className="far fa-clone italic"></i>Attend
                </Link>
                <div className="dropdown">
                  <Link href={"/attend/agenda"} className="dropdown__item">Conference Agenda</Link>
                  <Link href={"/attend/speakers"} className="dropdown__item">Speakers</Link>
                  <Link href={"/attend/exhibitors/all"} className="dropdown__item">Exhibitor List</Link>
                  <Link href={"/attend/why-visit"} className="dropdown__item">Why Visit</Link>
                  <Link href={"/attend/visitor-profile"} className="dropdown__item">Visitor Profile</Link>
                  <Link href={"/files/Lorem_ipsum.pdf"} download={true} className="dropdown__item">Venue Map</Link>
                </div>
              </li>
              <li className={activeTab === 3 ? 'active' : ''}>
                <Link href="/travel">
                  <i className="far fa-calendar-alt italic"></i>Travel
                </Link>
              </li>
              <li className={activeTab === 4 ? 'active' : ''}>
                <Link href="/learn/organizer">
                  <i className="far fa-chart-bar italic"></i>Learn
                </Link>
                <div className="dropdown">
                  <Link href={"/learn/organizer"} className="dropdown__item">About Organizer</Link>
                  <Link href={"/learn/rwanda"} className="dropdown__item">About Rwanda</Link>
                  <Link href={"/learn/contact"} className="dropdown__item">Contact us</Link>
                </div>
              </li>
              <li className={activeTab === 5 ? 'active' : ''}>
                <Link href="/blogs">
                  <i className="far fa-chart-bar italic"></i>Media
                </Link>
                <div className="dropdown">
                  <Link href={"/blogs"} className="dropdown__item">Blogs</Link>
                  <Link href={"/press"} className="dropdown__item">Press Material</Link>
                </div>
              </li>
            </ul>
          </div>
          <Link href={"/exhibit/book-a-stand"} className="nav__btn">BOOK A STAND</Link>
          <Link href={"/register"} className="nav__btn">REGISTER</Link>
        </div>
        <div className="nav__mobile" onClick={() => toggleMobile()}>
              <div className="nav__menuContainer">
                  <HiOutlineMenuAlt3 />
              </div>
          </div>
      </div>

      <div ref={mobileRef} className="navItems__container__mobile">
          <div className="mobile__close" onClick={() => toggleMobile()}>
              <AiOutlineClose />
          </div>
          <div className="navItems__mobile">
              <Link href={"/exhibit/book-a-stand"} className="nav__btn" onClick={() => toggleMobile()}>BOOK A STAND</Link>
              <Link href={"/register"} className="nav__btn" onClick={() => toggleMobile()}>REGISTER</Link>
              <Link href={"/"} className="navItems__item" onClick={() => toggleMobile()}>Home</Link>
              <div className="navItems__item">
                <p>Exhibit</p>
                <div className="dropdown">
                  <Link href={"/exhibit"} className="dropdown__item" onClick={() => toggleMobile()}>Why Exhibit?</Link>
                  <Link href={"/exhibit/book-a-stand"} className="dropdown__item" onClick={() => toggleMobile()}>Book a Stand</Link>
                  <Link href={"/exhibit/become-sponsor"} className="dropdown__item" onClick={() => toggleMobile()}>Become a Sponsor</Link>
                  <Link href={"/exhibit/exhibition-profile"} className="dropdown__item" onClick={() => toggleMobile()}>Exhibition Profile</Link>
                </div>
              </div>
              <div className="navItems__item">
                <p>Attend</p>
                <div className="dropdown">
                  <Link href={"/attend/agenda"} className="dropdown__item" onClick={() => toggleMobile()}>Conference Agenda</Link>
                  <Link href={"/attend/exhibitors/all"} className="dropdown__item" onClick={() => toggleMobile()}>Exhibitor List</Link>
                  <Link href={"/attend/speakers"} className="dropdown__item" onClick={() => toggleMobile()}>Speakers</Link>
                  <Link href={"/attend/why-visit"} className="dropdown__item" onClick={() => toggleMobile()}>Why Visit</Link>
                  <Link href={"/attend/visitor-profile"} className="dropdown__item" onClick={() => toggleMobile()}>Visitor Profile</Link>
                  <Link href={"/files/Lorem_ipsum.pdf"} download={true} className="dropdown__item" onClick={() => toggleMobile()}>Venue Map</Link>
                </div>
              </div>
              <Link href={"/travel"} className="navItems__item" onClick={() => toggleMobile()}>Travel</Link>
              <div className="navItems__item">
                <p>Learn</p>
                <div className="dropdown">
                  <Link href={"/learn/organizer"} className="dropdown__item" onClick={() => toggleMobile()}>About Organizer</Link>
                  <Link href={"/learn/rwanda"} className="dropdown__item" onClick={() => toggleMobile()}>About Rwanda</Link>
                  <Link href={"/learn/contact"} className="dropdown__item" onClick={() => toggleMobile()}>Contact us</Link>
                </div>
              </div>
              <div className="navItems__item">
                <p>Media</p>
                <div className="dropdown">
                  <Link href={"/blogs"} className="dropdown__item" onClick={() => toggleMobile()}>Blogs</Link>
                  <Link href={"/press"} className="dropdown__item" onClick={() => toggleMobile()}>Press Material</Link>
                </div>
              </div>
          </div>
      </div>
    </>
  );
}
