const languages = {
    en: {
        'greetings': `Hi, I'm EduardoCode`,
        'about-me': 'About Me',
        skills: 'Skills',
        contact: 'Contact',
        'description': 'Full Stack Developer specializing in building exceptional digital experiences',
        'get-in-touch': 'Get in Touch',
        'view-my-work': 'View My Work',
        'about-me-description-first-part': `I'm a passionate developer with a strong foundation in both front-end and back-end technologies. With several years of experience building web applications, I focus on creating intuitive, responsive, and accessible user experiences.`,
        'about-me-description-second-part': `When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I believe in continuous learning and staying up-to-date with the latest industry trends.`,
        'download-resume': 'Download Resume',
        'my-skills-and-expertise': 'My Skills & Expertise',
        'my-skills-and-expertise-description': `I've developed a diverse set of skills throughout my career. Here's a comprehensive overview of my technical expertise and the technologies I work with.`,
        'contact-description': `I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!`,
        'contact-name-field-label': 'Name',
        'contact-name-field-placeholder': 'Your Name',
        'contact-email-field-label': 'Email',
        'contact-email-field-placeholder': 'Your Email',
        'contact-subject-field-label': 'Subject',
        'contact-subject-field-placeholder': 'Subject',
        'contact-message-field-label': 'Message',
        'contact-message-field-placeholder': 'Message',
        'send-message': 'Send Message'
    },
    es: {
        'greetings': 'Hola, Soy EduardoCode',
        'about-me': 'Sobre mí',
        skills: 'Habilidades',
        contact: 'Contacto',
        description: 'Desarrollador Full Stack especializado en crear experiencias digitales excepcionales',
        'get-in-touch': 'Contáctame',
        'view-my-work': 'Ver mi trabajo',
        'about-me-description-first-part': 'Soy un desarrollador apasionado con una sólida base en tecnologías tanto de front-end como de back-end. Con varios años de experiencia construyendo aplicaciones web, me enfoco en crear experiencias de usuario intuitivas, responsivas y accesibles.',
        'about-me-description-second-part': 'Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos de código abierto o disfrutar de actividades al aire libre. Creo en el aprendizaje continuo y en mantenerme actualizado con las últimas tendencias de la industria.',
        'download-resume': 'Descargar currículum',
        'my-skills-and-expertise': 'Mis habilidades y experiencia',
        'my-skills-and-expertise-description': 'He desarrollado un conjunto diverso de habilidades a lo largo de mi carrera. Aquí tienes una visión general de mi experiencia técnica y las tecnologías con las que trabajo.',
        'contact-description': 'Actualmente estoy abierto a nuevas oportunidades y colaboraciones. Ya sea que tengas un proyecto en mente o simplemente quieras conectarme, ¡no dudes en escribirme!',
        'contact-name-field-label': 'Nombre',
        'contact-name-field-placeholder': 'Tu nombre',
        'contact-email-field-label': 'Correo electrónico',
        'contact-email-field-placeholder': 'Tu correo electrónico',
        'contact-subject-field-label': 'Asunto',
        'contact-subject-field-placeholder': 'Asunto',
        'contact-message-field-label': 'Mensaje',
        'contact-message-field-placeholder': 'Mensaje',
        'send-message': 'Enviar mensaje'
    },
}

/**
 * This get the text by language
 * @example
 * getTextByLanguage('en', 'anyword') => 'Correct Word'
 * @param {'es' | 'en'} language 
 * @param {string} word 
 * @returns {string}
 */
function getTextByLanguage(language, word) {
    if (!languages[language]) {
        throw Error(`Language Not Found: ${language}`)
    }
    if (!languages[language][word]) {
        throw Error(`Word Not Found: ${word}`)
    }
    return languages[language][word]
}

export default getTextByLanguage