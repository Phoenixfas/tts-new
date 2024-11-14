import React from 'react'
import style from "../../../styles/Learn.module.css"

export default function Map() {
  return (
    <div className={style.contact}>
        <div className={style.mapHolder}>
            <div className={style.mapouter}>
                <div className={style.gmap_canvas}>
                <iframe
                    className="gmap_iframe"
                    width="100%"
                    height="100%"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.802708686544!2d38.78697927483236!3d8.990294191069488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84e4aa092813%3A0xbb84990929808c9a!2sMillennium%20Hall!5e0!3m2!1sen!2set!4v1731558330488!5m2!1sen!2set"
                ></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}
