var arrLang = {

    'EN':{
        'titulo':'Telecommunications Technologist',
        'about':' About me',
        'education':' Education',
        'experience':' Experience',
        'interests': ' Interests',
        'p1_about':'My name is Emanuel Navarro, Im Uruguayan from the departamento of Rocha where I did my studies as a Telecommunications Technologist at CURE (Centro Universitario Regional del Este).',
        'p2_about':'I am currently working at Prometeo Openbanking, studying in parallel in a self-taught way in the world of development, exploring new challenges and technologies.',
        'h1_experience':'Time at the company - 8 Months',
        'h2_experience':'Time at the company - 4 Months',
        'h3_experience':'Time at the company - 3 Months',
        'h4_experience':'Faro Digital - Intern',
        'h5_experience':'Internship time - 4 Months',
        'p1_experience':'In Prometeo I provided support to clients and the staff of the company either with the integration of the APIs or to help with the correct functioning of different tools.',
        'p2_experience':'I also do operational tasks, improving communication between different areas, generating process documentation and monitoring the correct functioning of the services provided.',
        'p3_experience':'I am currently Monitoring Analyst at Prometeo, managing the different monitoring software and creating the corresponding alerts of the services provided by the company.',
        'p4_experience':'I also perform scripts integrated into tools such as Slack, Zabbix, Datadog, Gmail, among others to automate different tasks and optimize response times of the team by obtaining the necessary information quickly.',
        'p5_experience':'In Geocom I was in charge of testing the operation of the SUCIVE website checking each functionality of it and how the data entered was managed. I also did quality control of a SUCIVE mobile application. Within Geocom I tracked and resolved tickets reported by clients.',
        'p6_experience':'In this period I worked as a team with a Technical Intern of Administration and Accounting, where we carried out an extensive analysis of how the SMEs assigned to us work to advise them and help them improve their business management through the implementation of Software.',
        'p1_education':'The Telecommunications Technologist will have the capabilities to assist in the design and deployment of telecommunications systems, and to perform their maintenance and administration. You will participate as a qualified technician in project development tasks in the area of telecommunications, integrating into the collective and multidisciplinary work to carry out these activities in situations of varied complexity, both for their characteristics and for their scale.',
        'p2_education':'Examination for the Certificate of Competency in English (ECCE), It is a standardized test of English as a foreign language that certifies a high intermediate level.',
        'h1_education': 'Telecommunications Technologist - CURE',
        'h2_education': 'Completed: 2018 - 2021',
        'h3_education': 'Certificate obtained in 2016',
        'h4_education': 'Courses:',
        'h1_foot':'Download my CV here',
        'btn1_foot': 'Download',



    
    },  
    'ES':{
        'titulo':'Tecnólogo en Telecomunicaciones',
        'about': ' Sobre mi',
        'education':' Formación',
        'experience':' Experiencia',
        'interests': ' Intereses',
        'p1_about':'Me llamo Emanuel Navarro, soy Uruguayo del departamento de Rocha donde realicé mis estudios de Tecnólogo en Telecomunicaciones en el CURE (Centro Universitario Regional del Este).',
        'p2_about': 'Actualmente me encuentro trabajando en Prometeo Openbanking, formandome en paralelo de manera autodidacta en el mundo del desarrollo, explorando nuevos desafios y tecnologias. ',
        'h1_experience':'Tiempo en la empresa - 8 Meses',
        'h2_experience':'Tiempo en la empresa - 4 Meses',
        'h3_experience':'Tiempo en la empresa - 3 Meses',
        'h4_experience':'Faro Digital - Pasante',
        'h5_experience':'Tiempo de pasantía - 4 Meses',
        'p1_experience':'En Prometeo brindé soporte tanto a clientes como al personal de la empresa ya sea con la integración de las APIs como ayudar con en el correcto funcionamiento de distintas herramientas.',
        'p2_experience':'Dentro de Prometeo también estoy en la parte operativa, haciendo de nexo entre distintas áreas mejorando la comunicación entre las mismas, generando documentaciones de procesos y monitreo el correcto funcionamiento de los servicios brindados.',
        'p3_experience':'Actualmente estoy desempeñando el Rol de Monitoring Analyst en Prometeo, gestionando los diferentes softwares de monitoreo y creando las alertas correspondientes de los servicios brindandos por la empresa.',
        'p4_experience':'Ademas realizo Scripts integrados a herramientas como Slack, Zabbix, Datadog, Gmail, entre otras para automatizar diferentes tareas y optimizar los tiempos de respuesta por parte del equipo al obtener la información necesaria de forma rapida.',
        'p5_experience':'En Geocom me encargué de testear el funcionamiento de la página web de SUCIVE chequeando cada funcionalidad de la misma y como se gestionaban los datos ingresados. También hice control de calidad de una aplicación para movil de SUCIVE. Dentro de Geocom realicé seguimiento y resolución de tickets reportados por clientes.',
        'p6_experience':'En dicho periodo trabajé en equipo con un pasante de la Tecnicatura de Administración y Contabilidad, donde primero debiamos realizar analisis extenso de como trabajan las pymes asignadas a nuestro equipo para asesorarlas y ayudarlas a mejorar su gestión mediante la implementación de Software.',
        'p1_education':'El Tecnólogo en Telecomunicaciones tendrá capacidades para asistir en el diseño y el despliegue de sistemas de telecomunicaciones, y para realizar su mantenimiento y administración. Participará como técnico calificado en tareas de desarrollo de proyectos en el área de las telecomunicaciones, integrándose al trabajo colectivo y multidisciplinario para la realización de estas actividades en situaciones de variada complejidad, tanto por sus características como por su escala.',
        'p2_education': 'Examination for the Certificate of Competency in English (ECCE), es un examen estandarizado de inglés como lengua extranjera que certifica un nivel intermedio alto.',
        'h1_education':'Tecnólogo en Telecomunicaciones - CURE',
        'h2_education': 'Completo: 2018 - 2021',
        'h3_education': 'Certificado obtenido en 2016',
        'h4_education': 'Cursos:',
        'h1_foot':'Descarga mi CV aqui',
        'btn1_foot': 'Descargar'


    }
}

$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index,elemnent){
            $(this).text(arrLang[lang][$(this).attr('key')]);

        });

    });
});
