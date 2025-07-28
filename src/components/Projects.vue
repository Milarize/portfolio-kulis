<script setup>
import { ref } from 'vue'

const techLogos = {
  'Vue.js': 'mdi-vuejs',
  'Node.js': 'mdi-nodejs',
  'MongoDB': 'mdi-database',
  'Firebase': 'mdi-firebase',
  'Tailwind CSS': 'mdi-tailwind',
  'Flutter': 'mdi-flutter',
  'Dart': 'mdi-language-dart',
  'Sqlite': 'mdi-database',
  'Nest.js': 'mdi-nestjs',
  'Python': 'mdi-language-python',
  'TensorFlow': 'mdi-tensorflow',
  'Scikit-learn': 'mdi-chart-bell-curve',
  'NLTK': 'mdi-text-box',
  'React': 'mdi-react',
  'TypeScript': 'mdi-language-typescript',
  'JavaScript': 'mdi-language-javascript',
  'HTML5': 'mdi-language-html5',
  'CSS3': 'mdi-language-css3',
  'Git': 'mdi-git',
  'Docker': 'mdi-docker',
  'AWS': 'mdi-aws',
  'Azure': 'mdi-microsoft-azure',
  'Google Cloud': 'mdi-google-cloud',
  'Redux': 'mdi-redux',
  'GraphQL': 'mdi-graphql',
  'PostgreSQL': 'mdi-database',
  'MySQL': 'mdi-database',
  'Redis': 'mdi-database',
  'WebSocket': 'mdi-socket',
  'REST API': 'mdi-api',
  'JWT': 'mdi-shield-lock',
  'OAuth': 'mdi-shield-account',
  'Material-UI': 'mdi-material-design',
  'Bootstrap': 'mdi-bootstrap',
  'Sass': 'mdi-sass',
  'Webpack': 'mdi-webpack',
  'Vite': 'mdi-lightning-bolt',
  'Jest': 'mdi-test-tube',
  'Cypress': 'mdi-test-tube',
  'D3.js': 'mdi-chart-line',
  'Three.js': 'mdi-cube',
  'WebGL': 'mdi-cube-outline',
  'PWA': 'mdi-cellphone-link',
  'Electron': 'mdi-desktop-mac-dashboard',
  'React Native': 'mdi-react',
  'Next.js': 'mdi-nextjs',
  'Nuxt.js': 'mdi-nuxt',
  'Express.js': 'mdi-express',
  'Django': 'mdi-django',
  'Flask': 'mdi-flask',
  'FastAPI': 'mdi-api',
  'Spring Boot': 'mdi-spring',
  'Kotlin': 'mdi-language-kotlin',
  'Swift': 'mdi-language-swift',
  'Java': 'mdi-language-java',
  'C#': 'mdi-language-csharp',
  'C++': 'mdi-language-cpp',
  'Rust': 'mdi-language-rust',
  'Go': 'mdi-language-go',
  'PHP': 'mdi-language-php',
  'Ruby': 'mdi-language-ruby',
  'Rails': 'mdi-rails',
  'Laravel': 'mdi-laravel',
  'WordPress': 'mdi-wordpress',
  'Shopify': 'mdi-shopping',
  'Stripe': 'mdi-credit-card',
  'PayPal': 'mdi-paypal',
  'Socket.io': 'mdi-socket',
  'WebRTC': 'mdi-video',
  'WebSocket': 'mdi-socket',
  'gRPC': 'mdi-api',
  'RabbitMQ': 'mdi-rabbit',
  'Kafka': 'mdi-kafka',
  'Elasticsearch': 'mdi-magnify',
  'MongoDB Atlas': 'mdi-database',
  'Redis': 'mdi-database',
  'Neo4j': 'mdi-database',
  'Cassandra': 'mdi-database',
  'DynamoDB': 'mdi-database',
  'Firestore': 'mdi-firebase',
  'Supabase': 'mdi-database',
  'Prisma': 'mdi-database',
  'Sequelize': 'mdi-database',
  'TypeORM': 'mdi-database',
  'Mongoose': 'mdi-database',
  'JWT': 'mdi-shield-lock',
  'OAuth': 'mdi-shield-account',
  'Passport.js': 'mdi-shield-account',
  'Helmet': 'mdi-shield',
  'CORS': 'mdi-shield',
  'Rate Limiting': 'mdi-shield',
  'Compression': 'mdi-compress',
  'Morgan': 'mdi-log',
  'Winston': 'mdi-log',
  'Pino': 'mdi-log',
  'Jest': 'mdi-test-tube',
  'Mocha': 'mdi-test-tube',
  'Chai': 'mdi-test-tube',
  'Cypress': 'mdi-test-tube',
  'Selenium': 'mdi-test-tube',
  'Puppeteer': 'mdi-test-tube',
  'Playwright': 'mdi-test-tube',
  'Storybook': 'mdi-book',
  'Docusaurus': 'mdi-book',
  'VuePress': 'mdi-book',
  'GitBook': 'mdi-book',
  'Swagger': 'mdi-api',
  'Postman': 'mdi-api',
  'Insomnia': 'mdi-api',
  'GraphQL Playground': 'mdi-graphql',
  'Apollo': 'mdi-graphql',
  'Relay': 'mdi-graphql',
  'Redux Toolkit': 'mdi-redux',
  'MobX': 'mdi-store',
  'Vuex': 'mdi-store',
  'Pinia': 'mdi-store',
  'Zustand': 'mdi-store',
  'Recoil': 'mdi-store',
  'Jotai': 'mdi-store',
  'Immer': 'mdi-store',
  'Ramda': 'mdi-function',
  'Lodash': 'mdi-function',
  'Moment.js': 'mdi-clock',
  'Day.js': 'mdi-clock',
  'date-fns': 'mdi-clock',
  'Luxon': 'mdi-clock',
  'Chart.js': 'mdi-chart-line',
  'D3.js': 'mdi-chart-line',
  'Highcharts': 'mdi-chart-line',
  'ApexCharts': 'mdi-chart-line',
  'Recharts': 'mdi-chart-line',
  'Victory': 'mdi-chart-line',
  'Visx': 'mdi-chart-line',
  'Nivo': 'mdi-chart-line',
  'Plotly': 'mdi-chart-line',
  'ECharts': 'mdi-chart-line',
  'Three.js': 'mdi-cube',
  'Babylon.js': 'mdi-cube',
  'PlayCanvas': 'mdi-cube',
  'PixiJS': 'mdi-cube',
  'Phaser': 'mdi-cube',
  'Matter.js': 'mdi-cube',
  'Cannon.js': 'mdi-cube',
  'Ammo.js': 'mdi-cube',
  'Rapier': 'mdi-cube',
  'Planck.js': 'mdi-cube',
  'P2.js': 'mdi-cube',
  'Box2D': 'mdi-cube',
  'WebGL': 'mdi-cube-outline',
  'WebGPU': 'mdi-cube-outline',
  'WebXR': 'mdi-cube-outline',
  'WebVR': 'mdi-cube-outline',
  'WebAudio': 'mdi-music',
  'Tone.js': 'mdi-music',
  'Howler.js': 'mdi-music',
  'Pizzicato': 'mdi-music',
  'Wavesurfer.js': 'mdi-music',
  'Web Workers': 'mdi-worker',
  'Service Workers': 'mdi-worker',
  'Shared Workers': 'mdi-worker',
  'WebAssembly': 'mdi-language-cpp',
  'Rust': 'mdi-language-rust',
  'Go': 'mdi-language-go',
  'AssemblyScript': 'mdi-language-typescript',
  'Emscripten': 'mdi-language-cpp',
  'WebGL': 'mdi-cube-outline',
  'WebGPU': 'mdi-cube-outline',
  'WebXR': 'mdi-cube-outline',
  'WebVR': 'mdi-cube-outline',
  'WebAudio': 'mdi-music',
  'Tone.js': 'mdi-music',
  'Howler.js': 'mdi-music',
  'Pizzicato': 'mdi-music',
  'Wavesurfer.js': 'mdi-music',
  'Web Workers': 'mdi-worker',
  'Service Workers': 'mdi-worker',
  'Shared Workers': 'mdi-worker',
  'WebAssembly': 'mdi-language-cpp',
  'Rust': 'mdi-language-rust',
  'Go': 'mdi-language-go',
  'AssemblyScript': 'mdi-language-typescript',
  'Emscripten': 'mdi-language-cpp'
}

