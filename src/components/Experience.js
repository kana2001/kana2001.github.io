import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ericsson from '../icons/ericsson.png';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../features/themeSlice';
import { WorkOutline } from '@mui/icons-material';


function Experience() {
    const darkMode = useSelector(selectDarkMode);
    return (
        <ReactVerticalTimelineComponent darkMode={darkMode} />
    )
}

const workExp = [
    {
        company: 'Ericsson',
        position: 'Front End Developer',
        description: `Contributed to the development of the Ericsson Indoor Planner webapp using React with TypeScript, improving application performance and maintainability. Collaborated with back-end developers to integrate RESTful APIs that fetch and display dynamic content, such as real-time data updates and user-generated content. Architected a centralized state management system using Redux, enhancing data handling and reducing prop drilling for complex application states.`,
        start: 'May 2022',
        end: 'August 2023'
    },
    {
        company: 'Canadian Radio-television and Telecommunications Commission',
        position: 'Telecommunications (Data) Engineering Intern',
        description: 'Developed Python scripts for data cleansing and transformation, and network packet analysis using TShark, enhancing data processing efficiency by 30% and improving network monitoring capabilities.',
        start: 'May 2021',
        end: 'August 2021'
    },
    {
        company: 'Carleton University',
        position: 'Teaching Assistant',
        description: 'Conducted weekly lab sessions that reinforced ECE course material (Linux, Python) through hands-on programming exercises, resulting in a 10% increase in average student project scores.',
        start: 'September 2020',
        end: 'April 2021'
    },

]

const ReactVerticalTimelineComponent = ({ darkMode }) => {


    return <VerticalTimeline lineColor={darkMode ? 'white' : 'black'}>
        {workExp.map(data => <VerticalElement data={data} darkMode={darkMode} />)}
    </VerticalTimeline>
}
const VerticalElement = ({ data, darkMode }) => {
    return <VerticalTimelineElement
        className={`vertical-timeline-element--work ${darkMode ? 'dark' : 'light'}`}
        contentStyle={{ background: darkMode ? 'grey' : '#D3D3D3', color: darkMode ? 'white' : 'black' }}
        contentArrowStyle={{ borderRight: '7px solid ' }}
        date={`${data.start} - ${data.end ? data.end : "present"}`}
        iconStyle={{ background: darkMode ? 'grey' : '#D3D3D3', color: darkMode ? '#fff' : 'black' }}
        style={{ color: darkMode ? '#fff' : 'black' }}
        icon={<WorkOutline />}
    >
        <h3 className="vertical-timeline-element-title">{data.company}</h3>
        <h4 className="vertical-timeline-element-subtitle">{data.position}</h4>
        <p>{data.description}</p>
    </VerticalTimelineElement>
}

export default Experience;