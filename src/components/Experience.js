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
        description: 'WIP',
        start: 'May 2022',
        end: 'August 2023'
    },
    {
        company: 'Canadian Radio-television and Telecommunications Commission',
        position: 'Telecommunications (Data) Engineering Intern',
        description: 'WIP',
        start: 'May 2021',
        end: 'August 2021'
    },
    {
        company: 'Carleton University',
        position: 'Teaching Assistant',
        description: 'WIP',
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
        style={{color: darkMode ? '#fff' : 'black'}}
        icon={<WorkOutline />}
    >
        <h3 className="vertical-timeline-element-title">{data.position}</h3>
        <h4 className="vertical-timeline-element-subtitle">{data.company}</h4>
        <p>{data.description}</p>
    </VerticalTimelineElement>
}

export default Experience;