const selectedProject = ref(null)
const showProjectDetails = ref(false)

const projects = ref([
  {
    id: 1,
    title: 'BUU-Library',
    description: 'ระบบจัดการร้านกาแฟ และ ร้านอาหารของห้องสมุด รวมไปถึงการจัดเลี้ยงและการจัดคลังสต็อกสินค้า',
    image: '/projects/ecommerce.jpg',
    technologies: ['Vue.js', 'Node.js', 'MySQL','Nest.js','JavaSwing'],
    link: 'https://docs.google.com/spreadsheets/d/1v0uIEfAkzuWX7dRanWnghagtOmZxWxnuB0yLmswtIEY/edit?gid=0#gid=0',
    details: {
      overview: 'แพลตฟอร์มร้านค้าออนไลน์ที่ครบวงจรสำหรับสินค้าประเภทกาแฟ ประกอบด้วยระบบสมาชิก การจัดการสินค้า ตะกร้าสินค้า และการชำระเงิน',
      features: [
        'ระบบสมาชิกและการยืนยันตัวตน',
        'แคตตาล็อกสินค้าพร้อมระบบค้นหาและกรอง',
        'ระบบตะกร้าสินค้าและรายการโปรด',
        'การชำระเงินที่ปลอดภัย',
        'ระบบติดตามคำสั่งซื้อ',
        'แดชบอร์ดสำหรับผู้ดูแลระบบ'
      ],
      challenges: [
        'พัฒนา Frontend ด้วย Vue.js และ Tailwind CSS',
        'ออกแบบและพัฒนาระบบฐานข้อมูล MongoDB',
        'พัฒนา RESTful API ด้วย Node.js',
        'พัฒนาระบบการชำระเงินด้วย Stripe',
        'พัฒนาระบบการจัดการสินค้าและสต็อก'
      ],
      solutions: [
        'ใช้ Stripe API สำหรับการชำระเงิน',
        'ใช้การทำดัชนีและแคชใน MongoDB',
        'ใช้ Vue.js ร่วมกับการออกแบบที่ตอบสนอง'
      ],
      role: 'นักพัฒนา Full Stack',
      duration: '6 เดือน',
      teamSize: '4 คน'
    }
  },
  {
    id: 2,
    title: 'Mobile Learning Application for the Elderly',
    description: 'แอปพลิเคชันสำหรับการเรียนรู้และฝึกทักษะสำหรับผู้สูงอายุ',
    image: '/projects/taskapp.jpg',
    link: 'https://moocapp.buu.in.th',
    technologies: ['Laravel', 'PHP', 'MySQL','Flutter','Dart'],
    details: {
      overview: 'A mobile application specifically designed for the elderly to learn new skills through lessons and exercises',
      features: [
        'User-friendly interface for elderly users',
        'Progress and achievement tracking',
        'Exercise system for learners',
        'Learning management for elderly users',
        'Reports for administrators and instructors',
        'ระบบการจัดการผู้ใช้และบทเรียนของระบบ สิทธิ์การเข้าถึงโดยผู้ดูแลระบบ',
        'ระบบการจัดการบทเรียนและแบบฝึกหัด สิทธื์การเข้าถึงโดยอาจารย์ผู้สอน',
        'ระบบการจัดการการติดตามความก้าวหน้าและความสำเร็จของผู้เรียน',

              ],
      challenges: [
        'พัฒนา Backend ด้วย Laravel สำหรับ Rest API ที่ใช้ใน Mobile App',
        'พัฒนาระบบ Authentication และ Authorization สำหรับ Mobile App และ Web App',
        'พัฒนาและออกแบบระบบฐานข้อมูล MySQL',
        'พัฒนาระบบการจัดการผู้ใช้และบทเรียนของระบบ สิทธิ์การเข้าถึงโดยผู้ดูแลระบบ',
        'พัฒนาระบบการจัดการบทเรียนและแบบฝึกหัด สิทธื์การเข้าถึงโดยอาจารย์ผู้สอน'
      ],
      solutions: [
        'ทำการวิจัยกับกลุ่มผู้สูงอายุ',
        'ใช้การจัดเก็บข้อมูลแบบออฟไลน์พร้อมการซิงค์',
      ],
      role: 'Web Application Developer , Backend Developer , Authentication Developer , Database Developer',
      duration: '7 months',
      teamSize: '3 people'
    }
  },
  {
    id: 3,
    title: 'Predicting Stroke Risk with Machine Learning',
    description: 'A machine learning system that assists doctors at Chockchai Hospital in predicting stroke risk using health data',
    image: '/projects/taskapp.jpg',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
    link: 'https://example.com/taskapp',
    details: {
      overview: 'ระบบทำนายความเสี่ยงโรคหลอดเลือดสมองโดยใช้ข้อมูลสุขภาพและประวัติทางการแพทย์ของผู้ป่วย',
      features: [
        'การวิเคราะห์ข้อมูลสุขภาพแบบเรียลไทม์',
        'การทำนายความเสี่ยงด้วยความแม่นยำสูง',
        'การแสดงผลแบบอินเตอร์แอคทีฟ',
        'การส่งรายงานอัตโนมัติ',
        'การติดตามการเปลี่ยนแปลงของความเสี่ยง'
      ],
      challenges: [
        'พัฒนาโมเดล Machine Learning ด้วย TensorFlow',
        'วิเคราะห์และประมวลผลข้อมูลสุขภาพ',
        'พัฒนาระบบการทำนายแบบเรียลไทม์',
        'พัฒนาระบบการแสดงผลและรายงาน',
        'พัฒนาระบบการติดตามความเสี่ยง'
      ],
      solutions: [
        'ใช้เทคนิคการจัดการข้อมูลที่หายไป',
        'ปรับปรุงโมเดลด้วยข้อมูลเพิ่มเติม',
        'ออกแบบอินเตอร์เฟซที่ใช้งานง่าย'
      ],
      role: 'นักวิทยาศาสตร์ข้อมูล',
      duration: '8 เดือน',
      teamSize: '5 คน'
    }
  },
  {
    id: 4,
    title: 'การทำนายภาวะซึมเศร้าด้วย NLP',
    description: 'ระบบวิเคราะห์ข้อความเพื่อทำนายภาวะซึมเศร้า',
    image: '/projects/taskapp.jpg',
    technologies: ['Python', 'NLTK', 'TensorFlow'],
    prototype: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/z9Csv2tJN8AxUBXkkmGupv/nlp-miniproject?node-id=232-247&p=f&t=p8rZsgmiFhjOW5Mi-1&scaling=min-zoom&content-scaling=fixed&page-id=232%3A204',
    link: 'https://prepro.informatics.buu.ac.th/depress-diary/prelogin?redirect=/seeAll/162',
    source: [
      {
        name: 'Data Dictionary',
        link: 'https://docs.google.com/spreadsheets/d/1v0uIEfAkzuWX7dRanWnghagtOmZxWxnuB0yLmswtIEY/edit?gid=0#gid=0'
      }
    ],
    details: {
      overview: 'ระบบวิเคราะห์ข้อความเพื่อตรวจจับและทำนายภาวะซึมเศร้าผ่านการประมวลผลภาษาธรรมชาติ',
      features: [
        'การวิเคราะห์ข้อความแบบเรียลไทม์',
        'การตรวจจับอารมณ์และความรู้สึก',
        'การติดตามการเปลี่ยนแปลงของอารมณ์',
        'การแจ้งเตือนอัตโนมัติ',
        'การสร้างรายงานเชิงลึก'
      ],
      challenges: [
        'พัฒนาโมเดล NLP ด้วย TensorFlow และ NLTK',
        'พัฒนาระบบวิเคราะห์ข้อความภาษาไทย',
        'พัฒนาระบบตรวจจับอารมณ์และความรู้สึก',
        'พัฒนาระบบการติดตามและแจ้งเตือน',
        'พัฒนาระบบการสร้างรายงาน'
      ],
      solutions: [
        'พัฒนาอัลกอริทึมเฉพาะสำหรับภาษาไทย',
        'ใช้เทคนิคการเรียนรู้เชิงลึก',
        'เข้ารหัสข้อมูลที่ละเอียดอ่อน'
      ],
      role: 'นักพัฒนา AI',
      duration: '6 เดือน',
      teamSize: '4 คน'
    }
  },
  {
    id: 5,
    title: 'Paws Pair',
    description: 'แพลตฟอร์มหาคู่ให้สัตว์เลี้ยง โดยเพิ่มความอัจริยะด้วย Machine Learning',
    image: '/projects/taskapp.jpg',
    prototype: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/w7B8moetBpsSSJecbLRHCM/PAWS-PAIR?node-id=1190-2334&p=f&t=oT2ylzNN5kh5tBQv-1&scaling=scale-down&content-scaling=fixed&page-id=636%3A2&starting-point-node-id=1177%3A685&show-proto-sidebar=1',
    technologies: ['Flutter', 'Dart', 'MySQL', 'Socket.io', 'Nest.js','Deep learning','Python','FastAPI','NLTK'],
    source: [
      {
        name: 'Mobile App',
        link: 'https://gitlab.com/tinder_pet/tinder_pet_front'
      },
      {
        name: 'Backend',
        link: 'https://gitlab.com/tinder_pet/tinder_pet_backed'
      },
      {
        name: 'Ml Classify',
        link: 'https://github.com/Milarize/Tinder_pet_ml '
      },
      {
        name: 'Ml Match',
        link: 'https://gitlab.com/tinder_pet/pet_matching_project'
      }
    ],
    details: {
      overview: 'แพลตฟอร์มสำหรับการจับคู่สัตว์เลี้ยงโดยใช้ Machine Learning มาใช้ในการช่วยคำนวณค่าความเหมาะสมของสัตว์เลี้ยงกับสัตว์เลี้ยงที่ต้องการจับคู่ โดยมีระบบแมทซ์สำหรับการจับคู่สัตว์เลี้ยงกับสัตว์เลี้ยงที่ต้องการจับคู่',
      features: [
        'ระบบค้นหาสัตว์เลี้ยงในระยะไม่เกิน 10 กิโลเมตร',
        'การจัดการโปรไฟล์สัตว์เลี้ยง',
        'ระบบนัดหมาย',
        'ระบบสมาชิกสำหรับผู้ใช้งาน',
        'ระบบการจับคู่สัตว์เลี้ยง',
        'ระบบแชทสำหรับการสื่อสารกับสัตว์เลี้ยงที่ได้รับการจับคู่',
        'ระบบตรวจจับรูปภาพสัตว์เลี้ยงเพื่อแยกชนิดสัตว์เลี้ยงโดยใช้ Machine Learning'
      ],
      challenges: [
        'พัฒนา Frontend ด้วย flutter และ dart',
        'พัฒนา Backend ด้วย Nest.js',
        'พัฒนาระบบแชทด้วย socket.io',
        'พัฒนาระบบการจัดการข้อมูลสัตว์เลี้ยง',
        'พัฒนาระบบการจับคู่และนัดหมาย',
        'พัฒนาระบบค้นหาสัตว์เลี้ยงในระยะไม่เกิน 10 กิโลเมตร',
        'พัฒนา Machine Learning สำหรับคำนวณความเข้ากันได้ของสัตว์เลี้ยง',
        'พัฒนาระบบโดยใช้ Deep learning สำหรับการตรวจจับรูปภาพสัตว์เลี้ยง',
      ],
      solutions: [

      ],
      role: 'Leader , Backend Developer , Frontend Developer , Database Developer , Machine Learning Developer ',
      duration: '4 เดือน',
      teamSize: '7 คน'
    }
  },
  {
    id: 6,
    title: 'Cooking Papa',
    description: 'แอปพลิเคชันสูตรอาหารและจัดการครัว',
    image: '/projects/taskapp.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Sqlite', 'Nest.js'],
    prototype: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/HTnPt77W4FcdXHcZNDCJ3M/%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%F0%9F%A4%91?node-id=10-2&starting-point-node-id=10%3A2&t=Umy9yu8RT8UIVkp3-1',
    link: 'https://example.com/taskapp',
    details: {
      overview: 'แอปพลิเคชันสำหรับค้นหาและจัดการสูตรอาหาร พร้อมระบบจัดการวัตถุดิบและอุปกรณ์ในครัว',
      features: [
        'ฐานข้อมูลสูตรอาหาร',
        'ระบบจัดการวัตถุดิบ',
        'การคำนวณปริมาณอาหาร',
        'วิดีโอสอนทำอาหาร',
        'ระบบแชร์สูตรอาหาร'
      ],
      challenges: [
        'พัฒนาแอปพลิเคชันมือถือด้วย Flutter',
        'พัฒนา Backend ด้วย Nest.js',
        'พัฒนาระบบจัดการฐานข้อมูล SQLite',
        'พัฒนาระบบจัดการวิดีโอและสื่อ',
        'พัฒนาระบบการแชร์และชุมชน'
      ],
      solutions: [
        'ใช้ SQLite สำหรับการจัดเก็บข้อมูลออฟไลน์',
        'ปรับปรุงการบีบอัดวิดีโอ',
        'ออกแบบฐานข้อมูลที่มีประสิทธิภาพ'
      ],
      role: 'นักพัฒนา Mobile',
      duration: '7 เดือน',
      teamSize: '4 คน'
    }
  },
  {
    id: 7,
    title: 'Booking System',
    description: 'ระบบจองห้องพัก',
    image: '/projects/taskapp.jpg',
    technologies: ['Python', 'TensorFlow', 'NLTK'],
    link: 'https://example.com/taskapp',
    prototype: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/H5kqrvfOHJAAHHKXCJUicb/HOTEL-CALIFORNIA?node-id=4-2&starting-point-node-id=4%3A2&t=Cweo4UEPQpaODkbV-1',
    details: {
      overview: 'ระบบจองห้องพัก',
      features: [
        'การประมวลผลภาษาธรรมชาติ',
        'การเรียนรู้จากบทสนทนา',
        'การตอบคำถามแบบเรียลไทม์',
        'การวิเคราะห์ความรู้สึก',
        'การปรับปรุงคำตอบอัตโนมัติ'
      ],
      challenges: [
        'พัฒนาโมเดล NLP ด้วย TensorFlow',
        'พัฒนาระบบประมวลผลภาษาธรรมชาติ',
        'พัฒนาระบบการเรียนรู้จากบทสนทนา',
        'พัฒนาระบบวิเคราะห์ความรู้สึก',
        'พัฒนาระบบปรับปรุงคำตอบอัตโนมัติ'
      ],
      solutions: [
        'ใช้โมเดลการเรียนรู้เชิงลึก',
        'พัฒนาระบบการจัดการบริบท',
        'ปรับปรุงฐานความรู้อย่างต่อเนื่อง'
      ],
      role: 'นักพัฒนา AI',
      duration: '5 เดือน',
      teamSize: '3 คน'
    }
  }
])

