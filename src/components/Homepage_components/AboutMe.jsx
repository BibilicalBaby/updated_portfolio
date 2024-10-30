import React from 'react'

const AboutMe = () => {

    let currentYear = new Date().getFullYear()

    return (
        <>
            <div className='font-medium p-5 bg-image1 text-white bg-center  bg-cover bg-blend-multiply bg-fixed bg-custom-bg1'>
                <h2 className='text-center font-extrabold text-xl my-7 font-montserrat'>ABOUT ME</h2>
                <p className='font-roboto'>
                    Hello! I’m Muthusi, a passionate full-stack developer with over {currentYear - 2021} years of experience in crafting dynamic web applications. My journey in tech has allowed me to hone my skills in a variety of technologies, including JavaScript, Node.js, React, Vue.js, Express, MongoDB, HTML, and CSS.
                    <br />
                    I thrive on turning complex problems into elegant solutions and love building responsive, user-friendly interfaces. Whether I’m designing a seamless user experience or optimizing backend processes, my goal is to deliver high-quality code and ensure every project meets the needs of its users.
                    <br />
                    When I’m not coding, you can find me exploring new frameworks, contributing to open-source projects, or keeping up with the latest industry trends. I’m excited about the future of web development and am always looking for new challenges to tackle.
                    <br />
                    Let’s connect and create something amazing together!
                </p>
            </div>
        </>
    )
}

export default AboutMe