import {useContext, useEffect} from 'react'
import tools from '/src/assets/tools.svg'
import Tag from '../../common/components/Tag'
import Line from '../../common/components/Line'
import Card from '../../common/components/Card'
import server from '/src/assets/server.svg'
import AppContext from '../../../context/AppContext'
import codeBracket from '/src/assets/code-bracket.svg'
import Container from '../../common/components/Container'
import getTextByLanguage from '../../../utils/get-text-by-language'
import ViewPortAnimator from '../../common/components/ViewPortAnimator.jsx'
import '../css/skills.css'

const makeSuitableCardAnimation = (inView, origin) => {
    const isMobile = window.matchMedia('(max-width: 1024px)').matches
    const isDesktop = window.matchMedia('(min-width: 1025px)').matches
    if (inView && isMobile) {
        return `card-slide-for-mobiles`
    } else if (isDesktop && inView) {
        return `card-slide-from-${origin}-and-shrink`
    }
    if (!inView && isMobile) {
        return 'card-slide-out-for-mobiles'
    }
    return `card-slide-out-from-${origin}-and-grow`
}

function MySkills() {
    const appContext = useContext(AppContext)

    return (
        <div className="overflow-hidden" id='skills'>
            <div className="py-13 md:py-24 flex flex-col gap-4 items-center px-4">
                <h1 className="font-bold text-3xl text-center md:text-start">My Skills & Expertise</h1>
                <div className="xl:max-w-6/12 text-center">
                    <p className="text-gray-500">{getTextByLanguage(appContext.language, 'my-skills-and-expertise-description')}</p>
                </div>
                <div className="grid sm:grid-cols-1 xl:grid-cols-3 gap-3 grow">
                    <ViewPortAnimator
                        inputAnimation={makeSuitableCardAnimation(true, 'left')}
                        outAnimation={makeSuitableCardAnimation(false, 'left')}>
                        <Card barColor="purple">
                            <Card.Header>
                                <div className="p-2 bg-indigo-100 rounded-md">
                                    <img src={codeBracket} alt="code" style={{width: '1.5rem'}}/>
                                </div>
                                <h2 className="font-semibold text-xl">Frontend Development</h2>
                            </Card.Header>
                            <Card.Body>
                                <Container>
                                    <Tag text="Javascript"/>
                                    <Tag text="Typescript"/>
                                    <Tag text="React"/>
                                    <Tag text="Css"/>
                                    <Tag text="Redux"/>
                                    <Tag text="Tailwind CSS"/>
                                    <Tag text="Responsive Design"/>
                                    <Tag text="BEM CSS"/>
                                    <Tag text="Accessibility"/>
                                </Container>
                            </Card.Body>
                        </Card>
                    </ViewPortAnimator>
                    <ViewPortAnimator
                        inputAnimation={makeSuitableCardAnimation(true, 'top')}
                        outAnimation={makeSuitableCardAnimation(false, 'top')}>
                        <Card barColor="green">
                            <Card.Header>
                                <div className="p-2 bg-green-100 rounded-md">
                                    <img src={server} alt="code" style={{width: '1.5rem'}}/>
                                </div>
                                <h2 className="font-semibold text-xl">Backend Development</h2>
                            </Card.Header>
                            <Card.Body>
                                <Container>
                                    <Tag text="NodeJS"/>
                                    <Tag text="Express.js"/>
                                    <Tag text="Python"/>
                                    <Tag text="Java"/>
                                    <Tag text="Spring Framework"/>
                                    <Tag text="NestJS"/>
                                    <Tag text="MySQL"/>
                                    <Tag text="PostgreSQL"/>
                                    <Tag text="MSSQL"/>
                                    <Tag text="Authentication"/>
                                    <Tag text="SOAP"/>
                                    <Tag text="Rest API"/>
                                </Container>
                            </Card.Body>
                        </Card>
                    </ViewPortAnimator>
                    <ViewPortAnimator
                        inputAnimation={makeSuitableCardAnimation(true, 'right')}
                        outAnimation={makeSuitableCardAnimation(false, 'right')}>
                        <Card barColor="orange">
                            <Card.Header>
                                <div className="p-2 bg-orange-100 rounded-md">
                                    <img src={tools} alt="tools" style={{width: '1.5rem'}}/>
                                </div>
                                <h2 className="font-semibold text-xl">Tools & Technologies</h2>
                            </Card.Header>
                            <Card.Body>
                                <Container>
                                    <Tag text="Docker"/>
                                    <Tag text="CI/CD"/>
                                    <Tag text="Git"/>
                                    <Tag text="Linux"/>
                                    <Tag text="Pipelines"/>
                                    <Tag text="Bash"/>
                                    <Tag text="Github"/>
                                    <Tag text="Gitlab"/>
                                    <Tag text="AWS"/>
                                    <Tag text="Jira"/>
                                    <Tag text="UML"/>
                                    <Tag text="Postman"/>
                                    <Tag text="Virtualizacion"/>
                                    <Tag text="SSH"/>
                                    <Tag text="Telnet"/>
                                </Container>
                            </Card.Body>
                        </Card>
                    </ViewPortAnimator>
                </div>
            </div>
            <Line/>
        </div>
    )
}

export default MySkills