const openProjectDetails = (project) => {
  selectedProject.value = project
  showProjectDetails.value = true
}

const closeProjectDetails = () => {
  showProjectDetails.value = false
  selectedProject.value = null
}
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="glass-bg"></div>
    <div class="content-wrapper">
      <h2 class="text-h3 mb-6 glass-text">MY FAVORITE PROJECTS</h2>
      <v-row>
        <v-col v-for="project in projects" :key="project.id" cols="12" md="6">
          <div class="glass-card">
            <div class="card-content">
              <div class="image-container">
                <v-img :src="project.image" height="200" cover class="project-image"></v-img>
                <div class="image-overlay"></div>
              </div>
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-description">{{ project.description }}</p>
              <div class="tech-stack">
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  size="small"
                  class="tech-chip"
                >
                  <v-icon :icon="techLogos[tech]" class="tech-icon mr-1"></v-icon>
                  {{ tech }}
                </v-chip>
              </div>
              <v-btn
                @click="openProjectDetails(project)"
                color="primary"
                variant="text"
                class="view-btn"
              >
                ดูรายละเอียด
                <v-icon class="ml-2">mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- Project Details Modal -->
    <v-dialog
      v-model="showProjectDetails"
      max-width="900"
      class="project-details-dialog"
    >
      <v-card v-if="selectedProject?.details" class="project-details-card">
        <v-img
          :src="selectedProject.image"
          height="300"
          cover
          class="project-details-image"
        >
          <div class="image-overlay"></div>
        </v-img>
        
        <v-card-title class="text-h4 pt-6">
          {{ selectedProject.title }}
          <v-btn
            icon
            class="close-btn"
            @click="closeProjectDetails"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <div class="project-meta mb-6">
            <div class="meta-item">
              <v-icon>mdi-account</v-icon>
              <span>ตำแหน่ง: {{ selectedProject.details.role }}</span>
            </div>
            <div class="meta-item">
              <v-icon>mdi-clock-outline</v-icon>
              <span>ระยะเวลา: {{ selectedProject.details.duration }}</span>
            </div>
            <div class="meta-item">
              <v-icon>mdi-account-group</v-icon>
              <span>ขนาดทีม: {{ selectedProject.details.teamSize }}</span>
            </div>
          </div>

          <div class="section mb-6">
            <h3 class="section-title">ภาพรวม</h3>
            <p>{{ selectedProject.details.overview }}</p>
          </div>

          <div class="section mb-6">
            <h3 class="section-title">คุณสมบัติหลัก</h3>
            <ul class="feature-list">
              <li v-for="(feature, index) in selectedProject.details.features" :key="index">
                <v-icon>mdi-check-circle</v-icon>
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="section mb-6">
            <h3 class="section-title">ความท้าทายและวิธีแก้ไข</h3>
            <div class="challenges-solutions">
              <div class="challenges">
                <h4>ความท้าทาย</h4>
                <ul>
                  <li v-for="(challenge, index) in selectedProject.details.challenges" :key="index">
                    <v-icon>mdi-alert-circle</v-icon>
                    {{ challenge }}
                  </li>
                </ul>
              </div>
              <div class="solutions">
                <h4>วิธีแก้ไข</h4>
                <ul>
                  <li v-for="(solution, index) in selectedProject.details.solutions" :key="index">
                    <v-icon>mdi-lightbulb</v-icon>
                    {{ solution }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="tech-stack-section">
            <h3 class="section-title">เทคโนโลยีที่ใช้</h3>
            <div class="tech-stack">
              <v-chip
                v-for="tech in selectedProject.technologies"
                :key="tech"
                size="small"
                class="tech-chip"
              >
                <v-icon :icon="techLogos[tech]" class="tech-icon mr-1"></v-icon>
                {{ tech }}
              </v-chip>
            </div>
          </div>

          <!-- Add Figma Prototype Section -->
          <div v-if="selectedProject.prototype" class="figma-prototype-section mt-6">
            <h3 class="section-title">Prototype</h3>
            <div class="figma-container">
              <iframe
                :src="selectedProject.prototype"
                allowfullscreen
                class="figma-iframe"
              ></iframe>
            </div>
          </div>

          <!-- Add Source Section -->
          <div v-if="selectedProject.source && selectedProject.source.length > 0" class="source-section mt-6">
            <h3 class="section-title">Source Code</h3>
            <div class="source-links">
              <v-chip
                v-for="(source, index) in selectedProject.source"
                :key="index"
                :href="source.link"
                target="_blank"
                class="source-chip"
                variant="outlined"
                color="primary"
              >
                <v-icon start>mdi-github</v-icon>
                {{ source.name }}
                <v-icon end size="small">mdi-open-in-new</v-icon>
              </v-chip>
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="pa-6">
          <v-btn
            v-if="selectedProject.link"
            :href="selectedProject.link"
            target="_blank"
            color="primary"
            variant="elevated"
            class="visit-btn"
          >
            ไปที่โปรเจค
            <v-icon class="ml-2">mdi-open-in-new</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<style scoped>
.projects-section {
    
  position: relative;
  min-height: 100vh;
  padding: 80px 0;
  overflow: hidden;
}

.glass-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(103, 18, 122, 0.1) 0%, transparent 50%);
  z-index: 0;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.glass-text {
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(103, 18, 122, 0.5);
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.glass-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(103, 18, 122, 0.2);
  border-color: rgba(103, 18, 122, 0.3);
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(103, 18, 122, 0.1),
    rgba(138, 43, 226, 0.1)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glass-card:hover::before {
  opacity: 1;
}

.card-content {
  padding: 20px;
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  margin: -20px -20px 20px -20px;
}

.project-image {
  transition: transform 0.5s ease;
}

.glass-card:hover .project-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.6)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glass-card:hover .image-overlay {
  opacity: 1;
}

.card-title {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.card-description {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-chip {
  background: rgba(103, 18, 122, 0.2) !important;
  border: 1px solid rgba(103, 18, 122, 0.3);
  color: #ffffff !important;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.tech-icon {
  font-size: 18px;
  opacity: 0.9;
}

.tech-chip:hover {
  background: rgba(103, 18, 122, 0.4) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.tech-chip:hover .tech-icon {
  transform: scale(1.1);
  opacity: 1;
}

.view-btn {
  color: #ffffff !important;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.view-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.view-btn:hover::before {
  width: 200px;
  height: 200px;
}

.view-btn:hover {
  transform: translateX(5px);
}

.view-btn .v-icon {
  transition: transform 0.3s ease;
}

.view-btn:hover .v-icon {
  transform: translateX(5px);
}

@media (max-width: 960px) {
  .projects-section {
    padding: 40px 0;
  }
  
  .glass-card {
    margin-bottom: 20px;
  }
}

.project-details-dialog {
  backdrop-filter: blur(10px);
}

.project-details-card {
  background: rgba(18, 18, 18, 0.95) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(103, 18, 122, 0.3);
  border-radius: 20px;
  overflow: hidden;
}

.project-details-image {
  position: relative;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}

.project-meta {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
}

.section-title {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  position: relative;
  padding-bottom: 8px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #67127a, #8a2be2);
  border-radius: 3px;
}

.feature-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.9);
}

.challenges-solutions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.challenges-solutions h4 {
  color: #ffffff;
  margin-bottom: 16px;
  font-size: 1.2rem;
}

.challenges-solutions ul {
  list-style: none;
  padding: 0;
}

.challenges-solutions li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.8);
}

.tech-stack-section {
  margin-top: 32px;
}

.visit-btn {
  background: linear-gradient(45deg, #67127a, #8a2be2) !important;
  color: white !important;
  padding: 12px 24px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.visit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(103, 18, 122, 0.3);
}

@media (max-width: 960px) {
  .challenges-solutions {
    grid-template-columns: 1fr;
  }
  
  .feature-list {
    grid-template-columns: 1fr;
  }
  
  .project-meta {
    flex-direction: column;
    gap: 16px;
  }
}

.source-section {
  margin-top: 32px;
}

.source-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.source-chip {
  background: rgba(103, 18, 122, 0.1) !important;
  border: 1px solid rgba(103, 18, 122, 0.3) !important;
  color: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  text-decoration: none;
}

.source-chip:hover {
  background: rgba(103, 18, 122, 0.2) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.source-chip .v-icon {
  color: #8a2be2;
}

@media (max-width: 960px) {
  .source-links {
    gap: 8px;
  }
}

.figma-btn {
  background: linear-gradient(45deg, #1E1E1E, #2D2D2D) !important;
  color: white !important;
  padding: 12px 24px;
  border-radius: 12px;
  transition: all 0.3s ease;
  margin-left: 12px;
}

.figma-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.figma-btn .v-icon {
  color: #F24E1E;
}

.figma-prototype-section {
  margin-top: 32px;
}

.figma-container {
  position: relative;
  width: 100%;
  height: 600px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.figma-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 960px) {
  .figma-container {
    height: 400px;
  }
}
</style> 